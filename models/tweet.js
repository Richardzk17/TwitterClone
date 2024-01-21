import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: String,
    author: { type: Schema.Types.ObjectId, ref: 'Profile'}
  }, {
    timestamps: true
  })

const tweetSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'Profile'},
    date: Date,
    content: [commentSchema]
}, {
  timestamps: true,
})

const Tweet = mongoose.model('Tweet', tweetSchema)

export {
  Tweet
}