import React from 'react'
import { useField } from 'formik'

export default function Input({ children, ...props }) {
  const [field, meta] = useField(props.name)

  return (
    <div className="input">
      <label htmlFor={props.id || props.name}>{children}</label>
      <input {...field} {...props} />
      <div>{meta.error && meta.touched && meta.error}</div>
    </div>
  )
}
