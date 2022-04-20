import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import customerOne from '../images/customer-1.jpg'
import customerTwo from '../images/customer-2.jpeg'
import customerThree from '../images/customer-3.jpg'
import customerFour from '../images/customer-4.jpg'
import useMedia from './../custom-hooks/useMedia'

const Testimonial = props => {
  const mx = useMedia('(max-width: 500px)')
  console.log(mx)
  const data = [
    {
      id: 1,
      description:
        'Professionally grow backward-compatible data without tactical alignments. Completely whiteboard cooperative schemas rather than cross-platform intellectual capital. Quickly benchmark wireless relationships via client-centered models.',
      url: customerOne,
    },
    {
      id: 2,
      description:
        'Professionally grow backward-compatible data without tactical alignments. Completely whiteboard cooperative schemas rather than cross-platform intellectual capital. Quickly benchmark wireless relationships via client-centered models.',
      url: customerTwo,
    },
    {
      id: 3,
      description:
        'Professionally grow backward-compatible data without tactical alignments. Completely whiteboard cooperative schemas rather than cross-platform intellectual capital. Quickly benchmark wireless relationships via client-centered models.',
      url: customerThree,
    },
    {
      id: 4,
      description:
        'Professionally grow backward-compatible data without tactical alignments. Completely whiteboard cooperative schemas rather than cross-platform intellectual capital. Quickly benchmark wireless relationships via client-centered models.',
      url: customerFour,
    },
  ]

  return (
    <div className="bg-gray-100" {...props}>
      <div className="container py-14">
        <div>
          <h2 className="text-center text-3xl font-bold mb-5">
            10k+ Experts Trust Us
          </h2>
          <p className="text-center max-w-2xl m-auto mb-8 text-gray-500">
            Streamlining different processes and workflows by using user access
            control Onebook prompts efficiency and productivity levels of an
            organization, and reduces operating costs.
          </p>
        </div>

        <CarouselProvider
          naturalSlideWidth={100}
          totalSlides={data.length}
          naturalSlideHeight={mx ? 80 : 25}
          visibleSlides={mx ? 1 : 2}
          infinite={true}
          isPlaying={true}
          interval={5000}
          className="z-10"
        >
          <Slider className="h-auto">
            {data.map((info, index) => (
              <Slide index={index} key={info.id}>
                <div className="px-5 sm:grid sm:grid-cols-6">
                  <div className="flex justify-center sm:block">
                    <img
                      src={info.url}
                      alt={info.id}
                      className="w-20 h-20 sm:w-auto sm:h-full rounded-full"
                    />
                  </div>
                  <div className="sm:col-start-2 sm:col-end-7">
                    <p className="w-full sm:pl-3 text-sm text-center sm:text-left">
                      {info.description}
                    </p>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
          <div className="flex my-2">
            <ButtonBack className="ml-auto border-0 bg-white px-2 py-2 mr-1 rounded-md hover:bg-indigo-600 hover:text-white transition-all ease-in-out duration-300">
              <AiFillCaretLeft />
            </ButtonBack>
            <ButtonNext className="border-0 bg-white px-2 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition-all ease-in-out duration-300">
              <AiFillCaretRight />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  )
}

export default Testimonial
