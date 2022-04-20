import Marquee from 'react-fast-marquee'

const HomeMarquee = props => {
  return (
    <div
      className="container grid grid-cols-1 md:grid-cols-5 gap-3 my-4"
      {...props}
    >
      <div className="col-span-2 border border-gray-100 px-2 py-1 rounded-full hidden md:block">
        <p>
          <span className="bg-green-300 rounded-full px-4 py-1">infol</span>{' '}
          Trusted by the World's most innovative company.
        </p>
      </div>
      <div className="md:col-span-3 md:self-center">
        <Marquee play={true} pauseOnHover={true} direction="left" speed={30}>
          <p className="px-3">let me focus</p>
          <p className="px-3">let me focus</p>
          <p className="px-3">let me focus</p>
          <p className="px-3">let me focus</p>
          <p className="px-3">let me focus</p>
          <p className="px-3">let me focus</p>
          <p className="px-3">let me focus</p>
        </Marquee>
      </div>
    </div>
  )
}

export default HomeMarquee
