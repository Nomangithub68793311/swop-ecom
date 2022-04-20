import { Link } from 'react-router-dom'

const Navlinks = ({ setState = () => {}, ...restProps }) => {
  return (
    <div {...restProps}>
      <div className="flex flex-col">
        <Link
          to="/admin-panel/all-product"
          className="text-md font-semibold text-center py-3 border-b border-white"
          onClick={() => setState(false)}
        >
          All Product
        </Link>
        <Link
          to="/admin-panel/create-product"
          className="text-md font-semibold text-center py-3 border-b border-white"
          onClick={() => setState(false)}
        >
          Add New Product
        </Link>
        <Link
          to="/admin-panel/support"
          className="text-md font-semibold text-center py-3 border-b border-white"
          onClick={() => setState(false)}
        >
          Support
        </Link>
        <Link
          to="/admin-panel/orders"
          className="text-md font-semibold text-center py-3 border-b border-white"
          onClick={() => setState(false)}
        >
          All Orders
        </Link>
        <Link
          to="/admin-panel/new-orders"
          className="text-md font-semibold text-center py-3 border-b border-white"
          onClick={() => setState(false)}
        >
          New Orders
        </Link>
        <Link
          to="/admin-panel/inventory"
          className="text-md font-semibold text-center py-3 border-b border-white"
          onClick={() => setState(false)}
        >
          Inventory
        </Link>
        <Link
          to="/admin-panel/news-press"
          className="text-md font-semibold text-center py-3 border-b border-white"
          onClick={() => setState(false)}
        >
          Press/News
        </Link>
      </div>
    </div>
  )
}

export default Navlinks
