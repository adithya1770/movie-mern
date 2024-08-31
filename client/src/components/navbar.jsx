import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='ml-2'>
      <Link className='ml-2' to='/'>Home</Link>
      <Link className='ml-2' to='/login'>Login</Link>
      <Link className='ml-2' to='/signup'>Signup</Link>
    </div>
  )
}

export default Navbar
