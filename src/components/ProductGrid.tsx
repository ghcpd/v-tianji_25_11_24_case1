import type { Product } from '../data/products'
import { ProductCard } from './ProductCard'

type Filters = {
  category: 'All' | Product['category']
  warmth: 'All' | Product['warmth']
  search: string
}

type ProductGridProps = Filters & {
  products: Product[]
  onViewDetails: (product: Product) => void
  onAddToCart: (product: Product) => void
  setCategory: (category: Filters['category']) => void
  setWarmth: (warmth: Filters['warmth']) => void
  setSearch: (search: string) => void
}

export function ProductGrid({
  products,
  category,
  warmth,
  search,
  setCategory,
  setWarmth,
  setSearch,
  onViewDetails,
  onAddToCart,
}: ProductGridProps) {
  return (
    <section id="shop" className="bg-merino-50/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-merino-900">Warm-layer shop</h2>
            <p className="text-sm text-merino-500">Base, mid, and accessories designed for four-season adventures.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {(['All', 'Base Layer', 'Mid Layer', 'Accessories'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-medium ${
                  category === cat ? 'border-pine bg-pine text-white' : 'border-merino-200 text-merino-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {(['All', 'Light', 'Mid', 'Heavy'] as const).map((w) => (
              <button
                key={w}
                onClick={() => setWarmth(w)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                  warmth === w ? 'border-pine bg-pine/10 text-pine' : 'border-merino-200 text-merino-500'
                }`}
              >
                {w} warmth
              </button>
            ))}
          </div>
          <div className="relative w-full max-w-xs">
            <input
              type="search"
              placeholder="Search (e.g. zip, hoodie)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-merino-200 bg-white px-4 py-2 text-sm text-merino-700 placeholder:text-merino-400 focus:border-pine focus:outline-none focus:ring-2 focus:ring-pine/20"
            />
            <span className="pointer-events-none absolute right-4 top-2.5 text-sm text-merino-400">🔍</span>
          </div>
        </div>
        <div
          data-testid="product-grid"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.length === 0 ? (
            <p className="col-span-full text-sm text-merino-500">No products match your filters.</p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
                onAddToCart={onAddToCart}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
