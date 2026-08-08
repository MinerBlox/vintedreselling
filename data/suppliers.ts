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

export const suppliers: Supplier[] = [
  {
    slug: 'vintage-ralph-lauren',
    category: 'Vintage',
    title: 'Vintage Ralph Lauren Supplier',
    short: 'A curated source for vintage polos, knits, quarter-zips and outerwear.',
    price: 19.99,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=85',
    ],
    typicalProducts: ['Quarter-zips', 'Polo shirts', 'Knitwear', 'Jackets'],
    typicalPricing: 'Commonly £5–£18 per piece depending on grade and order size.',
    minimumOrder: 'Varies by drop and supplier stock.',
    shipping: 'UK and selected international shipping options.',
    bestFor: 'Resellers focused on recognisable vintage branded staples.',
    overview: 'A supplier selected for a consistent mix of wearable vintage Ralph Lauren pieces rather than random bulk stock.'
  },
  {
    slug: 'streetwear-supplier',
    category: 'Streetwear',
    title: 'Streetwear Supplier',
    short: 'Branded streetwear, graphic tees, sweats and seasonal pieces.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=1200&q=85',
    ],
    typicalProducts: ['Graphic tees', 'Sweatshirts', 'Hoodies', 'Streetwear accessories'],
    typicalPricing: 'Typically £6–£25 per item depending on brand and condition.',
    minimumOrder: 'Low minimums on selected stock.',
    shipping: 'Shipping rates shown by the supplier at checkout.',
    bestFor: 'Sellers who want trend-led pieces suited to younger buyers.',
    overview: 'A broad streetwear source with a focus on pieces that photograph and list well on resale marketplaces.'
  },
  {
    slug: 'nike-sportswear',
    category: 'Sportswear',
    title: 'Nike / Sportswear Supplier',
    short: 'Sportswear bundles, track tops, football pieces and branded basics.',
    price: 16.99,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85',
    ],
    typicalProducts: ['Track jackets', 'Sports tees', 'Football tops', 'Sweatshirts'],
    typicalPricing: 'Usually £5–£20 per item depending on bundle size.',
    minimumOrder: 'Bundle-dependent.',
    shipping: 'UK delivery with rates based on order weight.',
    bestFor: 'Resellers looking for accessible branded sportswear stock.',
    overview: 'A practical sportswear source with an emphasis on recognisable brands and everyday resale demand.'
  },
  {
    slug: 'vintage-clothing',
    category: 'Vintage',
    title: 'Vintage Clothing Supplier',
    short: 'Mixed vintage workwear, denim, sweatshirts and branded clothing.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=85',
    ],
    typicalProducts: ['Denim', 'Workwear', 'Sweatshirts', 'Mixed branded vintage'],
    typicalPricing: 'Approx. £3–£15 per piece across common bundles.',
    minimumOrder: 'Options for smaller test orders.',
    shipping: 'Calculated by weight and destination.',
    bestFor: 'Newer resellers testing a wider range of vintage categories.',
    overview: 'A mixed vintage source intended for sellers who prefer variety over one tightly defined brand or category.'
  },
  {
    slug: 'branded-hoodies',
    category: 'Mixed',
    title: 'Branded Hoodie Supplier',
    short: 'Hoodies and sweats from recognisable casual and sportswear labels.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=85',
    ],
    typicalProducts: ['Hoodies', 'Crewnecks', 'Zip-ups', 'Fleeces'],
    typicalPricing: 'Typically £5–£16 per piece.',
    minimumOrder: 'Small bundle options available.',
    shipping: 'Supplier-calculated shipping.',
    bestFor: 'Simple, easy-to-list stock with broad appeal.',
    overview: 'A straightforward source for branded hoodies and sweatshirts suited to repeatable listing formats.'
  },
  {
    slug: 'wholesale-mystery-box',
    category: 'Mixed',
    title: 'Wholesale Mystery Box Supplier',
    short: 'Mixed boxes for sellers who prefer variety and lower per-item buying costs.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85',
    ],
    typicalProducts: ['Mixed tops', 'Outerwear', 'Sportswear', 'Vintage pieces'],
    typicalPricing: 'Per-item cost varies by box size and grade.',
    minimumOrder: 'One box.',
    shipping: 'Dependent on box size and destination.',
    bestFor: 'Sellers comfortable sorting and listing mixed categories.',
    overview: 'A higher-variety sourcing option for resellers who want mixed inventory rather than choosing each piece individually.'
  }
]

export const getSupplier = (slug: string) => suppliers.find((supplier) => supplier.slug === slug)
