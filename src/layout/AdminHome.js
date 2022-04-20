import { useAdmin } from './../context/adminContext/AdminProvider'
import AdminLogin from './../components/adminComoponents/AdminLogin'
import AuthenticatedRoute from './../components/adminComoponents/AuthenticatedRoute'

const AdminHome = () => {
  const [{ userContainer }] = useAdmin()
  return userContainer.isLogin ? <AuthenticatedRoute /> : <AdminLogin />
}

export default AdminHome
