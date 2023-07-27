const { protect } = require('../middleware/authMiddleware')
const express = require('express')
const router = express.Router()


const userController = require('../controllers/userController')
// console.log('in user routes')
router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/post/:id',userController.addBookmark)

module.exports = router