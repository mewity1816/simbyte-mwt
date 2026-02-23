function begin() {
    let saveJSON = localStorage.getItem("save");
    let save = JSON.parse(saveJSON);

    if (save && save.characterData) {
        your = save.characterData;
        your.birthday = new Date(your.birthday);
        if (save.history) {
            for (let id = 0; id < save.history.length; id++) {
                const element = save.history[id];
                console.log(element.type);
                switch (element.type) {
                    case "h2":
                        header(element.text);
                        break;
                    case "span":
                        print(element.text);
                        break;
                    case "br":
                        space();
                        break;
                
                    default:
                        break;
                }
            }
        }

        update_meters();
        return;
    }

    generateAncestors(your, pastGenerationsAmount)

    if (rand_int(500) == 255) {
        your.gender = "intersex";
    } else {
        your.gender = 0 == rand_int(2) ? "male" : "female";
    }

    your.name = your.gender == "male" ? boy_names[rand_int(boy_names.length)] : girl_names[rand_int(girl_names.length)];
    your.surname = your.family[rand_int(2)]["person"].surname;
    header("Age: 0. Welcome to simbyte.");
    print(`I was born ${your.gender}. My name is ${your.name} ${your.surname}`);
    print(`I was born on the fateful day of ${your.birthday.toLocaleString('default', { month: 'long' })} ${your.birthday.getDate()}, as a ${new ZodiacSign(your.birthday).sign}`);
    space();
    print(`You can check your family tree after pressing the 👪 icon.`);
    
    console.log(your.family);

    update_meters();
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
        if (person.age >= person.lifespan) {
            print(`Your ${Relation.getString(person.relation).toLowerCase()}, ${person.name}, has passed away at the age of ${person.age}`)
            return;
        }
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

window.addEventListener('beforeunload', function (e) {e.preventDefault()});
begin();