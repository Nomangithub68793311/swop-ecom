import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import Navbar from './Navbar'
import {
  fetchProduct,
  getCustomerEmail,
  getAllOrders,
  getNewOrders,
} from './../../context/adminContext/adminActions'
import { useAdmin } from './../../context/adminContext/AdminProvider'
import { useEffect } from 'react'

const AuthenticatedRoute = () => {
  const [, adminDispatch] = useAdmin()
  useEffect(() => {
    fetchProduct(adminDispatch)
    getCustomerEmail(adminDispatch)
    getAllOrders(adminDispatch)
    getNewOrders(adminDispatch)
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <AdminHeader />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4">
          <div className="md:col-span-3 bg-slate-100">
            <Navbar />
          </div>
          <div className="md:col-span-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthenticatedRoute
