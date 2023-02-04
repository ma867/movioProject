const express = require('express')
const router = express.Router()
const { checkToken, dataController, apiController } = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', dataController.create, apiController.auth)
router.post('/login', dataController.login, apiController.auth)
router.get('/check-token', ensureLoggedIn, checkToken)
router.get('/', dataController.index, apiController.index)
router.put('/:id', dataController.update, apiController.show)
router.get('/:id', dataController.show, apiController.show)


module.exports = router