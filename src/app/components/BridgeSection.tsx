'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BridgeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tween = gsap.fromTo(
      '.bridge-content > *',
      { opacity: 0, scale: 0.96, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.11,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play reverse play reverse',
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bridge-section">
      <div className="bridge-content">
        <div className="bridge-line" />
        <p className="label">The Science Inside</p>
        <h2 className="section-title">Built around a single obsession.</h2>
        <p className="body-copy">Every component of the WH-1000XM6 was designed with one purpose: to disappear. So your music does not.</p>
      </div>
    </section>
  );
}
