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
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=250/media/98/05/a4/1730290968/adidas-jugend-tiro-24-windbreaker-kids-blau-weiss-260842980f7a4c13ab734bb2d8d803f7-front.png",
    imageAlt: "Adidas Tiro 24 Windbreaker in blue",
    name: "adidas Tiro 24 Windbreaker",
    priceChildren: 35.47,
    priceAdults: 41.97,
    sizes: ["116", "128", "140", "152", "164", "176", "XS", "S", "M", "L", "XL"],
  },
   {
    id: "tiro24-shirt",
    imageUrl:
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=250/media/76/f5/1d/1730291017/adidas-jugend-tiro-24-trikot-kids-blau-weiss-fda5593d60254d458f0107cba87c5115-front.png",
    imageAlt: "Adidas Tiro 24 Windbreaker in blue",
    name: "adidas Tiro 24 Shirt",
    priceChildren: 18.97,
    priceAdults: 21.72,
    sizes: ["116", "128", "140", "152", "164", "176", "XS", "S", "M", "L", "XL"],
  },
  {
    id: "tiro24-trainingstop",
    imageUrl:
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=250/media/c4/ae/3e/1730291068/adidas-jugend-tiro-24-trainingstop-kids-blau-weiss-8d6fb402c5d048b09264ddcff9b60801-front.png",
    imageAlt: "adidas Tiro 24 Trainingstop",
    name: "adidas Tiro 24 Trainingstop",
    priceChildren: 30.97,
    priceAdults: 35.47,
    sizes: ["116", "128", "140", "152", "164", "176", "XS", "S", "M", "L", "XL"],
  },
  {
    id: "tiro24-trainingsjacke",
    imageUrl:
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=250/media/8c/f0/7e/1730291146/adidas-jugend-tiro-24-trainingsjacke-blau-weiss-502c50a739b841b7a39889749e896522-front.png",
    imageAlt: "adidas Tiro 24 Trainingsjacke",
    name: "adidas Tiro 24 Trainingsjacke",
    priceChildren: 29.97,
    priceAdults: 35.47,
    sizes: ["116", "128", "140", "152", "164", "176","XS", "S", "M", "L", "XL"],
  },
  // Hier können weitere Produkte hinzugefügt werden
]

