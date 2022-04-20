import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { useCart } from './../context/cartContext/CartProvider'
import { addItem } from './../context/cartContext/cartActions'
import { useProduct } from '../context/productContext/ProductProvider'
import Loader from './Loader'
import { getProduct } from './../context/productContext/productActions'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import '@reach/tabs/styles.css'
import SelectedProductBtn from './SelectedProductBtn'
import ProductImgDisplay from './ProductImgDisplay'
import { FaCheck } from 'react-icons/fa'

const ProductDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [{ items }, cardDispatch] = useCart()
  const [{ products, loading, error }, productDispatch] = useProduct()

  const founItem = products.filter(item => item._id === params.id)
  const product = founItem[0]
  return (
    <>
      <Header />
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Loader className="text-6xl font-semibold" />
        </div>
      ) : error ? (
        <div className="container text-center pt-24 pb-6 text-red-500 font-semibold text-xl">
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
      ) : (
        <div className="mt-20">
          <div className="container">
            <button
              className="px-6 py-2.5 border border-black rounded-md hidden"
              onClick={() => navigate('/shop')}
            >
              Back to Shop
            </button>
            {founItem.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8">
                <div className="bg-slate-50 rounded-lg">
                  {/* <img src={product.imageUrl[0]} alt={product.name} /> */}
                  <ProductImgDisplay images={product.imageUrl} />
                </div>
                <div className="flex items-center pb-7 sm:pb-0">
                  <div className="px-5">
                    <h1 className="text-2xl font-semibold mb-4">
                      {product.name}
                    </h1>

                    <p className="text-xl font-semibold mb-3">
                      Price: ${product.price}
                    </p>
                    {items.some(item => item._id === product._id) ? (
                      <SelectedProductBtn>
                        <p>Add To Cart </p>
                        <FaCheck className="ml-1" />
                      </SelectedProductBtn>
                    ) : (
                      <button
                        className="px-5 py-2.5  text-white rounded-full"
                        style={{
                          background:
                            'linear-gradient(45deg, #2CC3FE, #904AFE)',
                        }}
                        onClick={() => addItem(product, cardDispatch)}
                      >
                        Add To Cart
                      </button>
                    )}
                    <Tabs className="mt-4">
                      <TabList className="bg-white mb-2">
                        <Tab>Description</Tab>
                        <Tab>Compatibility</Tab>
                        <Tab>Shipping & Returns</Tab>
                      </TabList>

                      <TabPanels>
                        <TabPanel>
                          <p>{product.description}</p>
                        </TabPanel>
                        <TabPanel>
                          <p>{product.compatibility}</p>
                        </TabPanel>
                        <TabPanel>
                          <p>{product.shippingAndReturns}</p>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </div>
                </div>
              </div>
            ) : (
              <h1 className="text-center text-2xl font-semibold mb-8">
                Product Not Found
              </h1>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default ProductDetails

// {items.some(item => item._id === data._id) ? (
//   <div className="flex justify-center">
//     <button
//       className="text-white px-5 py-2 bg-lime-400  rounded-full flex justify-center items-center"
//       onClick={() => addItem({ ...data, qty: 1 }, cartDispatch)}
//       disabled={true}
//     >
//       Add to Cart | ${data.price} <FaCheck className="ml-1" />
//     </button>
//   </div>
// ) : (
//   <button
//     className="text-white px-5 py-2  rounded-full hover:px-7 transition-all duration-200 ease-in-out"
//     style={{
//       background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
//     }}
//     onClick={() => addItem({ ...data, qty: 1 }, cartDispatch)}
//   >
//     Add to Cart | ${data.price}
//   </button>
// )}
