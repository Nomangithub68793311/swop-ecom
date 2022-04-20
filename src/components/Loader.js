import { VscLoading } from 'react-icons/vsc'

const Loader = ({ className, ...rest }) => {
  return <VscLoading className={`${className} animate-spin`} {...rest} />
}

export default Loader
