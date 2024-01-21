import { Router } from 'express'
import * as tweetsCtrl from '../controllers/tweets.js'
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()


// GET localhost:3000/tweets
router.get('/', tweetsCtrl.index)
// GET localhost:3000/tweets
router.get('/:tweetId', tweetsCtrl.show)
// POST localhost:3000/tweets
router.post('/', isLoggedIn, tweetsCtrl.create)
// PUT localhost:3000/tweets/:tacoId
router.put('/:tweetId', isLoggedIn, tweetsCtrl.update)

export {

  router
}