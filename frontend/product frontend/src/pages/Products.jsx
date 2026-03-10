import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  const renderproducts = products.map((product) => {
    return (
      <div
        key={product.id}
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between hover:scale-[1.02]"
      >
        <img
  src={product.image}
  alt={product.name}
  className="w-full h-48 object-cover rounded-lg mb-4"
/>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {product.name}
          </h2>

          <p className="text-gray-600 text-sm mb-4">
            {product.description.slice(0, 100)}...
          </p>
        </div>

        <div className="mt-auto">
          <p className="text-lg font-bold text-indigo-600 mb-3">
            ${product.price}
          </p>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
            Add to Cart
          </button>
        </div>
        <Link to={`/product/${product.id}`} className="text-indigo-600 hover:text-indigo-800"> View Details</Link>
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Our Products
      </h1>

      {products.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {renderproducts}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">
          Loading products...
        </div>
      )}
    </div>
  );
};

export default Products;