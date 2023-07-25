
const mongoose =require('mongoose')

const commentSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userImage: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('COMMENT',commentSchema)