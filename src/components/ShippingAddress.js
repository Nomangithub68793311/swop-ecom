import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import swoapImage from '../images/swopp.png'
import { phoneRegExp } from '../utils'
import { Link } from 'react-router-dom'
import { useCart } from './../context/cartContext/CartProvider'
import {
  chackrefferelCode,
  clearRefAttmpt,
} from '../context/cartContext/cartActions'

const ShippingAddress = ({
  totalPrice,
  setShipping,
  cssClasses,
  refCode,
  setRefCode,
}) => {
  const [data, cartDispatch] = useCart()

  useEffect(() => {
    return () => clearRefAttmpt(cartDispatch)
    // eslint-disable-next-line
  }, [])

  const handleCheckCupon = () => {
    chackrefferelCode(refCode, cartDispatch)
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      state: '',
      zip: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
      country: Yup.string().required('Country is required'),
      state: Yup.string().required('State is required'),
      zip: Yup.number().required('Zip is required'),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('phone Number is required'),
    }),
    onSubmit: values => {
      setShipping(values)
      formik.resetForm()
    },
  })
  return (
    <div className={`${cssClasses}`}>
      <Header />
      <div className="container mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2 md:mb-0">
          <div className="order-last md:order-first">
            <form className="py-3" onSubmit={formik.handleSubmit}>
              <img
                src={swoapImage}
                alt="swoapImage"
                className="w-1/4 mx-auto mb-6"
              />
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Email"
                className="w-full bg-slate-100 mb-2 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
              />
              <div className="grid grid-cols-2 gap-3 mb-2">
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="First Name"
                  className="w-full bg-slate-100 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Last Name"
                  className="w-full bg-slate-100 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
                />
              </div>
              <input
                type="text"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Address"
                className="w-full bg-slate-100 mb-2 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
              />

              <div className="mb-2 lg:grid lg:grid-cols-3 lg:gap-3">
                <input
                  type="text"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="City"
                  className="w-full bg-slate-100 mb-2 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
                />
                <input
                  type="text"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="State"
                  className="w-full bg-slate-100 mb-2 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
                />
                <input
                  type="text"
                  name="zip"
                  value={formik.values.zip}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Zip code"
                  className="w-full bg-slate-100 mb-2 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
                />
              </div>
              <input
                type="text"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Country"
                className="w-full bg-slate-100 mb-2 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
              />
              <input
                type="number"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Phone Number"
                className="w-full bg-slate-100 mb-2 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
              />
              <div className="mb-4">
                <button
                  type="submit"
                  className="px-5 py-2 mr-3 text-white rounded-md"
                  style={{
                    background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
                  }}
                >
                  Continue to shipping
                </button>

                <button>
                  <Link to="/cart">Back To Cart</Link>
                </button>
              </div>
            </form>
          </div>
          <div className="py-5">
            {data.items.map(item => (
              <div
                key={item._id}
                className="flex items-center bg-slate-100 px-4 py-4 rounded-md mb-4"
              >
                <img
                  src={item.imageUrl[0]}
                  alt={item.name}
                  className="w-24 h-24 mr-2"
                />

                <div className="text-center sm:text-left">
                  <h1 className="text-lg font-semibold mb-4">{item.name}</h1>
                </div>

                <h2 className="text-lg font-semibold mb-4 ml-auto">
                  price: ${(item.price * item.qty).toFixed(2)}
                </h2>
              </div>
            ))}
            <div className="bg-slate-100 py-8 px-5">
              {data.referenceStatus.status === false ? (
                <>
                  <div className="flex justify-end">
                    <input
                      type="text"
                      placeholder="Discount Code"
                      className="border-0  rounded-md px-3 py-2 mb-2"
                      value={refCode}
                      onChange={e => setRefCode(e.target.value)}
                    />
                  </div>
                  {data.referenceStatus.attempt > 0 &&
                    data.referenceStatus.status === false &&
                    data.referenceStatus.loading === false && (
                      <p className="py-2 text-red-600 flex justify-end">
                        Discount Code Not Valid
                      </p>
                    )}
                  <div className="flex justify-end">
                    <button
                      className="px-6 py-2 rounded-full text-white mb-3"
                      style={{
                        background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
                      }}
                      onClick={handleCheckCupon}
                      disabled={!refCode}
                    >
                      Apply
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex justify-end">
                  <p>Discount Code Applied you get a free NFC</p>
                </div>
              )}
              <h2 className="text-lg font-semibold mt-2 flex justify-between mb-1">
                Shipping:
                <span>$00.00</span>
              </h2>
              <hr className=" text-gray-400" />
              <h2 className="text-xl font-semibold mt-2 flex justify-between">
                Total Price:
                <span>${totalPrice}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ShippingAddress
