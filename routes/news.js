import { Router } from 'express'
import * as apiCtrl from '../controllers/news.js'

const router = Router()


// GET http://localhost:3000/news
router.get('/', apiCtrl.index)

router.post('/news', apiCtrl.getNews)

export {
  router
}