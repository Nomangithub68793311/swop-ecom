import { Link } from 'react-router-dom'
import { AiOutlineShopping } from 'react-icons/ai'
import useScrollPosition from '../custom-hooks/useScrollPosition'
import { useCart } from './../context/cartContext/CartProvider'
import swopImage from '../images/swopp.png'
import { useState } from 'react'

const Header = () => {
  const scrollPosition = useScrollPosition()
  const [data] = useCart()
  const [showNavLinks, setShowNavLinks] = useState(false)

  //

  return (
    <header
      className={`${
        scrollPosition > 5 ? 'py-3 ' : 'py-4'
      }  top-0 right-0 left-0 fixed transition-all  ease-in-out duration-300 z-50 `}
      style={{
        background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
      }}
    >
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/" className="inline-block">
            <img src={swopImage} alt="swopImage" className="w-24" />
          </Link>
        </div>
        <ul className="ml-auto lg:flex w-5/12 justify-around items-center hidden">
          <li>
            <Link to="/" className="navLinks">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="navLinks">
              Features
            </Link>
          </li>
          <li>
            <Link to="/about" className="navLinks">
              About
            </Link>
          </li>
          <li>
            <Link to="/shop" className="navLinks">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navLinks">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/cart">
              <div className="flex items-center text-black  hover:text-white hover:border-white">
                <AiOutlineShopping className="navLinks text-lg" />
                <p className="border border-black rounded-full  -top-4 -right-1 px-2 ">
                  {data.items.length}
                </p>
              </div>
            </Link>
          </li>
        </ul>
        <div className="lg:hidden flex items-center justify-center order-first">
          <div
            className="flex flex-col cursor-pointer z-50 mr-3"
            onClick={() => setShowNavLinks(!showNavLinks)}
          >
            <div className="w-8 h-1 bg-black rounded-full mb-1 "></div>
            <div className=" w-8 h-1 bg-black rounded-full mb-1"></div>
            <div className="w-8 h-1 bg-black rounded-full"></div>
          </div>
        </div>
        <Link to="/cart" className="mobNavLinks lg:hidden order-last">
          <div className="flex items-center text-black">
            <AiOutlineShopping className="text-lg" />
            <p className="border border-black rounded-full  -top-4 -right-1 px-2 ">
              {data.items.length}
            </p>
          </div>
        </Link>
      </div>
      <div className={`container   ${!showNavLinks && 'hidden'}`}>
        <div className="py-6">
          <ul className="flex flex-col items-center">
            <li>
              <Link to="/" className="mobNavLinks">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="mobNavLinks">
                Features
              </Link>
            </li>
            <li>
              <Link to="/about" className="mobNavLinks">
                About
              </Link>
            </li>
            <li>
              <Link to="/shop" className="mobNavLinks">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="mobNavLinks">
                Contact
              </Link>
            </li>

            {/* <li>
              <Link to="/cart" className="mobNavLinks">
                <div className="flex items-center text-black">
                  <AiOutlineShopping className="text-lg" />
                  <p className="border border-black rounded-full  -top-4 -right-1 px-2 ">
                    {data.items.length}
                  </p>
                </div>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
