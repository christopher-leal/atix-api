import { Router } from 'express'
import messagesRoutes from './messages'
const router = Router()

router
  .use('/messages', messagesRoutes)

export default router
