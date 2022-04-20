import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const public_key = 'pk_test_XJ4PaYi4SByoAAwwwpX1E5ED'
const stripeTestPromise = loadStripe(public_key)

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
}

export default StripeContainer
