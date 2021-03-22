const { gql } = require('apollo-server-express')

const schema = gql`
  type Query {
    user(id: ID!): User!
    users(skip: Int = 0, limit: Int = 10): [User]
  }  
  type User {
    id: ID!
    name: String!
    email: String!
  }
`
module.exports = schema