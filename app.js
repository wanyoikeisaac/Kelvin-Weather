//Constant variable kelvin of value 293
const kelvin = 0;
//Converting kelvin to celsius
const celsius = kelvin - 273;
//Converting celsius to farenheit
let farenheit = celsius * (9/5) + 32;
// Rounding down to a non-decimal number
farenheit = Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees farenheit.`);