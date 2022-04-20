import { createContext, useContext, useReducer } from 'react'
import cartReducer from './cartReducer'

const CartContext = createContext()

CartContext.displayName = 'CartContext'

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('Component must be wrapped with in CartContextProvider')
  }
  return context
}

const CartProvider = props => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    referenceStatus: {
      loading: false,
      status: false,
      attempt: 0,
    },
  })
  return <CartContext.Provider value={[state, dispatch]} {...props} />
}

export default CartProvider
