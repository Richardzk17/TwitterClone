import { Router } from 'express'
import * as tweetsCtrl from '../controllers/tweets.js'
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()


// GET localhost:3000/tweets
router.get('/', tweetsCtrl.index)

router.post('/:tweetId/content', isLoggedIn, tweetsCtrl.addComment)

export {
  router
}