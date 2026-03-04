import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex mb-5justify-center items-center gap-x-5 p-5 bg-gray-800 text-white'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/login">Login</NavLink>
    </nav>
  )
}

export default Nav