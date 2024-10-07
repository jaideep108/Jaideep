// main.mjs

// Importing functions from utilities.mjs
import { welcomeMessage, celsiusToFahrenheit, performMathOperation, advancedFunction } from './utilities.mjs';

// Call the welcomeMessage function
welcomeMessage('jaideep', 'parneet');

// Convert 25°C to Fahrenheit and print the result
console.log(`25°C is ${celsiusToFahrenheit(25)}°F`);

// Calculate the factorial of 5 and print the result
console.log(`Factorial of 5: ${performMathOperation(5)}`);

// Generate a random number between 1 and 100
console.log(`Random number between 1 and 100: ${advancedFunction(1, 100)}`);
