import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animate, inView } from 'framer-motion';

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a slight delay to ensure Next.js has finished rendering/hydration
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      
      revealElements.forEach((el) => {
        // Initialize state if not already visible
        const htmlEl = el as HTMLElement;
        if (htmlEl.classList.contains('visible')) return;

        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(30px)';

        inView(el, (info) => {
          animate(
            el, 
            { opacity: 1, translateY: 0 }, 
            { 
              duration: 0.8, 
              delay: 0.1, 
              ease: [0.16, 1, 0.3, 1] 
            }
          );
          // Mark as visible to prevent re-triggering if navigated away/back
          htmlEl.classList.add('visible');
        });
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
