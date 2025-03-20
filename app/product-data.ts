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
    id: "tiro24-shirt",
    imageUrl:
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=350/media/76/f5/1d/1730291017/adidas-jugend-tiro-24-trikot-kids-blau-weiss-fda5593d60254d458f0107cba87c5115-front.png",
    imageAlt: "Adidas Tiro 24 Windbreaker in blau",
    name: "adidas Tiro 24 Shirt",
    priceChildren: 19.00,
    priceAdults: 22.00,
    sizes: ["116", "128", "140", "152", "164", "176", "XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "tiro24-trainingstop",
    imageUrl:
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=350/media/c4/ae/3e/1730291068/adidas-jugend-tiro-24-trainingstop-kids-blau-weiss-8d6fb402c5d048b09264ddcff9b60801-front.png",
    imageAlt: "adidas Tiro 24 Trainingstop blau",
    name: "adidas Tiro 24 Trainingstop",
    priceChildren: 31.00,
    priceAdults: 36.00,
    sizes: ["116", "128", "140", "152", "164", "176", "XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "tiro24-trainingsjacke",
    imageUrl:
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=350/media/54/26/2c/1730291118/adidas-jugend-tiro-24-trainingsjacke-kids-blau-weiss-ae490bcdec3e4eebac5c350f6f8bce73-front.png",
    imageAlt: "adidas Tiro 24 Trainingsjacke blau",
    name: "adidas Tiro 24 Trainingsjacke",
    priceChildren: 30.00,
    priceAdults: 36.00,
    sizes: ["116", "128", "140", "152", "164", "176","XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "tiro24-sweat-hoodie",
    imageUrl:
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=350/media/9e/94/fc/1730291272/adidas-jugend-tiro-24-hoody-schwarz-weiss-97937ca8df714344b8351527d45f31ae-front.png",
    imageAlt: "adidas Tiro 24 Sweat Hoodie schwarz",
    name: "adidas Tiro 24 Sweat Hoodie",
    priceChildren: 32.00,
    priceAdults: 41.00,
    sizes: ["116", "128", "140", "152", "164", "176","XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "tiro24-short",
    imageUrl:
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=350/media/a5/2f/a4/1730291223/adidas-jugend-tiro-24-training-short-kids-schwarz-weiss-7a92c9eaab204c439b5e5988960b6a4c-front.png",
    imageAlt: "adidas Tiro 24 Trainingsshort schwarz",
    name: "adidas Tiro 24 Trainingsshort",
    priceChildren: 15.00,
    priceAdults: 18.00,
    sizes: ["116", "128", "140", "152", "164", "176","XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "tiro24-trainingshose",
    imageUrl:
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=350/media/c5/88/31/1730291196/adidas-jugend-tiro-24-trainingshose-kids-schwarz-942837c5c5914d47a580f78bd8c3d052-front.png",
    imageAlt: "adidas Tiro 24 Trainingshose schwarz",
    name: "adidas Tiro 24 Trainingshose",
    priceChildren: 26.00,
    priceAdults: 32.00,
    sizes: ["116", "128", "140", "152", "164", "176","XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "team-base-top",
    imageUrl:
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=350/media/b0/75/c0/1730291481/adidas-jugend-team-base-top-langarm-schwarz-5898f3d77ecb4f3ca2c3e3e4c7fb189e-front.png",
    imageAlt: "adidas Team Base Top langarm schwarz",
    name: "adidas Team Base Top langarm",
    priceChildren: 10.00,
    priceAdults: 13.00,
    sizes: ["116", "128", "140", "152", "164", "176","XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "tiro24-allwetterjacke",
    imageUrl:
      "https://www.11teamsports.com/cdn-cgi/image/format=auto,width=350/media/97/dc/2e/1730291394/adidas-jugend-tiro-24-competition-allwetterjacke-blau-84bb2a2e41544374bc79c17d4c789010-front.png",
    imageAlt: "Adidas Tiro 24 Competition Allwetterjacke in blau",
    name: "adidas Tiro 24 Competition Allwetterjacke",
    priceChildren: 47.00,
    priceAdults: 52.00,
    sizes: ["116", "128", "140", "152", "164", "176", "XS", "S", "M", "L", "XL", "XXL"],
  },
  // Hier können weitere Produkte hinzugefügt werden
]