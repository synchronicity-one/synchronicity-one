'use client';
import { useEffect, useState } from 'react';
import styles from './BackToTop.module.css';

// Mobile only - appears once the page has been scrolled about one screen down.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className='fixed bottom-8 right-6 z-40 lg:hidden'>
      <button
        type='button'
        aria-label='Back to top'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`${styles.button} ${visible ? styles.visible : ''}`}
      >
        <span className={styles.arrow}></span>
      </button>
    </div>
  );
}
