export default function CTASection() {
  return (
    <section id="buy" className="cta-section">
      <img className="product-float" src="/media/images/wh-1000xm6-hero.jpeg" alt="Sony WH-1000XM6 headphones" />
      <p className="sony-eyebrow">WH-1000XM6</p>
      <h1 className="hero-title">Your music. Nothing else.</h1>
      <p className="body-copy">Sony&apos;s flagship wireless noise cancelling headphones, designed for focus, clarity, and comfort.</p>
      <div className="price-block">
        <strong>Premium 1000X series</strong>
        <span>Available in multiple finishes depending on region.</span>
      </div>
      <div className="cta-row">
        <a className="primary-cta buy-cta" href="https://www.sony.co.in/headphones/products/wh-1000xm6" target="_blank" rel="noreferrer">
          View on Sony India
        </a>
        <a className="secondary-cta" href="#specs">
          View specifications
        </a>
      </div>
      <div className="trust-row" aria-label="Purchase benefits">
        <span>Noise cancelling</span>
        <span>LDAC</span>
        <span>Multipoint</span>
      </div>
    </section>
  );
}
