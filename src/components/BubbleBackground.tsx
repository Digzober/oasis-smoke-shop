'use client'

import { motion } from 'framer-motion'

interface BubbleBackgroundProps {
  className?: string
}

// Pre-defined bubble positions to avoid hydration mismatch
const bubbles = [
  { id: 0, size: 80, left: 5, top: 10, duration: 8, delay: 0 },
  { id: 1, size: 60, left: 15, top: 30, duration: 10, delay: 1 },
  { id: 2, size: 100, left: 25, top: 60, duration: 7, delay: 0.5 },
  { id: 3, size: 50, left: 35, top: 15, duration: 9, delay: 2 },
  { id: 4, size: 70, left: 45, top: 75, duration: 11, delay: 1.5 },
  { id: 5, size: 90, left: 55, top: 40, duration: 8, delay: 0.8 },
  { id: 6, size: 55, left: 65, top: 85, duration: 10, delay: 2.5 },
  { id: 7, size: 85, left: 75, top: 20, duration: 9, delay: 0.3 },
  { id: 8, size: 65, left: 85, top: 50, duration: 12, delay: 1.8 },
  { id: 9, size: 95, left: 95, top: 70, duration: 7, delay: 3 },
  { id: 10, size: 75, left: 10, top: 55, duration: 11, delay: 0.6 },
  { id: 11, size: 45, left: 20, top: 90, duration: 8, delay: 2.2 },
  { id: 12, size: 110, left: 30, top: 5, duration: 10, delay: 1.2 },
  { id: 13, size: 58, left: 40, top: 45, duration: 9, delay: 3.5 },
  { id: 14, size: 82, left: 50, top: 25, duration: 7, delay: 0.9 },
  { id: 15, size: 68, left: 60, top: 65, duration: 12, delay: 2.8 },
  { id: 16, size: 92, left: 70, top: 35, duration: 8, delay: 1.4 },
  { id: 17, size: 52, left: 80, top: 80, duration: 10, delay: 0.2 },
  { id: 18, size: 78, left: 90, top: 12, duration: 9, delay: 3.2 },
  { id: 19, size: 88, left: 98, top: 58, duration: 11, delay: 1.7 },
]

export function BubbleBackground({ className = '' }: BubbleBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-white/10"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, bubble.id % 2 === 0 ? 15 : -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
