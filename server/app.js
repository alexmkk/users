const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const app = express()
const { ApolloServer } = require('apollo-server-express')
const schema = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')

const PORT = config.get('port') || 5000

const server = new ApolloServer({
  typeDefs: schema, resolvers
})

server.applyMiddleware({ app })

async function start(){
  try {
    await mongoose.connect(config.get('mongoUri'),{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch(e){
    console.log('Server Error', e.message)
    process.exit()
  }
}

start()