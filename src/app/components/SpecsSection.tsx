'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const acousticSpecs = [
  ['Headphone type', 'Closed, over-ear'],
  ['Driver unit', '30 mm'],
  ['Frequency response', '4 Hz-40,000 Hz'],
  ['Bluetooth response', '20 Hz-40,000 Hz with LDAC'],
  ['Magnet', 'Neodymium'],
  ['Weight', 'Approx. 254 g'],
];

const wirelessSpecs = [
  ['Bluetooth version', '5.3'],
  ['Audio formats', 'SBC, AAC, LDAC, LC3'],
  ['Multipoint', 'Yes'],
  ['Music playback', 'Max. 30 hrs NC ON / 40 hrs NC OFF'],
  ['Call time', 'Max. 24 hrs NC ON / 28 hrs NC OFF'],
  ['Charge time', 'Approx. 3.5 hrs via USB'],
];

function SpecColumn({ title, specs }: { title: string; specs: string[][] }) {
  return (
    <div className="spec-column">
      <h3>{title}</h3>
      {specs.map(([name, value]) => (
        <div className="spec-row" key={name}>
          <span>{name}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  );
}

export default function SpecsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tween = gsap.fromTo(
      '.spec-row',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.055,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 68%',
          toggleActions: 'play none none reverse',
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section id="specs" ref={sectionRef} className="specs-section">
      <div className="section-kicker label">Technical specifications</div>
      <h2 className="section-title">The essentials, clearly stated.</h2>
      <div className="specs-grid">
        <SpecColumn title="Acoustic Specs" specs={acousticSpecs} />
        <SpecColumn title="Wireless & Battery" specs={wirelessSpecs} />
      </div>
      <div className="specs-accent" />
    </section>
  );
}
