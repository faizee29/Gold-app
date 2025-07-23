import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import spl1 from '../assets/spl1.png';
import spl2 from '../assets/spl2.png';

export default function SplashScreen({ onFinish, imagesToPreload = [] }) {
  const [showSpl2, setShowSpl2] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
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

  // Splash animation sequence (only after images loaded)
  useEffect(() => {
    if (!imagesLoaded) return;
    const toSpl2 = setTimeout(() => setShowSpl2(true), 1200);
    const toSlideUp = setTimeout(() => setSlideUp(true), 3000);
    return () => {
      clearTimeout(toSpl2);
      clearTimeout(toSlideUp);
    };
  }, [imagesLoaded]);

  // Call onFinish after slide up animation
  useEffect(() => {
    if (slideUp) {
      const toHome = setTimeout(() => {
        if (onFinish) onFinish();
      }, 700); // match slide-up duration
      return () => clearTimeout(toHome);
    }
  }, [slideUp, onFinish]);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#111',
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
        {!showSpl2 && (
          <motion.img
            key="spl1"
            src={spl1}
            alt="Splash 1"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ scale: 1.3, opacity: 0, transition: { duration: 0.6 } }}
            style={{ width: '100vw', height: '100vh', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
          />
        )}
        {showSpl2 && !slideUp && (
          <motion.img
            key="spl2"
            src={spl2}
            alt="Splash 2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1, y: 0 }}
            style={{ width: '100vw', height: '100vh', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
            transition={{ duration: 0.7 }}
          />
        )}
        {showSpl2 && slideUp && (
          <motion.img
            key="spl2-slideup"
            src={spl2}
            alt="Splash 2"
            initial={{ scale: 1.2, opacity: 1, y: 0 }}
            animate={{ y: -window.innerHeight, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            style={{ width: '100vw', height: '100vh', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
} 