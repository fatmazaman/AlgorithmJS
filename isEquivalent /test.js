const isEquivalent = require('./index')

// Test for equivalent objects
test('Equivalent objects should return true', () => {
  const obj1 = { hi: 'a' }
  const obj2 = { hi: 'a' }
  expect(isEquivalent(obj1, obj2)).toBe(true)
})

// Test for non-equivalent objects
test('Non-equivalent objects should return false', () => {
  const obj3 = { a: 1, b: 2, c: 3 }
  const obj4 = { a: 1, b: 2, c: 4 }
  expect(isEquivalent(obj3, obj4)).toBe(false)
})

// Test for objects with different numbers of properties
test('Objects with different numbers of properties should return false', () => {
  const obj5 = { a: 1, b: 2, c: 3 }
  const obj6 = { a: 1, b: 2 }
  expect(isEquivalent(obj5, obj6)).toBe(false)
})

// Additional Test Cases
test('Objects with functions as properties should return false', () => {
  const obj7 = { prop1: 'test', prop2: function () {} }
  const obj8 = { prop1: 'test', prop2: function () {} }
  expect(isEquivalent(obj7, obj8)).toBe(false)
})

// Test for empty objects
test('Empty objects should return true', () => {
  const obj11 = {}
  const obj12 = {}
  expect(isEquivalent(obj11, obj12)).toBe(true)
})
