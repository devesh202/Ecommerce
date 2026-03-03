import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const Register = () => {
  const {register,reset,handleSubmit} = useForm();
  const loginHandler = (user) =>{
    user.id = nanoid();
    console.log(user)
  }
  return (
    <>
    <form onSubmit={handleSubmit(loginHandler)} className='flex text-black flex-col items-start p-10'>
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