
function convertFahrenheit(tempInFahrenheit){
    let tempInCelsius = 0;
    tempInCelsius = 5/9 * (tempInFahrenheit - 32);
    return tempInCelsius.toFixed(4);
}

console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0));
console.log("expect 100: ", convertFahrenheit (212));
console.log("expect 37.7778: ", convertFahrenheit (100));
