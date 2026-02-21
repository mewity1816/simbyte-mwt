let quick_css = localStorage.getItem("quick_css");

let QuickCSSStyle = document.createElement("style");
QuickCSSStyle.textContent = quick_css;
document.head.append(QuickCSSStyle);

let QuickCSSTitle = document.createElement("span");
QuickCSSTitle.textContent = "QuickCSS";

let QuickCSSTextArea = document.createElement("textarea");
QuickCSSTextArea.value = quick_css;

let QuickCSSDIV = document.createElement("div");
QuickCSSDIV.classList.add("flexColumn")
QuickCSSDIV.append(QuickCSSTitle);
QuickCSSDIV.append(QuickCSSTextArea);

settingsBox.prepend(QuickCSSDIV);

saveAndExit.addEventListener("click", () => {
    localStorage.setItem("quick_css", QuickCSSTextArea.value);
    toggleVisibility(settingsContainer);
    space();
    print("refresh to see your changes");
    space();
});