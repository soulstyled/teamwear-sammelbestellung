"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PlusCircle, X } from "lucide-react"
import type { ProductInfo } from "../product-data"

interface Selection {
  id: number
  size: string
  quantity: string
  initials: string
}

interface ProductSelectorProps {
  product: ProductInfo
  onSelectionChange: (selections: Selection[]) => void
}

export default function ProductSelector({ product, onSelectionChange }: ProductSelectorProps) {
  const [selections, setSelections] = useState<Selection[]>([{ id: 0, size: "", quantity: "", initials: "" }])

  // Event-Listener für das Zurücksetzen des Formulars
  useEffect(() => {
    const resetSelections = () => {
      setSelections([{ id: 0, size: "", quantity: "", initials: "" }]);
    };

    // Event-Listener registrieren
    window.addEventListener('resetProductSelections', resetSelections);

    // Event-Listener aufräumen beim Unmount
    return () => {
      window.removeEventListener('resetProductSelections', resetSelections);
    };
  }, []);
  
  const addNewRow = () => {
    const newSelections = [...selections, { id: selections.length, size: "", quantity: "", initials: "" }];
    setSelections(newSelections);
    // Nur valide Selektionen an die übergeordnete Komponente weitergeben
    onSelectionChange(newSelections.filter(sel => sel.size && sel.quantity));
  }

  const updateSelectionState = (id: number, field: keyof Selection, value: string | number) => {
    const newSelections = selections.map((selection) => 
      selection.id === id ? { ...selection, [field]: value } : selection
    );
    setSelections(newSelections);
    // Nur valide Selektionen an die übergeordnete Komponente weitergeben
    onSelectionChange(newSelections.filter(sel => sel.size && sel.quantity));
  }

  const removeSelection = (id: number) => {
    let newSelections;
    if (selections.length > 1) {
      newSelections = selections.filter((selection) => selection.id !== id);
    } else {
      newSelections = [{ id: 0, size: "", quantity: "", initials: "" }];
    }
    setSelections(newSelections);
    // Nur valide Selektionen an die übergeordnete Komponente weitergeben
    onSelectionChange(newSelections.filter(sel => sel.size && sel.quantity));
  }

  return (
    <div className="max-w-3xl md:p-6 pb-12">
      <div className="grid gap-6 md:grid-cols-[200px,1fr]">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image src={product.imageUrl || "/placeholder.svg"} alt={product.imageAlt} className="object-contain" fill />
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">{product.name}</h2>
            <div className="mt-2 space-y-1 text-sm">
              {product.hasUniformSizing ? (
                <p>
                  <span className="font-medium">Preis</span>:{" "}
                  <span className="font-medium">{product.price?.toFixed(2)} €</span>
                </p>
              ) : (
                <>
                  <p>
                    <span className="font-medium">Kinder</span> (Größe 116 bis 176):{" "}
                    <span className="font-medium">{product.priceChildren?.toFixed(2)} €</span>
                  </p>
                  <p>
                    <span className="font-medium">Erwachsene</span> (Größe XS bis XXL):{" "}
                    <span className="font-medium">{product.priceAdults?.toFixed(2)} €</span>
                  </p>
                </>
              )}
              <p>
                <span className="font-medium">Initialen / Nummer</span> (optional):{" "}
                <span className="font-medium">3.00 €</span>
              </p>
            </div>
          </div>
          {selections.map((selection, index) => (
            <div key={selection.id} className="grid gap-4 grid-cols-[1fr,1fr,1fr,40px] items-center">
              <Select value={selection.size} onValueChange={(value) => updateSelectionState(selection.id, "size", value)}>
                <SelectTrigger aria-label="Größe auswählen">
                  <SelectValue placeholder="Größe" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                disabled={!selection.size}
                value={selection.quantity}
                onValueChange={(value) => updateSelectionState(selection.id, "quantity", value)}
              >
                <SelectTrigger aria-label="Menge auswählen">
                  <SelectValue placeholder="Menge" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
                <Input
                placeholder="Initialen"
                aria-label="Initialen / Nummer eingeben"
                disabled={!selection.size}
                value={selection.initials}
                maxLength={4}
                onChange={(e) => updateSelectionState(selection.id, "initials", e.target.value)}
                />
                {(index > 0 || selection.size) && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSelection(selection.id)}
                  aria-label="Auswahl entfernen"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          {selections[selections.length - 1].size && (
            <Button onClick={addNewRow} variant="outline" className="mt-4">
              <PlusCircle className="mr-2 h-4 w-4" />
              Weitere Größe hinzufügen
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}