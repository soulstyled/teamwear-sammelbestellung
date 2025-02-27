"use client";

import ProductList from "../product-list"
import { products } from "../product-data"
import { useState } from 'react';

export default function Home() {
  const [selections, setSelections] = useState<Selection[]>([]);

  interface Selection {
    id: number;
    [key: string]: any;
  }

  const updateSelection = (id: number, field: string, value: any) => {
    setSelections((prevSelections: Selection[]) =>
      prevSelections.map((selection: Selection) =>
        selection.id === id ? { ...selection, [field]: value } : selection
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response: Response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selections }),
    });

    if (response.ok) {
      alert('E-Mail erfolgreich gesendet!');
    } else {
      alert('Fehler beim Senden der E-Mail.');
    }
  };

  return (
    <main className="container mx-auto p-6 max-w-screen-md">
      <h1 className="text-3xl font-semibold mb-6">TuS Feuchtwangen Teamwear Sammelbestellung</h1>
      <ul className="mb-5 list-disc pl-8">
        <li><span className="font-medium">Lieferzeit</span>: je nach Verfügbarkeit ca. 2-3 Wochen</li>
        <li><span className="font-medium">Personalisierung</span>: Initialen und Nummer möglich, maximal 4 Zeichen. Aufpreis: 3,00 €</li>
        <li><span className="font-medium">Bezahlung</span>: bar oder per PayPal bei Übergabe</li>
        <li><span className="font-medium">Lieferung</span>: die Übergabe der fertigen Klamotten erfolgt beim Training</li>
        <li><span className="font-medium">Retoure</span>: ausgeschlossen, da personalisierte Ware</li>
      </ul>
  <p className="mb-5">Bei Fragen an Michael Geißler wenden (<a href="tel:+491783137341">0178 / 3137341</a> oder <a href="mailto:geisslersmichi@gmail.com">geisslersmichi@gmail.com</a>)</p>
      <hr className="pb-12"/>
        <ProductList products={products} updateSelection={updateSelection}/>
      <hr className="pt-12 pb-12"/>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="bg-royalblue hover:bg-blue-500 text-white py-2 px-4 rounded">
          Bestellung abschicken
        </button>
      </form>
    </main>
  )
}

