import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const product = useSelector((state) =>
    state.productReducer.products.find((p) => p.id === Number(id))
  );
  console.log("ProductDetails - product:", product);

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
    </div>
  );
};

export default ProductDetails;