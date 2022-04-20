import { useCart } from './../context/cartContext/CartProvider'
import { addItem } from '../context/cartContext/cartActions'
import { useNavigate } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import SelectedProductBtn from './SelectedProductBtn'

const Product = ({ data }) => {
  const [{ items }, cartDispatch] = useCart()

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/shop/${data._id}`)
  }
  return (
    <div className="mb-3">
      <div className="flex justify-center items-center">
        <img
          src={data.imageUrl[0]}
          alt={data.id}
          className="w-4/5 m-auto cursor-pointer"
          onClick={handleClick}
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{data.name}</h3>

        {items.some(item => item._id === data._id) ? (
          <div className="flex justify-center">
            <SelectedProductBtn>
              <p className="sm:hidden">Add to Cart </p>
              <p className="hidden sm:block">Add to Cart | ${data.price} </p>
              <FaCheck className="ml-1" />
            </SelectedProductBtn>
          </div>
        ) : (
          <>
            <button
              className="text-white px-5 py-2 sm:hidden  rounded-full hover:px-7 transition-all duration-200 ease-in-out"
              style={{
                background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
              }}
              onClick={() => addItem({ ...data, qty: 1 }, cartDispatch)}
            >
              Add to Cart
            </button>
            <div className="hidden sm:block">
              <button
                className="text-white  px-5 py-2  rounded-full hover:px-7 transition-all duration-200 ease-in-out"
                style={{
                  background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
                }}
                onClick={() => addItem({ ...data, qty: 1 }, cartDispatch)}
              >
                Add to Cart | ${data.price}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Product
