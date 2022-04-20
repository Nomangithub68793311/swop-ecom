const SelectedProductBtn = ({
  children,
  className = '',
  style = {},
  ...rest
}) => {
  return (
    <button
      className={`px-5 py-2 mt-3 bg-gray-300  text-black rounded-full flex justify-center items-center ${className}`}
      disabled={true}
      style={style}
      {...rest}
    >
      {children}
    </button>
  )
}

export default SelectedProductBtn
