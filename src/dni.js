import { lettersDni } from "./lettersDni.js";

export class DNI {
    constructor(number) {
        if (!Number.isInteger(number) || number < 0 || number > 99999999) {
            throw new Error('The input is incorrect');
        }
        this.number = number;
    }

    calculateLetter() {
        const remainder = this.number % 23;
        return lettersDni[remainder];
    }
}