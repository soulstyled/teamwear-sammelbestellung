import ProductList from "../product-list"
import { products } from "../product-data"

export default function Home() {
  return (
    <main className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">TuS Teamwear Sammelbestellung</h1>
      <p>Hinweise: Hier bestellen, bei Fragen Michael, keine Rückgabe weil personalisierte Artikel, 
        Zahlen bei Lieferung, Lieferdauer ca. 14 Tage
      </p>
      <ProductList products={products}/>
    </main>
  )
}

