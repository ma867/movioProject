const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/reviews')

// add routes
// Index /api/reviews
router.get('/', dataController.index, apiController.index)
// Index /api/reviews/movie/:id
router.get('/movie/:id', dataController.reviewIndex, apiController.index)

// Index /api/reviews/user/:username
router.get('/user/:username', dataController.userReviewIndex, apiController.index)

// Index /api/reviews/movie/${id}/excludeUser/${username}
router.get('/movie/:id/excludeUser/:username', dataController.reviewExcludeUserIndex, apiController.index)

// Index /api/reviews/movie/:id/user/:username
router.get('/movie/:id/user/:username', dataController.userReviewShow, apiController.index)

// Delete /api/reviews/:id
router.delete('/:id', dataController.destroy, apiController.show)
// Update /api/reviews/:id
router.put('/:id', dataController.update, apiController.show)
// Create /api/reviews
router.post('/', dataController.create, apiController.show)
// Show /api/reviews/:id
router.get('/:id', dataController.show, apiController.show)


module.exports = router