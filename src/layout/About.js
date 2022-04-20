import AboutClientComment from '../components/AboutClientComment'
import AboutContent from '../components/AboutContent'
import AboutScreenshot from '../components/AboutScreenshot'
import AboutTeam from '../components/AboutTeam'
import Footer from '../components/Footer'
import Header from './../components/Header'

const About = () => {
  return (
    <>
      <Header />
      <div className="pt-20">
        <AboutContent />
        <AboutScreenshot />
        <AboutTeam />
        <AboutClientComment />
      </div>
      <Footer />
    </>
  )
}

export default About
