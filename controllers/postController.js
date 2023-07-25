const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const POST = require('../models/postModel')
const asyncHandler = require('express-async-handler')


//// desc add post
// POST /post/addPost
//route type PRIVATE
const createPost = asyncHandler(async (req,res)=>{
    console.log('ok in createPost')
    const response = await POST.create({
        title: req.body.title,
        cover: req.body.cover,
        discription: req.body.discription,
        userId: req.body.userId,
        userName: req.body.userName,
        userImage: req.body.userImage,
        likes: req.body.likes,
        tags: req.body.tags
    })
    res.status(201).json(response)
})


//// desc read all post
// POST /post/all
//route type PUBLIC
const getPosts = asyncHandler(async (req,res)=> {
    const posts = await POST.find()
    res.status(200).json(posts) 
})




//// desc read one post
// POST /post/all/:idPost
//route type PUBLIC

const getPost = asyncHandler(async (req,res)=> {
    const post = await POST.findOne({_id: req.params.id})
    res.status(201).json(post)
})





//// desc read all post of specific user
// POST /post/all/:idUser
//route type PUBLIC
const getUserPosts = asyncHandler(async (req,res)=> {
    const userPosts = await POST.find({userId: req.params.id})
    res.status(200).json(userPosts)
})

//// desc modify like count 
// POST /post/like/:id
//route type PUBLIC
const likePost = asyncHandler(async (req,res)=>{
    const modifyPost = await POST.findOneAndUpdate({_id: req.params.id},{$inc: {likes: 1}},{new: true})
    res.status(201).json(modifyPost)
})



module.exports = {
    getPosts,getPost,createPost,getUserPosts,likePost
}

