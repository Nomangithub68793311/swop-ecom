import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import Header from './../components/Header'
import { useProduct } from './../context/productContext/ProductProvider'
import Loader from '../components/Loader'
import { getProduct } from './../context/productContext/productActions'

const Shop = () => {
  const [{ products, loading, error }, productDispatch] = useProduct()

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <Loader className="text-6xl font-semibold" />
        </div>
        <Footer />
      </>
    )
  }
  if (error) {
    return (
      <>
        <Header />
        <div className="container text-center pt-24 pb-6 text-red-500 font-semibold text-md lg:text-xl">
          Something wrong Please Reload your Application or click try again
          button
          <br />
          <button
            className="bg-green-400 px-6 py-2.5 rounded-full mt-3 text-white"
            onClick={() => getProduct(productDispatch)}
          >
            Try Again
          </button>
        </div>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Header />
      <div className="pt-20 lg:pt-14 container">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold py-5 lg:py-7 border-b border-gray-200">
            All Digital Business Card Products
          </h1>
        </div>
        <ProductList />
      </div>
      <Footer />
    </>
  )
}

export default Shop
