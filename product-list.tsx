import { products } from "./product-data"
import ProductSelector from "./product-selector"

export default function ProductList() {
  return (
    <div className="space-y-12">
      {products.map((product) => (
        <ProductSelector key={product.id} product={product} />
      ))}
    </div>
  )
}

