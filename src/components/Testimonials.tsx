const testimonials = [
  {
    quote:
      'I wore the Ascend 1/4 Zip for a week-long hut trip—zero stink, zero itch, and perfect warmth across dawn skins and late-night card games.',
    name: 'Maya L.',
    role: 'Backcountry Guide',
  },
  {
    quote: 'The Ridge Hoodie is my go-to travel layer. It packs small, looks sharp, and handles plane A/C like a champ.',
    name: 'James P.',
    role: 'Product Designer',
  },
  {
    quote: 'Summit socks are the unsung hero of my kit. Cushion where it counts, breathable everywhere else.',
    name: 'Erin K.',
    role: 'Trail Runner',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-merino-900">Trail-tested praise</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="h-full rounded-3xl border border-merino-100 bg-merino-50/50 p-6 shadow-soft/20">
              <p className="text-sm text-merino-600">“{t.quote}”</p>
              <figcaption className="mt-4 text-sm font-semibold text-merino-800">
                {t.name}
                <span className="mt-1 block text-xs font-normal text-merino-400">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
