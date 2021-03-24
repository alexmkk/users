import React, {useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useQuery, useMutation } from 'react-apollo'
import LinearIndeterminate from '../UI/Loader'
import { Button, TextField } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { useStylesCard, useStylesForm } from '../UI/Styles'
import { useFormik } from 'formik'
import { GET_USER } from '../../query/users'
import { EDIT_USER } from '../../mutations/users'
import Snackbar from '@material-ui/core/Snackbar'
import { validationSchemaUser } from '../../utils/validators/validateUser'
import { Alert } from './../UI/Alert'

const EditUser = () => {
  const { id } = useParams(),
        history = useHistory(),
        classesCard = useStylesCard(),
        classesForm = useStylesForm()
  
  const [open, setOpen] = useState(false)

  const showAlert = () => {
    setOpen(true)
  }
  const hideAlert = (event, reason) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }
  
  const formik = useFormik({
    initialValues: {
      name: '', email: ''
    },
    validationSchema: validationSchemaUser,
    onSubmit: (values) => {
      updateUser({ variables: { id, input: values } })
        .then(() => 
          refetch(),
          formik.setSubmitting(false),
          showAlert()
      )
    }
  })
  
  const { loading, error, data, refetch  } = useQuery(GET_USER, {
    variables: { id },
    onCompleted: data => {
      const userData = Object.assign({}, data.user)
      delete userData['__typename']
      formik.setValues(userData)
    }
  })
  
  const [updateUser] = useMutation(EDIT_USER, {
    variables: {id, input: formik.values}
  })

  if (loading) return <LinearIndeterminate/>
  if (error) return <p>Error :(</p>
  
  return (<div className={classesCard.root}>
    <Paper>
      <p>Редактировать пользователя <strong>{data.user.name}</strong></p>
      <form className={classesForm.root} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Имя"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={formik.isSubmitting}
        >Сохранить</Button>
        <Button 
          variant="contained"
          disabled={formik.isSubmitting}
          onClick={() => history.push('..', { from: 'EditUser' })}
        >Назад</Button>
      </form>
    </Paper>

    <Snackbar open={open} autoHideDuration={3000} onClose={hideAlert}>
      <Alert onClose={hideAlert} severity="success">Данные изменены!</Alert>
    </Snackbar>

  </div>
  )
}

export default EditUser