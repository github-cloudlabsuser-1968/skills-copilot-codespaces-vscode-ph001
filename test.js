const calculator = require('./calculator'); // Add this line
// Test case 1: Adding numbers
calculator.add(5);
expect(calculator.getResult()).toBe(5);

// Test case 2: Subtracting numbers
calculator.subtract(2);
expect(calculator.getResult()).toBe(3);

// Test case 3: Multiplying numbers
calculator.multiply(3);
expect(calculator.getResult()).toBe(9);

// Test case 4: Dividing numbers
calculator.divide(2);
expect(calculator.getResult()).toBe(4.5);

// Test case 5: Dividing by zero
expect(() => {
  calculator.divide(0);
}).toThrow('Cannot divide by zero');