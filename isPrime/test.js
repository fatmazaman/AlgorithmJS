// test.js

const { isPrime, printPrime } = require('./index.js')

// Test for isPrime function
test('isPrime should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true)
    expect(isPrime(5)).toBe(true)
    expect(isPrime(13)).toBe(true)
})

test('isPrime should return false for non-prime numbers', () => {
    expect(isPrime(1)).toBe(false)
    expect(isPrime(4)).toBe(false)
    expect(isPrime(15)).toBe(false)
})

// Test for printPrime function
test('printPrime should print prime numbers up to n', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {}) // Mock console.log to spy on it
    printPrime(10)
    expect(consoleSpy).toHaveBeenCalledTimes(4) // Expecting 4 prime numbers (2, 3, 5, 7) up to 10
    consoleSpy.mockRestore() // Restore console.log
})
