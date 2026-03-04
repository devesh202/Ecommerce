import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Mainroutes from './routes/Mainroutes';
import Nav from './components/Nav';

const App = () => {
  const data = useSelector((state) => state)
  const dispatch = useDispatch();
  console.log(data)
  return (
    <div className='w-screen h-screen bg-black text-white'>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App