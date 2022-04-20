import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, EffectCoverflow } from 'swiper'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'

SwiperCore.use([Navigation, EffectCoverflow])

export default function ProductImgDisplay({ images }) {
  return (
    <div className="App">
      <Swiper
        navigation
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: '400px' }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-full">
              <img src={item} alt="item" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
