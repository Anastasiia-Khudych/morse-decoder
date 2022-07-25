const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = Array.from(expr);
    let mapArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger((i + 1) / 10)) {
            mapArr.push(arr.slice(i - 9, i + 1).join(''));
        } else { continue; }
    }

    let cuttedArr = [];
    for (let elements of mapArr) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === '0') {
                continue;
            } else if (elements[i] === '*') {
                cuttedArr.push(elements.slice(0, elements.length));
                break;
            }
            else if (elements[i] === '1') {
                cuttedArr.push(elements.slice(i, elements.length));
                break;
            }
        }
    }

    let twiceCuttedArr = [];
    twiceCuttedArr = cuttedArr.map((elements) => {
        return elements.split('');
    })


    for (let elements of twiceCuttedArr) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] + elements[i + 1] === '10' || elements[i] + elements[i + 1] === '11') {
                elements.splice(i + 2, 0, ' ');
            }
        }
    }

    let joinedArr = [];
    for (let elements of twiceCuttedArr) {
        joinedArr.push(elements.join('').trim());
    }

    let joinedArrofArr = [];
    for (let elements of joinedArr) {
        joinedArrofArr.push(elements.split(' '));
    }


    for (let elements of joinedArrofArr) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === '10') {
                elements[i] = '.';
            } else if (elements[i] === '11') {
                elements[i] = '-';
            }
        }
    }

    let morseArr = [];
    for (let elements of joinedArrofArr) {
        morseArr.push(elements.join(''));
    }


    for (let i = 0; i < morseArr.length; i++) {
        for (let key in MORSE_TABLE) {
            if (morseArr[i] === key) {
                morseArr[i] = MORSE_TABLE[key];
            } else if (morseArr[i] === '**********') {
                morseArr[i] = ' ';
            }
        }
    }

    morseArr = morseArr.join('');

    return morseArr;
}



module.exports = {
    decode
}


