import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from '../context/cartContext/CartProvider'
import { resetCartItem } from '../context/cartContext/cartActions'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  const [, cartDispatch] = useCart()
  useEffect(
    () => resetCartItem(cartDispatch),
    // eslint-disable-next-line
    [],
  )
  return (
    <>
      <Header />
      <div className=" max-w-md mx-auto mt-20 text-center min-h-screen">
        <h1 className="text-xl font-semibold py-2">Thank you for your order</h1>
        <p>
          we are currently processing your order and will send you confirmation
          email shortly
        </p>
        <Link to="/shop">
          <button
            className="my-4  px-6 py-2 rounded-md"
            style={{
              background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
            }}
          >
            continue shopping
          </button>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default PaymentSuccess
