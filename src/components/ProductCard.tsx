import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
  onViewDetails: (product: Product) => void
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onViewDetails, onAddToCart }: ProductCardProps) {
  return (
    <article
      data-testid="product-card"
      data-product-id={product.id}
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-merino-100 bg-white shadow-soft/30 transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {product.badges?.length ? (
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {product.badges.map((badge) => (
              <span key={badge} className="rounded-full bg-merino-900/80 px-3 py-1 text-xs font-semibold text-white">
                {badge}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-merino-900">{product.name}</h3>
          <span className="text-base font-semibold text-pine">${product.price}</span>
        </div>
        <p className="mt-2 flex-1 text-sm text-merino-600">{product.description}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-merino-500">
          <span className="font-semibold text-merino-700">{product.rating.toFixed(1)}</span>
          <span>({product.reviews} reviews)</span>
          <span className="ml-auto rounded-full bg-merino-100 px-2 py-1 text-[11px] font-medium text-merino-700">
            {product.warmth} Warmth
          </span>
        </div>
        <div className="mt-4 flex items-center gap-2">
          {product.colors.map((color) => (
            <span
              key={color.name}
              className="h-6 w-6 rounded-full border border-merino-200"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <button
            data-testid="view-details"
            onClick={() => onViewDetails(product)}
            className="flex-1 rounded-full border border-merino-200 px-4 py-2 text-sm font-semibold text-merino-800 transition hover:border-pine hover:text-pine"
          >
            View details
          </button>
          <button
            data-testid="add-to-cart"
            onClick={() => onAddToCart(product)}
            className="flex-1 rounded-full bg-pine px-4 py-2 text-sm font-semibold text-white transition hover:bg-pine/90"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}
