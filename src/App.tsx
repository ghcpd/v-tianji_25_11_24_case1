import { useMemo, useState } from 'react'
import { CartDrawer } from './components/CartDrawer'
import { FeatureHighlights } from './components/FeatureHighlights'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductDetailModal } from './components/ProductDetailModal'
import { ProductGrid } from './components/ProductGrid'
import { Testimonials } from './components/Testimonials'
import { type CartItem, type Product, products } from './data/products'

function App() {
  const [category, setCategory] = useState<'All' | Product['category']>('All')
  const [warmth, setWarmth] = useState<'All' | Product['warmth']>('All')
  const [search, setSearch] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const matchesWarmth = warmth === 'All' || p.warmth === warmth
      const matchesSearch =
        search.trim().length === 0 ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesWarmth && matchesSearch
    })
  }, [category, warmth, search])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const upsertCartItem = (product: Product, options?: { color?: string; size?: string }) => {
    const color = options?.color ?? product.colors[0]?.name ?? 'Standard'
    const size = options?.size ?? product.sizes[0] ?? 'One Size'

    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.color === color && item.size === size,
      )
      if (existingIdx >= 0) {
        const next = [...prev]
        next[existingIdx] = { ...next[existingIdx], quantity: next[existingIdx].quantity + 1 }
        return next
      }
      return [...prev, { product, color, size, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const handleUpdateQuantity = (item: CartItem, quantity: number) => {
    setCartItems((prev) =>
      prev.map((it) =>
        it.product.id === item.product.id && it.color === item.color && it.size === item.size
          ? { ...it, quantity }
          : it,
      ),
    )
  }

  const handleRemove = (item: CartItem) => {
    setCartItems((prev) =>
      prev.filter(
        (it) => !(it.product.id === item.product.id && it.color === item.color && it.size === item.size),
      ),
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand via-white to-merino-50 text-merino-900">
      <Header cartCount={cartCount} onCartToggle={() => setIsCartOpen((open) => !open)} />
      <main className="space-y-0">
        <Hero />
        <FeatureHighlights />
        <ProductGrid
          products={filteredProducts}
          category={category}
          warmth={warmth}
          search={search}
          setCategory={setCategory}
          setWarmth={setWarmth}
          setSearch={setSearch}
          onViewDetails={setSelectedProduct}
          onAddToCart={(product) => upsertCartItem(product)}
        />
        <Testimonials />
      </main>
      <Footer />

      {selectedProduct ? (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(product, options) => {
            upsertCartItem(product, options)
            setSelectedProduct(null)
          }}
        />
      ) : null}

      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
      />
    </div>
  )
}

export default App
