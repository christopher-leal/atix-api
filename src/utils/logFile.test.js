import { saveData, getPrevHash } from './logFile'
import fs from 'fs'

jest.mock('fs')

afterEach(() => {
  jest.clearAllMocks()
})

describe('Testing logFile ', () => {
  describe('saveData', () => {
    test('should save message "Hola Mundo"', () => {
      saveData('Hola Mundo')
      expect(fs.writeFileSync).toHaveBeenCalled()
    })
  })
  describe('getPrevHash', () => {
    test('should check that the file exists', () => {
      getPrevHash()
      expect(fs.existsSync).toHaveBeenCalledWith('logs.csv')
    })
    test('should return the default hash', () => {
      fs.existsSync.mockReturnValue(false)
      const hash = getPrevHash()
      expect(hash).toBe('0000000000000000000000000000000000000000000000000000000000000000')
    })

    test('should return the hash from the file', () => {
      fs.existsSync.mockReturnValue(true)
      fs.readFileSync.mockReturnValueOnce('0038711c83bd05b1e369e27246df4ba815a6dda04116b1b2f9a8c21ba4e1de38,Hola Mundo,6 ')
      const hash = getPrevHash()
      expect(hash).toBe('0038711c83bd05b1e369e27246df4ba815a6dda04116b1b2f9a8c21ba4e1de38')
    })
  })
})
