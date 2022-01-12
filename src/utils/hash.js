import crypto from 'crypto'
import { getPrevHash } from './logFile'

const calculateHash = (message, prevHash = '', nonce) =>
  crypto
    .createHash('sha256')
    .update(`${prevHash},${message},${nonce}`, 'utf-8')
    .digest('hex')
    .toString()

const generateHash = (message) => {
  let nonce = 0
  const prevHash = getPrevHash()
  let hash = calculateHash(message, prevHash, nonce)
  while (!zerosCheck(hash)) {
    hash = calculateHash(message, prevHash, nonce)
    nonce++
  }
  return { hash, nonce }
}

const zerosCheck = (hash, difficulty = 2) => {
  const zerosAmount = Array(difficulty + 1).join('0')
  const pattern = new RegExp(`^${zerosAmount}.*`)
  return pattern.test(hash)
}

export { generateHash }
