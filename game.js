import { state } from "./state.js";
import { boy_names, girl_names, surnames, eventPool, consumables, infoBoxPanels } from "./data.js";
import { rand_int } from "./rng.js";
import { Person, Relation, ZodiacSign } from "./class.js";

let currentIBPanel = infoBoxPanels.family;

let meter_elements = {};
const stats = {
    strength: "💪",
    respect: "🤝",
    happiness: "☺️",
    intelligence: "💡",
    health: "💊",
    looks: "👁️"
};

Object.entries(stats).forEach(([key, icon]) => {
    const meter = document.createElement("span");
    meter.classList.add("piechart");
    meter.textContent = icon;
    meter.style.setProperty("--p", state.your[key]);
    meter.addEventListener("mouseover", function (e) {
        meter.textContent = state.your[key] + "%";
    });
    meter.addEventListener("mouseleave", function (e) {
        meter.textContent = icon;
    });

    yourStatistics.append(meter);
    meter_elements[key] = meter;
});

const shopItems = [consumables["potato_chips"], consumables["alfajor"], consumables["cigarettes"], consumables["beer"]];

function update_meters() {
    for (let key in meter_elements) {
        meter_elements[key].style.setProperty("--p", state.your[key]);
    }
    infoBox.innerHTML = null;
    let close_btn = document.createElement("span");
    close_btn.textContent = "x";
    close_btn.style.cursor = "pointer";
    close_btn.style.textDecoration = "underline";
    close_btn.addEventListener("click", function (e) {
        infoBox.style.display = "none";
    });
    infoBox.append(close_btn);

    currentIBPanel.call();

    state.your.happiness = clamp(state.your.happiness, 0, 100);
    state.your.intelligence = clamp(state.your.intelligence, 0, 100);
    state.your.looks = clamp(state.your.looks, 0, 100);
    state.your.health = clamp(state.your.health, 0, 100);

    yourInfo.textContent = `${state.your.name} ${state.your.surname} - $${state.your.money}`;

    textContainer.scrollTo({
        top: textContainer.scrollHeight,
        behavior: 'smooth'
    });
}

function begin() {
    let common_surname = surnames[rand_int(surnames.length)];
    let father = new Person({
        gender: "male",
        name: boy_names[rand_int(boy_names.length)],
        age: rand_int(40) + 18,
        surname: common_surname,
    });

    let mother = new Person({
        gender: "female",
        name: girl_names[rand_int(girl_names.length)],
        age: rand_int(30) + 18,
        surname: common_surname,
    });

    mother.money = mother.careerPotential * 1000;
    father.money = father.careerPotential * 1000;
    mother.strength = mother.health/2 + rand_int(mother.health/2);
    father.strength = father.health/2 + rand_int(father.health/2);

    state.your.gender = 0 == rand_int(2) ? "male" : "female";
    state.your.name = state.your.gender == "male" ? boy_names[rand_int(boy_names.length)] : girl_names[rand_int(girl_names.length)];
    state.your.surname = common_surname;

    state.your.health = (father.health + mother.health) / 2;
    state.your.intelligence = (father.intelligence + mother.intelligence) / 2;
    state.your.looks = (father.looks + mother.looks) / 2;
    state.your.strength = state.your.health/2 + rand_int(state.your.health/2);

    state.your.family.push({ person: father, relation: Relation.Parent });
    state.your.family.push({ person: mother, relation: Relation.Parent });

    update_meters();

    header("Age: 0. Welcome to Fortnite.");
    print(`I was born a ${state.your.gender}. My name is ${state.your.name} ${state.your.surname}`);
    print(`I was born on the fateful day of ${state.your.birthday.toLocaleString('default', { month: 'long' })} ${state.your.birthday.getDate()}, as a ${new ZodiacSign(state.your.birthday).sign}`);
    space();
    print(`My father is ${father.name} ${father.surname} of ${father.age} years old`);
    print(`My mother is ${mother.name} ${mother.surname} of ${mother.age} years old`);
}

export function print(urtext) {
    let txt = document.createElement("span");
    txt.textContent = urtext;
    textContainer.append(txt);
    let br = document.createElement("br");
    textContainer.append(br);
}

function space() {
    let br = document.createElement("br");
    textContainer.append(br);
}

function header(urtext) {
    let txt = document.createElement("h2");
    txt.textContent = urtext;
    textContainer.append(txt);
}

function clamp(num, min, max) {
    return num <= min
        ? min
        : num >= max
            ? max
            : num
}

function processYearlyEvents(person) {
    const eligibleEvents = eventPool.filter(ev => ev.isEligible(person));

    eligibleEvents.forEach(event => {
        if (Math.random() < event.chance) {
            header(event.title);
            print(event.description);
            event.effect(person);
        }
    });

    person.happiness = clamp(person.happiness, 0, 100);
    person.intelligence = clamp(person.intelligence, 0, 100);
    person.looks = clamp(person.looks, 0, 100);
    person.health = clamp(person.health, 0, 100);
}

export function presentChoice(description, options) {
    const choiceDiv = document.createElement("div");
    choiceDiv.className = "choice-modal";
    choiceDiv.innerHTML = `<p>${description}</p>`;

    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.onclick = () => {
            opt.callback();
            choiceDiv.remove();
            state.canInteract = true;
            update_meters();
        };
        choiceDiv.appendChild(btn);
    });

    textContainer.appendChild(choiceDiv);
    state.canInteract = false;
}

ageUp.addEventListener("click", function () {
    if (!state.canInteract) return;
    state.your.age++
    for (let entry in state.your.family) {
        let person = state.your.family[entry]["person"];
        person.age++
    }
    header("Age: " + state.your.age);
    processYearlyEvents(state.your);
    update_meters();
    tickingSFX.play();
});

showShop.addEventListener("click", function (e) {
    if (!state.canInteract) return;
    currentIBPanel = infoBoxPanels.shop;
    update_meters();
    infoBox.style.display = "flex";
});

showFamilyTree.addEventListener("click", function (e) {
    if (!state.canInteract) return;
    currentIBPanel = infoBoxPanels.family;
    update_meters();
    infoBox.style.display = "flex";
});

window.addEventListener('beforeunload', function (e) {e.preventDefault(); });
begin();