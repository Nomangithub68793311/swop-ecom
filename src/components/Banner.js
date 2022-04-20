import appStore from '../images/app-store.png'
import googlePlay from '../images/google-play.png'
import bannerRightImg from '../images/home/faq-right.c47ba5ae.png'
import Particles from 'react-tsparticles'

function Banner() {
  const particlesInit = main => {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = container => {
    console.log(container)
  }
  return (
    <div
      className="h-screen relative"
      style={{
        background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
      }}
    >
      <Particles
        className="absolute left-0 right-0 bottom-0 top-0"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 600,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="absolute w-full h-full left-0 top-0 bottom-0 right-0">
        <div className="container grid grid-cols-1  sm:grid-cols-2 justify-center content-center h-full">
          <div className="self-center z-40 text-center sm:text-left">
            <h1 className="text-2xl font-bold md:font-bold py-6 tracking-wide capitalize">
              showcase your mobile App
            </h1>
            <p className="text-lg pb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
            <div className="flex justify-center sm:justify-start">
              <a
                href="https://apps.apple.com/us/app/swopnew/id1593201322?fbclid=IwAR3yh6c7ri7DK56JEeXyOsIZHzJ4ZGNCJidFuZj-j4UCRXN8BxaK49HD3-I#?platform=iphone"
                rel="noreferrer"
                target="_blank"
                className="w-2/6 mr-3"
              >
                <img src={appStore} alt="appStore" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.travisheron.swop&fbclid=IwAR2nRw3Ey1N0RQhFhNUfBUNA-77I_3Z7iNgJjIchiY4-5WhA7jjGLMetSTo"
                rel="noreferrer"
                target="_blank"
                className="w-2/6"
              >
                <img src={googlePlay} alt="googlePlay" />
              </a>
            </div>
          </div>
          <div className="hidden sm:block z-40">
            <div className="w-4/5 mx-auto">
              <img src={bannerRightImg} alt="bannerRightImg" />
            </div>
          </div>
        </div>{' '}
      </div>
    </div>
  )
}

export default Banner
