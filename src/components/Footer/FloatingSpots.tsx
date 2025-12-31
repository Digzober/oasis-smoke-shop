'use client';

// Spiral with rotation
export function SpotSpiral() {
  return (
    <div className="floating-spot spot-footer-spiral" data-animation="rotate">
      <svg viewBox="0 0 100 100">
        {/* Spiral path */}
        <path d="M50 50 Q50 35, 60 35 Q75 35, 75 50 Q75 70, 50 70 Q25 70, 25 45 Q25 20, 55 20 Q85 20, 85 50 Q85 80, 50 82"
              fill="none" stroke="#E84B8A" strokeWidth="6" strokeLinecap="round"/>
        {/* Center dot */}
        <circle cx="50" cy="50" r="8" fill="#E8D44D" stroke="#0D1B2A" strokeWidth="2"/>
      </svg>
    </div>
  );
}
