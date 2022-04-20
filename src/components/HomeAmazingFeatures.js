import { IoPersonSharp, IoFlashSharp, IoVideocamSharp } from 'react-icons/io5'
import { IoMdTrophy } from 'react-icons/io'
import { CgInfinity } from 'react-icons/cg'
import { TiMessages } from 'react-icons/ti'
import insidePhoneContent from '../images/home/sc-3.07ac03ff.png'

const HomeAmazingFeatures = props => {
  return (
    <div
      className="mb-8"
      style={{
        background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
      }}
      {...props}
    >
      <div className="container">
        <div className="text-center py-10 text-white overflow-hidden">
          <h1 className="text-4xl font-bold mb-4">Amazing Features</h1>
          <p className="max-w-lg mx-auto">
            Nam et sagittis diam. Sed tempor augue sit amet egestas scelerisque.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
          <div className="py-2">
            <div className="flex justify-between mb-7">
              <div className="lg:text-right ml-4 lg:mr-4 text-white">
                <h3 className="mb-2 text-xl">User Friendly</h3>
                <p>
                  Lorem ipsum dolor sit amet consect etur adipisicing elited do
                  eiusmod tempor incidi dout labore magna.
                </p>
              </div>
              <div className="order-first lg:order-first">
                <IoPersonSharp className="text-6xl bg-white text-gray-400 px-2 py-2 rounded-md" />
              </div>
            </div>
            <div className="flex justify-between mb-7">
              <div className="lg:text-right ml-4 lg:mr-4 text-white">
                <h3 className="mb-2 text-xl">Super Fast Speed</h3>
                <p>
                  Lorem ipsum dolor sit amet consect etur adipisicing elited do
                  eiusmod tempor incidi dout labore magna.
                </p>
              </div>
              <div className="order-first lg:order-first">
                <IoFlashSharp className="text-6xl bg-white text-gray-400 px-2 py-2 rounded-md" />
              </div>
            </div>
            <div className="flex justify-between mb-7">
              <div className="lg:text-right ml-4 lg:mr-4 text-white">
                <h3 className="mb-2 text-xl">Award Winning</h3>
                <p>
                  Lorem ipsum dolor sit amet consect etur adipisicing elited do
                  eiusmod tempor incidi dout labore magna.
                </p>
              </div>
              <div className="order-first lg:order-first">
                <IoMdTrophy className="text-6xl bg-white text-gray-400 px-2 py-2 rounded-md" />
              </div>
            </div>
          </div>
          {/* Image section Start */}

          {/* 
          <div class="relative">
              <div class="absulote top-0 left-0 right-0 bottom-0" style="background-image: url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500') !important; background-position: 'center center' !important; background-size: 'cover' !important; ">
                  <img src="/static/media/iphonex.1e21eff9.png" alt="iPhoneX">
              </div>
          </div>
          
           */}
          <div className="relative overflow-hidden hidden lg:block">
            <div className="absoulate w-full h-full top-0 left-0">
              <div className="relative">
                <div className="absolute h-full w-full top-0 right-0 bottom-0">
                  <img
                    src={insidePhoneContent}
                    alt="insidePhoneContent"
                    className="w-4/5 mx-auto"
                  />
                </div>
                {/* <div className="absolute top-0 right-0 bottom-0 left-1/2 -translate-x-2/4">
                    <img src={iPhoneX} alt="iPhoneX" />
                  </div> */}
              </div>
            </div>
          </div>

          {/* Image section end */}
          <div className="py-2">
            <div className="flex justify-between mb-7">
              <div>
                <IoVideocamSharp className="text-6xl bg-white text-gray-400 px-2 py-2 rounded-md" />
              </div>
              <div className="text-left ml-4 text-white">
                <h3 className="mb-2 text-xl">Height Resolation</h3>
                <p>
                  Lorem ipsum dolor sit amet consect etur adipisicing elited do
                  eiusmod tempor incidi dout labore magna.
                </p>
              </div>
            </div>
            <div className="flex justify-between mb-7">
              <div>
                <CgInfinity className="text-6xl bg-white text-gray-400 px-2 py-2 rounded-md" />
              </div>
              <div className="text-left ml-4 text-white">
                <h3 className="mb-2 text-xl">Unlimited Posibility</h3>
                <p>
                  Lorem ipsum dolor sit amet consect etur adipisicing elited do
                  eiusmod tempor incidi dout labore magna.
                </p>
              </div>
            </div>
            <div className="flex justify-between mb-7">
              <div>
                <TiMessages className="text-6xl bg-white text-gray-400 px-2 py-2 rounded-md" />
              </div>
              <div className="text-left ml-4 text-white">
                <h3 className="mb-2 text-xl">Very Fast Support</h3>
                <p>
                  Lorem ipsum dolor sit amet consect etur adipisicing elited do
                  eiusmod tempor incidi dout labore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAmazingFeatures
