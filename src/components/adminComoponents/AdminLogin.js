import { useState } from 'react'
import swopImage from '../../images/swopp.png'
import { useAdmin } from './../../context/adminContext/AdminProvider'
import { loginAdmin } from './../../context/adminContext/adminActions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AdminLogin = () => {
  const [, adminDispatch] = useAdmin()
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })
  const handleSubmit = e => {
    e.preventDefault()
    loginAdmin(loginInfo, adminDispatch, toast)
  }
  const handleChange = e =>
    setLoginInfo(state => ({ ...state, [e.target.name]: e.target.value }))
  return (
    <div className="container">
      <ToastContainer />
      <div className="w-full h-full flex justify-center items-center min-h-screen">
        <div className="max-w-md px-6 py-10 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex justify-center mb-2">
              <img src={swopImage} alt="swopImage" className="w-1/5" />
            </div>
            <h1 className="text-center text-2xl font-semibold mb-5 capitalize">
              Login to your account
            </h1>
            <label htmlFor="email" className="mb-2 text-lg font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={loginInfo.email}
              onChange={handleChange}
              className="mb-2 border-0 rounded-md"
            />
            <label htmlFor="password" className="mb-2 text-lg font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={loginInfo.password}
              onChange={handleChange}
              className="mb-8 border-0 rounded-md"
            />
            <div className="flex justify-center">
              <button
                className="bg-white px-12 py-2.5 rounded-full text-black font-semibold hover:px-16 transition-all duration-200 ease-in-out"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
