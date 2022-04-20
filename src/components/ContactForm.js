import { useFormik } from 'formik'
import * as Yup from 'yup'
import { phoneRegExp } from '../utils'
import axios from 'axios'

const ContactForm = ({ toast }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      company: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Name Is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email Is Required'),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Phone Number Is Required'),
      message: Yup.string()
        .min(10, 'Must be 10 characters or more')
        .required('Message Is Required'),
    }),
    onSubmit: values => {
      axios
        .post('https://travherswopapp.herokuapp.com/site/contact', values)
        .then(res => {
          toast.success('Message sent')
          formik.resetForm()
        })
        .catch(error => {
          toast.error('Something wrong Try again')
        })
    },
  })
  return (
    <div className="md:col-start-3 md:col-end-6">
      <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
        Reach us quickly
      </h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            placeholder="Enter name"
            className="w-full bg-slate-100 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
          />
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="Enter email"
            className="w-full bg-slate-100 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="number"
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            placeholder="Your phone"
            className="w-full bg-slate-100 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
          />
          <input
            type="text"
            name="company"
            onChange={formik.handleChange}
            value={formik.values.company}
            onBlur={formik.handleBlur}
            placeholder="Your company"
            className="w-full bg-slate-100 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
          />
        </div>
        <textarea
          name="message"
          type="text"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Message"
          rows={7}
          className="mb-6 w-full bg-slate-100 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
        ></textarea>
        <div className="flex">
          <button
            type="submit"
            className="ml-auto px-5 py-2.5 rounded-md text-white"
            style={{
              background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
            }}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
