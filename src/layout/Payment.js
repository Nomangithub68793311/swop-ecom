import { useCart } from './../context/cartContext/CartProvider'
import { useState } from 'react'
import ShippingAddress from './../components/ShippingAddress'
import PaymentForm from './../components/PaymentForm'

const Payment = () => {
  const [data] = useCart()
  const [shipping, setShipping] = useState(null)
  const [refCode, setRefCode] = useState('')

  const { items } = data

  const totalQty = parseInt(items.reduce((acc, item) => acc + item.qty, 0))
  const price = items
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2)

  const totalPrice = price

  //   const discount = referenceStatus.status ? totalQty * 5 : 0
  //  (price - discount).toFixed(2)

  // const dataTosubmit = {
  //   items: items.map(item => ({
  //     id: item._id,
  //     quantity: item.qty,
  //   })),
  //   refCode,
  //   referenceStatus,
  //   formData: formik.values,
  //   totalPrice: totalPrice,
  //   totalQuantity: totalQty,
  // }

  return (
    <div>
      <ShippingAddress
        totalPrice={totalPrice}
        setShipping={setShipping}
        cssClasses={shipping ? 'hidden' : 'block'}
        refCode={refCode}
        setRefCode={setRefCode}
      />
      <PaymentForm
        shipping={shipping}
        totalPrice={totalPrice}
        cssClasses={shipping ? 'block' : 'hidden'}
        refCode={refCode}
        totalQty={totalQty}
      />
    </div>
  )
}

export default Payment
