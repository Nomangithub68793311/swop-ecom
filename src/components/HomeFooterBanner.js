import hFooterBanner from '../images/home/h_footer_banner.fc08a9f4.png'

const HomeFooterBanner = props => {
  return (
    <div className="container py-14" {...props}>
      <h1 className="text-center text-4xl font-bold mb-6">
        What you can share
      </h1>
      <div className="max-w-3xl mx-auto">
        <img src={hFooterBanner} alt="hFooterBanner" />
      </div>
    </div>
  )
}

export default HomeFooterBanner
