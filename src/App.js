import Users from "./components/Users/Users"
import { Container } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import ViewUser from './components/Users/ViewUser'
import EditUser from './components/Users/EditUser'
import AddUser from './components/Users/AddUser'

function App() {
  return (
    <Container maxWidth="lg" style={{ height: '100vh', padding: 30 }}>
      <Switch>
          <Route path='/add' exact>
            <AddUser />
          </Route>
          <Route path='/' exact>
            <Users />
          </Route>
          <Route path='/:id' exact>
            <ViewUser />
          </Route>
          <Route path='/:id/edit' exact>
            <EditUser />
          </Route>
          
      </Switch>
    </Container>
  )
}

export default App