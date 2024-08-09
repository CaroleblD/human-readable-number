module.exports = function toReadable (number) {
    
    let unitsNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let oneTensNumber = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensNumber = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    let firstNumber = String(number)[0];
    let secondNumber = String(number)[1];
    let thirdNumber = String(number)[2];
  
    let startNumber = '';
    let endNumber = '';
    let result = '';

    if (secondNumber === undefined) {
        startNumber = unitsNumber[firstNumber];
        result = `${startNumber}`;
    }
    
    else if (thirdNumber === undefined) {
          
        if (firstNumber === '1') {
            startNumber = oneTensNumber[secondNumber]; 
        }
        else if (firstNumber >= '2') {
            if (secondNumber === '0') {
                startNumber = `${tensNumber[firstNumber]}`
            }
            else {
                startNumber = `${tensNumber[firstNumber]} ${unitsNumber[secondNumber]}`;
            }
        }

        result = `${startNumber}`;
    }

    else {

        startNumber = unitsNumber[firstNumber];
  
        if (secondNumber === '0') {
            if (thirdNumber === '0') {
                endNumber = '';
            } else {
                endNumber = ` ${unitsNumber[thirdNumber]}`;
            }
        }
        else if (secondNumber === '1') {
            endNumber = ` ${oneTensNumber[thirdNumber]}`; 
        }
        else if (secondNumber >= '2') {
            if (thirdNumber === '0') {
                endNumber = ` ${tensNumber[secondNumber]}`
            } else {
                endNumber = ` ${tensNumber[secondNumber]} ${unitsNumber[thirdNumber]}`;
            }
        }

        result = `${startNumber} ` + 'hundred' + `${endNumber}`;
    }
      
    return result;
}


// let digits = String(number).split('');
// let length = digits.length;
// let result = '';

// if (length === 1) {
//     result = unitsNumber[digits[0]];
// } else if (length === 2) {
//     if (digits[0] === '1') {
//         result = oneTensNumber[digits[1]];
//     } else {
//         result = tensNumber[digits[0]] + (digits[1] !== '0' ? ` ${unitsNumber[digits[1]]}` : '');
//     }
// } else if (length === 3) {
//     result = `${unitsNumber[digits[0]]} hundred`;
//     if (digits[1] === '1') {
//         result += ` ${oneTensNumber[digits[2]]}`;
//     } else {
//         if (digits[1] !== '0') {
//             result += ` ${tensNumber[digits[1]]}`;
//         }
//         if (digits[2] !== '0') {
//             result += ` ${unitsNumber[digits[2]]}`;
//         }
//     }
// }