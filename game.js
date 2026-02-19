import { boy_names, girl_names, surnames } from "./data.js";

class ZodiacSign {
    static signs = { en: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",], };
    constructor(e) { isNaN(Date.parse(e)) || ((this.sign = this.#a(e)), (this.chinese = this.#a(e))); }
    #a(e) {
        return ZodiacSign.signs["en"][Number(new Intl.DateTimeFormat("fr-TN-u-ca-persian", { month: "numeric" }).format(Date.parse(e))) - 1];
    }
}

let canInteract = true;

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

class Relative {
    constructor(person, relation) {
        this.person = person;
        this.relation = relation;
        this.kindness = 100;
    }
}

class LifeEvent {
    constructor({ id, title, description, chance, minAge = 0, maxAge = 100, criteria = () => true, effect = () => { } }) {
        this.id = id;
        this.title = title;
        this._description = description;
        this.chance = chance; // 0.0 to 1.0
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.criteria = criteria; // function that returns true/false
        this.effect = effect;     // function that modifies the 'your' object
    }

    get description() {
        return typeof this._description === 'function' 
            ? this._description() 
            : this._description;
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
        strength = 80,
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
        this.respect = (this.happiness + this.looks)/2;
        this.strength = strength;

        this.sweetness = rand_int(100) / 100;
        this.spicyness = rand_int(100) / 100;
        this.bitterness = rand_int(100) / 100;
        this.crunchyness = rand_int(100) / 100;
        this.softness = rand_int(100) / 100;

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
    strength: "💪",
    respect: "🤝",
    happiness: "☺️",
    intelligence: "💡",
    health: "💊",
    looks: "👁️"
};

const div = document.createElement("div");
navbar.append(div);

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

class Occupation {
    constructor({
        needed_intelligence = 0.0,
        income = 0,
        name = "",
    } = {}) {
        this.needed_intelligence = needed_intelligence;
        this.income = income;
        this.name = name;
    }
}

class Consumable {
    constructor({
        // palate
        sweetness = 0.0,
        spicyness = 0.0,
        bitterness = 0.0,
        
        // texture
        crunchyness = 0.0,
        softness = 0.0,

        // addictions
        widthdrawal = 0.0,

        price = 0,
        name = "",
    } = {}) {
        this.sweetness = sweetness;
        this.spicyness = spicyness;
        this.bitterness = bitterness;
        this.crunchyness = crunchyness;
        this.softness = softness;
        this.widthdrawal = widthdrawal;
        this.price = price;
        this.name = name;
    }
}

const consumables = {
    alfajor: new Consumable({
        name: "Alfajor",
        softness: 0.8,
        sweetness: 0.6,
        spicyness: 0.0,
        bitterness: 0.0,
        crunchyness: 0.3,
        widthdrawal: 0.01,
        price: 2
    }),
    potato_chips: new Consumable({
        name: "Potato Chips",
        softness: 0.1,
        sweetness: 0.0,
        spicyness: 0.2,
        bitterness: 0.0,
        crunchyness: 0.6,
        widthdrawal: 0.01,
        price: 2
    }),
    cigarettes: new Consumable({
        name: "Cigarettes",
        softness: 0.8,
        sweetness: 0.0,
        spicyness: 0.0,
        bitterness: 0.75,
        crunchyness: 0.1,
        widthdrawal: 1.0,
        price: 5
    }),
    beer: new Consumable({
        name: "Beer",
        softness: 1.0,
        sweetness: 0.0,
        spicyness: 0.0,
        bitterness: 0.8,
        crunchyness: 0.1,
        widthdrawal: 0.1,
        price: 5
    }),
};

const shopItems = [consumables["potato_chips"], consumables["alfajor"], consumables["cigarettes"], consumables["beer"]];

const infoBoxPanels = {
    family: () => {
        for (let entry in your.family) {
            let person = your.family[entry]["person"];
            let relation = your.family[entry]["relation"];
            let new_entry = document.createElement("span");
            new_entry.textContent = `${person.gender} ${Relation.getString(relation).toLowerCase()} - ${person.name} ${person.surname} - ${person.age}`;
            infoBox.append(new_entry);
        }
    },
    shop: () => {
        for (let item in shopItems) {
            let name = shopItems[item]["name"];
            let price = shopItems[item]["price"];
            let new_entry = document.createElement("button");
            new_entry.textContent = `${name} - $${price}`;
            new_entry.onclick = () => {
                if (your.money > price) {
                    let softness_match = shopItems[item].softness * your.softness;
                    let sweetness_match = shopItems[item].sweetness * your.sweetness;
                    let spicyness_match = shopItems[item].spicyness * your.spicyness;
                    let bitterness_match = shopItems[item].bitterness * your.bitterness;
                    let crunchyness_match = shopItems[item].crunchyness * your.crunchyness;
                    let total_enjoyment = softness_match + sweetness_match + spicyness_match + bitterness_match + crunchyness_match;
                    total_enjoyment *= 20;
                    your.happiness += total_enjoyment;
                    print(`You bought and consumed ${name}, it made you ${total_enjoyment}% happier`)
                    canInteract = true;
                } else {
                    print(`You don't have enough money for ${name}, you need $${price-your.money} more`);
                }
                update_meters();
            };
            infoBox.append(new_entry);
        }
    },
}

let currentIBPanel = infoBoxPanels.family;

function update_meters() {
    for (let key in meter_elements) {
        meter_elements[key].style.setProperty("--p", your[key]);
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

    your.happiness = clamp(your.happiness, 0, 100);
    your.intelligence = clamp(your.intelligence, 0, 100);
    your.looks = clamp(your.looks, 0, 100);
    your.health = clamp(your.health, 0, 100);

    yourInfo.textContent = `${your.name} ${your.surname} - $${your.money}`;

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

    your.gender = 0 == rand_int(2) ? "male" : "female";
    your.name = your.gender == "male" ? boy_names[rand_int(boy_names.length)] : girl_names[rand_int(girl_names.length)];
    your.surname = common_surname;

    your.health = (father.health + mother.health) / 2;
    your.intelligence = (father.intelligence + mother.intelligence) / 2;
    your.looks = (father.looks + mother.looks) / 2;
    your.strength = your.health/2 + rand_int(your.health/2);

    your.family.push({ person: father, relation: Relation.Parent });
    your.family.push({ person: mother, relation: Relation.Parent });

    update_meters();

    header("Age: 0. Welcome to Fortnite.");
    print(`I was born a ${your.gender}. My name is ${your.name} ${your.surname}`);
    print(`I was born on the fateful day of ${your.birthday.toLocaleString('default', { month: 'long' })} ${your.birthday.getDate()}, as a ${new ZodiacSign(your.birthday).sign}`);
    space();
    print(`My father is ${father.name} ${father.surname} of ${father.age} years old`);
    print(`My mother is ${mother.name} ${mother.surname} of ${mother.age} years old`);
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

ageUp.addEventListener("click", function () {
    if (!canInteract) return;
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

showShop.addEventListener("click", function (e) {
    if (!canInteract) return;
    currentIBPanel = infoBoxPanels.shop;
    update_meters();
    infoBox.style.display = "flex";
});

showFamilyTree.addEventListener("click", function (e) {
    if (!canInteract) return;
    currentIBPanel = infoBoxPanels.family;
    update_meters();
    infoBox.style.display = "flex";
});

function presentChoice(description, options) {
    const choiceDiv = document.createElement("div");
    choiceDiv.className = "choice-modal";
    choiceDiv.innerHTML = `<p>${description}</p>`;

    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.onclick = () => {
            opt.callback();
            choiceDiv.remove();
            canInteract = true;
            update_meters();
        };
        choiceDiv.appendChild(btn);
    });

    textContainer.appendChild(choiceDiv);
    canInteract = false;
}

const eventPool = [
    new LifeEvent({
        id: "vegetables",
        title: "Plis No BroColly.",
        description: () => 0 == rand_int(2) 
            ? "Your father is forcing you to eat your greens." 
            : "Your mother is forcing you to eat your greens.",
        chance: 0.25,
        minAge: 2,
        maxAge: 6,
        effect: (p) => {
            presentChoice("Will you make it easy?", [
                {
                    text: "Accept regardless of taste.",
                    callback: () => {
                        p.intelligence += 5;
                        p.happiness -= 5;
                        p.health += 5;
                        print("Never again.");
                    }
                },
                {
                    text: "Throw your plate at them.",
                    callback: () => {
                        p.health += 5;
                        print("You were forced to eat it anyways.");
                    }
                }
            ]);
        }
    }),
    new LifeEvent({
        id: "sickness",
        title: "I feel like shit!",
        description: "You caught a nasty disease.",
        chance: 0.05,
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
        description: () => "Someone named " + boy_names[rand_int(boy_names.length)] + " is harassing you.",
        chance: 0.5,
        minAge: 6,
        maxAge: 14,
        criteria: (p) => p.looks < 40 || p.respect < 40,
        effect: (p) => {
            p.happiness -= 5;
            presentChoice("Will you let this slide?", [
                {
                    text: "Just ignore them.",
                    callback: () => {
                        p.intelligence += 5;
                    }
                },
                {
                    text: "Kick them in the stomach.",
                    callback: () => {
                        p.respect += 5;
                        p.happiness += 15;
                        print("Bullies are now scared of you.");
                    }
                }
            ]);
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
        id: "school_start",
        title: "Fresh meat",
        description: "You're starting school.",
        chance: 1,
        minAge: 6,
        maxAge: 6,
        effect: (p) => {
            if (p.intelligence > 50) {
                print("You're hyped.");
                p.happiness += 10;
            } else {
                print("You're anxious.");
                p.happiness -= 10;
            }
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
            presentChoice("What do you do with the cash?", [
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
    }),
    new LifeEvent({
        id: "school_over",
        title: "Good morning.",
        description: "You're done with school.",
        chance: 1.,
        minAge: 18,
        maxAge: 18,
        effect: (p) => {
            presentChoice("Will you pursue higher education?", [
                {
                    text: "Get into university",
                    callback: () => {
                        print("Here ideally you'd have sum options but yeah TODO")
                    }
                    /*callback: () => {
                        presentChoice("Choose a major", [
                            {
                                text: "Get into university",
                                callback: () => {
                                }
                            },
                            {
                                text: "Take a break",
                                callback: () => {}
                            }
                        ]);
                    }*/
                },
                {
                    text: "Take a break",
                    callback: () => {}
                }
            ]);
        }
    })
];

begin();