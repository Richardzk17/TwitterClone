import { Tweet } from "../models/tweet.js"

function index(req, res) {
  Tweet.find({})
  .then(tweets => {
    res.render('tweets/index', {
      tweets: tweets,
      title: 'homepage'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index
}