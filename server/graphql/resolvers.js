const User = require('../models/User')

const resolvers = {
  Query: {
    user: async (_, {id}) => {
      return await User.findById(id)
    },
    users: async () => await User.find()
  },
  Mutation: {
    createUser: async (_, args) => {
      console.log('создание', args)
      const user = new User({ name: args.input.name, email: args.input.email })
      return await user.save()
    },
    updateUser: async (_, args) => {
      console.log('обновление', args)
      const {id, input} = args,
            user = await User.findById(id)
      const toChange = {
        name: input.name, email: input.email
      }
      Object.assign(user, toChange)
      return await user.save()
    },
    deleteUser: async (_, {id}) => {
      await User.deleteOne({"_id": id})
    }
  }
}

module.exports = resolvers