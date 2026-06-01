import React, { useEffect, useRef } from 'react';

const CanvasStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let stars = [];
    const starCount = 100;
    let mouse = { x: null, y: null, radius: 150 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15;
        this.alpha = Math.random() * 0.5 + 0.3;
        this.alphaDirection = Math.random() > 0.5 ? 0.005 : -0.005;
        // Natural pulsing frequency
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around borders
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Pulsing glow alpha
        this.alpha += this.alphaDirection;
        if (this.alpha > 0.95 || this.alpha < 0.2) {
          this.alphaDirection = -this.alphaDirection;
        }

        // Interactive mouse push/pull effect
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Push stars slightly away from mouse
            this.x += (dx / distance) * force * 1.2;
            this.y += (dy / distance) * force * 1.2;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Custom neon cyan or nebula purple glowing stars
        if (this.size > 1.6) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = Math.random() > 0.5 ? '#00f2fe' : '#8a2be2';
        }
        
        ctx.fillStyle = `rgba(243, 244, 246, ${this.alpha})`;
        ctx.fill();
        ctx.restore();
      }
    }

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initial setup
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background noise/deep space ambient grid/dust
      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 pointer-events-none bg-space-black"
    />
  );
};

export default CanvasStars;
