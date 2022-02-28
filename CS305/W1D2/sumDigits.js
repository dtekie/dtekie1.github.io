
<<<<<<< HEAD

"use strict";
/**
 * calculate the distance.
 * @param {number} number - the number whose digits to be summed up.
 * 
 * @returns {number} sum
 */
=======
>>>>>>> d35a7fe6591807512bf53d16171fceacc2c1dec7
function sumDigits(number){
    let sum = 0;
    while (number >= 1){
        let lastDigit = parseInt(number%10);
        sum += lastDigit;
        number = parseInt(number/10);
    }
    return sum;
<<<<<<< HEAD
}

/**
 * calculate the distance.
 * @param {number} number - the number whose digits to be multiplied.
 * 
 * @returns {number} sum
 */
=======
};

>>>>>>> d35a7fe6591807512bf53d16171fceacc2c1dec7
function multDigits(number){
        let product = 1;
        while (number >= 1){
            let lastDigit = parseInt(number%10);
            product *= lastDigit;
            number = parseInt(number/10);
        }
        return product;
<<<<<<< HEAD
    }
=======
    };
>>>>>>> d35a7fe6591807512bf53d16171fceacc2c1dec7

    console.log(sumDigits(1234));
    console.log(sumDigits(102));
    console.log(sumDigits(8));

    console.log(multDigits(1234));
    console.log(multDigits(102));
    console.log(multDigits(8));
