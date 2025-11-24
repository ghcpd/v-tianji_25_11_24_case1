export function Footer() {
  return (
    <footer className="border-t border-merino-100 bg-merino-900 text-merino-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-white">Layer into the lookout.</h3>
          <p className="mt-3 text-sm text-merino-300">Get early access to product drops, care tips, and field notes.</p>
          <form className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="flex-1 rounded-full border border-merino-600 bg-transparent px-4 py-3 text-sm text-merino-100 placeholder:text-merino-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/30"
            />
            <button
              type="submit"
              className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-merino-900 transition hover:bg-emerald-300"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm text-merino-300 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-merino-200">Explore</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#shop" className="hover:text-white">Shop</a></li>
              <li><a href="#story" className="hover:text-white">Story</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-merino-200">Support</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-white">Care Guide</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-merino-200">Connect</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-white">@merinowarm</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-merino-800 py-6 text-center text-xs text-merino-500">
        © {new Date().getFullYear()} Merino WarmLayer. All rights reserved.
      </div>
    </footer>
  )
}
