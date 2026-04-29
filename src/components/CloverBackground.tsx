import React from 'react';
import { Clover } from 'lucide-react';

interface CloverBackgroundProps {
  backgroundColor?: string;
  iconColor?: string;
}

export const CloverBackground = ({ backgroundColor, iconColor = 'text-green-300' }: CloverBackgroundProps) => {
  // Generate a consistent set of random clovers
  // We use a fixed seed-like approach by hardcoding or using useMemo with no deps if we want them static
  // For simplicity, let's just generate an array of styles
  const clovers = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 50 + 30, // 30px to 80px
    rotation: Math.random() * 360,
    opacity: Math.random() * 0.15 + 0.1, // 0.1 to 0.25 opacity (increased from 0.05-0.15)
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${backgroundColor || ''}`}>
      {clovers.map((clover) => (
        <div
          key={clover.id}
          className={`absolute ${iconColor}`}
          style={{
            left: clover.left,
            top: clover.top,
            transform: `rotate(${clover.rotation}deg)`,
            opacity: clover.opacity,
          }}
        >
          <Clover size={clover.size} />
        </div>
      ))}
    </div>
  );
};
