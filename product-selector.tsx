"use client"

import { useState } from "react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PlusCircle, X } from "lucide-react"
import type { ProductInfo } from "./product-data"

interface Selection {
  id: number
  size: string
  quantity: string
  initials: string
}

interface ProductSelectorProps {
  product: ProductInfo
}

export default function ProductSelector({ product }: ProductSelectorProps) {
  const [selections, setSelections] = useState<Selection[]>([{ id: 0, size: "", quantity: "", initials: "" }])

  const addNewRow = () => {
    setSelections([...selections, { id: selections.length, size: "", quantity: "", initials: "" }])
  }

  const updateSelection = (id: number, field: keyof Selection, value: string) => {
    setSelections(selections.map((selection) => (selection.id === id ? { ...selection, [field]: value } : selection)))
  }

  const removeSelection = (id: number) => {
    if (selections.length > 1) {
      setSelections(selections.filter((selection) => selection.id !== id))
    } else {
      setSelections([{ id: 0, size: "", quantity: "", initials: "" }])
    }
  }

  return (
    <div className="max-w-3xl p-6">
      <div className="grid gap-6 md:grid-cols-[200px,1fr]">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Image src={product.imageUrl || "/placeholder.svg"} alt={product.imageAlt} className="object-cover" fill />
        </div>
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{product.name}</h1>
            <div className="mt-2 space-y-1 text-sm">
              <p>
                <span className="font-medium">Kinder</span> (Gr. 116 bis 176):{" "}
                <span className="font-medium">{product.priceChildren.toFixed(2)} €</span>
              </p>
              <p>
                <span className="font-medium">Erwachsene</span> (Gr. XS bis XXL):{" "}
                <span className="font-medium">{product.priceAdults.toFixed(2)} €</span>
              </p>
              <p>
                <span className="font-medium">Initialen / Nummer</span> (optional):{" "}
                <span className="font-medium">3,00 €</span>
              </p>
            </div>
          </div>

          {selections.map((selection, index) => (
            <div key={selection.id} className="grid gap-4 sm:grid-cols-4 items-center">
              <Select value={selection.size} onValueChange={(value) => updateSelection(selection.id, "size", value)}>
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
                onValueChange={(value) => updateSelection(selection.id, "quantity", value)}
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
                placeholder="MG10"
                aria-label="Initialen / Nummer eingeben"
                disabled={!selection.size}
                value={selection.initials}
                onChange={(e) => updateSelection(selection.id, "initials", e.target.value)}
              />

              {(index > 0 || selection.size) && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSelection(selection.id)}
                  aria-label="Remove selection"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}

          {selections[selections.length - 1].size && (
            <Button onClick={addNewRow} variant="outline" className="mt-4">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Another Size
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

