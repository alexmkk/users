const User = require('../models/User')

const resolvers = {
  Query: {
    user: (_, { id }) => {
      return User.findById(id)
    },
    users: () => User.find()
  },
  Mutation: {
    createUser: (_, { input }) => {
      return User.create(input)
    },
    updateUser: (_, { id, input }) => {
      return User.findByIdAndUpdate(id, input, {
        runValidators: true,
        new: true
      })
    },
    deleteUser: (_, { id }) => {
      User.findOneAndDelete(id)
    }
  }
}

module.exports = resolvers