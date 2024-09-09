import { describe, it, expect } from 'vitest';
import { DNI } from '../src/dni.js';
import { lettersDni } from '../src/lettersDni.js';

describe('DNI', () => {

    it('should throw an error if the number is not an integer', () => {
        expect(() => new DNI('12345678')).toThrow('The input is incorrect');
    });

    it('should throw an error if the number is negative', () => {
        expect(() => new DNI(-1)).toThrow('The input is incorrect');
    });

    it('should throw an error if the number is greater than 99999999', () => {
        expect(() => new DNI(100000000)).toThrow('The input is incorrect');
    });

    it('should return the correct letter for a valid DNI number', () => {
        const dni = new DNI(12345678);
        const letter = dni.calculateLetter();
        expect(letter).toBe(lettersDni[12345678 % 23]);
    });

    it('should return the correct letter for DNI number 12345678', () => {
        const dni = new DNI(12345678);
        const letter = dni.calculateLetter();
        expect(letter).toBe('Z');
    });

});
