import { Router } from 'express'
import * as tweetsCtrl from '../controllers/tweets.js'

const router = Router()

router.get('/', tweetsCtrl.index)

export {
  router
}