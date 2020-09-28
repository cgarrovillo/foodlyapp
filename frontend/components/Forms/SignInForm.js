import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object } from 'yup'

import { emailSchema, passwordSchema } from './FormSchemas'
import Input from './Input'

export default function SignInForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={signInSchema}
    >
      <Form className="form">
        <Input name="email" type="text">
          Email
        </Input>

        <Input name="password" type="password">
          Password
        </Input>
        <button className="cta" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  )
}

const signInSchema = object({
  email: emailSchema,
  password: passwordSchema,
})
