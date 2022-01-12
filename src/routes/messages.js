import { Router } from 'express'
import messagesController from './../controllers/messages'
import { body } from 'express-validator'
import validateFields from './../middleware/validateFields'

const router = Router()

router
  .post('/', [
    body('message').notEmpty().withMessage('Message is required'),
    validateFields
  ], messagesController.saveMessage)

export default router
