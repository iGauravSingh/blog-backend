const { protect } = require('../middleware/authMiddleware')
const express = require('express')
const router = express.Router()


const postController = require('../controllers/postController')
// console.log('in user routes')
router.get('/',postController.getPosts)
router.get('/:id',postController.getPost)
router.post('/',postController.createPost)
router.get('/user/:id',postController.getUserPosts)
router.post('/likes/:id',postController.likePost)



module.exports = router


