import UsersContainer from "./components/Users/UsersContainer"
import { Container } from '@material-ui/core'

function App() {
  return (
    <Container maxWidth="lg" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
      <UsersContainer />
    </Container>
  )
}

export default App
