
const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        default: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80'
    },
    discription: {
        type: String,
        required: true
    },
    userId: String,
    userName: String,
    userImage: {
        type: String,
        default: 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
    },
    likes: {
        type: Number,
        default: 0
    },
    tags: [{
        type: String
    }]

})

module.exports = mongoose.model("POST",postSchema)