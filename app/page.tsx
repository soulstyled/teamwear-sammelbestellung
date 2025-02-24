import ProductList from "../product-list"
import { products } from "../product-data"

export default function Home() {
  return (
    <main className="container mx-auto p-6 max-w-screen-md">
      <h1 className="text-3xl font-semibold mb-6">TuS Feuchtwangen Teamwear Sammelbestellung</h1>
      <ul className="mb-5 list-disc pl-8">
        <li><span className="font-medium">Lieferzeit</span>: Je nach Verfügbarkeit ca. 2-3 Wochen</li>
        <li><span className="font-medium">Personalisierung</span>: Initialen und Nummer möglich, maximal 4 Zeichen. Aufpreis: 3,00 €</li>
        <li><span className="font-medium">Bezahlung</span>: Bar oder per PayPal bei Übergabe</li>
        <li><span className="font-medium">Lieferung</span>: Die Übergabe erfolgt beim Jugendtraining</li>
        <li><span className="font-medium">Retoure</span>: Ausgeschlossen, da personalisierte Ware</li>
      </ul>
  <p className="mb-5">Bei Fragen an Michael Geißler wenden (<a href="tel:+491783137341">0178 / 3137341</a> oder <a href="mailto:geisslersmichi@gmail.com">geisslersmichi@gmail.com</a>)</p>
      <hr className="pb-12"/>
      <ProductList products={products}/>
    </main>
  )
}

