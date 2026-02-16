import { boy_names, girl_names, surnames } from "./data.js";

class ZodiacSign {
    static signs = { en: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",], };
    constructor(e) { isNaN(Date.parse(e)) || ((this.sign = this.#a(e)), (this.chinese = this.#a(e))); }
    #a(e) {
        return ZodiacSign.signs["en"][Number(new Intl.DateTimeFormat("fr-TN-u-ca-persian", { month: "numeric" }).format(Date.parse(e))) - 1];
    }
}

showFamilyTree.addEventListener("click", function (e) {
    familyTree.style.display = "flex";
});

var my_rng = new Math.seedrandom();

let years_passed = 0;

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

function rand_int(max) {
    return Math.floor(my_rng.quick() * max);
}

class LifeStage {
    static Baby = 0;
    static Child = 1;
    static Teenager = 2;
    static Adult = 3;
    static Elder = 4;

    static #labels = {
        [LifeStage.Baby]: "Baby",
        [LifeStage.Child]: "Child",
        [LifeStage.Teenager]: "Teenager",
        [LifeStage.Adult]: "Adult",
        [LifeStage.Elder]: "Elder"
    };

    static getString(stage) {
        return this.#labels[stage] ?? "Undefined";
    }
}

class Relation {
    static Parent = 0;
    static Partner = 1;
    static Mascot = 2;
    static Descendant = 3;
    static Friend = 4;

    static #labels = {
        [Relation.Parent]: "Parent",
        [Relation.Partner]: "Partner",
        [Relation.Mascot]: "Mascot",
        [Relation.Descendant]: "Descendant",
        [Relation.Friend]: "Friend"
    };

    static getString(relation) {
        return this.#labels[relation] ?? "Undefined";
    }
}

const div = document.createElement("div");
navbar.append(div);

class LifeEvent {
    constructor({ id, title, description, chance, minAge = 0, maxAge = 100, criteria = () => true, effect = () => { } }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.chance = chance; // 0.0 to 1.0
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.criteria = criteria; // function that returns true/false
        this.effect = effect;     // function that modifies the 'your' object
    }

    isEligible(person) {
        return person.age >= this.minAge &&
            person.age <= this.maxAge &&
            this.criteria(person);
    }
}

class Person {
    constructor({
        age = 0,
        money = 0,
        gender = "Gender not set. Open the console and report this bug! Actually, we're in 2026. It's all good. Don't worry.",
        name = "Name not set. Open the console and report this bug!",
        surname = "Surname not set. Open the console and report this bug!",
        family = [],
        happiness = rand_int(100),
        intelligence = rand_int(100),
        looks = rand_int(100),
        health = 80 + rand_int(20), // cant be unfair with everything
    } = {}) {
        this.age = age;
        this.money = money;
        this.gender = gender;
        this.name = name;
        this.surname = surname;
        this.family = family;

        this.happiness = happiness;
        this.intelligence = intelligence;
        this.looks = looks;
        this.health = health;

        this.careerPotential = Math.max(
            (this.intelligence * 1.5) + (this.looks * 0.5),
            (this.looks * 1.5) + (this.intelligence * 0.5),
            (this.intelligence + this.looks)
        );

        // 1999 is the peak of human civilization
        this.birthday = randomDate(new Date(99, 0, 1), new Date(99, 11, 31));
    }
}

let your = new Person();

let meter_elements = {};
const stats = {
    happiness: "☺️",
    intelligence: "💡",
    health: "💊",
    looks: "👁️"
};

Object.entries(stats).forEach(([key, icon]) => {
    const meter = document.createElement("span");
    meter.classList.add("piechart");
    meter.textContent = icon;
    meter.style.setProperty("--p", your[key]);
    meter.addEventListener("mouseover", function (e) {
        meter.textContent = your[key] + "%";
    });
    meter.addEventListener("mouseleave", function (e) {
        meter.textContent = icon;
    });

    div.append(meter);

    meter_elements[key] = meter;
});

function update_meters() {
    for (let key in meter_elements) {
        meter_elements[key].style.setProperty("--p", your[key]);
    }
    familyTree.innerHTML = null;
    let close_btn = document.createElement("span");
    close_btn.textContent = "x";
    close_btn.style.cursor = "pointer";
    close_btn.style.textDecoration = "underline";
    close_btn.addEventListener("click", function (e) {
        familyTree.style.display = "none";
    });
    familyTree.append(close_btn);
    for (let entry in your.family) {
        let person = your.family[entry]["person"];
        let relation = your.family[entry]["relation"];
        let new_entry = document.createElement("span");
        new_entry.textContent = person.gender + " " + Relation.getString(relation).toLowerCase() + " - " + person.name + " " + person.surname + " - " + person.age + " - §" + person.money;
        familyTree.append(new_entry);
    }
    yourInfo.textContent = your.name + " " + your.surname + " - §" + your.money;
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

    your.gender = 0 == rand_int(2) ? "male" : "female";
    your.name = your.gender == "male" ? boy_names[rand_int(boy_names.length)] : girl_names[rand_int(girl_names.length)];
    your.surname = common_surname;

    your.health = (father.health + mother.health) / 2;
    your.intelligence = (father.intelligence + mother.intelligence) / 2;
    your.looks = (father.looks + mother.looks) / 2;

    your.family.push({ person: father, relation: Relation.Parent });
    your.family.push({ person: mother, relation: Relation.Parent });

    update_meters();

    header("Age: 0. Welcome to Fortnite.");
    print("I was born a " + your.gender + ". My name is " + your.name + " " + your.surname);
    print("I was born on the fateful day of " + your.birthday.toLocaleString('default', { month: 'long' }) + " " + your.birthday.getDate() + ", as a " + new ZodiacSign(your.birthday).sign);
    space();
    print("My father is " + father.name + " " + father.surname + " of " + father.age + " years old");
    print("My mother is " + mother.name + " " + mother.surname + " of " + mother.age + " years old");
}

function print(urtext) {
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

window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    return (event.returnValue = "");
});

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

