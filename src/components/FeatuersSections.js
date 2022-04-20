import { useEffect } from 'react'
import sectionImage from '../images/Feature/Feature 7.png'
import sectionCountImage from '../images/Feature/Feature 66.png'
import sectionCountImagend from '../images/Feature/Feature 6.png'
import secondCountImagerd from '../images/Feature/Feature 5.png'
import secondCountImagere from '../images/Feature/Feature 4.png'
import featuresBannerImage from '../images/Feature/download-right2.354c91b8.png'
import featuresHeaderBackground from '../images/feature-head-bg.jpg'
import appStore from '../images/app-store.png'
import googlePlay from '../images/google-play.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const FeatuersSections = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])
  const styles = {
    backgroundImage: `url(${featuresHeaderBackground})`,
    backgroundPosition: 'center',
  }
  return (
    <div className="pt-24">
      <div className="text-center mb-8 md:mb-20">
        <h1 className="text-2xl font-bold mb-6">About AppsLand</h1>
        <p className="max-w-2xl mx-auto mb-6 lg:pb-10 text-lg">
          Nam et sagittis diam. Sed tempor augue sit amet egestas scelerisque.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p>
      </div>
      <div style={styles} className="relative">
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: '0.6',
          }}
          className="absolute"
        ></div>
        <div className="grid md:grid-cols-2 md:gap-3 container">
          <div
            className="py-28 md:py-20 text-white text-center"
            style={{ zIndex: '49' }}
          >
            <h1 className="text-2xl font-bold mb-4">Get The App Now !</h1>
            <p className="mb-4">
              Seamlessly transform timely e-commerce for diverse leadership
              skills. Conveniently reconceptualize go forward expertise without
              extensible applications. Phosfluorescently.
            </p>
            <div className="flex justify-center">
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
          <div className="relative hidden md:block">
            <div className="">
              <img
                src={featuresBannerImage}
                alt="featuresBannerImage"
                className="w-3/5 absolute bottom-0 left-1/2 -translate-x-2/4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center text-2xl font-bold mb-6">
            Why Swap with MetaMask?
          </h1>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 "
            data-aos="fade-up"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-semibold mb-3">
                  Find the best price every time
                </h1>
                <p>
                  Swaps ensures that you always has access to the largest
                  selection of tokens and the most competitive prices, by
                  providing prices from multiple aggregators and individual
                  market makers in one place. A service fee of 0.875% is
                  automatically factored into each quote, which supports ongoing
                  development to make MetaMask even better.
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={sectionImage}
                  alt="sectionImage"
                  className="w-3/4 mx-auto"
                />
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
            data-aos="fade-up"
          >
            <div className="hidden md:block">
              <img
                src={sectionCountImage}
                alt="sectionCountImage"
                className="w-3/4 mx-auto"
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-semibold mb-3">
                  Reduced gas costs
                </h1>
                <p>
                  We pursue a different path to locate the best trade. Each
                  route requires a varying amount of gas fees to execute the
                  transaction. Swaps sources the best prices and determines
                  which liquidity source is the most gas efficient for every
                  trade.
                </p>
              </div>
            </div>
            <div className="md:hidden">
              <img
                src={sectionCountImage}
                alt="sectionCountImage"
                className="w-3/4 mx-auto"
              />
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10"
            data-aos="fade-up"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-semibold mb-3">
                  Find the best price every time
                </h1>
                <p>
                  Swaps ensures that you always has access to the largest
                  selection of tokens and the most competitive prices, by
                  providing prices from multiple aggregators and individual
                  market makers in one place. A service fee of 0.875% is
                  automatically factored into each quote, which supports ongoing
                  development to make MetaMask even better.
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={sectionCountImagend}
                  alt="sectionImage"
                  className="w-3/4 mx-auto"
                />
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 "
            data-aos="fade-up"
          >
            <div className="hidden md:block">
              <img
                src={secondCountImagere}
                alt="sectionImage"
                className="w-3/4 mx-auto"
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-semibold mb-3">
                  Find the best price every time
                </h1>
                <p>
                  Swaps ensures that you always has access to the largest
                  selection of tokens and the most competitive prices, by
                  providing prices from multiple aggregators and individual
                  market makers in one place. A service fee of 0.875% is
                  automatically factored into each quote, which supports ongoing
                  development to make MetaMask even better.
                </p>
              </div>
            </div>
            <div className="md:hidden">
              <img
                src={secondCountImagere}
                alt="sectionImage"
                className="w-3/4 mx-auto"
              />
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            data-aos="fade-up"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-semibold mb-3">
                  Find the best price every time
                </h1>
                <p>
                  Swaps ensures that you always has access to the largest
                  selection of tokens and the most competitive prices, by
                  providing prices from multiple aggregators and individual
                  market makers in one place. A service fee of 0.875% is
                  automatically factored into each quote, which supports ongoing
                  development to make MetaMask even better.
                </p>
              </div>
            </div>
            <div>
              <img
                src={secondCountImagerd}
                alt="sectionImage"
                className="w-3/4 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatuersSections
