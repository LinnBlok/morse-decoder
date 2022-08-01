const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words = []
    let j = 0
    for (let i = 10; i <= expr.length; i++) {
        if (i % 10 === 0) {
            words.push(expr.substring(j, i));
            j += 10
        }
    }
    let symbol = []
    let result = ''
    words.forEach((el) => {
        symbol.push(el.replaceAll('11', '-').replaceAll('10', '.').split('00'));
    })
    symbol.forEach((el) => {
        el.forEach((elem) => {
            MORSE_TABLE[elem]? result += MORSE_TABLE[elem]: '';
            elem === '**********' ? result += ' ': ''
        } )
    })

    return result.trim()
    }











module.exports = {
    decode
}