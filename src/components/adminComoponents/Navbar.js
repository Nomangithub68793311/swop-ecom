import { GiHamburgerMenu } from 'react-icons/gi'
import Navlinks from './Navlinks'
import { useState } from 'react'

const Navbar = () => {
  const [state, setState] = useState(false)
  return (
    <div>
      <div className="flex justify-between items-center md:block px-2 md:px-0">
        <h3 className="md:text-center text-xl font-semibold py-4 border-b border-white">
          Dashboard
        </h3>
        <GiHamburgerMenu
          className="md:hidden text-4xl font-semibold cursor-pointer"
          onClick={() => setState(!state)}
        />
      </div>
      <Navlinks
        className={`md:hidden ${!state && 'hidden'}`}
        setState={setState}
      />
      <Navlinks className="hidden md:block" style={{ minHeight: '600px' }} />
    </div>
  )
}

export default Navbar
