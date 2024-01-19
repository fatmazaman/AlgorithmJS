// test.js
const { maxDivide, isUgly, arrayNUglyNumbers } = require('./index.js') 

// Test for maxDivide function
test('maxDivide should correctly divide a number by a divisor', () => {
    expect(maxDivide(12, 2)).toBe(3) // 12 / 2 = 6, 6 / 2 = 3
    expect(maxDivide(30, 5)).toBe(6) // 30 / 5 = 6
    expect(maxDivide(15, 3)).toBe(5) // 15 / 3 = 5
})

// Test for isUgly function
test('isUgly should correctly determine whether a number is ugly', () => {
    expect(isUgly(12)).toBe(true) // 12 is an ugly number
    expect(isUgly(14)).toBe(false) // 14 is not an ugly number
    expect(isUgly(30)).toBe(true) // 30 is an ugly number
})

// Test for arrayNUglyNumbers function
test('arrayNUglyNumbers should generate an array of the first n ugly numbers', () => {
    expect(arrayNUglyNumbers(5)).toEqual([1, 2, 3, 4, 5]) // First 5 ugly numbers
    expect(arrayNUglyNumbers(8)).toEqual([1, 2, 3, 4, 5, 6, 8, 9]) // First 8 ugly numbers
    expect(arrayNUglyNumbers(12)).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16]) // First 12 ugly numbers
})
