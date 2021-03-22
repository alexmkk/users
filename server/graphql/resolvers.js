const User = require('../models/User')

const resolvers = {
  Query: {
    user: id => User.findById(id),
    users: () => User.find()
  }
}

module.exports = resolvers