const { isPrime, printPrime, primeFactors } = require('./index.js')

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

// Test for primeFactors function
test('primeFactors should print the correct prime factors of a number', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {}) // Mock console.log to spy on it
    primeFactors(85)
    expect(consoleSpy).toHaveBeenCalledTimes(2) // Expecting 2 prime factors (5, 17) for 85
    expect(consoleSpy.mock.calls[0][0]).toBe(5) // First prime factor should be 5
    expect(consoleSpy.mock.calls[1][0]).toBe(17) // Second prime factor should be 17
    consoleSpy.mockRestore() // Restore console.log
})
