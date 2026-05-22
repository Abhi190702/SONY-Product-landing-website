const stats = [
  ['30 mm', 'driver unit'],
  ['30 hrs', 'NC playback'],
  ['Bluetooth 5.3', 'wireless'],
  ['254 g', 'approx. weight'],
];

export default function ProductHero() {
  return (
    <section id="overview" className="sony-hero">
      <div className="sony-hero-copy">
        <p className="sony-eyebrow">WH-1000XM6 Wireless Noise Cancelling Headphones</p>
        <h1>Beyond quiet. Transcendent sound.</h1>
        <p>
          Premium wireless headphones built for Sony&apos;s most advanced noise cancelling, studio-level sound,
          clearer calls, and long-wearing comfort.
        </p>
        <div className="sony-hero-actions">
          <a href="#buy" className="sony-button primary">Buy now</a>
          <a href="#videos" className="sony-button secondary">Watch features</a>
        </div>
      </div>

      <div className="sony-hero-media" aria-label="Sony WH-1000XM6 product image">
        <img src="/media/images/wh-1000xm6-hero.jpeg" alt="Sony WH-1000XM6 headphones in black" />
      </div>

      <div className="sony-stat-strip" aria-label="Product highlights">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
