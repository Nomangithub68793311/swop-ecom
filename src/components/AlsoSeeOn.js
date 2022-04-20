import forbesImage from '../images/5847e9aacef1014c0b5e4828_200x.webp'
import theImage from '../images/320px-TechCrunch_logo.svg_4106a732-8781-49c5-a354-44d1c80ce0dc_200x.webp'
import tiktokImage from '../images/5e8ce592664eae000408546b_200x.webp'
import incImage from '../images/Inc-logo-black_200x.webp'
import cheddarImage from '../images/cheddar_200x.webp'
import northAbrand from '../images/Under30Logo-NorthAmerica2021-Black-1_200x.webp'

const AlsoSeeOn = props => {
  return (
    <div className=" bg-gray-100 py-8" {...props}>
      <div className="container">
        <h1 className="text-center text-2xl font-bold mb-4">AS See On</h1>
        <div className="flex items-center max-w-4xl mx-auto">
          <div className="w-2/4 ">
            <img
              src={forbesImage}
              alt="forbesImage"
              className="w-3/4 mx-auto"
            />
          </div>
          <div className="w-2/4 ">
            <img src={theImage} alt="theImage" className="w-3/4 mx-auto" />
          </div>
          <div className="w-2/4 ">
            <img
              src={tiktokImage}
              alt="tiktokImage"
              className="w-3/4 mx-auto"
            />
          </div>
          <div className="w-2/4 ">
            <img src={incImage} alt="incImage" className="w-3/4 mx-auto" />
          </div>
          <div className="w-2/4 ">
            <img
              src={cheddarImage}
              alt="cheddarImage"
              className="w-3/4 mx-auto"
            />
          </div>
          <div className="w-2/4 ">
            <img
              src={northAbrand}
              alt="northAbrand"
              className="w-3/4 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlsoSeeOn
