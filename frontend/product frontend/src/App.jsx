import React, { useEffect, useState } from 'react'
import instance from './api/axiosconfig';

const App = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await instance.get("/products");
      setProducts(response.data)
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
  }
    useEffect(()=>{
      getProducts();

    },[])
  return (
    <div>App</div>
  )
}

export default App