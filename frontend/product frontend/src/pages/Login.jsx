import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { asyncloginuser } from '../store/actions/userAction';
import { useDispatch } from 'react-redux';
const Login = () => {
  const {register,reset,handleSubmit} = useForm();
  const dispatch = useDispatch();
  const loginHandler = (user) =>{
    dispatch(asyncloginuser(user));
    
  }
  return (
    <>
    <form onSubmit={handleSubmit(loginHandler)} className='flex text-black flex-col items-start p-10 '>
      <input {...register("email")} type="email" placeholder='john@doe.com' className='mb-3 outline-none border-b p-2 text-xl' />
      <input {...register("password")} type="password" placeholder='password' className='mb-3 outline-none border-b p-2 text-xl' />
      <button className='p-4 bg-gray-900 text-white cursor-pointer rounded-md border-gray-300 '>Login</button>
      <Link to="/register" className='text-sm mt-3 text-gray-400'>Don't have an account? <span className='text-gray-200'>Register</span></Link>

    </form>
    </>
  )
}

export default Login