import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Not Found Page</h2>
      <Link to="/"><h2>Go home
      </h2></Link>
    </div>
  )
}

export default NotFound
