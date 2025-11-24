type HeaderProps = {
  cartCount: number
  onCartToggle: () => void
}

export function Header({ cartCount, onCartToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-merino-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-ember/80 to-pine/80"></div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-700">Merino</p>
            <span className="text-lg font-semibold tracking-tight text-merino-900">WarmLayer</span>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-merino-600 md:flex">
          {['Shop', 'About', 'Care', 'Sustainability', 'Contact'].map((item) => (
            <a key={item} href="#" className="transition hover:text-merino-900">
              {item}
            </a>
          ))}
        </nav>
        <button
          data-testid="cart-button"
          onClick={onCartToggle}
          className="relative flex items-center gap-2 rounded-full border border-merino-200 bg-white px-4 py-2 text-sm font-semibold text-merino-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <span>Cart</span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-pine text-xs font-bold text-white">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  )
}
