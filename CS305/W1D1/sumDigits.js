
function sumDigits(number){
    let sum = 0;
    while (number >= 1){
        let lastDigit = parseInt(number%10);
        sum += lastDigit;
        number = parseInt(number/10);
    }
    return sum;
};


