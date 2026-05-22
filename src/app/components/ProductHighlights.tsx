const highlights = [
  {
    title: 'The next evolution in noise cancellation',
    body: 'Advanced processors and an adaptive microphone system optimise noise cancelling in real time, keeping distractions out and music intact.',
  },
  {
    title: 'Premium sound, co-created with the masters',
    body: 'Tuned for detail and balance, WH-1000XM6 is built to preserve nuance so music keeps its texture, space, and intent.',
  },
  {
    title: 'Ultra-clear calls',
    body: 'Beamforming pickup focuses on your voice and reduces surrounding conversation, so calls stay clean even in busy spaces.',
  },
  {
    title: 'Tailor-quality comfort',
    body: 'A wider headband and smooth vegan leather distribute pressure more evenly for long listening sessions.',
  },
  {
    title: 'Smooth and fast connection',
    body: 'LE Audio readiness, Multipoint, Auto Switch, and long battery life make the headphones feel easy across daily devices.',
  },
];

export default function ProductHighlights() {
  return (
    <section id="features" className="sony-feature-grid-section">
      <div className="sony-section-heading">
        <p className="sony-eyebrow">Product experience</p>
        <h2>Your music. Nothing else.</h2>
      </div>
      <div className="sony-feature-grid">
        {highlights.map((item) => (
          <article key={item.title} className="sony-feature-card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
