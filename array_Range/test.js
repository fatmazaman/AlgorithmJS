const range = require('./index.js')

describe('range function', () => {
  it('generates correct range with default step', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('generates correct range with custom step', () => {
    expect(range(3, 9, 3)).toEqual([3, 6, 9])
  })

  it('generates correct range with larger step', () => {
    expect(range(10, 50, 10)).toEqual([10, 20, 30, 40, 50])
  })

  it('generates correct range with negative step', () => {
    expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1, 0])
  })

  it('generates correct range with decimal step', () => {
    expect(range(1, 2, 0.5)).toEqual([1, 1.5, 2])
  })

  it('generates correct range with negative start and stop', () => {
    expect(range(-5, -1)).toEqual([-5, -4, -3, -2, -1])
  })
})
