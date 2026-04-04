import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../store/actions/userAction'

const UserProfile = () => {

  const users = useSelector((state) => state.userReducer.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm()

  const updateUserHandler = (user) => {
    dispatch(asyncupdateuser(users.id, user))
  }

  const deleteUserHandler = (users) => {
    dispatch(asyncdeleteuser(users.id))
    navigate("/login")
  }

  const logoutHandler = () => {
    dispatch(asynclogoutuser())
    navigate("/login")
  }

  useEffect(() => {
    if (users) {
      reset(users)
    }
  }, [users, reset])

  return users ? (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white text-black shadow-lg rounded-xl p-8 w-[400px]">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          User Profile
        </h2>

        <form onSubmit={handleSubmit(updateUserHandler)} className="flex flex-col gap-4">

          <input
            {...register("username")}
            type="text"
            placeholder="Username"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex gap-3 mt-3">

            <button
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition duration-200"
            >
              Update
            </button>

            <button
              type="button"
              onClick={deleteUserHandler}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition duration-200"
            >
              Delete
            </button>
            <button
              type="button"
              onClick= {logoutHandler}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition duration-200"
            >
              Logout
            </button>

          </div>

        </form>

      </div>

    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen text-xl">
      Loading...
    </div>
  )
}

export default UserProfile