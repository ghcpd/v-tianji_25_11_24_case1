const features = [
  {
    title: 'Temperature Regulating',
    description: 'Merino fibers trap air to insulate, yet breathe to prevent overheating.',
    icon: '🌡️',
  },
  {
    title: 'Odor Resistant',
    description: 'Natural lanolin keeps garments fresher for longer between washes.',
    icon: '🌿',
  },
  {
    title: 'Ultra Soft',
    description: '17.51 micron fibers feel silky against skin with zero itch.',
    icon: '🪶',
  },
  {
    title: 'Moisture Wicking',
    description: 'Actively pulls sweat away to keep you dry on the move.',
    icon: '💧',
  },
]

export function FeatureHighlights() {
  return (
    <section id="story" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-merino-100 bg-merino-50/60 p-6 shadow-soft/20 transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="text-3xl">{feature.icon}</div>
            <h3 className="mt-4 text-lg font-semibold text-merino-900">{feature.title}</h3>
            <p className="mt-2 text-sm text-merino-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
