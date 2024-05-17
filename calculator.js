// Define the Calculator class
class Calculator {
    constructor() {
        this.result = 0;
    }

    // Method to add numbers
    add(num) {
        this.result += num;
    }

    // Method to subtract numbers
    subtract(num) {
        this.result -= num;
    }

    // Method to multiply numbers
    multiply(num) {
        this.result *= num;
    }

    // Method to divide numbers
    divide(num) {
        if (num !== 0) {
            this.result /= num;
        } else {
            console.log("Error: Cannot divide by zero");
        }
    }

    // Method to get the result
    getResult() {
        return this.result;
    }
}

// Create an instance of the Calculator class
const calculator = new Calculator();

// Perform some calculations
calculator.add(5);
calculator.subtract(2);
calculator.multiply(3);
calculator.divide(2);

// Get the final result
const result = calculator.getResult();
console.log("Result:", result);





// generate test cases for the code above
// test cases

