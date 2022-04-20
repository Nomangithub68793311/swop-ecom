import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import newsData from './../data/news'
import { IoIosArrowForward } from 'react-icons/io'
import useMedia from './../custom-hooks/useMedia'

const LatestNews = props => {
  const md = useMedia('(max-width: 500px)')
  return (
    <div className=" py-20" {...props}>
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold mb-6">Latest News</h1>
          <p className="max-w-2xl mx-auto">
            Streamlining different processes and workflows by using user access
            control Onebook prompts efficiency and productivity levels of an
            organization, and reduces operating costs.
          </p>
        </div>
        <div>
          <CarouselProvider
            naturalSlideWidth={100}
            totalSlides={newsData.length}
            naturalSlideHeight={md ? 135 : 100}
            visibleSlides={md ? 1 : 3}
            infinite={true}
            className="z-10"
          >
            <Slider className="h-auto">
              {newsData.map((info, index) => (
                <Slide index={index} key={info.id}>
                  <div className="m-4">
                    <div>
                      <img src={info.image} alt={info.id} />
                    </div>
                    <div className="px-3 bg-gray-100 pt-4 pb-3">
                      <h1 className="text-lg font-semibold mb-2">
                        {info.title}
                      </h1>
                      <p className="mb-2">{info.description}</p>
                      <p className="text-blue-700 cursor-pointer flex items-center">
                        Read More{' '}
                        <span>
                          <IoIosArrowForward className="ml-1" />
                        </span>
                      </p>
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
  )
}

export default LatestNews
