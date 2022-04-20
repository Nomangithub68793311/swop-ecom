import { createContext, useContext, useReducer } from 'react'
import productReducer from './produceReducer'

const ProduceContext = createContext()
ProduceContext.displayName = 'ProduceContext'

export const useProduct = () => {
  const context = useContext(ProduceContext)
  if (!context) {
    throw new Error('Component must be wrapped with in ProductProvider')
  }
  return context
}

const ProductProvider = props => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    loading: false,
    error: null,
  })
  return <ProduceContext.Provider value={[state, dispatch]} {...props} />
}

export default ProductProvider
