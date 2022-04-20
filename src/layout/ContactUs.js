import ContactInfo from './../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import ContactBrandSocial from '../components/ContactBrandSocial'
import Footer from '../components/Footer'
import Header from './../components/Header'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="mt-10 container">
        <ToastContainer />
        <div className="py-20 grid grid-cols-1 md:grid-cols-5 gap-5">
          <ContactInfo />
          <ContactForm toast={toast} />
        </div>
        <ContactBrandSocial />
      </div>
      <Footer />
    </>
  )
}

export default ContactUs
