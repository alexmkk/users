const { gql } = require('apollo-server-express')

const schema = gql`
  type Query {
    user(id: ID!): User!
    users(skip: Int = 0, limit: Int = 10): [User]
  }  
  
  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): String
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
  
  input CreateUserInput {
    email: String!
    name: String!
  }

  input UpdateUserInput {
    name: String
    email: String
  }
`
module.exports = schema