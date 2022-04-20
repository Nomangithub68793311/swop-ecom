import { Link, useNavigate } from 'react-router-dom'
import { addItem } from '../context/cartContext/cartActions'
import { useCart } from './../context/cartContext/CartProvider'
import { useProduct } from './../context/productContext/ProductProvider'
import { FaCheck } from 'react-icons/fa'
import SelectedProductBtn from './SelectedProductBtn'
import Loader from './Loader'
import { getProduct } from './../context/productContext/productActions'

const HomeProductDisplay = props => {
  const [{ items }, cartDispatch] = useCart()
  const [{ products, loading, error }, productDispatch] = useProduct()
  const data = products.slice(0, 4)
  const navigate = useNavigate()
  if (loading) {
    return (
      <div className="container" {...props}>
        <div className="flex justify-center items-center h-36">
          <Loader className="text-3xl font-semibold" />
        </div>
      </div>
    )
  }
  if (error) {
    return (
      <div className="container py-5" {...props}>
        <p className="text-center text-xl">
          Something went wrong please click try again button to recover from it
        </p>
        <div className="flex justify-center items-center">
          <button
            className="bg-red-400 font-semibold text-xl px-5 py-2 rounded-full"
            onClick={() => getProduct(productDispatch)}
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="container" {...props}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-5 mb-8">
        {data.map(item => (
          <div key={item._id}>
            <div className="flex justify-center mb-2">
              <img
                src={item.imageUrl[0]}
                alt={`${item}-${item._id}`}
                onClick={() => navigate(`/shop/${item._id}`)}
                className="cursor-pointer w-3/5 mx-auto"
              />
            </div>

            <div className="flex justify-center">
              {items.some(prod => prod._id === item._id) ? (
                <SelectedProductBtn>
                  <p className="flex">
                    Add to Cart&nbsp;
                    <span className="hidden md:block">
                      | ${item.price}
                    </span>{' '}
                  </p>
                  <FaCheck className="ml-1" />
                </SelectedProductBtn>
              ) : (
                <button
                  className="px-6 py-2.5 mt-3 text-white  rounded-full hover:px-8 transition-all duration-200 ease-in-out"
                  onClick={() => {
                    addItem({ ...item, qty: 1 }, cartDispatch)
                  }}
                  style={{
                    background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
                  }}
                >
                  Add to cart | ${item.price}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-center">
          <Link to="/shop">
            <button
              className="px-6 py-2.5 text-white  rounded-full hover:px-8 transition-all duration-200 ease-in-out"
              style={{
                background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
              }}
            >
              See All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeProductDisplay
