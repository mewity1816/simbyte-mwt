import { Person } from "./class.js";
let your = new Person();
let canInteract = true;

let state = {
    your: your, canInteract: canInteract
};

export { state }