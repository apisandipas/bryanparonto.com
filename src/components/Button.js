import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

const Button = ({ to, text, className }) => (
  <Link to={to} className={cx('Button', className)}>
    {text}
  </Link>
)
  


export default Button