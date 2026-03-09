import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asynccreateproduct } from '../../store/actions/productActions';

const CreateProduct = () => {

  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createProductHandler = (product) => {
    product.id = nanoid();

    dispatch(asynccreateproduct(product));

    navigate("/products");
  };

  return (
    <form onSubmit={handleSubmit(createProductHandler)} className='flex text-black flex-col items-start p-10'>

      <input {...register("title")} type="text" placeholder='Product Title' className='mb-3 outline-0 border-b p-2 text-xl'/>

      <input {...register("price")} type="number" placeholder='Price' className='mb-3 outline-none border-b p-2 text-xl'/>

      <textarea {...register("description")} placeholder='Description' className='mb-3 outline-none border-b p-2 text-xl'/>

      <input {...register("category")} type="text" placeholder='Category' className='mb-3 outline-none border-b p-2 text-xl'/>

      <input {...register("image")} type="text" placeholder='Image URL' className='mb-3 outline-none border-b p-2 text-xl'/>

      <button className='p-4 bg-blue-400 text-white cursor-pointer rounded-md border-gray-300'>
        Create Product
      </button>

    </form>
  )
}

export default CreateProduct