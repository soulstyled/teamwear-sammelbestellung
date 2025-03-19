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
  updateSelection: (id: number, field: string, value: any) => void;
}
export default function ProductList({ products, updateSelection }: ProductListProps) {
  const [selections, setSelections] = useState<Selection[]>([]);
  interface Selection {
    id: number;
    [key: string]: any;
  }
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
    </div>
  );
}