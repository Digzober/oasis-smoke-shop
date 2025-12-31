'use client';

// Star with jump animation
export function SpotStar() {
  return (
    <div className="floating-spot spot-careers-star" data-animation="jump">
      <svg viewBox="0 0 100 100">
        <g className="jump-group">
          {/* Star shape */}
          <polygon points="50,5 58,40 95,40 65,60 75,95 50,72 25,95 35,60 5,40 42,40"
                   fill="#E8D44D" stroke="#0D1B2A" strokeWidth="2"/>
          {/* Inner circle (pink) */}
          <circle cx="50" cy="50" r="12" fill="#E84B8A"/>
          {/* Center dot */}
          <circle cx="50" cy="50" r="6" fill="#0D1B2A"/>
        </g>
      </svg>
    </div>
  );
}

// Pill with squash and stretch
export function SpotPill() {
  return (
    <div className="floating-spot spot-careers-pill" data-animation="squash">
      <svg viewBox="0 0 100 100">
        <defs>
          <clipPath id="pill-clip-careers">
            <rect x="20" y="30" width="60" height="40" rx="20"/>
          </clipPath>
        </defs>
        <g className="squash-group">
          {/* Pill shape */}
          <rect x="20" y="30" width="60" height="40" rx="20" fill="#9C5FF5" stroke="#0D1B2A" strokeWidth="2.5"/>
          {/* Right half (yellow) */}
          <rect x="50" y="30" width="30" height="40" fill="#E8D44D" clipPath="url(#pill-clip-careers)"/>
          {/* Shine highlight */}
          <ellipse cx="35" cy="42" rx="8" ry="4" fill="#FFFFFF" opacity="0.4"/>
        </g>
      </svg>
    </div>
  );
}

// Amoeba blob with wobble and eye tracking
export function SpotAmoeba() {
  return (
    <div className="floating-spot spot-careers-amoeba" data-animation="wobble-eye">
      <svg viewBox="0 0 100 100">
        {/* Organic blob body */}
        <path className="blob-body"
              d="M50 10 C75 10, 90 25, 88 45 C92 65, 75 85, 55 88 C35 92, 15 80, 12 60 C8 40, 20 15, 50 10"
              fill="#E84B8A" stroke="#0D1B2A" strokeWidth="2"/>
        {/* Inner shadow spots */}
        <circle cx="55" cy="45" r="12" fill="#0D1B2A" opacity="0.2"/>
        <circle cx="40" cy="60" r="8" fill="#0D1B2A" opacity="0.15"/>
        {/* Eye white */}
        <ellipse cx="55" cy="45" rx="10" ry="8" fill="#FFFFFF"/>
        {/* Pupil group */}
        <g className="pupil-group">
          <circle className="pupil" cx="55" cy="45" r="5" fill="#0D1B2A"/>
          <circle className="highlight" cx="52" cy="42" r="2" fill="#FFFFFF"/>
        </g>
      </svg>
    </div>
  );
}

// Ring with orbiting dots
export function SpotRing() {
  return (
    <div className="floating-spot spot-careers-ring" data-animation="orbit">
      <svg viewBox="0 0 100 100">
        {/* Main ring */}
        <circle cx="50" cy="50" r="35" fill="none" stroke="#D97B2B" strokeWidth="10"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="#0D1B2A" strokeWidth="2"/>
        {/* Orbiting dots */}
        <g className="orbit-group">
          <circle className="orbit-dot-1" cx="50" cy="15" r="6" fill="#E8D44D" stroke="#0D1B2A" strokeWidth="1.5"/>
          <circle className="orbit-dot-2" cx="85" cy="50" r="5" fill="#E84B8A" stroke="#0D1B2A" strokeWidth="1.5"/>
          <circle className="orbit-dot-3" cx="50" cy="85" r="4" fill="#9C5FF5" stroke="#0D1B2A" strokeWidth="1.5"/>
        </g>
      </svg>
    </div>
  );
}
