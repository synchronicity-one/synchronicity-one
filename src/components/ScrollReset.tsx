'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Next scrolls to the top on navigation, but when the target page is shorter
// than the one being left the browser can restore the old offset after the
// route has already rendered. Disabling automatic restoration and scrolling
// again on the next frame makes every page open at the top.
export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frame = requestAnimationFrame(() => window.scrollTo(0, 0));
    const timer = setTimeout(() => window.scrollTo(0, 0), 60);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
