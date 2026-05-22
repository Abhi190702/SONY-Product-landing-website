'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useImageSequenceCanvas } from './useImageSequenceCanvas';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;

export default function HeadphoneCanvas() {
  const containerRef = useRef<HTMLElement>(null);
  const { canvasRef, progress } = useImageSequenceCanvas({
    background: '#0A0A0A',
    containerRef,
    folder: 'headphone',
    totalFrames: TOTAL_FRAMES,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const timelines: gsap.core.Timeline[] = [];
    const triggers: ScrollTrigger[] = [];

    const beat1Exit = ScrollTrigger.create({
      trigger: container,
      start: '13% top',
      end: '15% top',
      onEnter: () => gsap.to('#hp-beat-1', { opacity: 0, y: -30, duration: 0.45, ease: 'power2.out', overwrite: true }),
      onLeaveBack: () => gsap.to('#hp-beat-1', { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', overwrite: true }),
    });
    triggers.push(beat1Exit);

    const beat2 = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: '15% top',
        end: '40% top',
        toggleActions: 'play reverse play reverse',
      },
    });
    beat2
      .fromTo('#hp-beat-2 .label', { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' })
      .fromTo('#hp-beat-2 .section-title', { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, '-=0.32')
      .fromTo('#hp-beat-2 .body-copy', { opacity: 0, x: -44 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.3')
      .fromTo('#hp-beat-2 .spec-chip', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.42, stagger: 0.12, ease: 'power3.out' }, '-=0.15');
    timelines.push(beat2);

    const beat3 = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: '40% top',
        end: '65% top',
        toggleActions: 'play reverse play reverse',
      },
    });
    beat3
      .fromTo('#hp-beat-3 .label', { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' })
      .fromTo('#hp-beat-3 .section-title', { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.72, ease: 'power3.out' }, '-=0.34')
      .fromTo('#hp-beat-3 li', { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.45, stagger: 0.1, ease: 'power3.out' }, '-=0.22')
      .fromTo('#hp-beat-3 .stat-card', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power3.out' }, '-=0.1');
    timelines.push(beat3);

    const beat4 = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: '65% top',
        end: '82% top',
        toggleActions: 'play reverse play reverse',
      },
    });
    beat4
      .fromTo('#hp-beat-4 .label', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      .fromTo('#hp-beat-4 .section-title', { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.3')
      .fromTo('#hp-beat-4 .accent-line', { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.65, transformOrigin: 'left center', ease: 'power3.out' }, '-=0.22')
      .fromTo('#hp-beat-4 .body-copy', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.62, ease: 'power3.out' }, '-=0.2');
    timelines.push(beat4);

    const beat5 = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: '82% top',
        end: 'bottom bottom',
        toggleActions: 'play reverse play reverse',
      },
    });
    beat5.fromTo('#hp-beat-5 .reveal', { opacity: 0, scale: 0.92, y: 28 }, { opacity: 1, scale: 1, y: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out' });
    timelines.push(beat5);

    timelines.forEach((timeline) => {
      if (timeline.scrollTrigger) triggers.push(timeline.scrollTrigger);
    });

    return () => {
      timelines.forEach((timeline) => timeline.kill());
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="engineering" ref={containerRef} className="canvas-section headphone-section">
      <div className="sticky-stage">
        <canvas ref={canvasRef} className="sequence-canvas" aria-label="Sony WH-1000XM6 exploded view animation" />
        <div className="ambient-glow hp-glow-one" />
        <div className="ambient-glow hp-glow-two" />

        <div id="hp-beat-1" className="story-overlay">
          <div className="story-panel center">
            <p className="label">Engineering sequence</p>
            <h1 className="hero-title">Designed from the inside out.</h1>
            <p className="body-copy">A closer look at the components behind the quiet, comfort, and control.</p>
            <div className="scroll-cue" />
          </div>
        </div>

        <div id="hp-beat-2" className="story-overlay">
          <div className="story-panel">
            <p className="label">Acoustic system</p>
            <h2 className="section-title">Every layer has a job.</h2>
            <p className="body-copy">A 30 mm driver, sealed acoustic structure, and tuned electronics work together for full-range listening.</p>
            <p className="body-copy">The frame sequence reveals how compact parts become a controlled, wearable sound system.</p>
            <div className="chip-row">
              <span className="spec-chip">30mm Driver</span>
              <span className="spec-chip">Control board</span>
              <span className="spec-chip">Lithium Battery</span>
            </div>
          </div>
        </div>

        <div id="hp-beat-3" className="story-overlay">
          <div className="story-panel right">
            <p className="label">Noise cancelling</p>
            <h2 className="section-title">Silence is processed in real time.</h2>
            <ul className="story-list">
              <li>Multi-microphone array captures noise from every angle.</li>
              <li>Real-time DSP adapts to your environment in milliseconds.</li>
              <li>Planes, trains, open offices: they simply fade away.</li>
            </ul>
            <div className="stat-grid">
              <div className="stat-card"><strong>8</strong><span>Microphones</span></div>
              <div className="stat-card"><strong>40dB</strong><span>Reduction</span></div>
              <div className="stat-card"><strong>HD</strong><span>Bluetooth</span></div>
              <div className="stat-card"><strong>30hr</strong><span>Battery</span></div>
            </div>
          </div>
        </div>

        <div id="hp-beat-4" className="story-overlay">
          <div className="story-panel">
            <p className="label">Sound quality</p>
            <h2 className="section-title">Detail without distraction.</h2>
            <div className="accent-line" />
            <p className="body-copy">High-resolution wireless listening with LDAC support helps preserve detail, space, and texture from compatible sources.</p>
          </div>
        </div>

        <div id="hp-beat-5" className="story-overlay">
          <div className="story-panel center bottom">
            <h1 className="hero-title reveal">Built to disappear.</h1>
            <p className="body-copy reveal">WH-1000XM6. Designed for focus, crafted for comfort.</p>
            <div className="cta-row reveal">
              <a className="primary-cta" href="#buy">Experience WH-1000XM6</a>
              <a className="secondary-cta" href="#specs">See full specs ↓</a>
            </div>
          </div>
        </div>

        <div className={`loading-screen ${progress < 35 ? 'visible' : 'done'}`} aria-hidden={progress >= 35}>
          <div className="loading-glow" />
          <div className="loading-content">
            <p>WH-1000XM6</p>
            <div className="loading-track"><span style={{ width: `${progress}%` }} /></div>
            <small>Loading... {progress}%</small>
          </div>
        </div>
      </div>
    </section>
  );
}
