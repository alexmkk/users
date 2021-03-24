import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useQuery } from 'react-apollo'
import LinearIndeterminate from '../UI/Loader'
import { Button } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { useStylesCard } from '../UI/Styles'
import { GET_USER } from '../../query/users'

const ViewUser = () => {
  const { id } = useParams(),
        { push } = useHistory(),
        classes = useStylesCard()
  
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id }
  })
  
  if (loading) return <LinearIndeterminate/>
  if (error) return <p>Error :(</p>
  
  return (<div className={classes.root}>
    <Paper>
    <p>Страница пользователя <strong>{data.user.name}</strong></p>
      <p>{data.user.email}</p>
      <Button
        variant="contained"
        size="small"
        onClick={() => push(`/`)}
      >Назад</Button>
    </Paper>
  </div>
  )
}

export default ViewUser