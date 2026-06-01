import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const GlowCard = ({ children, className = '', glowColor = 'cyan', delay = 0 }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Relative coordinates of cursor inside the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // 3D Tilt calculation
    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    // Max tilt angle is 6 degrees
    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Select glow colors based on prompt values
  const glowStyles = {
    cyan: 'rgba(0, 242, 254, 0.15)',
    purple: 'rgba(138, 43, 226, 0.15)',
    pink: 'rgba(236, 72, 153, 0.15)',
    emerald: 'rgba(16, 185, 129, 0.15)'
  };

  const borderStyles = {
    cyan: 'hover:border-[rgba(0,242,254,0.3)]',
    purple: 'hover:border-[rgba(138,43,226,0.3)]',
    pink: 'hover:border-[rgba(236,72,153,0.3)]',
    emerald: 'hover:border-[rgba(16,185,129,0.3)]'
  };

  const selectGlow = glowStyles[glowColor] || glowStyles.cyan;
  const selectBorder = borderStyles[glowColor] || borderStyles.cyan;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s ease-out',
      }}
      className={`relative overflow-hidden rounded-2xl glass-effect p-6 transition-all duration-300 ${selectBorder} ${className}`}
    >
      {/* Dynamic Cursor Glow Layer */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${selectGlow}, transparent 70%)`,
          }}
        />
      )}

      {/* Radial overlay to enrich depth */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_30%,#000000_150%] opacity-20 pointer-events-none" />

      {/* Card Content Wrapper */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowCard;
