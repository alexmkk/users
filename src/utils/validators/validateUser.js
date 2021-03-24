import * as yup from 'yup'

export const validationSchemaUser = yup.object({
  name: yup
    .string('Введите имя')
    .required('Поле не может быть пустым'),
  email: yup
    .string('Введите email')
    .email('Введите корректный email')
    .required('Поле не может быть пустым'),
})