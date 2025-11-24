import type { CartItem } from '../data/products'

type CartDrawerProps = {
  isOpen: boolean
  items: CartItem[]
  onClose: () => void
  onUpdateQuantity: (item: CartItem, quantity: number) => void
  onRemove: (item: CartItem) => void
}

export function CartDrawer({ isOpen, items, onClose, onUpdateQuantity, onRemove }: CartDrawerProps) {
  if (!isOpen) return null

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40" data-testid="cart-drawer" role="dialog" aria-modal="true">
      <div className="flex h-full w-full max-w-md flex-col border-l border-merino-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-merino-100 p-5">
          <div>
            <h2 className="text-lg font-semibold text-merino-900">Your Cart</h2>
            <p className="text-sm text-merino-500">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
          </div>
          <button onClick={onClose} className="rounded-full bg-merino-50 p-2 text-merino-500 hover:text-merino-800" aria-label="Close cart">
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-sm text-merino-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={`${item.product.id}-${item.color}-${item.size}`} className="flex gap-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-20 w-20 rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-merino-900">{item.product.name}</p>
                        <p className="text-xs text-merino-500">{item.color} · {item.size}</p>
                      </div>
                      <button
                        onClick={() => onRemove(item)}
                        className="text-xs text-merino-400 hover:text-merino-600"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item, Math.max(1, item.quantity - 1))}
                          className="h-7 w-7 rounded-full border border-merino-200 text-merino-600"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span data-testid="cart-item-quantity" className="w-6 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item, item.quantity + 1)}
                          className="h-7 w-7 rounded-full border border-merino-200 text-merino-600"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-semibold text-merino-800">${item.product.price * item.quantity}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-merino-100 p-5">
          <div className="flex items-center justify-between text-sm text-merino-600">
            <span>Subtotal</span>
            <span className="text-lg font-semibold text-merino-900" data-testid="cart-subtotal">${subtotal.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full rounded-full bg-pine px-4 py-3 text-sm font-semibold text-white transition hover:bg-pine/90">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
