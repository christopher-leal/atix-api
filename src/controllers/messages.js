import { saveData } from './../utils/logFile'
import { generateHash } from './../utils/hash'
import logger from './../utils/logger'

const saveMessage = async (req, res) => {
  const { message } = req.body
  const hashData = generateHash(message)
  logger.info('Hash generated successfully')
  const dataToSave = `${hashData.hash},${message},${hashData.nonce}`
  saveData(`${dataToSave} \r\n`)
  return res.status(200).json({
    success: true
  })
}

export default {
  saveMessage
}
