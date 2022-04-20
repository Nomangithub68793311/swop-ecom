import swopImage from '../images/swopp.png'
import ReactPlayer from 'react-player'
import termsOne from '../images/terms-1.webp'
import termsTwo from '../images/terms-2.webp'
import termsThree from '../images/terms-3.webp'
import Footer from './Footer'
import Header from './Header'

const Swopterms = () => {
  return (
    <>
      <Header />
      <div className="container ">
        <div className="mt-28">
          <div className="flex  justify-center items-center mb-3">
            <img src={swopImage} alt="swopImage" className="w-2/12" />

            <h1 className="text-6xl font-semibold ml-4 pb-3">teams</h1>
          </div>
          <p className="text-center text-2xl">
            The All-In-One Desktop Application for Team Management
          </p>
          <div>
            <div className="flex justify-center my-10">
              <ReactPlayer url="https://www.youtube.com/watch?time_continue=2&v=YVgfHZMFFFQ&feature=emb_logo" />
            </div>
          </div>
          <div>
            <h2 className="text-center text-2xl font-semibold my-10">
              High Performance Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              <div>
                <img src={termsTwo} alt="termsOne" />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h3 className="text-xl font-semibold my-5">
                  Digital Business Card
                </h3>
                <p className="mb-8">
                  Manage your team's digital business cards with profile
                  templates, bulk actions, and more.
                </p>
                <button className="border-2 border-black px-6 py-2.5 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-xl font-semibold my-5">
                Manage Leads and Export to Your CRM
              </h3>
              <p className="mb-8">
                Capture leads from all members of your team and export to
                Salesforce, HubSpot or any other CRM with custom CSVs.
              </p>
              <button className="border-2 border-black px-6 py-2.5 rounded-full">
                Learn More
              </button>
            </div>
            <div>
              <img src={termsOne} alt="termsOne" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            <div>
              <img src={termsThree} alt="termsOne" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-xl font-semibold my-5">
                Uncover Sales Insights
              </h3>
              <p className="mb-8">
                Track individual and team-wide performance with detailed
                insights and analytics.
                <br />
                See all recent activity, top performers and know the ins and out
                of your team. Sales data like never before...
              </p>
              <button className="border-2 border-black px-6 py-2.5 rounded-full">
                Let's go
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Swopterms
