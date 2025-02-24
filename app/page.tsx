import ProductList from "../product-list"
import { products } from "../product-data"

export default function Home() {
  return (
    <main className="container mx-auto py-6 max-w-screen-md">
      <h1 className="text-3xl font-bold mb-6">TuS Feuchtwangen Teamwear Sammelbestellung</h1>
      <ul className="mb-5">
        <li className="list-disc list-inside">Lieferzeit: Je nach Verfügbarkeit ca. 2-3 Wochen</li>
        <li className="list-disc list-inside">Personalisierung: Initialen und Nummer auf Brust möglich, maximal 4 Zeichen</li>
        <li className="list-disc list-inside">Bezahlung: Bar oder per PayPal bei Übergabe</li>
        <li className="list-disc list-inside">Lieferung: Die Übergabe erfolgt beim Jugendtraining</li>
        <li className="list-disc list-inside">Retoure: Ausgeschlossen, da personalisierte Ware</li>
      </ul>
  <p className="mb-5">Bei Fragen an Michael Geißler wenden (<a href="tel:+491783137341">0178 / 3137341</a> oder <a href="mailto:geisslersmichi@gmail.com">geisslersmichi@gmail.com</a>)</p>
      <hr />
      <ProductList products={products}/>
    </main>
  )
}

