const isParenthesisValid = require('./index.js')

test('valid parentheses - "()"', () => {
  expect(isParenthesisValid("()")).toBe(true)
})

test('valid parentheses - "(()())"', () => {
  expect(isParenthesisValid("(()())")).toBe(true)
})

test('invalid parentheses - "(()"', () => {
  expect(isParenthesisValid("(()")).toBe(false)
})

test('invalid parentheses - "())"', () => {
  expect(isParenthesisValid("())")).toBe(false)
})

test('invalid parentheses - "(()))"', () => {
  expect(isParenthesisValid("(()))")).toBe(false)
})
