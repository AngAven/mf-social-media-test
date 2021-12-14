import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h3>Not Found Page</h3>
      <Link to="/">Go home</Link>
    </div>
  )
}

export default NotFound
