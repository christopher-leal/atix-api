import crypto from 'crypto'
import { getPrevHash } from './logFile'

/**
 * Calculate hash from a message, previous hash and nonce
 * @param {string} message Message to hash
 * @param {string} prevHash Hash from the previous hash
 * @param {number} nonce Proof of Word
 * @returns {string} a hashed string
 */
const calculateHash = (message, prevHash = '', nonce) =>
  crypto
    .createHash('sha256')
    .update(`${prevHash},${message},${nonce}`, 'utf-8')
    .digest('hex')
    .toString()

/**
 * Generate hash from a message
 * @param {string} message Message to hash
 * @returns {object} return the hash and the nonce
 */
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

/**
 *
 * @param {string} hash Hash to check
 * @param {number} difficulty Number of zeros at the begining
 * @returns {boolean} a boolean true if the hash matches with the regex
 */
const zerosCheck = (hash, difficulty = 2) => {
  const zerosAmount = Array(difficulty + 1).join('0')
  const pattern = new RegExp(`^${zerosAmount}.*`)
  return pattern.test(hash)
}

export { generateHash }
