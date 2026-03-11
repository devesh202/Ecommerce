import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncdeleteproduct, asyncupdateproduct } from "../../store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();
  

  const product = useSelector((state) =>
    state.productReducer.products.find((p) => p.id === id)
  );
  const user = useSelector((state) => state.userReducer.users);
  console.log("ProductDetails - product:", product, user);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      title: product ? product?.title : "",
      price: product ? product?.price : "",
      description: product ? product?.description : "",
      category: product ? product?.category : "",
      image: product ? product?.image : ""
    }
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateProductHandler = (product) => {
    console.log("updateProductHandler - product:", product);

    dispatch(asyncupdateproduct(id,product));
  };

  const deleteProductHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/products");

  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-xl">
        Loading product...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-8 p-8">

        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-96 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="text-3xl font-bold text-indigo-600 mb-6">
            ${product.price}
          </div>

          <button className="w-fit bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-md hover:shadow-lg">
            Add to Cart
          </button>

          {/* Extra Info */}
          <div className="mt-6 text-sm text-gray-500">
            <p>🚚 Free shipping available</p>
            <p>🔄 7 days return policy</p>
            <p>🔒 Secure checkout</p>
          </div>
        </div>

      </div>
       {user && user.isAdmin && (
      <form onSubmit={handleSubmit(updateProductHandler)} className='flex text-black flex-col items-start p-10'>

      <input {...register("title")} type="text" placeholder='Product Title' className='mb-3 outline-0 border-b p-2 text-xl'/>

      <input {...register("price")} type="number" placeholder='Price' className='mb-3 outline-none border-b p-2 text-xl'/>

      <textarea {...register("description")} placeholder='Description' className='mb-3 outline-none border-b p-2 text-xl'/>

      <input {...register("category")} type="text" placeholder='Category' className='mb-3 outline-none border-b p-2 text-xl'/>

      <input {...register("image")} type="text" placeholder='Image URL' className='mb-3 outline-none border-b p-2 text-xl'/>

      <button className='p-4 bg-blue-400 text-white cursor-pointer rounded-md border-gray-300'>
        update Product
      </button>
      <button type="button" onClick={deleteProductHandler} className='p-4 bg-red-500 text-white cursor-pointer rounded-md border-gray-300'>
        Delete Product
      </button>

    </form>
       )}
    
    </div>
    
  );
};

export default ProductDetails;