import React, { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 1500, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    const animateCount = () => {
      let startTimestamp = null;
      const target = parseFloat(end);
      if (isNaN(target)) return;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function: easeOutQuad
        const easedProgress = progress * (2 - progress);
        const currentCount = easedProgress * target;
        
        setCount(
          target % 1 === 0 
            ? Math.floor(currentCount) 
            : currentCount.toFixed(1)
        );

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end); // Ensure exact final number
        }
      };

      window.requestAnimationFrame(step);
    };

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
