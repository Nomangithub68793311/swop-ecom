import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'
import '@reach/accordion/styles.css'

const AccordionContainer = () => {
  const [indices, setIndices] = useState(null)
  function toggleItem(toggledIndex) {
    if (indices === toggledIndex) {
      setIndices(null)
    } else {
      setIndices(toggledIndex)
    }
  }

  const accordionData = [
    {
      title: 'Do a thing',
      description:
        'Integer ad iaculis semper aenean nibh quisque hac eget volutpat, at dui sem accumsan cras congue mi varius egestas interdum, molestie blandit sociosqu sodales diam metus erat venenatis.',
    },
    {
      title: 'Do another thing',
      description:
        'Hendrerit faucibus litora justo aliquet inceptos gravida felis vel aenean, natoque fermentum nostra tempus ornare nam diam est, neque risus aliquam sapien vestibulum sociis integer eros.',
    },
    {
      title: 'User Interface Design?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.',
    },
    {
      title: 'Cross Browser Support?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.',
    },
  ]
  return (
    <Accordion index={indices} onChange={toggleItem}>
      {accordionData.map((data, index) => (
        <AccordionItem
          key={index}
          className="bg-gray-100 mb-3 border-l-4 border-emerald-400"
        >
          <AccordionButton className=" py-3 w-full flex">
            <div className="px-2 text-lg  w-full flex justify-between items-center">
              <p className="font-semibold">{data.title}</p>
              {indices === index ? (
                <AiOutlineMinus className="font-bold text-xl text-emerald-800" />
              ) : (
                <AiOutlinePlus className="font-bold text-xl text-emerald-800" />
              )}
            </div>
          </AccordionButton>

          <AccordionPanel className="pl-2 py-3 border-t border-white">
            {data.description}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionContainer
