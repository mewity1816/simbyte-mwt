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

    if (rand_int(500) == 255) {
        your.gender = "intersex";
    } else {
        your.gender = 0 == rand_int(2) ? "male" : "female";
    }

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
    print(`I was born ${your.gender}. My name is ${your.name} ${your.surname}`);
    print(`I was born on the fateful day of ${your.birthday.toLocaleString('default', { month: 'long' })} ${your.birthday.getDate()}, as a ${new ZodiacSign(your.birthday).sign}`);
    space();
    print(`My father is ${father.name} ${father.surname} of ${father.age} years old`);
    print(`My mother is ${mother.name} ${mother.surname} of ${mother.age} years old`);
}

function processYearlyEvents(person) {
    const eligibleEvents = eventPool.filter(ev => ev.isEligible(person));

    for (let e in your.effects) {
        const effect = your.effects[e];
        Object.entries(stats).forEach(([key, _]) => {
            if (effect[key]) {
                your[key] += effect[key];
            }
        });
        if (effect.monetary) {
            your.money += effect.monetary;
        }
    }

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

showSettings.addEventListener("click", function (e) {
    toggleVisibility(settingsContainer);
});

window.addEventListener('beforeunload', function (e) {e.preventDefault(); });
begin();