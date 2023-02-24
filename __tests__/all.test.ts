import {divide, fetchData, getEmail} from "../src";

const { sum } = require('../src');


describe('Test usando ToBe', () => {

    test('sum adds two numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });

});

describe('Test usando ToMatch - positivo y negativo', () => {
    it('returns true if the email is valid', () => {
        expect(getEmail("jose","gmail.com")).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('returns false if the email is invalid', () => {
        expect(getEmail("---","@")).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });
});

describe("Test manejando Excepciones", () => {
    it("throws an exception when dividing by zero", () => {
        expect(() => {
            divide(10, 0);
        }).toThrow("Cannot divide by zero");
    });

    describe('Test con funciones asyncronas', () => {
        it('should return a string', async () => {
            const result = await fetchData();
            expect(typeof result).toBe('string');
        });

        it('should return the correct value', async () => {
            const result = await fetchData();
            expect(result).toBe('delectus aut autem');
        });
    });
});
