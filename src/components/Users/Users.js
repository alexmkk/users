import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import LinearIndeterminate from './../UI/Loader';
import { useHistory } from 'react-router-dom'

const Users = () => {
  const GET_USERS = gql`
    query {
      users {
        id
        name
        email
      }
    }`
  
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      marginTop: 20,
      marginBottom: 20
    }
  })
  const classes = useStyles()
  const { push } = useHistory()

  return <Query query={GET_USERS} >
    {({ loading, error, data }) => {
      if (loading) return <LinearIndeterminate />
      if (error) return <div>Error :(</div>
        
      return (
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell>Имя</TableCell>
              <TableCell colSpan={4}>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.users.map((user) => (
              <TableRow key={user.id}>
                <TableCell align="center" component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell style={{ width: 90 }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => push(`/${user.id}`)}>Смотреть</Button>
                </TableCell>
                <TableCell style={{ width: 110 }}>
                  <Button variant="contained" size="small" color="primary">Редактировать</Button>
                </TableCell>
                <TableCell style={{ width: 110 }}>
                  <Button variant="contained" size="small" color="secondary">Удалить</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      )
    }}
  </Query>
}
export default Users