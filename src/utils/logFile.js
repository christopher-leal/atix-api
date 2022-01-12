import fs from 'fs'

const filename = 'logs.csv'

/**
 * Function to save data in a file with encoding utf()
 * @param {string} data Data to write in a file
 * @returns {void}
 */
export const saveData = (data) => fs.writeFileSync(filename, data, { flag: 'a', encoding: 'utf8' })

/**
 * Read the file and then, return the previous hash
 * @returns the previous hash string in the file
 */
export const getPrevHash = () => {
  if (!fs.existsSync(filename)) {
    return '0000000000000000000000000000000000000000000000000000000000000000'
  }
  const data = fs.readFileSync(filename, { encoding: 'utf-8' })
  const lines = data.trim().split('\n')
  const prevLine = lines[lines.length - 1]
  const prevHash = prevLine.split(',')[0]
  return prevHash
}
