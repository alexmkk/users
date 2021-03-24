import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from 'react-apollo'
import { Button, TextField } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { useStylesCard, useStylesForm } from '../UI/Styles'
import { useFormik } from 'formik'
import Snackbar from '@material-ui/core/Snackbar'
import { validationSchemaUser } from '../../utils/validators/validateUser'
import { Alert } from './../UI/Alert'
import { CREATE_USER } from './../../mutations/users';

const AddUser = () => {
  const history = useHistory(),
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
      createUser({ variables: { input: values } })
        .then(() => 
          formik.setSubmitting(false),
          formik.resetForm(),
          showAlert()
      )
    }
  })
  
  const [createUser] = useMutation(CREATE_USER, {
    variables: {input: formik.values}
  })
  
  return (<div className={classesCard.root}>
    <Paper>
      <p>Добавить пользователя</p>
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
        >
          Сохранить
        </Button>
        <Button 
          variant="contained"
          disabled={formik.isSubmitting}
          onClick={() => history.push('..', { from: 'AddUser' })}
        >
          Назад
        </Button>
      </form>
    </Paper>

    <Snackbar open={open} autoHideDuration={3000} onClose={hideAlert}>
      <Alert onClose={hideAlert} severity="success">
        Пользователь добавлен!
      </Alert>
    </Snackbar>

  </div>
  )
}

export default AddUser