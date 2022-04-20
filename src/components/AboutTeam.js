import personOne from '../images/team-1.jpg'
import personTwo from '../images/team-2.jpg'
import personThree from '../images/team-3.jpg'
import personFour from '../images/team-4.jpg'
import { FiFacebook } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'

const AboutTeam = () => {
  const teamProfile = [
    {
      id: 1,
      name: 'Robert Miller',
      designation: 'UI/UX Designer',
      image: personTwo,
      social: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/',
      },
    },
    {
      id: 2,
      name: 'Stephen Everett',
      designation: 'Fornt-End Developer',
      image: personOne,
      social: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/',
      },
    },
    {
      id: 3,
      name: 'Philip Hennessy',
      designation: 'FullStack Developer',
      image: personThree,
      social: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/',
      },
    },
    {
      id: 4,
      name: 'Nicholas Miller',
      designation: 'Development Team Lead',
      image: personFour,
      social: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/',
      },
    },
  ]
  return (
    <div className="bg-gray-200">
      <div className="container py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Our Team</h1>
          <p className="max-w-2xl m-auto mb-7 text-gray-500">
            Nam et sagittis diam. Sed tempor augue sit amet egestas scelerisque.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {teamProfile.map(member => (
            <div key={member.id}>
              <div
                className="mb-3 rounded-lg"
                style={{
                  background: 'linear-gradient(45deg, #2CC3FE, #904AFE)',
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-72 w-full rounded-lg opacity-60 hover:opacity-90 transition-all duration-200 ease-in-out"
                />
              </div>
              <div className="text-center">
                <h4 className="mb-1 text-xl">{member.name}</h4>
                <h5 className="mb-3">{member.designation}</h5>
                <div className="flex justify-center">
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 px-2 py-2 border-2 border-indigo-600 rounded-full"
                  >
                    <FiFacebook />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 px-2 py-2 border-2 border-indigo-600 rounded-full"
                  >
                    <AiOutlineTwitter />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 px-2 py-2 border-2 border-indigo-600 rounded-full"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutTeam
