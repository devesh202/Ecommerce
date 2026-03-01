import React, { useEffect, useState } from 'react'
import { asyncgetProducts } from './store/userAction';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(asyncgetProducts());

    },[])
  return (
    <div>App</div>
  )
}

export default App