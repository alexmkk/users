const {Schema, model} = require('mongoose')

const userSchema = new Schema({
  _id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})


module.exports = model('User', userSchema)