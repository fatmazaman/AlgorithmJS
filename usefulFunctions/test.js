const { matrix, hypotenuse, is_integer, add_all, occurChar} = require('./index.js')

// matrix 
test('Matrix function should create a jagged array with the specified number of rows and columns', () => {
  const rows = 3
  const columns = 3
  const result = matrix(rows, columns)

  // Check if the result is an array
  expect(Array.isArray(result)).toBe(true)

  // Check if the number of rows matches the expected value
  expect(result.length).toBe(rows)

  // Check if each row is an array
  result.forEach(row => {
    expect(Array.isArray(row)).toBe(true)

    // Check if the number of columns in each row matches the expected value
    expect(row.length).toBe(columns)

    // Check if each element in the row is initialized to 0
    row.forEach(element => {
      expect(element).toBe(0)
    })
  })
})

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

// occurChar

test('occurChar should correctly count occurrences of a character in a string', () => {
    // Test case 1: Single occurrence
    expect(occurChar('hello', 'e')).toBe(1)

    // Test case 2: Multiple occurrences
    expect(occurChar('banana', 'a')).toBe(3)

    // Test case 3: No occurrence
    expect(occurChar('world', 'z')).toBe(0)

    // Test case 4: Empty string
    expect(occurChar('', 'x')).toBe(0)

    // Test case 5: Character not provided
    expect(occurChar('testing', undefined)).toBe(0)
})
