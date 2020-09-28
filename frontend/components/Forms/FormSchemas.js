import * as Yup from 'yup'

export const nameSchema = Yup.string()
  .max(30, 'Must be less than 30 characters.')
  .required('Required')

export const emailSchema = Yup.string()
  .email('Invalid email address')
  .required('Required')

export const passwordSchema = Yup.string()
  .min(8, 'Must be longer than 8 characters')
  .max(31, 'Must be shorter than 30 characters')
  .required('Required')
export const passwordConfirmSchema = Yup.string()
  .oneOf([Yup.ref('password'), null])
  .required('Password confirm is required')
