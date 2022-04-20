import React from 'react'
import appStore from '../images/app-store.png'
import googlePlay from '../images/google-play.png'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import imageOne from '../images/About/1.png'
import imageTwo from '../images/About/11.png'
import imageThree from '../images/About/2.png'
import imageFour from '../images/About/22.png'
import imageFive from '../images/About/3.png'
import imageSix from '../images/About/33.png'
import imageSeven from '../images/About/4.png'
import imageEight from '../images/About/44.png'
import imageNine from '../images/About/5.png'
import imageTen from '../images/About/55.png'
import imageEleven from '../images/About/6.png'
import imageTwelve from '../images/About/66.png'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import useMedia from './../custom-hooks/useMedia'

const images = [
  { id: 1, image: imageOne },
  { id: 2, image: imageTwo },
  { id: 3, image: imageThree },
  { id: 4, image: imageFour },
  { id: 5, image: imageFive },
  { id: 6, image: imageSix },
  { id: 7, image: imageSeven },
  { id: 8, image: imageEight },
  { id: 9, image: imageNine },
  { id: 10, image: imageTen },
  { id: 11, image: imageEleven },
  { id: 12, image: imageTwelve },
]

const AboutScreenshot = () => {
  const sm = useMedia('(max-width: 450px)')
  return (
    <div className="bg-gray-50">
      <div className="container py-20">
        <div className="text-center">
          <h1 className="text-4xl text-gray-500 mb-6">Screenshots</h1>
          <p className="max-w-xl mx-auto mb-6">
            Nam et sagittis diam. Sed tempor augue sit amet egestas scelerisque.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <div className="flex justify-center mb-4">
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
          <div>
            <CarouselProvider
              naturalSlideWidth={100}
              totalSlides={images.length}
              naturalSlideHeight={200}
              visibleSlides={sm ? 1 : 5}
              infinite={true}
              isPlaying={true}
              interval={5000}
              className="z-10"
            >
              <Slider className="h-auto">
                {images.map((info, index) => (
                  <Slide index={index} key={info.id}>
                    <div className="m-4">
                      <div>
                        <img src={info.image} alt={info.id} />
                      </div>
                    </div>
                  </Slide>
                ))}
              </Slider>
              <div className="flex justify-center my-2">
                <ButtonBack className=" border bg-white px-2 py-2 mr-1 rounded-md hover:bg-indigo-600 hover:text-white transition-all ease-in-out duration-300">
                  <AiFillCaretLeft />
                </ButtonBack>
                <ButtonNext className="border bg-white px-2 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition-all ease-in-out duration-300">
                  <AiFillCaretRight />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutScreenshot
