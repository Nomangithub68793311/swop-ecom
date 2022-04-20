import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import './styles/output.css'
import CartProvider from './context/cartContext/CartProvider'
import ScrollToTop from './ScrollToTop'
import ProductProvider from './context/productContext/ProductProvider'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <ProductProvider>
          <CartProvider>
            <AppRoutes />
          </CartProvider>
        </ProductProvider>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App
