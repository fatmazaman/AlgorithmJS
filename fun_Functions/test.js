
const { matrix, occurChar} = require('./index.js')

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
