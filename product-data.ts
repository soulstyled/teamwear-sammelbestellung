export interface ProductInfo {
  id: string
  imageUrl: string
  imageAlt: string
  name: string
  priceChildren: number
  priceAdults: number
  sizes: string[]
}

export const products: ProductInfo[] = [
  {
    id: "tiro24-windbreaker",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-24%20at%2012.26.38-2iXCSNsDtqDrdaXDRWzhuZqnSNnlUn.png",
    imageAlt: "Adidas Tiro 24 Windbreaker in blue",
    name: "adidas Tiro 24 Windbreaker",
    priceChildren: 35.47,
    priceAdults: 41.97,
    sizes: ["116", "128", "140", "152", "164", "176", "S", "M", "L", "XL"],
  },
   {
    id: "tiro24-shirt",
    imageUrl:
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=250/media/76/f5/1d/1730291017/adidas-jugend-tiro-24-trikot-kids-blau-weiss-fda5593d60254d458f0107cba87c5115-front.png",
    imageAlt: "Adidas Tiro 24 Windbreaker in blue",
    name: "adidas Tiro 24 Shirt",
    priceChildren: 25.47,
    priceAdults: 31.97,
    sizes: ["116", "128", "140", "152", "164", "176", "S", "M", "L", "XL"],
  },
  // Hier können weitere Produkte hinzugefügt werden
]

