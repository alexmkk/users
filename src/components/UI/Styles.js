import { makeStyles } from '@material-ui/core/styles';

export const useStyleTableUsers = makeStyles({
  table: {
    minWidth: 650,
    marginTop: 20,
    marginBottom: 10
  },
  addButton: {
    margin: '10px',
  }
})

export const useStylesCard = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
    '& > *': {
      margin: '0 auto',
      padding: theme.spacing(3),
      width: theme.spacing(70),
      height: theme.spacing(40),
    },
  },
}))

export const useStylesForm = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(3, 2)
    }
  },
}))