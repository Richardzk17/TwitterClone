import { Tweet } from "../models/tweet.js"

function index(req, res) {
  Tweet.find({})
  .then(tweets => {
    res.render('tweets/index', {
      tweets,
      title: 'homepage'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function show(req, res) {
  Tweet.findById(req.params.tweetId)
  .populate([
    {path: "owner"},
    {path: "comments.author"}
  ])
  .then(tweet => {
    res.render('tweets/index', {
      tweet,
      title: 'homepage'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tweets')
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Tweet.create(req.body)
  .then(tweet => {
    res.redirect('/tweets')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/tweets")
  })
}


function update(req, res) {
  Tweet.findById(req.params.tweetId)
  .then(tweet => {
    if (tweet.owner.equals(req.user.profile._id)) {
      tweet.updateOne(req.body)
      .then(() => {
        res.redirect(`/tweets/${tweet._id}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/tacos")
  })
}

function edit(req, res) {
  Tweet.findById(req.params.tweetId)
  .then(tweet => {
    res.render('tweets/edit', {
      tweet,
      title: "edit 🌮"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/tweet")
  })
}

function deleteTweet(req, res) {
  Tweet.findById(req.params.tweetId)
  .then(tweet => {
    if (tweet.owner.equals(req.user.profile._id)) {
      tweet.deleteOne()
      .then(() => {
        res.redirect('/tweets')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tweets')
  })
}

function addComment(req, res) {
  Tweet.findById(req.params.tweetId)
  .then(tweet => {
    req.body.author = req.user.profile._id
    tweet.comments.push(req.body)
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
    res.redirect('/tacos')
  })
}

function editComment(req, res) {
  Tweet.findById(req.params.tweetId)
  .then(tweet => {
    const comment = tweet.comments.id(req.params.commentId)
    if (comment.author.equals(req.user.profile._id)) {
      res.render('tweets/editComment', {
        taco, 
        comment,
        title: 'Update Comment'
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tweets')
  })
}

export {
  index,
  addComment,
  show,
  create,
  update,
  edit,
  deleteTweet as delete,
  editComment
}