import { DNI } from './dni.js';  

let inputDni;
do {
    inputDni = prompt("Please enter your DNI number:");
    if (inputDni === null) {
        break;
    }

    try {
        const number = parseInt(inputDni, 10);
        const dni = new DNI(number);
        const letter = dni.calculateLetter();
        console.log(`The letter for DNI ${inputDni} is: ${letter}`);
    } catch (error) {
        console.error(error.message);
    }
} while (inputDni !== null);