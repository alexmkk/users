import Users from "./components/Users/Users"
import { Container } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom';
import UserView from './components/Users/UserView';

function App() {
  return (
    <Container maxWidth="lg" style={{ backgroundColor: '#cfe8fc', height: '100vh', padding: 30 }}>
      <Switch>
          <Route path='/' exact>
            <Users />
          </Route>
          <Route path='/:id' exact>
            <UserView />
          </Route>
      </Switch>
      
    </Container>
  )
}

export default App
