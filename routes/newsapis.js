import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as apiCtrl from '../controllers/newsapis.js'

const router = Router()

// GET http://localhost:3000/newsapis
router.get('/', isLoggedIn, apiCtrl.index)
// // GET http://localhost:3000/profiles/:profileId
// router.get('/:profileId', isLoggedIn, profilesCtrl.show)


export {
  router
}