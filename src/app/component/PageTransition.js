'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Trigger fade out
      const element = document.querySelector('.page-transition');
      if (element) {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
        
        // After fade out, fade in
        setTimeout(() => {
          element.classList.remove('fade-out');
          element.classList.add('fade-in');
        }, 200);
      }
    }
  }, [pathname, mounted]);

  return (
    <div className={`page-transition ${mounted ? 'fade-in' : 'fade-out'}`}>
      {children}
    </div>
  );
};

export default PageTransition;
