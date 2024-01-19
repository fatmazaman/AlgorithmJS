//Let's define ugly numbers as those whose only prime factors are 2,3 or 5. By convention , 1 is included.

function maxDivide(number, divisor) {
    while (number % divisor == 0) {
        number /= divisor
    }
    return number
}

function isUgly(number) {
    number = maxDivide(number, 2)
    number = maxDivide(number, 3)
    number = maxDivide(number, 5)
    return number === 1
}

function arrayNUglyNumbers(n) {
    var counter = 0,
        currentNumber = 1,
        uglyNumbers = []

    while (counter != n) {

        if (isUgly(currentNumber)) {
            counter++
            uglyNumbers.push(currentNumber)
        }

        currentNumber++
    }

    return uglyNumbers
}

module.exports =  { maxDivide, isUgly, arrayNUglyNumbers } 