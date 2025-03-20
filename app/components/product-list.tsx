"use client";
import { useState } from 'react';
import ProductSelector from '@/app/components/product-selector';
import type { ProductInfo } from '../product-data';

interface ProductListProps {
  products: ProductInfo[];
  updateSelection: (productId: string, selections: any[]) => void;
}

export default function ProductList({ products, updateSelection }: ProductListProps) {
  // Produktspezifische Selektionen sammeln und an parent-Komponente übergeben
  const handleProductSelections = (productId: string, selections: {
    id: number;
    size: string;
    quantity: string;
    initials: string;
  }[]) => {
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