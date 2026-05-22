'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type SequenceOptions = {
  background: string;
  containerRef: RefObject<HTMLElement | null>;
  folder: 'headphone' | 'speaker';
  totalFrames?: number;
};

const DEFAULT_TOTAL_FRAMES = 240;

const getFramePath = (folder: string, index: number) =>
  `/frames/${folder}/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`;

const getUsableImage = (images: HTMLImageElement[], requestedIndex: number) => {
  const requested = images[requestedIndex];
  if (requested?.complete && requested.naturalWidth > 0) return requested;

  for (let offset = 1; offset < images.length; offset++) {
    const back = images[requestedIndex - offset];
    if (back?.complete && back.naturalWidth > 0) return back;

    const forward = images[requestedIndex + offset];
    if (forward?.complete && forward.naturalWidth > 0) return forward;
  }

  return undefined;
};

export function useImageSequenceCanvas({ background, containerRef, folder, totalFrames = DEFAULT_TOTAL_FRAMES }: SequenceOptions) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<boolean[]>(Array(totalFrames).fill(false));
  const targetFrameRef = useRef(0);
  const smoothFrameRef = useRef(0);
  const drawnFrameRef = useRef(-1);
  const rafRef = useRef(0);
  const resizeTimerRef = useRef(0);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let disposed = false;
    const progress = { count: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      drawnFrameRef.current = -1;
      renderFrame(Math.round(smoothFrameRef.current), true);
      ScrollTrigger.refresh();
    };

    const getProgress = () => {
      const container = containerRef.current;
      if (!container) return 0;
      const total = Math.max(1, container.offsetHeight - window.innerHeight);
      return Math.min(1, Math.max(0, -container.getBoundingClientRect().top / total));
    };

    const updateTargetFromScroll = () => {
      const rawFrame = getProgress() * (totalFrames - 1);
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      targetFrameRef.current = isMobile ? Math.min(totalFrames - 1, Math.round(rawFrame / 2) * 2) : rawFrame;
    };

    const drawImageCover = (img: HTMLImageElement) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = width / height;
      let drawW: number;
      let drawH: number;
      let drawX: number;
      let drawY: number;

      if (canvasAspect > imgAspect) {
        drawW = width;
        drawH = width / imgAspect;
        drawX = 0;
        drawY = (height - drawH) / 2;
      } else {
        drawH = height;
        drawW = height * imgAspect;
        drawX = (width - drawW) / 2;
        drawY = 0;
      }

      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    };

    const renderFrame = (index: number, force = false) => {
      const clamped = Math.max(0, Math.min(totalFrames - 1, index));
      if (!force && clamped === drawnFrameRef.current) return;

      const img = getUsableImage(imagesRef.current, clamped);
      if (!img) {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        return;
      }

      drawImageCover(img);
      drawnFrameRef.current = clamped;
    };

    const tick = () => {
      updateTargetFromScroll();
      const delta = targetFrameRef.current - smoothFrameRef.current;
      smoothFrameRef.current += delta * 0.18;

      if (Math.abs(delta) < 0.08) {
        smoothFrameRef.current = targetFrameRef.current;
      }

      renderFrame(Math.round(smoothFrameRef.current));
      rafRef.current = requestAnimationFrame(tick);
    };

    const markLoaded = (index: number) => {
      if (disposed || loadedRef.current[index]) return;
      loadedRef.current[index] = true;
      progress.count += 1;
      setLoadedCount(progress.count);

      if (index === 0 || Math.abs(index - Math.round(smoothFrameRef.current)) < 3) {
        renderFrame(Math.round(smoothFrameRef.current), true);
      }
    };

    const loadImage = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || img.src) return;

      img.decoding = 'async';
      img.onload = () => markLoaded(index);
      img.onerror = () => markLoaded(index);
      img.src = getFramePath(folder, index);
    };

    imagesRef.current = Array.from({ length: totalFrames }, () => new Image());
    resize();

    for (let i = 0; i < totalFrames; i++) loadImage(i);

    const onResize = () => {
      window.clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = window.setTimeout(resize, 16);
    };

    window.addEventListener('resize', onResize, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafRef.current);
      window.clearTimeout(resizeTimerRef.current);
      window.removeEventListener('resize', onResize);
      imagesRef.current.forEach((img) => {
        img.onload = null;
        img.onerror = null;
        img.src = '';
      });
    };
  }, [background, containerRef, folder, totalFrames]);

  return {
    canvasRef,
    loadedCount,
    progress: Math.min(100, Math.round((loadedCount / totalFrames) * 100)),
  };
}
