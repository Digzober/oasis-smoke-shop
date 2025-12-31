'use client';

// Eyeball spot with eye tracking and blink
export function SpotEyeball() {
  return (
    <div className="floating-spot spot-about-eyeball" data-animation="eye-track">
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
        <ellipse className="eyelid" cx="50" cy="50" rx="42" ry="0" fill="#D97B2B"/>
      </svg>
    </div>
  );
}

// Diamond with jiggle
export function SpotDiamond() {
  return (
    <div className="floating-spot spot-about-diamond" data-animation="jiggle">
      <svg viewBox="0 0 100 100">
        <g className="jiggle-group">
          {/* Outer diamond */}
          <polygon points="50,5 95,50 50,95 5,50" fill="#E8D44D" stroke="#0D1B2A" strokeWidth="2.5"/>
          {/* Middle diamond */}
          <polygon points="50,20 78,50 50,80 22,50" fill="#0D1B2A"/>
          {/* Inner diamond */}
          <polygon points="50,35 62,50 50,65 38,50" fill="#E8D44D"/>
          {/* Center dot */}
          <circle cx="50" cy="50" r="6" fill="#0D1B2A"/>
        </g>
      </svg>
    </div>
  );
}

// Melting face with eyes, wobble, and expression change
export function SpotMeltingFace() {
  return (
    <div className="floating-spot spot-about-face" data-animation="face">
      <svg viewBox="0 0 100 100">
        {/* Melting body shape */}
        <path className="melt-body"
              d="M20 30 Q20 15, 50 15 Q80 15, 80 30 Q82 50, 75 55 Q78 75, 70 85 Q60 92, 50 80 Q45 92, 35 88 Q25 82, 28 65 Q18 55, 20 30"
              fill="#E8D44D" stroke="#0D1B2A" strokeWidth="2.5"/>
        {/* Drip details */}
        <ellipse cx="72" cy="70" rx="5" ry="10" fill="#D97B2B" opacity="0.4"/>
        <ellipse cx="32" cy="72" rx="4" ry="8" fill="#D97B2B" opacity="0.4"/>
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

// Lips with eye
export function SpotLipsEye() {
  return (
    <div className="floating-spot spot-about-lips" data-animation="eye-track-blink">
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
