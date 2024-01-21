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

function addComment(req, res) {
  Tweet.findById(req.params.tweetId)
  .then(tweet => {
    req.body.author = req.user.profile._id
    tweet.content.push(req.body)
    tweet.save()
    .then(()=> {
      res.redirect(`/tweets/${tweet._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/tweets')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tweets')
  })
}

export {
  index,
  addComment,
}