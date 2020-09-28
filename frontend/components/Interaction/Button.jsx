import React from 'react'

const Button = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <a className="cta" ref={ref} {...rest}>
      {children}
    </a>
  )
})

export default Button
