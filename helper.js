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
    const whateverdiv = document.createElement("div");

    const meter = document.createElement("span");
    meter.classList.add("piechart");
    meter.style.setProperty("--p", your[key]);

    const iconSpan = document.createElement("strong");

    iconSpan.textContent = icon;

    whateverdiv.addEventListener("mouseover", function (e) {
        iconSpan.textContent = your[key] + "%";
    });
    whateverdiv.addEventListener("mouseleave", function (e) {
        iconSpan.textContent = icon;
    });

    whateverdiv.append(iconSpan);
    whateverdiv.append(meter);
    yourStatistics.append(whateverdiv);
    meter_elements[key] = meter;
});

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

function update_meters() {
    // dont update any game state in this function.
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

    effectsList.innerHTML = null;

    for (let e in your.effects) {
        const effect = your.effects[e];
        let effectDiv = document.createElement("div");
        let iconSpan = document.createElement("span");
        iconSpan.textContent = effect.icon;
        effectDiv.append(iconSpan);

        let infoDiv = document.createElement("div");
        infoDiv.style.display = "none";

        effectDiv.append(infoDiv);

        let nameDiv = document.createElement("div");
        let effectName = document.createElement("strong");
        effectName.textContent = effect.name;
        nameDiv.append(effectName);

        infoDiv.append(nameDiv);

        let descDiv = document.createElement("div");
        descDiv.classList.add("flexColumn")
        let descText = document.createElement("span");
        descText = effect.description;

        descDiv.append(descText);

        Object.entries(stats).forEach(([key, _]) => {
            if (effect[key]) {
                let textElement = document.createElement("span");
                textElement.textContent = effect[key] + " " + key + ".";
                descDiv.append(textElement);
            }
        });
        
        effectDiv.addEventListener("click", function (e) {
            if (infoDiv.style.display == "none") {
                infoDiv.style.display = ""
                nameDiv.prepend(iconSpan);
            } else {
                effectDiv.append(iconSpan);
                infoDiv.style.display = "none"
            }
        });

        infoDiv.append(descDiv);
        effectDiv.append(infoDiv);
        effectsList.append(effectDiv);
    }


    // this is an exception to the guideline at the top of this function. ty
    Object.entries(stats).forEach(([key, _]) => {
        your[key] = Math.floor(clamp(your[key], 0, 100));
    });

    yourInfo.textContent = `${your.name} ${your.surname} - $${your.money}`;

    textContainer.scrollTo({
        top: textContainer.scrollHeight,
        behavior: 'smooth'
    });
}

function presentChoice(description, options) {
    const choiceDiv = document.createElement("div");
    choiceDiv.className = "choice-modal";
    choiceDiv.innerHTML = `<p>${description}</p>`;
    twinkleSFX.play();
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