import { useState } from 'react'
import ImageUploader from 'react-images-upload'
import axios from 'axios'
import { useAdmin } from './../../context/adminContext/AdminProvider'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useParams } from 'react-router-dom'
import { updateProductById } from '../../context/adminContext/adminActions'

const UpdateProduct = () => {
  const { id } = useParams()
  const [
    {
      productContainer: { products },
    },
    adminDispatch,
  ] = useAdmin()

  const [updateSuccess, setUpdateSuccess] = useState(false)

  const founded = products.some(item => item?._id === id)

  const [product] = products.filter(item => item?._id === id)

  console.log(product, founded)

  const [data, setData] = useState({
    title: product?.name || '',
    description: product?.description || '',
    price: product?.price || '',
    prevImage: product?.imageUrl || [],
    images: [],
    imgFile: [],
    qty: product?.amount || '',
  })
  const handleChange = e => {
    setData(data => ({ ...data, [e.target.name]: e.target.value }))
  }
  const handleUpdate = e => {
    e.preventDefault()
    if (data.imgFile.length > 0) {
      const promise = data.imgFile.map(item => {
        const formData = new FormData()
        formData.append('file', item)
        formData.append('upload_preset', 'l9nncyzc')
        return axios
          .post(
            'https://api.cloudinary.com/v1_1/bayshore/image/upload',
            formData,
          )
          .then(res => res)
      })
      Promise.all(promise).then(res => {
        const imageUri = res.map(item => item.data.url)

        const dataTOsubmit = {
          name: data.title,
          description: data.description,
          imageUrl: [...data.prevImage, ...imageUri],
          price: data.price,
          amount: data.qty,
        }
        updateProductById(
          id,
          dataTOsubmit,
          adminDispatch,
          toast,
          setUpdateSuccess,
        )
      })
    } else {
      const dataTOsubmit = {
        name: data.title,
        description: data.description,
        imageUrl: data.prevImage,
        price: data.price,
        amount: data.qty,
      }
      updateProductById(
        id,
        dataTOsubmit,
        adminDispatch,
        toast,
        setUpdateSuccess,
      )
    }
  }
  if (!founded) {
    return (
      <div className="py-20 text-2xl font-semibold text-center">
        Product Not Found
      </div>
    )
  }
  if (updateSuccess) {
    return (
      <div>
        <h2 className="text-center text-xl font-semibold">
          product updated successfully
        </h2>
      </div>
    )
  }
  return (
    <div>
      <div>
        <ToastContainer theme="dark" />
        <h1 className="text-center text-xl font-semibold mb-6">
          Update Product
        </h1>
        <form onSubmit={handleUpdate}>
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
            rows={10}
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
          {data.prevImage.length > 0 ? (
            <div className="grid grid-cols-4 gap-2">
              {data.prevImage.map((item, index) => (
                <div key={index}>
                  <img src={item} alt={item} />
                  <button
                    className="text-center text-white py-2 w-full bg-red-500 rounded-md mt-2"
                    onClick={() =>
                      setData(data => ({
                        ...data,
                        prevImage: data.prevImage.filter(img => img !== item),
                      }))
                    }
                  >
                    remove
                  </button>
                </div>
              ))}
            </div>
          ) : null}

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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProduct
