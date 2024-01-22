import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tweetSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
    date: Date,
    tweet: String
}, {
  timestamps: true,
})

const Tweet = mongoose.model('Tweet', tweetSchema)

export {
  Tweet
}