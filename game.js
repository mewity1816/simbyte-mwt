import { boy_names, girl_names, surnames } from "./data.js";

class ZodiacSign {
    static signs = { en: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",], };
    constructor(e) { isNaN(Date.parse(e)) || ((this.sign = this.#a(e)), (this.chinese = this.#a(e))); }
    #a(e) {
        return ZodiacSign.signs["en"][Number(new Intl.DateTimeFormat("fr-TN-u-ca-persian", { month: "numeric" }).format(Date.parse(e))) - 1];
    }
}

const textContainer = document.getElementById("textContainer");
const ageUp = document.getElementById("ageUp");
const navbar = document.getElementById("navbar");
const familyTree = document.getElementById("familyTree");
const showFamilyTree = document.getElementById("showFamilyTree");
const tickingSFX = document.getElementById("tickingSFX");

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
        new_entry.textContent = Relation.getString(relation) + " " + person.gender + " - " + person.name + " " + person.surname + " - " + person.age;
        familyTree.append(new_entry);
    }
}


function begin() {
    let common_surname = surnames[rand_int(surnames.length)];
    let father = new Person({
        gender: "male",
        name: boy_names[rand_int(boy_names.length)],
        money: rand_int(200000),
        age: rand_int(40) + 18,
        surname: common_surname,
    });

    let mother = new Person({
        gender: "female",
        name: girl_names[rand_int(girl_names.length)],
        money: rand_int(200000),
        age: rand_int(30) + 18,
        surname: common_surname,
    });

    your.gender = 0 == rand_int(2) ? "male" : "female";
    your.name = your.gender == "male" ? boy_names[rand_int(boy_names.length)] : girl_names[rand_int(girl_names.length)];
    your.surname = common_surname;

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
    let txt = document.createElement("h3");
    txt.textContent = urtext;
    textContainer.append(txt);
}

window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    return (event.returnValue = "");
});

ageUp.addEventListener("click", function () {
    years_passed++
    your.age++
    for (let entry in your.family) {
        let person = your.family[entry]["person"];
        person.age++
    }
    update_meters();
    header("Age: " + your.age);
    tickingSFX.play();
});

begin();

const notice = document.getElementById("notice");

function plssenpainoticeme() {
    let delay = rand_int(30) * 1000;
    if (!notice.playing) { notice.play(0); }
    setTimeout(plssenpainoticeme, delay + 15000);
}

plssenpainoticeme();

const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
events.forEach(eventType => {
    window.addEventListener(eventType, () => {
        notice.pause();
    }, { passive: true });
});