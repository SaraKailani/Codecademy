
const kelvin = 293; // This var is set to the current forecast in Kelvin

const celsius = kelvin - 273; // This var converts Kelvin to Celsius

let fahrenheit = celsius * (9 / 5) + 32; // This var converts Celsius to Fahrenheit

// This is to round the Fahrenheit value
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);