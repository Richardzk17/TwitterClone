import { Router } from 'express'
import * as tweetsCtrl from '../controllers/tweets.js'
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()


// GET localhost:3000/tweets
router.get('/', tweetsCtrl.index)
// GET localhost:3000/tweets
router.get('/:tweetId', tweetsCtrl.show)
// GET localhost:3000/tweets/:tweetId/edit
router.get('/:tweetId/edit', isLoggedIn, tweetsCtrl.edit)
// POST localhost:3000/tweets
router.post('/', isLoggedIn, tweetsCtrl.create)
// PUT localhost:3000/tweets/:tacoId
router.put('/:tweetId', isLoggedIn, tweetsCtrl.update)
// DELETE localhost:3000/tweets/:tacoId
router.delete('/:tweetId', isLoggedIn, tweetsCtrl.delete)

//GET localhost:3000/tacos/:tacoId/comments/:commentId/edit
router.get('/:tweetId/comments/:commentId/edit', isLoggedIn, tweetsCtrl.editComment)
//POST localhost:3000/tacos/:tacoId/comments
router.post('/:tweetId/comments', isLoggedIn, tweetsCtrl.addComment)
//PUT localhost:3000/tweets/:tweetId/comments/:commentId
router.put('/:tweetId/comments/:commentId', isLoggedIn, tweetsCtrl.updateComment)

export {

  router
}