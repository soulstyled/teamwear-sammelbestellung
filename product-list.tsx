"use client";

import { useState } from 'react';
import ProductSelector from './product-selector';

interface Product {
  id: string;
  imageUrl: string;
  imageAlt: string;
  name: string;
  priceChildren: number;
  priceAdults: number;
  sizes: string[];
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
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
    <div>
      {products.map((product) => (
        <ProductSelector
          key={product.id}
          product={product}
          updateSelection={updateSelection}
        />
      ))}
      <form onSubmit={handleSubmit}>
        <button type="submit" className="bg-royalblue hover:bg-blue-500 text-white py-2 px-4 rounded">
          Bestellung abschicken
        </button>
      </form>
    </div>
  );
}

