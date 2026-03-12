import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncdeleteproduct, asyncupdateproduct } from "../../store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();

  const product = useSelector((state) =>
    state.productReducer.products.find((p) => p.id == id)
  );

  const user = useSelector((state) => state.userReducer.users);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category,
      image: product?.image,
    },
  });

  useEffect(() => {
  if (product) {
    reset({
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image
    });
  }
}, [product, reset]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateProductHandler = (data) => {
    dispatch(asyncupdateproduct(id, data));
  };

  const deleteProductHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/products");
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-500">
        Loading product...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      {/* Product Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl grid md:grid-cols-2 gap-10 p-10">

        {/* Product Image */}
        <div className="bg-gray-50 rounded-xl flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-96 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <span className="text-sm text-gray-500 uppercase mb-2">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="text-3xl font-bold text-indigo-600 mb-6">
            ${product.price}
          </div>

          <button className="w-fit bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition">
            Add To Cart
          </button>

          <div className="mt-6 text-sm text-gray-500 space-y-1">
            <p>🚚 Free shipping</p>
            <p>🔄 7 days return</p>
            <p>🔒 Secure checkout</p>
          </div>
        </div>
      </div>

      {/* Admin Panel */}
      {user && user.isAdmin && (
        <div className="max-w-4xl mx-auto mt-12 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            Admin Product Control
          </h2>

          <form
            onSubmit={handleSubmit(updateProductHandler)}
            className="grid gap-5 text-black"
          >
            <input
              {...register("title")}
              type="text"
              placeholder="Product Title"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              {...register("price")}
              type="number"
              placeholder="Price"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <textarea
              {...register("description")}
              placeholder="Description"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              {...register("category")}
              type="text"
              placeholder="Category"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              {...register("image")}
              type="text"
              placeholder="Image URL"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <div className="flex gap-4 mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
                Update Product
              </button>

              <button
                type="button"
                onClick={deleteProductHandler}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Delete Product
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;