import { FiFacebook } from 'react-icons/fi'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineGooglePlus, AiFillYoutube } from 'react-icons/ai'

const ContactBrandSocial = () => {
  return (
    <div className=" bg-gray-100 py-10 mb-4">
      <div>
        <h1 className="text-center text-2xl font-bold mb-4">Brand Logo</h1>
        <div className="flex justify-center items-center">
          <FiFacebook className="px-2 py-2 text-black text-3xl bg-white rounded-full mr-2" />
          <FaTwitter className="px-2 py-2 text-black text-3xl bg-white rounded-full mr-2" />
          <FaLinkedinIn className="px-2 py-2 text-black text-3xl bg-white rounded-full mr-2" />
          <AiOutlineGooglePlus className="px-2 py-2 text-black text-3xl bg-white rounded-full mr-2" />
          <AiFillYoutube className="px-2 py-2 text-black text-3xl bg-white rounded-full mr-2" />
        </div>
      </div>
    </div>
  )
}

export default ContactBrandSocial
