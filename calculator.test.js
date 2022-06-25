const calculator = require('./calculator');

describe('basic calculator', () => {
    test('add two numbers', () => {
      expect(calculator.add(4,5)).toBe(9);
    });
  
    test('subtract two numbers', () => {
      expect(calculator.subtract(10,3)).toBe(7);
    });

    test('divide two numbers', () => {
        expect(calculator.divide(8,4)).toBe(2);
      });
    
      test('multiply two numbers', () => {
        expect(calculator.multiply(10,3)).toBe(30);
      });
  });