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
  updateSelection: (productId: string, selections: any[]) => void;
}

export default function ProductList({ products, updateSelection }: ProductListProps) {
  // Produktspezifische Selektionen sammeln und an parent-Komponente übergeben
  const handleProductSelections = (productId: string, selections: any[]) => {
    // Nur gültige Selektionen werden vom ProductSelector bereits gefiltert
    // Hier direkt die Selektion an die Hauptkomponente übergeben
    updateSelection(productId, selections);
  };
  
  return (
    <div>
      {products.map((product) => (
        <ProductSelector
          key={product.id}
          product={product}
          onSelectionChange={(selections) => handleProductSelections(product.id, selections)}
        />
      ))}
    </div>
  );
}