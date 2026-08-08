export type Supplier = {
  slug: string
  category: 'Vintage' | 'Streetwear' | 'Sportswear' | 'Designer' | 'Mixed'
  title: string
  short: string
  price: number
  badge?: string
  image: string
  gallery: string[]
  typicalProducts: string[]
  typicalPricing: string
  minimumOrder: string
  shipping: string
  bestFor: string
  overview: string
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const categoryFor = (name: string): Supplier['category'] => {
  const value = name.toLowerCase()
  if (/nike|adidas|sport|college|champion/.test(value)) return 'Sportswear'
  if (/ralph lauren|tommy hilfiger|patagonia|north face|columbia|levi|lee|wrangler|dickies/.test(value)) return 'Vintage'
  if (/band|hip hop|y2k|tie dye/.test(value)) return 'Streetwear'
  return 'Mixed'
}

const bestSellers = [
  { name: '50x NIKE SPORT T-SHIRTS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/Nikesport.png?v=1782817753&width=533' },
  { name: '50x BRANDED POLYESTER SWEATSHIRTS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/Sportbrandsweatshirt.png?v=1719332672&width=533' },
  { name: '50x CHAMPION SWEATSHIRTS/HOODIES', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/ChampionSweatshirt.png?v=1700228711&width=533' },
  { name: '50x KIDS BRANDED JACKETS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/KIDSMIXBRANDJACKETGRADEA.png?v=1719333136&width=533' },
  { name: '45KG MIXED VINTAGE BALE', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/BALE_1.png?v=1764272824&width=533' },
  { name: '50x LEVI\'S LEE WRANGLER SHIRTS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/LLWSHIRT.png?v=1740519053&width=533' },
  { name: '50x DICKIES 874 SKATER TROUSERS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/Dickies874Trousers_f31ec6ff-f0a8-4c8c-a629-fdcca7af8c55.png?v=1785149722&width=533' },
  { name: '25x LEVI\'S LEE WRANGLER DENIM JACKETS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/Levisleewranglerdenimjackets.png?v=1707315755&width=533' },
  { name: '50x VINTAGE 80s 90s SWEATSHIRTS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/VINTAGE80S90SSWEAT.png?v=1708968390&width=533' },
  { name: '50x COLUMBIA JACKETS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/ColumbiaJacket.png?v=1707315333&width=533' },
  { name: '100x BAND/MUSIC T-SHIRTS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/BandT-Shirts.png?v=1695922296&width=533' },
  { name: '50x NORTH FACE FLEECE/JACKET MIX', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/NorthfacefleecejacketmixA.png?v=1707394961&width=533' },
  { name: '50x LEVI\'S LEE WRANGLER WOMEN\'S DENIM SHORTS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/LLWladiesshort.png?v=1717020702&width=533' },
  { name: '20KG BRANDED RESELLER BOX', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/reseller-box.png?v=1781787523&width=533' },
  { name: '50x PATAGONIA FLEECE/JACKET MIX', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/Untitled2.png?v=1690623323&width=533' },
  { name: '25x LEVI\'S LEE WRANGLER DENIM SHERPA JACKETS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/LLWSHARPAJACKET.png?v=1719332449&width=533' },
  { name: '50x BRANDED BEANIES', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/BRANDBEANIESCAP.png?v=1727786790&width=533' },
  { name: '50x TOMMY HILFIGER POLO SHIRTS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/TOMMYHILFIGERPOLOSHIRT.png?v=1708955134&width=533' },
  { name: '50x RALPH LAUREN SHIRTS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/RalphLaurenShirts.png?v=1695923611&width=533' },
  { name: '50x COLUMBIA FLEECE/JACKET MIX', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/COLUMBIAJACKET_FLEECE.png?v=1719332687&width=533' },
  { name: '50x LEVI\'S WOMEN\'S DENIM JEANS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/Levi_sWomen_sDenimJeans.png?v=1695567283&width=533' },
  { name: '50x ADIDAS WOMEN\'S MIX', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/adidasmixladies.png?v=1772107742&width=533' },
  { name: '100x TIE DYE T-SHIRT', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/TIE-DYESHIRT.png?v=1708955100&width=533' },
  { name: '50x USA COLLEGE/SPORT HOODIES', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/USACollegeHoodie.png?v=1697983521&width=533' },
  { name: '30x GENUINE LEATHER JACKETS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/LeatherJackets.png?v=1695920527&width=533' },
  { name: '25x TWEED BLAZERS/COATS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/Men_Blazers.jpg?v=1781703377&width=533' },
  { name: '50x CHRISTMAS SWEATERS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/CopyofTommyhilfigercottonpant-1.png?v=1761849791&width=533' },
  { name: '50x BRANDED SPORT SHORTS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/BrandedShortMix.png?v=1695922441&width=533' },
  { name: '50x BRANDED SHELL JACKETS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/BrandShellJacket.png?v=1761133191&width=533' },
  { name: '50x LEVI\'S 505/517/550/560 JEANS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/LANDSENDLADIESMIX_2.png?v=1772725174&width=533' },
  { name: '50x LEE EMBROIDERED/PRINTED SWEATSHIRTS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/LEESWEAT.png?v=1708968348&width=533' },
  { name: '100x BRANDED SPORT POLO SHIRTS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/SPORTBRANDCOLLART-SHIRT.png?v=1771872037&width=533' },
  { name: '50x BRANDED SWEATSHIRTS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/BRANDEDSWEATSHIRTS.png?v=1734022097&width=533' },
  { name: '20x WOMEN\'S AFGHAN JACKETS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/AFGHANJACKET.png?v=1727794061&width=533' },
  { name: '50x BUFFALO JACKETS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/BUFFALOJACKET.png?v=1777244598&width=533' },
  { name: '20x WOMEN\'S LEATHER JACKETS', image: 'https://vintagewholesalesupplyltd.com/cdn/shop/files/Women_sLeatherJackets.png?v=1705600084&width=533' },
] as const

const vintageWholesaleSuppliers: Supplier[] = bestSellers.map((product, index) => ({
  slug: slugify(product.name),
  category: categoryFor(product.name),
  title: product.name,
  short: 'Supplier access for this wholesale stock category.',
  price: 9.99,
  badge: index < 4 ? 'Best seller' : undefined,
  image: product.image,
  gallery: [product.image],
  typicalProducts: [product.name],
  typicalPricing: 'Pricing and availability are shown by the supplier and can change over time.',
  minimumOrder: 'Varies by product, grade and current supplier availability.',
  shipping: 'Supplier shipping terms apply when purchasing stock separately.',
  bestFor: 'Resellers looking to source this type of stock for resale.',
  overview: 'Purchase access to the supplier information for this stock category. Physical inventory is ordered separately from the third-party supplier.'
}))

export const suppliers: Supplier[] = [
  {
    slug: 'vintage-ralph-lauren',
    category: 'Vintage',
    title: 'Vintage Ralph Lauren Supplier',
    short: 'A curated source for vintage Ralph Lauren stock including polos, shirts, knits and outerwear.',
    price: 19.99,
    badge: 'Popular',
    image: 'https://cdn.media.amplience.net/i/frasersdev/53320102_o?fmt=auto&upscale=false&w=1534&h=1534&v=20260331140309&sm=scaleFit&$h-ttl$',
    gallery: ['https://cdn.media.amplience.net/i/frasersdev/53320102_o?fmt=auto&upscale=false&w=1534&h=1534&v=20260331140309&sm=scaleFit&$h-ttl$'],
    typicalProducts: ['Polo shirts', 'Shirts', 'Knitwear', 'Outerwear'],
    typicalPricing: 'Pricing varies depending on grade, product type and order size.',
    minimumOrder: 'Varies by current supplier stock.',
    shipping: 'Shipping options and rates are provided by the supplier.',
    bestFor: 'Resellers focused on recognisable Ralph Lauren stock.',
    overview: 'Supplier access for sourcing Ralph Lauren clothing to purchase independently for resale.'
  },
  ...vintageWholesaleSuppliers
]

export const getSupplier = (slug: string) => suppliers.find((supplier) => supplier.slug === slug)
