// Assignment Code

const charRange = document.getElementById('charRange')
const charNumber = document.getElementById('charNumber')
const form = document.getElementById('passwordGenForm')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')

const UPPERCASE_CHAR_CODES = arrayfromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayfromLowToHigh(97, 122)
const NUMBERS_CHAR_CODES = arrayfromLowToHigh(48, 57)
const SYMBOLS_CHAR_CODES = arrayfromLowToHigh(33, 47).concat(arrayfromLowToHigh(58, 64)).concat(arrayfromLowToHigh(91, 96)).concat(arrayfromLowToHigh(123, 126))

charNumber.addEventListener('input', syncCharacterAmount)
charRange.addEventListener('input', syncCharacterAmount)


// Write password to the #password input
function generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    //String.fromCharCode(65)
    console.log(LOWERCASE_CHAR_CODES)
}

function arrayfromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    charRange.value = value
    charNumber.value = value
}

// Add event listener to generate button
form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('submit')
    const characterAmount = charNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeLowercase = includeLowercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked


    const password = generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
})
