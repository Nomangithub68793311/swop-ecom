import { useState, useEffect } from 'react'
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useCart } from './../context/cartContext/CartProvider'
import StatusMessages, { useMessages } from './../custom-hooks/StatusMessages'

const PaymentForm = ({
  shipping,
  cssClasses,
  totalPrice,
  refCode,
  totalQty,
}) => {
  const [cardItems] = useCart()
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState(null)
  const [secret, setSecret] = useState(null)
  const elements = useElements()
  const stripe = useStripe()
  const [messages, addMessage] = useMessages()

  const cardStyle = {
    style: {
      base: {
        color: '#000',
        fontFamily: 'Roboto, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#606060',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  }

  const navigate = useNavigate()

  const items = cardItems.items.map(item => ({
    id: item._id,
    price: item.price,
    quantity: item.qty,
  }))

  useEffect(() => {
    if (shipping) {
      const body = {
        cartItems: items,
        shipping: {
          name: `${shipping.firstName} ${shipping.lastName}`,
          address: {
            line1: shipping.address,
          },
        },
        description: 'payment intend for swop',
        receipt_email: shipping.email,
        totalPrice,
        refCode: '',
        referenceStatus: '',
      }
      console.log(body)
      const customerChackout = async () => {
        try {
          const response = await axios.post(
            'https://travherswopapp.herokuapp.com/payment',
            body,
          )
          setSecret(response.data.clientSecret)
        } catch (error) {
          addMessage(
            'Failed to create payment intend please check your internet connection or reload the application',
          )
        }
      }
      customerChackout()
    }
    // eslint-disable-next-line
  }, [cardItems.items, shipping, totalPrice])

  const cardHandleChange = event => {
    const { error } = event
    setError(error ? error.message : null)
  }
  const handleCheckout = async () => {
    addMessage('Processing Payment')
    setProcessing(true)
    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      })

    if (stripeError) {
      addMessage(`${stripeError.message}`)
      setProcessing(false)
      return
    } else {
      addMessage(`status: ${paymentIntent.status}`)
      const {
        address,
        city,
        country,
        email,
        firstName,
        lastName,
        phoneNumber,
        state,
        zip,
      } = shipping
      const saveDataToDB = async () => {
        const dataToSave = {
          items,
          email,
          firstName,
          lastName,
          totalQuantity: totalQty,
          totalPrice,
          addressCustomer: {
            address,
            city,
            country,
            state,
            zip,
            phoneNumber,
          },
        }
        if (cardItems.referenceStatus.status) {
          saveDataToDB.refCode = refCode
        }
        try {
          addMessage('Saving payment details to database...')
          const res = await axios.post(
            'https://travherswopapp.herokuapp.com/product/update',
            dataToSave,
          )
          if (res.status === 200) {
            addMessage('Done')
            setTimeout(() => navigate('/payment/success'), 1500)
          }
        } catch (error) {
          addMessage('Something wrong please feel free contact with us')
        }
      }
      saveDataToDB()
    }
  }

  return (
    <div className={`${cssClasses}`}>
      <Header />
      <div className=" max-w-md mx-auto mt-20 text-center">
        <h4 className="text-lg my-4">Enter Here Payment Details</h4>
        <div>
          <CardNumberElement
            onChange={cardHandleChange}
            options={cardStyle}
            className="card-element mb-2"
          />
        </div>
        <div>
          <CardExpiryElement
            onChange={cardHandleChange}
            options={cardStyle}
            className="card-element mb-2"
          />
        </div>
        <div>
          <CardCvcElement
            onChange={cardHandleChange}
            options={cardStyle}
            className="card-element mb-2"
          />
        </div>
        <div>
          <button
            onClick={() => handleCheckout()}
            className="bg-green-400 mb-4 px-10 py-2 rounded-md"
            disabled={processing}
          >
            {processing ? 'Processing' : 'Pay'}
          </button>
        </div>
        <div className="mb-2">
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
      {messages.length > 0 && (
        <div className=" max-w-md mx-auto my-10 text-center">
          <StatusMessages messages={messages} />
        </div>
      )}
      <Footer />
    </div>
  )
}

export default PaymentForm
