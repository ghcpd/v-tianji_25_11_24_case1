export type Product = {
  id: string
  name: string
  description: string
  price: number
  category: 'Base Layer' | 'Mid Layer' | 'Accessories'
  warmth: 'Light' | 'Mid' | 'Heavy'
  rating: number
  reviews: number
  image: string
  badges?: string[]
  colors: { name: string; hex: string }[]
  sizes: string[]
  features: string[]
  care: string[]
}

export type CartItem = {
  product: Product
  color: string
  size: string
  quantity: number
}

export const products: Product[] = [
  {
    id: 'base-crew',
    name: 'Merino Air Base Crew',
    description: 'Featherlight 150gsm merino for breathable next-to-skin comfort.',
    price: 89,
    category: 'Base Layer',
    warmth: 'Light',
    rating: 4.8,
    reviews: 182,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    badges: ['Best Seller'],
    colors: [
      { name: 'Charcoal', hex: '#2f3d4a' },
      { name: 'Pine', hex: '#0b5c4f' },
      { name: 'Sand', hex: '#f6e8d7' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: ['Seamless shoulders', 'Flatlock stitching', 'Odor-resistant wool blend'],
    care: ['Machine wash cold', 'Lay flat to dry', 'Do not bleach'],
  },
  {
    id: 'base-zip',
    name: 'Merino Ascend 1/4 Zip',
    description: 'Versatile 200gsm merino with zip venting for dynamic warmth control.',
    price: 109,
    category: 'Base Layer',
    warmth: 'Mid',
    rating: 4.9,
    reviews: 133,
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    badges: ['Staff Pick'],
    colors: [
      { name: 'Midnight', hex: '#0f172a' },
      { name: 'Copper', hex: '#b45309' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    features: ['Quarter zip vent', 'Thumb loops', 'UPF 30+'],
    care: ['Machine wash cold', 'Lay flat to dry'],
  },
  {
    id: 'mid-hoodie',
    name: 'Merino Ridge Hoodie',
    description: 'Cozy 260gsm brushed merino fleece with articulated hood.',
    price: 149,
    category: 'Mid Layer',
    warmth: 'Heavy',
    rating: 4.7,
    reviews: 96,
    image:
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80',
    badges: ['New'],
    colors: [
      { name: 'Fir', hex: '#14532d' },
      { name: 'Slate', hex: '#475569' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    features: ['Articulated hood', 'Zippered hand pockets', 'Drop-tail hem'],
    care: ['Machine wash cold', 'Tumble dry low'],
  },
  {
    id: 'mid-quilt',
    name: 'Merino Loft Hybrid',
    description: 'Mapped insulation panels with merino sleeves for aerobic warmth.',
    price: 189,
    category: 'Mid Layer',
    warmth: 'Mid',
    rating: 4.6,
    reviews: 74,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    badges: ['Trail Ready'],
    colors: [
      { name: 'Ink', hex: '#111827' },
      { name: 'Rust', hex: '#c2410c' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: ['Body-mapped insulation', 'Two-way front zip', 'Packable design'],
    care: ['Machine wash cold', 'Tumble dry low'],
  },
  {
    id: 'accessory-neck',
    name: 'Merino Breeze Neck Gaiter',
    description: 'Ultralight 120gsm neck tube for variable warmth and sun protection.',
    price: 32,
    category: 'Accessories',
    warmth: 'Light',
    rating: 4.5,
    reviews: 211,
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    badges: ['Everyday Carry'],
    colors: [
      { name: 'Heather', hex: '#475569' },
      { name: 'Berry', hex: '#be123c' },
    ],
    sizes: ['One Size'],
    features: ['Seamless tube', 'UPF 30+', '4-way stretch'],
    care: ['Machine wash cold', 'Lay flat to dry'],
  },
  {
    id: 'accessory-socks',
    name: 'Merino Summit Crew Socks',
    description: 'Targeted cushioning and mesh zones for all-day comfort.',
    price: 24,
    category: 'Accessories',
    warmth: 'Mid',
    rating: 4.9,
    reviews: 402,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    badges: ['Top Rated'],
    colors: [
      { name: 'Charcoal', hex: '#1f2937' },
      { name: 'Ocean', hex: '#0ea5e9' },
    ],
    sizes: ['S', 'M', 'L'],
    features: ['Reinforced heel & toe', 'Mesh ventilation', 'Arch support'],
    care: ['Machine wash warm', 'Tumble dry low'],
  },
]
