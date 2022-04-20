import { useState } from 'react'
import ImageUploader from 'react-images-upload'
import axios from 'axios'
import { addProduct } from '../../context/adminContext/adminActions'
import { useAdmin } from './../../context/adminContext/AdminProvider'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CreateProduct = () => {
  const [, adminDispatch] = useAdmin()
  const [data, setData] = useState({
    title: '',
    description: '',
    price: '',
    images: [],
    imgFile: [],
    qty: '',
    compatibility: '',
    shippingAndReturns: '',
  })
  const handleChange = e =>
    setData(data => ({ ...data, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    const promise = data.imgFile.map(item => {
      const formData = new FormData()
      formData.append('file', item)
      formData.append('upload_preset', 'l9nncyzc')
      return axios
        .post('https://api.cloudinary.com/v1_1/bayshore/image/upload', formData)
        .then(res => res)
    })
    Promise.all(promise).then(res => {
      const imageUri = res.map(item => item.data.url)

      const dataTOsubmit = {
        name: data.title,
        description: data.description,
        imageUrl: imageUri,
        price: data.price,
        amount: data.qty,
        compatibility: data.compatibility,
        shippingAndReturns: data.shippingAndReturns,
      }
      addProduct(dataTOsubmit, adminDispatch, toast, () => {
        setData({
          title: '',
          description: '',
          price: '',
          images: [],
          imgFile: [],
          qty: '',
          compatibility: '',
          shippingAndReturns: '',
        })
      })
    })
  }
  return (
    <div>
      <div>
        <ToastContainer theme="dark" />
        <h1 className="text-center text-xl font-semibold mb-6">
          Add New Product
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={data.title}
            name="title"
            onChange={handleChange}
            placeholder="Title"
            className="w-full bg-slate-100 border-none rounded-md mb-3"
          />
          <textarea
            type="text"
            value={data.description}
            name="description"
            onChange={handleChange}
            placeholder="Description"
            rows={6}
            className="w-full bg-slate-100 border-none rounded-md mb-3"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              value={data.price}
              name="price"
              onChange={handleChange}
              placeholder="Price"
              className="w-full bg-slate-100 border-none rounded-md mb-3"
            />
            <input
              type="number"
              value={data.qty}
              name="qty"
              onChange={handleChange}
              placeholder="Quantity"
              className="w-full bg-slate-100 border-none rounded-md mb-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <textarea
              type="text"
              value={data.compatibility}
              name="compatibility"
              onChange={handleChange}
              placeholder="Compatibility"
              rows={4}
              className="w-full bg-slate-100 border-none rounded-md mb-3"
            />
            <textarea
              type="text"
              value={data.shippingAndReturns}
              name="shippingAndReturns"
              onChange={handleChange}
              placeholder="Shipping and returns"
              rows={4}
              className="w-full bg-slate-100 border-none rounded-md mb-3"
            />
          </div>
          <ImageUploader
            withIcon={false}
            withPreview={true}
            buttonText="Choose Images"
            label="Max file size: 2mb | accepted: jpg, png, jpeg"
            value={data.images}
            defaultImages={data.images}
            name="images"
            onChange={(image, pictureDataURLs) => {
              setData(data => ({
                ...data,
                images: pictureDataURLs,
                imgFile: image,
              }))
            }}
            imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
            maxFileSize={2097152}
            className="mb-4"
          />
          <div className="flex justify-end">
            <button
              className="bg-green-500 px-7 py-2.5 rounded-md text-white"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct
