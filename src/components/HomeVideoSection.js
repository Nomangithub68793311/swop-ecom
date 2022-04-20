import ReactPlayer from 'react-player'

const HomeVideoSection = props => {
  return (
    <div {...props}>
      <div className="container py-20">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold">What is MetaMask?</h1>
        </div>
        <div className="flex justify-center my-10">
          <ReactPlayer url="https://www.youtube.com/watch?time_continue=2&v=YVgfHZMFFFQ&feature=emb_logo" />
        </div>
      </div>
    </div>
  )
}

export default HomeVideoSection
