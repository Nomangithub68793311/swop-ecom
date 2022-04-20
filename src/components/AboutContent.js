import thumbnil from '../images/thumbnil.jpg'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import appStore from '../images/app-store.png'
import googlePlay from '../images/google-play.png'

const AboutContent = () => {
  return (
    <div className="container">
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold mb-6">About AppsLand</h1>
        <p className="max-w-2xl m-auto text-gray-400 mb-8">
          Nam et sagittis diam. Sed tempor augue sit amet egestas scelerisque.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-3 pb-16">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center sm:text-left">
            Take a Look Around our App
          </h3>
          <p className="mb-3 text-gray-500 text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          <p className="text-gray-500 mb-6 text-center sm:text-left">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://apps.apple.com/us/app/swopnew/id1593201322?fbclid=IwAR3yh6c7ri7DK56JEeXyOsIZHzJ4ZGNCJidFuZj-j4UCRXN8BxaK49HD3-I#?platform=iphone"
              rel="noreferrer"
              target="_blank"
              className="mr-2"
            >
              <img src={appStore} alt="appStore" className="w-40" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.travisheron.swop&fbclid=IwAR2nRw3Ey1N0RQhFhNUfBUNA-77I_3Z7iNgJjIchiY4-5WhA7jjGLMetSTo"
              rel="noreferrer"
              target="_blank"
            >
              <img src={googlePlay} alt="googlePlay" className="w-40" />
            </a>
          </div>
        </div>
        <div>
          <div>
            <div className="w-full md:w-4/5 m-auto relative">
              <img src={thumbnil} alt="thumbnil" className="rounded-md" />
              <div className="absolute top-0 left-0 w-full h-full bg-indigo-400 opacity-50 rounded-md"></div>
              <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <AiOutlinePlayCircle className="text-8xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
