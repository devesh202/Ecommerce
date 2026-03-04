import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { asyncregisteruser } from '../store/actions/userAction';
import { useDispatch } from 'react-redux';
const Register = () => {
  const {register,reset,handleSubmit} = useForm();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const registerHandler = (user) =>{
    user.id = nanoid();
    user.isAdmin = false;
    console.log(user)
    dispatch(asyncregisteruser(user));
    Navigate("/login")
  }
  return (
    <>
    <form onSubmit={handleSubmit(registerHandler)} className='flex text-black flex-col items-start p-10'>
      <input {...register("username")} type="text" placeholder='john doe' className='mb-3 outline-0 border-b p-2 text-xl' />
      <input {...register("email")} type="email" placeholder='john@doe.com' className='mb-3 outline-none border-b p-2 text-xl' />
      <input {...register("password")} type="password" placeholder='password' className='mb-3 outline-none border-b p-2 text-xl' />
      <button className='p-4 bg-blue-400 text-white cursor-pointer rounded-md border-gray-300 '>Register</button>
      <Link to="/login" className='text-sm mt-3 text-gray-400'>Already have an account? <span className='text-gray-200'>Login</span></Link>

    </form>
    </>
  )
}

export default Register