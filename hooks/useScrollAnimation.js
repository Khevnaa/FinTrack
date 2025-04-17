import { useEffect, useRef, useCallback } from 'react';

export const useScrollAnimation = () => {
  const elementsRef = useRef([]);
  const rafRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      elementsRef.current.forEach((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isVisible) {
            const scrollPercent = (rect.top / window.innerHeight) * 100;
            
            // Add parallax effect
            if (element.classList.contains('parallax')) {
              const speed = element.dataset.speed || 0.5;
              const yPos = -(scrollPercent * speed);
              element.style.transform = `translateY(${yPos}px)`;
            }
            
            // Add scroll reveal
            if (element.classList.contains('scroll-reveal')) {
              element.classList.add('active');
            }
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Add staggered animation for child elements
            if (entry.target.classList.contains('stagger-child')) {
              const children = entry.target.children;
              Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                  child.style.opacity = '1';
                  child.style.transform = 'translateY(0)';
                }, index * 100);
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [handleScroll]);

  const addElement = (element) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  };

  return { addElement };
}; 