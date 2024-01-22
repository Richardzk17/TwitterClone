import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tweetSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  date: Date,
  tweet: String
}, {
timestamps: true,
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  tweet:[tweetSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
