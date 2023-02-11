const { Schema, model } = require('mongoose')

const reviewSchema = new Schema({
  movieId: { type: String },
  poster: { type: String },
  movieTitle: { type: String },
  title: { type: String, required: true },
  description: { type: String },
  rating: { type: Number },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const Review = model('Review', reviewSchema)

module.exports = Review
