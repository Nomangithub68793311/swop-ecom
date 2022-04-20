import { useAdmin } from './../../context/adminContext/AdminProvider'
import Loader from './../Loader'
import {
  fetchProduct,
  removeProduct,
} from './../../context/adminContext/adminActions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'

const DisplayAllProduct = () => {
  const [{ productContainer }, adminDispatch] = useAdmin()
  if (productContainer.loading) {
    return (
      <div className="flex justify-center items-center">
        <Loader className="text-4xl font-bold" />
      </div>
    )
  }
  if (productContainer.error) {
    return (
      <div className="container text-center pt-24 pb-6 text-red-500 font-semibold text-xl">
        Something wrong! click try again button to recover from this error
        <br />
        <button
          className="bg-green-400 px-6 py-2.5 rounded-full mt-3 text-white"
          onClick={() => fetchProduct(adminDispatch)}
        >
          Try Again
        </button>
      </div>
    )
  }
  return (
    <div className="py-8">
      <ToastContainer theme="dark" />
      {productContainer.products.length > 0 ? (
        <>
          <h1 className="text-center text-xl font-semibold mb-6">
            Show All Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {productContainer.products.map(item => (
              <div key={item._id}>
                <div>
                  <img src={item.imageUrl[0]} alt={item.name} />
                </div>
                <div>
                  <h1 className="text-xl font-semibold mb-3">{item.name}</h1>
                  <p className="mb-2">{item.description}</p>
                  <p className="text-lg font-semibold mb-3">
                    Price: ${item.price}
                  </p>
                  <Link to={`/admin-panel/update/${item._id}`}>
                    <button className="bg-green-500 px-7 py-2.5 rounded-md text-white mr-5">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="bg-red-400 px-7 py-2.5 rounded-md text-white"
                    onClick={() =>
                      removeProduct(item._id, adminDispatch, toast)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5"></div>
        </>
      ) : (
        <div>
          <h1 className="text-center text-xl font-semibold mb-6">
            No product found to display. Please add product first.
          </h1>
        </div>
      )}
    </div>
  )
}

export default DisplayAllProduct
