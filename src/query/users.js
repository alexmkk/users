import { gql } from "apollo-boost";

export const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }`
  
  export const GET_USER = gql`
    query GET_USER($id: ID!){
      user(id: $id) {
        name
        email
      }
    }`