let canAgeUp = true;

ageUp.addEventListener("click", function () {
    if (!canAgeUp) return;
    years_passed++
    your.age++
    for (let entry in your.family) {
        let person = your.family[entry]["person"];
        person.age++
    }
    header("Age: " + your.age);
    processYearlyEvents(your);
    update_meters();
    tickingSFX.play();
});

function presentChoice(title, description, options) {
    const choiceDiv = document.createElement("div");
    choiceDiv.className = "choice-modal";
    choiceDiv.innerHTML = `<h3>${title}</h3><p>${description}</p>`;

    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.onclick = () => {
            opt.callback();
            choiceDiv.remove();
            canAgeUp = true;
            update_meters();
        };
        choiceDiv.appendChild(btn);
    });

    document.body.appendChild(choiceDiv);
    canAgeUp = false;
}

const eventPool = [
    new LifeEvent({
        id: "flu_shot",
        title: "I feel like shit!",
        description: "You caught a nasty disease.",
        chance: 0.1,
        minAge: 5,
        maxAge: 50,
        effect: (p) => {
            p.health -= 25;
            p.happiness -= 30;
            print("You spent a week in bed shivering.");
        }
    }),
    new LifeEvent({
        id: "bully_encounter",
        title: "Bully",
        description: "Someone named Quantavious is harassing you.",
        chance: 0.15,
        minAge: 7,
        maxAge: 12,
        criteria: (p) => p.looks < 40,
        effect: (p) => {
            p.happiness -= 5;
            print("Quantavious said you resembled the 67 kid. It hurt a lil.");
        }
    }),
    new LifeEvent({
        id: "tweaker_alert",
        title: "Tweaker Alert!!!",
        description: "A tweaker on the street assaulted you.",
        chance: 0.05,
        minAge: 20,
        maxAge: 50,
        effect: (p) => {
            p.happiness -= 30;
            p.health -= 30;
            print("Your entire body hurts.");
        }
    }),
    new LifeEvent({
        id: "dropped_wallet",
        title: "Found a Wallet",
        description: "You found a wallet on the floor with $50 inside.",
        chance: 0.08,
        minAge: 10,
        maxAge: 70, // cant bend over after that age
        effect: (p) => {
            presentChoice("The Moral Dilemma", "What do you do with the cash?", [
                {
                    text: "Keep it",
                    callback: () => {
                        p.money += 50;
                        p.happiness += 5;
                        print("You're $50 richer. No regrets.");
                    }
                },
                {
                    text: "Return it",
                    callback: () => {
                        p.happiness += 20;
                        p.intelligence += 2;
                        print("The owner was so grateful! You feel like a saint.");
                    }
                }
            ]);
        }
    })
];

begin();