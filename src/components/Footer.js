import { Link } from 'react-router-dom'
import { FiFacebook } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'
import { BsYoutube, BsInstagram, BsTwitter } from 'react-icons/bs'
import logo from '../images/swopp.png'
import appStore from '../images/app-store.png'
import googlePlay from '../images/google-play.png'

const Footer = () => {
  return (
    <footer className="py-10 bg-black text-gray-50">
      <div className="container">
        <div className="border-b border-gray-800 grid sm:grid-cols-4 gap-6 lg:grid-cols-6 lg:gap-3 pb-8">
          <div className="col-span-2 sm:col-span-4 lg:col-span-2 content-center border-b border-gray-800 sm:border-none">
            <img src={logo} alt="Logo" className="w-2/4 mx-auto sm:mx-0 mb-6" />
            <p className="text-sm sm:text-base lg:mt-4 mt-2 px-1 text-center sm:text-left pb-4 sm:pb-0">
              SWOP is the digital identity in a tangible world. It's the all in
              one solution for the modern Entrepreneur. Customize up to 5
              profiles under your parent identity. These profiles have variety
              use cases, including a digital business card that you can
              customize, a dog tag for your four legged child, a lead generator
              for people to fill out their information on checkout, a direct
              link to socials, even send payments or receive payments with a
              tap!
            </p>
          </div>
          <div className="col-span-2 text-center sm:text-left sm:col-span-1 border-b border-gray-800 sm:border-none">
            <h2 className="font-semibold text-lg mb-2">Shop</h2>
            <ul className="flex sm:block justify-around pb-4 sm:pb-0 text-sm sm:text-base">
              <li>
                <Link to="/shop">Swop</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/shop">Shop All</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 text-center sm:text-left sm:col-span-1 border-b border-gray-800 sm:border-none">
            <h2 className="text-md font-semibold text-lg mb-2">Company</h2>
            <ul className="hidden sm:block justify-around pb-4 sm:pb-0 text-sm sm:text-base">
              <li>
                <Link to="/swop-terms">Swop Teams</Link>
              </li>
              <li>
                <Link to="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund-policy">Refund Policy</Link>
              </li>
              <li>
                <Link to="/contact">Help</Link>
              </li>
            </ul>
            <ul className="sm:hidden  pb-4  text-sm ">
              <div className="grid grid-cols-3 mb-2">
                <li>
                  <Link to="/swop-terms">Swop Teams</Link>
                </li>
                <li>
                  <Link to="/terms-of-use">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <li className="flex justify-end">
                  <Link to="/refund-policy">Refund Policy</Link>
                </li>
                <li className="flex justify-start">
                  <Link to="/">Help</Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="col-span-2 text-center sm:text-left sm:col-span-1 border-b border-gray-800 sm:border-none">
            <h2 className="font-semibold text-lg mb-2">Connect with us</h2>
            <div className="flex items-center justify-center sm:justify-start pt-2 mb-4 sm:mb-0">
              <a href="http://facebook.com" target="_blank" rel="noreferrer">
                <FiFacebook className="text-3xl md:text-2xl mr-3" />
              </a>
              <a href="http://facebook.com" target="_blank" rel="noreferrer">
                <BsYoutube className="text-3xl md:text-2xl mr-3" />
              </a>
              <a href="http://facebook.com" target="_blank" rel="noreferrer">
                <BsInstagram className="text-3xl md:text-2xl mr-3" />
              </a>
              <a href="http://facebook.com" target="_blank" rel="noreferrer">
                <BsTwitter className="text-3xl md:text-2xl mr-3" />
              </a>
              <a href="http://facebook.com" target="_blank" rel="noreferrer">
                <FaTiktok className="text-3xl md:text-2xl mr-3" />
              </a>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center sm:block">
            <h2 className="font-semibold text-lg mb-2">Download the App</h2>

            <a
              href="https://apps.apple.com/us/app/swopnew/id1593201322?fbclid=IwAR3yh6c7ri7DK56JEeXyOsIZHzJ4ZGNCJidFuZj-j4UCRXN8BxaK49HD3-I#?platform=iphone"
              rel="noreferrer"
              target="_blank"
              className="mb-3 sm:inline-block flex justify-center"
            >
              <img
                src={appStore}
                alt="appStore"
                className="border border-white rounded-md w-3/5"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.travisheron.swop&fbclid=IwAR2nRw3Ey1N0RQhFhNUfBUNA-77I_3Z7iNgJjIchiY4-5WhA7jjGLMetSTo"
              rel="noreferrer"
              target="_blank"
              className="sm:inline-block flex justify-center"
            >
              <img
                src={googlePlay}
                alt="googlePlay"
                className="border border-white rounded-md w-4/6"
              />
            </a>
          </div>
        </div>
        <p className="text-center mt-5">&copy; Copyright 2021 SWOP.</p>
      </div>
    </footer>
  )
}

export default Footer
