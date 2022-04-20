import Product from './Product'
import { useProduct } from './../context/productContext/ProductProvider'

const ProductList = () => {
  const [{ products }] = useProduct()
  return (
    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto mb-5 lg:mb-10">
      {products.map(item => (
        <Product key={item._id} data={item} />
      ))}
    </div>
  )
}

export default ProductList
