import { rand_int } from "./rng.js";

export class LifeStage {
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

export class Relation {
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

export class Relative {
    constructor(person, relation) {
        this.person = person;
        this.relation = relation;
        this.kindness = 100;
    }
}

export class LifeEvent {
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

export class Person {
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
        this.canInteract = true;
        
        this.effects = [];

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
        let start = new Date(99, 0, 1);
        let end = new Date(99, 11, 31);
        this.birthday = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
}

export class Occupation {
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

export class Effect {
    constructor({
        // THESE ARE MULTIPLIERS!!
        health_impact = 0.0,
        happiness_impact = 0.0,
        intelligence_impact = 0.0,
        looks_impact = 0.0,
        monetary_impact = 0.0,

        icon = "",
        name = "",
        description = "",
    } = {}) {
        this.health_impact = health_impact;
        this.happiness_impact = happiness_impact;
        this.intelligence_impact = intelligence_impact;
        this.looks_impact = looks_impact;
        this.monetary_impact = monetary_impact;
        this.icon = icon;
        this.name = name;
        this.description = description;
    }
}

export class Consumable {
    constructor({
        // palate
        sweetness = 0.0,
        spicyness = 0.0,
        bitterness = 0.0,
        
        // texture
        crunchyness = 0.0,
        softness = 0.0,

        widthdrawal = null,

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

export class ZodiacSign {
    static signs = { en: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",], };
    constructor(e) { isNaN(Date.parse(e)) || ((this.sign = this.#a(e)), (this.chinese = this.#a(e))); }
    #a(e) {
        return ZodiacSign.signs["en"][Number(new Intl.DateTimeFormat("fr-TN-u-ca-persian", { month: "numeric" }).format(Date.parse(e))) - 1];
    }
}