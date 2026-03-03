import React, { useEffect, useState } from 'react'
import { asyncgetProducts } from './store/userAction';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const data = useSelector((state) => state)
  const dispatch = useDispatch();
  console.log(data)
    useEffect(()=>{
      dispatch(asyncgetProducts()); 

    },[])
  return (
    <div>App</div>
  )
}

export default App