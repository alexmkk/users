import { gql } from "apollo-boost";

export const CREATE_USER = gql`
  mutation CREATE_USER($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      email
    }
  }`

export const EDIT_USER = gql`
  mutation EDIT_USER($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      name
      email
    }
  }`

export const DELETE_USER = gql`
  mutation DELETE_USER($id: ID!) {
    deleteUser(id: $id)
  }
`
