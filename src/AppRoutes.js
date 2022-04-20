import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './layout/Home'
import ContactUs from './layout/ContactUs'
import Features from './layout/Features'
import About from './layout/About'
import Shop from './layout/Shop'
import Cart from './layout/Cart'
import Payment from './layout/Payment'
import ProductDetails from './components/ProductDetails'
import Tou from './components/Tou'
import RefundPolicy from './components/RefundPolicy'
import Privacy from './components/Privacy'
import Swopterms from './components/Swopterms'
import AdminHome from './layout/AdminHome'
import AdminProvider from './context/adminContext/AdminProvider'
import CreateProduct from './components/adminComoponents/CreateProduct'
import DisplayAllProduct from './components/adminComoponents/DisplayAllProduct'
import DashboardWelcome from './components/adminComoponents/DashboardWelcome'
import News from './components/adminComoponents/News'
import UpdateProduct from './components/adminComoponents/UpdateProduct'
import { useProduct } from './context/productContext/ProductProvider'
import { getProduct } from './context/productContext/productActions'
import Support from './components/adminComoponents/Support'
import Allorders from './components/adminComoponents/Allorders'
import NewOrders from './components/adminComoponents/NewOrders'
import Inventory from './components/adminComoponents/Inventory'
import PaymentSuccess from './layout/PaymentSuccess'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(
  'pk_test_51CpoOsFpRI0ybYRgGVlCMj65GAZJU3NWGKJCpX2X0UgwFKiycRFhddIF1LLcMvYAfAn9IZijgQ6SvfPJUWXUMjfx00ygc8N3ev',
)

const AppRoutes = () => {
  const [, productDispatch] = useProduct()

  useEffect(() => {
    getProduct(productDispatch)
    // eslint-disable-next-line
  }, [])

  return (
    <Routes>
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/features" element={<Features />} />
      <Route
        path="/payment"
        element={
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        }
      />
      <Route path="/payment/success" element={<PaymentSuccess />} />
      <Route path="/terms-of-use" element={<Tou />} />
      <Route path="/swop-terms" element={<Swopterms />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route
        path="/admin-panel/*"
        element={
          <AdminProvider>
            <AdminHome />
          </AdminProvider>
        }
      >
        <Route path="" element={<DashboardWelcome />} />
        <Route path="create-product" element={<CreateProduct />} />
        <Route path="all-product" element={<DisplayAllProduct />} />
        <Route path="news-press" element={<News />} />
        <Route path="support" element={<Support />} />
        <Route path="orders" element={<Allorders />} />
        <Route path="new-orders" element={<NewOrders />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="update/:id" element={<UpdateProduct />}></Route>
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
