import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import UpdateProduct from '../pages/admin/UpdateProduct'
import CreateProduct from '../pages/admin/CreateProduct'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/products' element={<Products/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/admin/create-product' element={<CreateProduct/>} />
        <Route path='/admin/update-product/:id' element={<UpdateProduct/>} />
        

    </Routes>
  )
}

export default Mainroutes