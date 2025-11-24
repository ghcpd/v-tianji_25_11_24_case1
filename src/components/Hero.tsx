export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-pattern">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-pine/10 px-3 py-1 text-sm font-medium text-pine">
            Soft. Warm. Traceable.
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-merino-900 sm:text-5xl lg:text-6xl">
            Merino layers engineered for warmth without the weight.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-merino-600">
            Temperature-regulating, odor-resistant, and unbelievably soft. Built for alpine dawn patrols and cozy cabin nights alike.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#shop"
              className="rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-pine/90"
            >
              Shop Warm Layers
            </a>
            <a
              href="#story"
              className="rounded-full border border-merino-200 px-6 py-3 text-sm font-semibold text-merino-800 transition hover:-translate-y-0.5 hover:border-pine hover:text-pine"
            >
              Why Merino?
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm text-merino-600">
            <div>
              <dt className="font-semibold text-merino-900">17.51 micron</dt>
              <dd>Ultra-fine fibers</dd>
            </div>
            <div>
              <dt className="font-semibold text-merino-900">ZQ Certified</dt>
              <dd>Ethical sourcing</dd>
            </div>
            <div>
              <dt className="font-semibold text-merino-900">100% Traceable</dt>
              <dd>Farm to fabric</dd>
            </div>
          </dl>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-sand to-white shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
              alt="Model wearing merino base layer"
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-4 text-sm text-merino-600 shadow-lg backdrop-blur">
              <p className="font-semibold text-merino-900">Layer smarter</p>
              <p>Regulates body temp across changing conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
