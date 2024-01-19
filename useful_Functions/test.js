const { hypotenuse, is_integer, add_all, removeExtraSpaces } = require('./index.js')

// hypotenuse
test('Hypotenuse function should calculate the correct length of the hypotenuse', () => {
    // Test case 1: Legs of a right-angled triangle with sides 3 and 4
    expect(hypotenuse(3, 4)).toBe(5)
  
    // Test case 2: Legs of a right-angled triangle with sides 5 and 12
    expect(hypotenuse(5, 12)).toBe(13)
  
    // Test case 3: Legs of a right-angled triangle with sides 7 and 24
    expect(hypotenuse(7, 24)).toBe(25)

})

// is_integer
test('is_integer function should return true if the input is a number', () => {
    // Test case 1: Integer value
    expect(is_integer(5)).toBe(true)
  
    // Test case 2: Floating-point number
    expect(is_integer(3.14)).toBe(true)
  
    // Test case 3: Negative integer
    expect(is_integer(-8)).toBe(true)
  
    // Test case 4: Zero
    expect(is_integer(0)).toBe(true)
})
// is_integer
test('is_integer function should return false if the input is not a number', () => {
    // Test case 5: String
    expect(is_integer('123')).toBe(false)

    // Test case 6: Boolean
    expect(is_integer(true)).toBe(false)

    // Test case 7: Array
    expect(is_integer([1, 2, 3])).toBe(false)

    // Test case 8: Object
    expect(is_integer({ num: 42 })).toBe(false)

    // Test case 9: Null
    expect(is_integer(null)).toBe(false)

    // Test case 10: Undefined
    expect(is_integer(undefined)).toBe(false)
})
//add_all
test('add_all function should return the sum of all elements in the array if the array is not empty', () => {
    // Test case 1: Array of positive integers
    expect(add_all([1, 2, 3])).toBe(6)

    // Test case 2: Array of negative integers
    expect(add_all([-1, -2, -3])).toBe(-6)

    // Test case 3: Array with a mix of positive and negative integers
    expect(add_all([10, -5, 8])).toBe(13)

    // Test case 4: Array of floating-point numbers
    expect(add_all([1.5, 2.5, 3.5])).toBe(7.5)
})

test('add_all function should return "empty string" if the array is empty', () => {
    // Test case 5: Empty array
    expect(add_all([])).toBe('empty string')
})

test('add_all function should return the sum even if the array contains a single element', () => {
    // Test case 6: Array with a single element
    expect(add_all([42])).toBe(42)
})

// removeExtraSpaces
test('removeExtraSpaces should correctly remove extra spaces from a string', () => {
    expect(removeExtraSpaces('Hello    World')).toBe('Hello World') // Multiple spaces between Hello and World should be reduced to one
    expect(removeExtraSpaces('   This   is   a   test   ')).toBe('This is a test') // Extra spaces at the beginning and end should be removed
    expect(removeExtraSpaces('NoExtraSpaces')).toBe('NoExtraSpaces') // No extra spaces, string should remain unchanged
    expect(removeExtraSpaces(' ')).toBe('') // String with only spaces should become an empty string
    expect(removeExtraSpaces('')).toBe('') // Empty string should remain unchanged
})

