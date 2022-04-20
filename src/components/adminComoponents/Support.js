import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'
import '@reach/accordion/styles.css'
import { useAdmin } from './../../context/adminContext/AdminProvider'
import Loader from './../Loader'
import { getCustomerEmail } from './../../context/adminContext/adminActions'

const Support = () => {
  const [indices, setIndices] = useState(null)
  const [
    {
      customerEmail: { loading, error, emails },
    },
    adminDispatch,
  ] = useAdmin()

  function toggleItem(toggledIndex) {
    if (indices === toggledIndex) {
      setIndices(null)
    } else {
      setIndices(toggledIndex)
    }
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Loader className="text-4xl font-bold" />
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
          onClick={() => getCustomerEmail(adminDispatch)}
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-center text-xl font-semibold mb-3">
        Listout All Email From Customer
      </h1>
      {emails.length > 0 ? (
        <Accordion index={indices} onChange={toggleItem}>
          {emails.map((data, index) => (
            <AccordionItem
              key={index}
              className="bg-gray-100 mb-3 border-l-4 border-emerald-400"
            >
              <AccordionButton className=" py-3 w-full flex">
                <div className="px-2 text-lg  w-full flex justify-between items-center">
                  <p className="font-semibold hidden sm:block">
                    Name: {data.name}
                  </p>
                  <p className="font-semibold">From: {data.email}</p>
                  {indices === index ? (
                    <AiOutlineMinus className="font-bold text-xl text-emerald-800" />
                  ) : (
                    <AiOutlinePlus className="font-bold text-xl text-emerald-800" />
                  )}
                </div>
              </AccordionButton>

              <AccordionPanel className="pl-2 py-3 border-t border-white">
                <div>
                  {data.company && (
                    <p className="text-md font-semibold">
                      Company: {data.company}
                    </p>
                  )}
                  {data.phoneNumber && (
                    <p className="text-md font-semibold">
                      Phone: {data.phoneNumber}
                    </p>
                  )}
                  <p>{data.message}</p>
                </div>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div>
          <h1 className="text-red-400 mt-3 text-center">
            No email found to show
          </h1>
        </div>
      )}
    </div>
  )
}

export default Support
