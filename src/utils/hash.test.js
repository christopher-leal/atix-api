import { generateHash } from './hash'

describe('Testing hash utility', () => {
  test('initial test', () => {
    expect(true).toBe(true)
  })

  test('should return a object with the data', () => {
    const hashData = generateHash('Hola Mundo')
    expect(typeof hashData.hash).toBe('string')
    expect(typeof hashData.nonce).toBe('number')
  })

  test('should return a string starting with double 00', () => {
    const hashData = generateHash('Hola Mundo')
    expect(hashData.hash.startsWith('00')).toBe(true)
  })

  test('should return a hash stating with double 00', () => {
    const hashData = generateHash('Hola Mundo')
    expect(hashData.nonce).toBe(75)
  })
})
