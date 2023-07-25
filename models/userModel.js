const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: String,
    userImage: {
        type: String,
        default: 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
    }
})

module.exports = mongoose.model('USER',userSchema)




