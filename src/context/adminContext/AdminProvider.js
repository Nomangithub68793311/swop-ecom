import { createContext, useContext, useReducer } from 'react'
import adminReducer from './adminReducer'

const AdminContext = createContext()
AdminContext.displayName = 'AdminContext'

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('Component must be wrapped with in AdminContextProvider')
  }
  return context
}

const AdminProvider = props => {
  const [state, dispatch] = useReducer(adminReducer, {
    userContainer: {
      loading: false,
      isLogin: false,
      error: null,
      userInfo: null,
    },
    newsContainer: {
      loading: false,
      data: [],
      error: null,
    },
    productContainer: {
      loading: false,
      error: null,
      products: [],
    },
    customerEmail: {
      loading: false,
      error: null,
      emails: [],
    },
    ordersContainer: {
      loading: false,
      error: null,
      allOrders: [],
      newOrders: []
    },
  })
  return <AdminContext.Provider value={[state, dispatch]} {...props} />
}

export default AdminProvider
