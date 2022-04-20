import aboutClientBg from '../images/testimonial-bg.png'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import clientComment from '../data/clientComment'
import { RiDoubleQuotesR } from 'react-icons/ri'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import useMedia from './../custom-hooks/useMedia'

const AboutClientComment = () => {
  const md = useMedia('(min-width: 650px)')
  return (
    <div
      style={{
        backgroundImage: `url(${aboutClientBg})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container py-20">
        <div className="text-center">
          <h1 className="text-4xl text-gray-500 mb-6">What our client say !</h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg">
            Nam et sagittis diam. Sed tempor augue sit amet egestas scelerisque.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <CarouselProvider
            naturalSlideWidth={100}
            totalSlides={clientComment.length}
            naturalSlideHeight={md ? 100 : 125}
            visibleSlides={md ? 2 : 1}
            infinite={true}
            isPlaying={true}
            interval={5000}
            className="z-10"
          >
            <Slider className="h-auto">
              {clientComment.map((info, index) => (
                <Slide index={index} key={info.id}>
                  <div className="bg-gray-50 m-3 relative">
                    <div className="text-gray-400 flex justify-center py-3">
                      <RiDoubleQuotesR className="text-6xl" />
                    </div>
                    <div className="pb-16 px-2">
                      <p className="text-center mb-2">{info.comment}</p>
                      <h2 className="text-center text-lg font-semibold">
                        {info.name}
                      </h2>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-2/4 translate-y-2/4 ">
                      <img
                        src={info.image}
                        alt={info.name}
                        className="w-24 h-24 rounded-full"
                      />
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
            <div className="flex my-2">
              <ButtonBack className="ml-auto border bg-white px-2 py-2 mr-1 rounded-sm hover:bg-indigo-600 hover:text-white transition-all ease-in-out duration-300">
                <AiFillCaretLeft />
              </ButtonBack>
              <ButtonNext className="border bg-white px-2 py-2 rounded-sm hover:bg-indigo-600 hover:text-white transition-all ease-in-out duration-300">
                <AiFillCaretRight />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  )
}

export default AboutClientComment
