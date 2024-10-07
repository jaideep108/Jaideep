// utilities.mjs

// First function: Prints a welcome message
export function welcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
  }
  
  // Second function: Converts Celsius to Fahrenheit
  export function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Third function: Performs a math operation (factorial)
  export function performMathOperation(n) {
    return n === 0 ? 1 : n * performMathOperation(n - 1);
  }
  
  // Fourth function: Generates a random number between min and max
  export function advancedFunction(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  