import { useState } from 'react'
import type { Product } from '../data/products'

type ProductDetailModalProps = {
  product: Product
  onClose: () => void
  onAddToCart: (product: Product, options: { color: string; size: string }) => void
}

export function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  const [color, setColor] = useState(product.colors[0]?.name ?? '')
  const [size, setSize] = useState(product.sizes[0] ?? '')

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      data-testid="product-modal"
    >
      <div className="relative grid w-full max-w-4xl gap-6 overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-merino-500 transition hover:text-merino-800"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="aspect-[4/5] overflow-hidden bg-merino-50">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-merino-400">{product.category}</p>
          <h2 className="mt-2 text-2xl font-semibold text-merino-900">{product.name}</h2>
          <p className="mt-2 text-sm text-merino-600">{product.description}</p>
          <p className="mt-4 text-xl font-semibold text-pine">${product.price}</p>
          <div className="mt-6">
            <label className="text-sm font-semibold text-merino-700">Color</label>
            <div className="mt-2 flex gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setColor(c.name)}
                  className={`h-8 w-8 rounded-full border-2 ${color === c.name ? 'border-pine ring-2 ring-pine/30' : 'border-transparent'}`}
                  style={{ backgroundColor: c.hex }}
                  aria-label={c.name}
                />
              ))}
            </div>
          </div>
          <div className="mt-6">
            <label className="text-sm font-semibold text-merino-700">Size</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`rounded-full border px-3 py-1 text-sm font-medium ${
                    size === s ? 'border-pine bg-pine text-white' : 'border-merino-200 text-merino-700'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-merino-700">Features</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-merino-600">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-merino-700">Care</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-merino-600">
              {product.care.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="mt-auto pt-6">
            <button
              data-testid="modal-add-to-cart"
              onClick={() => onAddToCart(product, { color, size })}
              className="w-full rounded-full bg-pine px-4 py-3 text-sm font-semibold text-white transition hover:bg-pine/90"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
