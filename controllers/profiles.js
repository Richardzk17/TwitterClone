import { Profile } from "../models/profile.js"
import { Tweet } from "../models/tweet.js"

function index(req, res) {
    Profile.find({})
    .then(profiles => {
      res.render('profiles/index', {
        profiles,
        title: 'Profile'
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }



  function show(req, res){
    Profile.findById(req.params.profileId)
      .then(profile => {
        console.log("This is profile: ", profile)
        const isSelf = profile._id.equals(req.user.profile._id)
        Tweet.find({ owner: profile._id })
          .populate([
            { path: "owner"},
            { path: "comments.author"}
          ])
          .then(tweets => {
            res.render('profiles/show', {
              title: `${profile.name}'s profile`,
              profile,
              isSelf,
              tweets,
            })
          })
      })
      .catch(err => {
        console.log(err)
        res.redirect('/profiles')
      })
  }


export {
    index,
    show
  }