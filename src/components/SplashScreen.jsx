import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import spl1 from '../assets/spl2.png';

export default function SplashScreen({ onFinish, imagesToPreload = [] }) {
  const [phase, setPhase] = useState('initial'); // 'initial' | 'expanded' | 'paused' | 'slideUp'
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images before starting splash animation
  useEffect(() => {
    if (!imagesToPreload.length) {
      setImagesLoaded(true);
      return;
    }
    let isMounted = true;
    const imagePromises = imagesToPreload.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });
    Promise.all(imagePromises)
      .then(() => { if (isMounted) setImagesLoaded(true); })
      .catch(() => { if (isMounted) setImagesLoaded(true); });
    return () => { isMounted = false; };
  }, [imagesToPreload]);

  // Animation sequence
  useEffect(() => {
    if (!imagesLoaded) return;
    if (phase === 'initial') {
      // Expand after 1s
      const toExpanded = setTimeout(() => setPhase('expanded'), 1000);
      return () => clearTimeout(toExpanded);
    }
    if (phase === 'expanded') {
      // Pause for 500ms after expansion
      const toPaused = setTimeout(() => setPhase('paused'), 1200);
      return () => clearTimeout(toPaused);
    }
    if (phase === 'paused') {
      // Slide up after 500ms pause
      const toSlideUp = setTimeout(() => setPhase('slideUp'), 500);
      return () => clearTimeout(toSlideUp);
    }
    if (phase === 'slideUp') {
      // Finish after slide up duration
      const toFinish = setTimeout(() => {
        if (onFinish) onFinish();
      }, 1200);
      return () => clearTimeout(toFinish);
    }
  }, [phase, imagesLoaded, onFinish]);

  return (
    <div style={{
      width: '100dvw',
      height: '100vh',
      background: (phase === 'initial' || phase === 'expanded')
        ? 'linear-gradient(245.21deg, #D2B69E 1.51%, #AB8264 96.57%)'
        : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999,
    }}>
      <AnimatePresence>
        {phase !== 'done' && (
          <motion.img
            key="splash"
            src={spl1}
            alt="Splash"
            initial={{ scale: 0.3, opacity: 1, y: 0 }}
            animate={
              phase === 'initial'
                ? { scale: 0.3, opacity: 1, y: 0 }
                : phase === 'expanded'
                ? { scale: 1, opacity: 1, y: 0 }
                : phase === 'paused'
                ? { scale: 1, opacity: 1, y: 0 }
                : { scale: 1, opacity: 0.8, y: -window.innerHeight }
            }
            transition={
              phase === 'initial'
                ? { duration: 0 }
                : phase === 'expanded'
                ? { duration: 1.2, ease: 'easeInOut' }
                : phase === 'paused'
                ? { duration: 0 }
                : { duration: 1.2, ease: 'easeInOut' }
            }
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'block',
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
} 