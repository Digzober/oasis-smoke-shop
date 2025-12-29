'use client';

import { useEffect, useRef } from 'react';

// Eyeball spot with eye tracking and blink
export function SpotEyeball() {
  return (
    <div className="floating-spot spot-eyeball" data-animation="eye-track">
      <svg viewBox="0 0 100 100">
        {/* Outer eye white */}
        <circle cx="50" cy="50" r="42" fill="#FFFFFF" stroke="#0D1B2A" strokeWidth="3"/>
        {/* Iris */}
        <circle cx="50" cy="48" r="24" fill="#9C5FF5"/>
        {/* Pupil group - this moves to track cursor */}
        <g className="pupil-group">
          <circle className="pupil" cx="50" cy="48" r="14" fill="#0D1B2A"/>
          <circle className="highlight" cx="43" cy="42" r="6" fill="#FFFFFF"/>
          <circle cx="54" cy="52" r="3" fill="rgba(255,255,255,0.4)"/>
        </g>
        {/* Blood vessels */}
        <path d="M12 42 Q22 46, 28 48" fill="none" stroke="#E84B8A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 58 Q20 54, 26 52" fill="none" stroke="#E84B8A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <path d="M85 38 Q78 44, 72 47" fill="none" stroke="#E84B8A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        {/* Eyelid for blink */}
        <ellipse className="eyelid" cx="50" cy="50" rx="42" ry="0" fill="#0D1B2A"/>
      </svg>
    </div>
  );
}

// Lips with eye
export function SpotLips() {
  return (
    <div className="floating-spot spot-lips" data-animation="eye-track-blink">
      <svg viewBox="0 0 100 100">
        {/* Lips shape */}
        <path d="M8 50 Q25 28, 50 50 Q75 28, 92 50 Q75 78, 50 58 Q25 78, 8 50"
              fill="#E84B8A" stroke="#0D1B2A" strokeWidth="2.5"/>
        {/* Teeth hint */}
        <path d="M35 50 Q50 42, 65 50" fill="#FFFFFF" opacity="0.3"/>
        {/* Eye white */}
        <ellipse className="eye-white" cx="50" cy="52" rx="16" ry="12" fill="#FFFFFF" stroke="#0D1B2A" strokeWidth="1.5"/>
        {/* Pupil group */}
        <g className="pupil-group">
          <circle className="iris" cx="50" cy="52" r="7" fill="#E8D44D"/>
          <circle className="pupil" cx="50" cy="52" r="4" fill="#0D1B2A"/>
          <circle className="highlight" cx="47" cy="49" r="2" fill="#FFFFFF"/>
        </g>
        {/* Eyelid for blink */}
        <ellipse className="eyelid" cx="50" cy="52" rx="16" ry="0" fill="#E84B8A"/>
      </svg>
    </div>
  );
}

// Diamond with jiggle
export function SpotDiamond() {
  return (
    <div className="floating-spot spot-diamond" data-animation="jiggle">
      <svg viewBox="0 0 100 100">
        <g className="jiggle-group">
          {/* Outer diamond */}
          <polygon points="50,5 95,50 50,95 5,50" fill="#E8D44D" stroke="#0D1B2A" strokeWidth="2.5"/>
          {/* Middle diamond */}
          <polygon points="50,20 78,50 50,80 22,50" fill="#D97B2B"/>
          {/* Inner diamond */}
          <polygon points="50,35 62,50 50,65 38,50" fill="#0D1B2A"/>
          {/* Center dot */}
          <circle cx="50" cy="50" r="6" fill="#E8D44D"/>
        </g>
      </svg>
    </div>
  );
}

// Stacked triangles with wobble
export function SpotTriangles() {
  return (
    <div className="floating-spot spot-triangles" data-animation="wobble">
      <svg viewBox="0 0 100 100">
        <g className="wobble-group">
          {/* Back triangle (purple) */}
          <polygon points="50,10 85,75 15,75" fill="#9C5FF5" stroke="#0D1B2A" strokeWidth="2"/>
          {/* Middle triangle (pink) */}
          <polygon points="50,30 70,65 30,65" fill="#E84B8A"/>
          {/* Front triangle (yellow) */}
          <polygon points="50,45 58,58 42,58" fill="#E8D44D"/>
        </g>
      </svg>
    </div>
  );
}

