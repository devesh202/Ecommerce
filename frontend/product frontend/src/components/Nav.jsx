import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const users = useSelector((state) => state.userReducer.users)

  return (
    <nav className="flex mb-5 justify-center items-center gap-x-5 p-5 bg-gray-800 text-white">

      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>

      {users.length > 0 ? (
        <NavLink to="/admin/create-product">Create Product</NavLink>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}

    </nav>
  )
}

export default Nav