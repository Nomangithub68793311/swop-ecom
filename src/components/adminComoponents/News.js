import { useState } from 'react'
import ImageUploader from 'react-images-upload'
import axios from 'axios'

const News = () => {
  const [state, setState] = useState({
    header: '',
    description: '',
    newsLink: '',
    imageUri: [],
  })

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', state.imageUri[0])
    formData.append('upload_preset', 'l9nncyzc')
    axios
      .post('https://api.cloudinary.com/v1_1/bayshore/image/upload', formData)
      .then(response => {
        const {
          data: { url },
        } = response
        const dataToSubmit = {
          header: state.header,
          description: state.description,
          imageUri: url,
          newsLink: state.newsLink,
        }
        axios
          .post(
            'https://travherswopapp.herokuapp.com/news/latest',
            dataToSubmit,
          )
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleChange = e =>
    setState(state => ({ ...state, [e.target.name]: e.target.value }))

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold py-10">Add News</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.header}
          name="header"
          onChange={handleChange}
          placeholder="Header"
          className="w-full bg-slate-100 border-none rounded-md mb-3"
          required
        />
        <textarea
          type="text"
          value={state.description}
          name="description"
          onChange={handleChange}
          placeholder="Description"
          rows={6}
          className="w-full bg-slate-100 border-none rounded-md mb-3"
          required
        />
        <input
          type="text"
          value={state.newsLink}
          name="newsLink"
          onChange={handleChange}
          placeholder="News Link"
          className="w-full bg-slate-100 border-none rounded-md mb-3"
          required
        />
        <ImageUploader
          singleImage={true}
          withIcon={false}
          withPreview={true}
          buttonText="Choose Images"
          label="Max file size: 2mb | accepted: jpg, png, jpeg"
          value={state.imageUri}
          defaultImage={state.imageUri}
          name="imageUri"
          onChange={image => setState(data => ({ ...data, imageUri: image }))}
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
  )
}

export default News
