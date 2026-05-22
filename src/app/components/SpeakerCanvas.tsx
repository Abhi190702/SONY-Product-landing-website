'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useImageSequenceCanvas } from './useImageSequenceCanvas';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;

export default function SpeakerCanvas() {
  const containerRef = useRef<HTMLElement>(null);
  const { canvasRef } = useImageSequenceCanvas({
    background: '#080808',
    containerRef,
    folder: 'speaker',
    totalFrames: TOTAL_FRAMES,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const timelines: gsap.core.Timeline[] = [];
    const triggers: ScrollTrigger[] = [];

    const beatA = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '20% top',
        toggleActions: 'play reverse play reverse',
      },
    });
    beatA
      .fromTo('#sp-beat-a .label', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' })
      .fromTo('#sp-beat-a .section-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.35')
      .fromTo('#sp-beat-a .body-copy', { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, '-=0.3');
    timelines.push(beatA);

    const beatB = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: '20% top',
        end: '50% top',
        toggleActions: 'play reverse play reverse',
      },
    });
    beatB
      .fromTo('#sp-beat-b .label', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.55, ease: 'power3.out' })
      .fromTo('#sp-beat-b .section-title', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, '-=0.28')
      .fromTo('#sp-beat-b li', { opacity: 0, x: -28 }, { opacity: 1, x: 0, duration: 0.45, stagger: 0.1, ease: 'power3.out' }, '-=0.2')
      .fromTo('#sp-beat-b .spec-chip', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power3.out' }, '-=0.05');
    timelines.push(beatB);

    const beatC = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: '50% top',
        end: '75% top',
        toggleActions: 'play reverse play reverse',
      },
    });
    beatC
      .fromTo('#sp-beat-c .label', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.55, ease: 'power3.out' })
      .fromTo('#sp-beat-c .section-title', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, '-=0.28')
      .fromTo('#sp-beat-c .component-card', { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.42, stagger: 0.08, ease: 'power3.out' }, '-=0.15');
    timelines.push(beatC);

    const beatD = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: '75% top',
        end: 'bottom bottom',
        toggleActions: 'play reverse play reverse',
      },
    });
    beatD
      .fromTo('#sp-beat-d .section-title', { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.72, ease: 'power3.out' })
      .fromTo('#sp-beat-d .body-copy', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.62, ease: 'power3.out' }, '-=0.25')
      .fromTo('#sp-beat-d small', { opacity: 0 }, { opacity: 1, duration: 0.5, repeat: 1, yoyo: true }, '-=0.1');
    timelines.push(beatD);

    timelines.forEach((timeline) => {
      if (timeline.scrollTrigger) triggers.push(timeline.scrollTrigger);
    });

    return () => {
      timelines.forEach((timeline) => timeline.kill());
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="technology" ref={containerRef} className="canvas-section speaker-section">
      <div className="sticky-stage">
        <canvas ref={canvasRef} className="sequence-canvas" aria-label="Sony driver technology exploded view animation" />
        <div className="ambient-glow speaker-glow" />

        <div id="sp-beat-a" className="story-overlay">
          <div className="story-panel center">
            <p className="label">Driver Technology</p>
            <h2 className="section-title">The heart of every note.</h2>
            <p className="body-copy">A precision-engineered 30mm driver, the same architecture found in professional studio monitors. Tuned for accuracy, stamina, and truth.</p>
          </div>
        </div>

        <div id="sp-beat-b" className="story-overlay">
          <div className="story-panel">
            <p className="label">Acoustic Engineering</p>
            <h2 className="section-title">Physics, made audible.</h2>
            <ul className="story-list">
              <li>Voice coil wound from oxygen-free copper for zero signal loss.</li>
              <li>Neodymium magnet array delivers 40% more magnetic flux.</li>
              <li>Composite diaphragm eliminates harmonic distortion above 18kHz.</li>
            </ul>
            <div className="chip-row">
              <span className="spec-chip">Voice Coil</span>
              <span className="spec-chip">Neodymium Magnet</span>
              <span className="spec-chip">Diaphragm</span>
            </div>
          </div>
        </div>

        <div id="sp-beat-c" className="story-overlay">
          <div className="story-panel right">
            <p className="label">Components</p>
            <h2 className="section-title">Every part, a purpose.</h2>
            <div className="component-grid">
              {[
                ['Driver Cone', 'Wide-band response'],
                ['Voice Coil', 'Copper precision'],
                ['Spider', 'Motion control'],
                ['Magnet Assembly', 'Dense flux field'],
                ['Dust Cap', 'Airflow symmetry'],
                ['Terminal Plate', 'Clean transfer'],
              ].map(([name, text]) => (
                <div className="component-card" key={name}>
                  <span />
                  <strong>{name}</strong>
                  <small>{text}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="sp-beat-d" className="story-overlay">
          <div className="story-panel center">
            <h2 className="section-title">Engineered to move you.</h2>
            <p className="body-copy">Six precision components. One unified acoustic system. The same driver technology used in our professional monitor series, now tuned for the world you carry with you.</p>
            <small>Continue scrolling</small>
          </div>
        </div>
      </div>
    </section>
  );
}
