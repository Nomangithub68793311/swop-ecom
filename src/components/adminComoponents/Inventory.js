import { useAdmin } from './../../context/adminContext/AdminProvider'

const Inventory = () => {
  const [data] = useAdmin()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="rounded-md bg-slate-100 py-4 px-2">
        <h1>Total Product: {data.productContainer.products.length}</h1>
      </div>
      <div className="rounded-md bg-slate-100 py-4 px-2">
        <h1>Product Delivered: {data.ordersContainer.allOrders.length}</h1>
      </div>
      <div className="rounded-md bg-slate-100 py-4 px-2">
        <h1>New Orders: {data.ordersContainer.newOrders.length}</h1>
      </div>
    </div>
  )
}

export default Inventory
