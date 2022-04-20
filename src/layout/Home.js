import { useEffect } from 'react'
import Faq from '../components/Faq'
import HomeVideoSection from '../components/HomeVideoSection'
import LatestNews from '../components/LatestNews'
import Testimonial from '../components/Testimonial'
import Banner from './../components/Banner'
import HomeFooterBanner from '../components/HomeFooterBanner'
import HomeMiddleScetion from '../components/HomeMiddleScetion'
import AlsoSeeOn from '../components/AlsoSeeOn'
import HomeProductDisplay from '../components/HomeProductDisplay'
import HomeMarquee from './../components/HomeMarquee'
import HomeAmazingFeatures from './../components/HomeAmazingFeatures'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from './../components/Footer'
import Header from './../components/Header'

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])
  return (
    <>
      <Header />
      <Banner />
      <HomeMarquee data-aos="fade-up" />
      <HomeAmazingFeatures data-aos="fade-up" />
      <HomeProductDisplay data-aos="fade-up" />
      <HomeVideoSection data-aos="fade-up" />
      <Testimonial data-aos="fade-up" />
      <HomeMiddleScetion data-aos="fade-up" />
      <AlsoSeeOn data-aos="fade-up" />
      <HomeFooterBanner data-aos="fade-up" />
      <Faq data-aos="fade-up" />
      <LatestNews data-aos="fade-up" />
      <Footer />
    </>
  )
}

export default Home
