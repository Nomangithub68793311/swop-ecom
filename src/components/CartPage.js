import {
  removeItem,
  incrementQty,
  decrementtQty,
} from '../context/cartContext/cartActions'
import { useCart } from './../context/cartContext/CartProvider'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const [data, cartDispatch] = useCart()

  const handleRemove = item => {
    removeItem(item, cartDispatch)
  }
  const handleIncrement = item => {
    incrementQty(item, cartDispatch)
  }
  const handleDecrement = item => {
    decrementtQty(item, cartDispatch)
  }
  console.log(data)
  return (
    <div className="mt-20">
      <div className="container pb-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
          <hr className="text-gray-300" />
        </div>
        <div>
          {data.items.length !== 0 ? (
            <div className="lg:grid lg:grid-cols-3">
              <div className="col-span-2">
                {data.items.map(item => (
                  <div
                    key={item._id}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-gray-400 px-4 py-4 rounded-md mb-4"
                  >
                    <div className="flex justify-center">
                      <img
                        src={item.imageUrl[0]}
                        alt={item.name}
                        className="w-44 h-44"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h1 className="text-xl mb-4">{item.name}</h1>
                      <p>{item.description}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center mb-4">
                        <button
                          onClick={() => handleDecrement(item)}
                          disabled={item.qty < 2}
                        >
                          <AiOutlineMinusCircle className="text-2xl" />
                        </button>
                        <h2 className="text-xl font-semibold px-2">
                          Qty: {item.qty}
                        </h2>
                        <button onClick={() => handleIncrement(item)}>
                          <AiOutlinePlusCircle className="text-2xl" />
                        </button>
                      </div>
                      <h2 className="text-xl font-semibold mb-4">
                        price: {(item.price * item.qty).toFixed(2)}
                      </h2>
                      <button
                        className=" px-5 py-2.5 rounded-full text-white"
                        onClick={() => handleRemove(item)}
                        style={{
                          background:
                            'linear-gradient(45deg, #2CC3FE, #904AFE)',
                        }}
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-14 py-10  rounded-md">
                <h2
                  className="text-xl font-semibold mb-1"
                  style={{
                    textAlign: 'right',
                  }}
                >
                  Total Item: {data.items.length}
                </h2>
                <h2
                  className="text-xl font-semibold mb-1"
                  style={{
                    textAlign: 'right',
                  }}
                >
                  Total Qty:{' '}
                  {data.items.reduce((acc, item) => acc + item.qty, 0)}
                </h2>
                <h2
                  className="text-xl font-semibold mb-5"
                  style={{
                    textAlign: 'right',
                  }}
                >
                  Total Price:{' '}
                  {data.items
                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                    .toFixed(2)}
                </h2>
                <div className="flex justify-end">
                  <Link to="/payment">
                    <button
                      className=" px-5 py-2.5 rounded-full text-white"
                      style={{
                        background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
                      }}
                    >
                      Process to checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="text-2xl font-semibold text-center">
              Your Cart is empty
            </h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartPage
