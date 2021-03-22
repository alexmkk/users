
import instanse from './api'

export const authorsAPI = {
  getUsers() {
    return instanse.get('/api/users')
        .then(response => response.data)
  },
  getUser(id) {
    return instanse.get(`/users/${id}`)
        .then(response => response.data)
  },
  addUser(user) {
    return instanse.post(`/users/${user}`)
  },
  updateUser(id, data) {
    return instanse.patch(`/users/${id}`, data)
  },
  removeUser(id) {
    return instanse.delete(`/users/${id}`)
  }
}