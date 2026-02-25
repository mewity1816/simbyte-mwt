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

    static getMultiplier(lifestage) {
        switch (lifestage) {
            case LifeStage.Elder:
                break;
            case LifeStage.Adult:
                break;
            case LifeStage.Teenager:
                break;
            case LifeStage.Child:
                break;
            case LifeStage.Baby:
                break;
        }
    }

    static getStage(age) {
        if (age >= 60) {
            return LifeStage.Elder
        }
        if (age >= 20) {
            return LifeStage.Adult
        }
        if (age >= 13) {
            return LifeStage.Teenager
        }
        if (age >= 7) {
            return LifeStage.Child
        }
        return LifeStage.Baby
    }
}

class Relation {
    static Descendant = 0;
    static Parent = 1;
    static GrandParent = 2;
    static GreatGrandParent = 3;
    static Mascot = 3;
    static Friend = 4;
    static Partner = 5;

    static #labels = {
        [Relation.Parent]: "Parent",
        [Relation.GrandParent]: "Grandparent",
        [Relation.GreatGrandParent]: "Great-grandparent",
        [Relation.Mascot]: "Mascot",
        [Relation.Descendant]: "Descendant",
        [Relation.Friend]: "Friend",
        [Relation.Partner]: "Partner",
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
    constructor({title, description, chance = () => 0.0, minAge = 0, maxAge = 100, criteria = () => true, effect = () => {}}) {
        this.title = title;
        this._description = description;
        this._chance = chance;
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

    get chance() {
        return typeof this._chance === 'function' 
            ? this._chance() 
            : this._chance;
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
        lifeExpectancy = 90,
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
        this.lifeExpectancy = lifeExpectancy;
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

        this.updateCareerPotential();
        // 1999 is the peak of human civilization
        let start = new Date(99, 0, 1);
        let end = new Date(99, 11, 31);
        this.birthday = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    giveParents() {
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

        this.family.push({ person: father, relation: Relation.Parent });
        this.family.push({ person: mother, relation: Relation.Parent });
    }

    inheritTraits() {
        Object.entries(stats).forEach(([key, _]) => {
            this[key] = 0;
        });

        Object.entries(stats).forEach(([key, _]) => {
            for (let i = 0; i < this.family.length; i++) {
                this[key] += this.family[i].person[key];
            }
        });

        Object.entries(stats).forEach(([key, _]) => {
            this[key] /= this.family.length;
        });

        this.surname = this.family[rand_int(this.family.length)].person.surname;
    }

    updateCareerPotential() {
        this.careerPotential = Math.max(
            (this.intelligence * 1.5) + (this.looks * 0.5),
            (this.looks * 1.5) + (this.intelligence * 0.5),
            (this.intelligence + this.looks)
        );
    }
}

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

class Effect {
    constructor({
        health = 0.0,
        happiness = 0.0,
        intelligence = 0.0,
        looks = 0.0,
        monetary = 0.0,

        icon = "",
        name = "",
        description = "",
    } = {}) {
        this.health = health;
        this.happiness = happiness;
        this.intelligence = intelligence;
        this.looks = looks;
        this.monetary = monetary;
        this.icon = icon;
        this.name = name;
        this.description = description;
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

class ZodiacSign {
    static signs = { en: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",], };
    constructor(e) { isNaN(Date.parse(e)) || ((this.sign = this.#a(e)), (this.chinese = this.#a(e))); }
    #a(e) {
        return ZodiacSign.signs["en"][Number(new Intl.DateTimeFormat("fr-TN-u-ca-persian", { month: "numeric" }).format(Date.parse(e))) - 1];
    }
}
