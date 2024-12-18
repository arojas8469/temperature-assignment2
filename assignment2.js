///Assignment 2

/// (F - 32)*5/9 = C



function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
};

let celsius = Number(prompt("Enter temperature in Celsius:"));
let fahrenheit = celsiusToFahrenheit(celsius);

console.log(`${celsius} is equal to ${fahrenheit}.`);
//document.body.HTML = `<p>${celsius}C is equal to ${fahrenheit}F.</p>`;
document.getElementById('result').innerHTML = `${celsius}°C is equal to ${fahrenheit}°F.`;

