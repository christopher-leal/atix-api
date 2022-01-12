import { Router } from 'express'
import messagesController from './../controllers/messages'

const router = Router()

router
  .post('/', messagesController.saveMessage)

export default router