// Amoeba blob with wobble and eye tracking
export function SpotAmoeba() {
  return (
    <div className="floating-spot spot-amoeba" data-animation="wobble-eye">
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

// Star with jump animation
export function SpotStar() {
  return (
    <div className="floating-spot spot-star" data-animation="jump">
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
    <div className="floating-spot spot-pill" data-animation="squash">
      <svg viewBox="0 0 100 100">
        <defs>
          <clipPath id="pill-clip">
            <rect x="20" y="30" width="60" height="40" rx="20"/>
          </clipPath>
        </defs>
        <g className="squash-group">
          {/* Pill shape */}
          <rect x="20" y="30" width="60" height="40" rx="20" fill="#9C5FF5" stroke="#0D1B2A" strokeWidth="2.5"/>
          {/* Right half (yellow) */}
          <rect x="50" y="30" width="30" height="40" fill="#E8D44D" clipPath="url(#pill-clip)"/>
          {/* Shine highlight */}
          <ellipse cx="35" cy="42" rx="8" ry="4" fill="#FFFFFF" opacity="0.4"/>
        </g>
      </svg>
    </div>
  );
}

// Melting face with eyes, wobble, and expression change
export function SpotFace() {
  return (
    <div className="floating-spot spot-face" data-animation="face">
      <svg viewBox="0 0 100 100">
        {/* Melting body shape */}
        <path className="melt-body"
              d="M20 30 Q20 15, 50 15 Q80 15, 80 30 Q82 50, 75 55 Q78 75, 70 85 Q60 92, 50 80 Q45 92, 35 88 Q25 82, 28 65 Q18 55, 20 30"
              fill="#9C5FF5" stroke="#0D1B2A" strokeWidth="2.5"/>
        {/* Drip details */}
        <ellipse cx="72" cy="70" rx="5" ry="10" fill="#E84B8A" opacity="0.4"/>
        <ellipse cx="32" cy="72" rx="4" ry="8" fill="#E84B8A" opacity="0.4"/>
        {/* Left eye */}
        <circle className="eye-white-left" cx="40" cy="38" r="8" fill="#FFFFFF"/>
        <g className="pupil-group-left">
          <circle className="pupil" cx="40" cy="38" r="4" fill="#0D1B2A"/>
          <circle className="highlight" cx="38" cy="36" r="1.5" fill="#FFFFFF"/>
        </g>
        {/* Right eye */}
        <circle className="eye-white-right" cx="60" cy="38" r="8" fill="#FFFFFF"/>
        <g className="pupil-group-right">
          <circle className="pupil" cx="60" cy="38" r="4" fill="#0D1B2A"/>
          <circle className="highlight" cx="58" cy="36" r="1.5" fill="#FFFFFF"/>
        </g>
        {/* Mouth */}
        <path className="mouth" d="M42 55 Q50 62, 58 55" fill="none" stroke="#0D1B2A" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

// Eye in diamond
export function SpotEyeDiamond() {
  return (
    <div className="floating-spot spot-eye-diamond" data-animation="eye-track">
      <svg viewBox="0 0 100 100">
        {/* Diamond frame */}
        <polygon points="50,8 92,50 50,92 8,50" fill="#9C5FF5" stroke="#0D1B2A" strokeWidth="2.5"/>
        {/* Eye white */}
        <ellipse cx="50" cy="50" rx="22" ry="16" fill="#FFFFFF" stroke="#0D1B2A" strokeWidth="1.5"/>
        {/* Pupil group */}
        <g className="pupil-group">
          <circle className="iris" cx="50" cy="50" r="10" fill="#E84B8A"/>
          <circle className="pupil" cx="50" cy="50" r="5" fill="#0D1B2A"/>
          <circle className="highlight" cx="46" cy="46" r="3" fill="#FFFFFF"/>
        </g>
      </svg>
    </div>
  );
}

// Squiggle with wobble
export function SpotSquiggle() {
  return (
    <div className="floating-spot spot-squiggle" data-animation="wobble">
      <svg viewBox="0 0 100 100">
        <path className="squiggle-path"
              d="M15 50 Q25 25, 40 50 Q55 75, 70 50 Q85 25, 95 50"
              fill="none" stroke="#E8D44D" strokeWidth="8" strokeLinecap="round"/>
        {/* Dots on squiggle */}
        <circle cx="15" cy="50" r="5" fill="#E84B8A"/>
        <circle cx="95" cy="50" r="5" fill="#E84B8A"/>
      </svg>
    </div>
  );
}

// Ring with orbiting dots
export function SpotRing() {
  return (
    <div className="floating-spot spot-ring" data-animation="orbit">
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

// Spiral with rotation
export function SpotSpiral() {
  return (
    <div className="floating-spot spot-spiral" data-animation="rotate">
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
