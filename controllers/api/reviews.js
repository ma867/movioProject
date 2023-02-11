
const Review = require('../../models/review')

const dataController = {
  // Index,
  index(req, res, next) {
    Review.find({}, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
  },

  reviewIndex(req, res, next) {
    Review.find({ movieId: req.params.id }, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
      .sort({ _id: -1 })

  },

  reviewExcludeUserIndex(req, res, next) {
    Review.find({
      $and: [
        { movieId: req.params.id }, { user: { $ne: req.params.username } }
      ]
    }, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
      .populate("user")
      .sort({ _id: -1 })

  },

  userReviewShow(req, res, next) {
    Review.findOne({ movieId: req.params.id, user: req.params.username }, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
      .sort({ _id: -1 })

  },

  userReviewIndex(req, res, next) {
    Review.find({ user: req.params.username }, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
      .sort({ _id: -1 }).limit(8)

  },
  userReviewUnlimitedIndex(req, res, next) {
    Review.find({ user: req.params.username }, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
      .sort({ _id: -1 })

  },
  // Destroy
  destroy(req, res, next) {
    Review.findByIdAndDelete(req.params.id, (err, deletedReview) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.review = deletedReview
        next()
      }
    })
  },
  // Update
  update(req, res, next) {

    Review.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedReview) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.review = updatedReview
        next()
      }
    })
  },
  // Create
  create(req, res, next) {

    Review.create(req.body, (err, createdReview) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.review = createdReview
        next()
      }
    })
  },
  // Edit
  // Show
  show(req, res, next) {
    Review.findById(req.params.id, (err, foundReview) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a review with that ID'
        })
      } else {
        res.locals.data.review = foundReview
        next()
      }
    })
  }
}

const apiController = {
  index(req, res, next) {
    res.json(res.locals.data.reviews)
  },
  show(req, res, next) {
    res.json(res.locals.data.review)
  }
}

module.exports = { dataController, apiController }