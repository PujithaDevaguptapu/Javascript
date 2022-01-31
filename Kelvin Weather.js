const kelvin = 0;
//I have created a constant variable and assigned the value to it
const celsius = kelvin - 273;
//Another constant variable is called with kelvin to Celsius convertion
let fahrenheit = celsius *(9/5) +32;
// Changeing Fahrenheit values
fahrenheit = Math.floor(fahrenheit);
//Rounding up the decimal value
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius *(33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
