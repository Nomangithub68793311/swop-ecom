import React from 'react'
import swopImage from '../../images/swopp.png'
import { Link } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'
import { useAdmin } from './../../context/adminContext/AdminProvider'
import { logout } from '../../context/adminContext/adminActions'

const AdminHeader = () => {
  const [, dispatch] = useAdmin()
  return (
    <header
      className={`py-3 transition-all  ease-in-out duration-300 z-50 `}
      style={{
        background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
      }}
    >
      <div className="container flex items-center">
        <div className="logo">
          <Link to="/">
            <img src={swopImage} alt="swopImage" className="w-2/12" />
          </Link>
        </div>
        <div className="ml-auto">
          <AiOutlineLogout
            className="text-3xl text-red-700 font-bold cursor-pointer"
            onClick={() => logout(dispatch)}
          />
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
