import { useQuery, useMutation } from 'react-apollo'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import LinearIndeterminate from './../UI/Loader'
import { useHistory } from 'react-router-dom'
import { GET_USERS } from '../../query/users'
import { useStyleTableUsers } from './../UI/Styles'
import { DELETE_USER } from './../../mutations/users'

const Users = () => {
  const classes = useStyleTableUsers()
  const history = useHistory()
  
  const { loading, error, data, refetch } = useQuery(GET_USERS,{
    onCompleted: () => {
      if (history.location.state) {
        console.log('делаем refetch', history.location.state )
        refetch()
      }
    }
  })
  
  const [deleteUser] = useMutation(DELETE_USER)

  const onDelete = id => {
    deleteUser({ variables: { id } })
        .then(() => 
          refetch()
          // showAlert()
      )
  }

  
  

  if (loading) return <LinearIndeterminate/>
  if (error) return <p>Error :(</p>
  
  return (
  <Paper>
    <TableContainer>
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
                  onClick={() => history.push(`/${user.id}`)}
                >Смотреть</Button>
              </TableCell>
              <TableCell style={{ width: 110 }}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => history.push(`/${user.id}/edit`)}
                >Редактировать</Button>
              </TableCell>
              <TableCell style={{ width: 110 }}>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  onClick={() => onDelete(user.id)}
                >Удалить</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    <Button
      variant="contained"
      color="primary"
      className={classes.addButton}
      onClick={() => history.push(`/add`)}
    >Добавить
    </Button>
  </Paper>
  
  )
}
export default Users