const { reverse, reversestr2, reversestr3 } = require('./index.js')

test('Reverse function exists', () => {
  expect(reverse).toBeDefined()
})

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba')
})

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ')
})

test('Reverse reverses a string', () => {
  expect(reversestr2('abcd')).toEqual('dcba')
})

test('Reverse reverses a string', () => {
  expect(reversestr3('abcd')).toEqual('dcba')
})
