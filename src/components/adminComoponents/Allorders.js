import { useState } from 'react'
import { getAllOrders } from '../../context/adminContext/adminActions'
import { useAdmin } from './../../context/adminContext/AdminProvider'
import Loader from './../Loader'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'
import '@reach/accordion/styles.css'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const DATE_OPTIONS = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

const Allorders = () => {
  const [indices, setIndices] = useState(null)
  function toggleItem(toggledIndex) {
    if (indices === toggledIndex) {
      setIndices(null)
    } else {
      setIndices(toggledIndex)
    }
  }
  const [
    {
      ordersContainer: { loading, error, allOrders },
      adminDispatch,
    },
  ] = useAdmin()
  console.log(allOrders)

  if (loading) {
    return (
      <div className="flex justify-center">
        <Loader className="text-4xl font-semibold" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container text-center pt-24 pb-6 text-red-500 font-semibold text-xl">
        Something wrong! click try again button to recover from this error
        <br />
        <button
          className="bg-green-400 px-6 py-2.5 rounded-full mt-3 text-white"
          onClick={() => getAllOrders(adminDispatch)}
        >
          Try Again
        </button>
      </div>
    )
  }

  return allOrders.length > 0 ? (
    <div>
      <Accordion index={indices} onChange={toggleItem}>
        {allOrders.map((data, index) => (
          <AccordionItem
            key={index}
            className="bg-gray-100 mb-3 border-l-4 border-emerald-400"
          >
            <AccordionButton className=" py-3 w-full flex">
              <div className="px-2 text-lg  w-full flex justify-between items-center">
                <p className="font-semibold">{data.name}</p>
                {indices === index ? (
                  <AiOutlineMinus className="font-bold text-xl text-emerald-800" />
                ) : (
                  <AiOutlinePlus className="font-bold text-xl text-emerald-800" />
                )}
              </div>
            </AccordionButton>

            <AccordionPanel className="pl-2 py-3 border-t border-white">
              <div>
                <p>Email: {data.email}</p>
                <p>Deliver Status: {`${data.delivered}`}</p>
                <p>
                  Order Created:{' '}
                  {new Date(data.createdAt).toLocaleDateString(
                    'en-US',
                    DATE_OPTIONS,
                  )}
                </p>
                <h2 className="text-lg border-b border-gray-300 text-center mx-5">
                  Address
                </h2>
                <div className="mx-5 mb-2 py-3 border-b border-gray-300">
                  {data.addressCustomer.address && (
                    <p>Address: {data.addressCustomer.address}</p>
                  )}
                  {data.addressCustomer.city && (
                    <p>City: {data.addressCustomer.city}</p>
                  )}
                  {data.addressCustomer.zip && (
                    <p>Zipcode: {data.addressCustomer.zip}</p>
                  )}
                  {data.addressCustomer.state && (
                    <p>State: {data.addressCustomer.state}</p>
                  )}
                  {data.addressCustomer.country && (
                    <p>Country: {data.addressCustomer.country}</p>
                  )}
                  {data.addressCustomer.phoneNumber && (
                    <p>Phone: {data.addressCustomer.phoneNumber}</p>
                  )}
                </div>
                <h2 className="text-lg border-b border-gray-300 text-center mx-5">
                  Product Details
                </h2>
                <div className="mx-5 mb-2 py-3 border-b border-gray-300">
                  {data.products.map(item => (
                    <div key={item._id}>
                      <h1 className="font-semibold">Name: {item.name}</h1>
                      <h2>Quantity: {item.qty}</h2>
                    </div>
                  ))}
                  <div className="font-bold text-lg">
                    Total Price: ${data.totalPrice}
                  </div>
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ) : (
    <div>No order found to show</div>
  )
}

export default Allorders
