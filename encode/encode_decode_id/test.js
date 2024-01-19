// test.js

const { encodeId, decodeId } = require('./index.js')

// Test for encodeId function
test('encodeId should correctly encode a number into a string', () => {
    expect(encodeId(0)).toBe('a') // 0 should be encoded as 'a'
    expect(encodeId(125)).toBe('cb') // 125 should be encoded as 'cb'
    expect(encodeId(456789)).toBe('b4ZJ') // 456789 should be encoded as 'b4ZJ'
})

// Test for decodeId function
test('decodeId should correctly decode a string into a number', () => {
    expect(decodeId('a')).toBe(0) // 'a' should be decoded as 0
    expect(decodeId('cb')).toBe(125) // 'cb' should be decoded as 125
    expect(decodeId('NjO')).toBe(150514) // 'NjO' should be decoded as 150514
})

