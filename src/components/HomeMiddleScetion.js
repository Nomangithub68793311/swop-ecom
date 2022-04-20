import secMiddle from '../images/home/midSec.f3928b8a.png'
import { Link } from 'react-router-dom'

const HomeMiddleScetion = props => {
  return (
    <div className="container" {...props}>
      <div className="md:grid md:grid-cols-2 md:gap-2 md:justify-items-center">
        <div className="flex justify-center">
          <img src={secMiddle} alt="secMiddle" />
        </div>
        <div className="text-center flex flex-col justify-center pb-10 md:pb-0">
          <h1 className="text-4xl font-semibold mb-4 px-6">
            The Best Digital <br /> Business Card
          </h1>
          <p className="max-w-lg font-semibold mx-auto">
            Each account comes with a personal and <br /> business profile that
            can contain:
          </p>
          <p className="my-2 text-lg ">
            contact info
            <br />
            social media
            <br />
            payment links
            <br />
            websites
            <br />
            files and videos
          </p>
          <p className="text-lg ">And More</p>
          <div className="my-3">
            <Link to="/shop">
              <button
                className="text-white bg-black px-6 py-2.5 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
                }}
              >
                See All Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeMiddleScetion
