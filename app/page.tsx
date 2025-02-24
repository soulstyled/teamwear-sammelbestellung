import ProductList from "../product-list"

export default function Home() {
  return (
    <main className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Unsere Produkte</h1>
      <ProductList />
    </main>
  )
}

