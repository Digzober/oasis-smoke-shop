import gsap from 'gsap';

// Store cursor position globally
let cursorX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
let cursorY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;

// ==========================================
// EYE TRACKING - Pupils follow cursor
// ==========================================

export function initEyeTracking(container: Element, maxMove = 5) {
  const svg = container.querySelector('svg');
  const pupils = container.querySelectorAll('.pupil-group, .pupil-group-left, .pupil-group-right');

  if (!svg || pupils.length === 0) return;

  // Update on every frame for smooth tracking
  gsap.ticker.add(() => {
    const rect = svg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(cursorY - centerY, cursorX - centerX);
    const distance = Math.min(maxMove, Math.hypot(cursorX - centerX, cursorY - centerY) / 80);

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    pupils.forEach(pupil => {
      gsap.to(pupil, {
        x: moveX,
        y: moveY,
        duration: 0.15,
        ease: "power2.out",
        overwrite: 'auto'
      });
    });
  });
}

// ==========================================
// BLINK - Eyelid closes/opens randomly
// ==========================================

export function initBlink(eyelid: Element, eyeRy = 12) {
  function blink() {
    gsap.timeline()
      .to(eyelid, {
        attr: { ry: eyeRy },
        duration: 0.08,
        ease: "power2.in"
      })
      .to(eyelid, {
        attr: { ry: 0 },
        duration: 0.12,
        ease: "power2.out"
      });

    // Random delay until next blink
    gsap.delayedCall(gsap.utils.random(2, 5), blink);
  }

  // Start first blink after random delay
  gsap.delayedCall(gsap.utils.random(1, 3), blink);
}

// ==========================================
// WOBBLE - Organic deformation
// ==========================================

export function initWobble(element: Element, intensity = 1) {
  // Scale wobble
  gsap.to(element, {
    scaleX: 1 + (0.04 * intensity),
    scaleY: 1 - (0.03 * intensity),
    duration: 0.7 + Math.random() * 0.3,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    transformOrigin: "center center"
  });

  // Slight rotation wobble
  gsap.to(element, {
    rotation: gsap.utils.random(-2, 2) * intensity,
    duration: 1 + Math.random() * 0.5,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  });
}

// ==========================================
// JIGGLE - Rapid micro-rotations
// ==========================================

export function initJiggle(element: Element) {
  gsap.to(element, {
    rotation: "random(-4, 4)",
    duration: 0.08,
    yoyo: true,
    repeat: -1,
    repeatRefresh: true
  });
}

// ==========================================
// JUMP - Squash, leap, land, bounce
// ==========================================

export function initJump(element: Element, height = 20) {
  function jump() {
    gsap.timeline()
      // Anticipation (squat down)
      .to(element, {
        scaleY: 0.8,
        scaleX: 1.15,
        y: 5,
        duration: 0.15,
        ease: "power2.in",
        transformOrigin: "center bottom"
      })
      // Jump up (stretch tall)
      .to(element, {
        scaleY: 1.2,
        scaleX: 0.85,
        y: -height,
        duration: 0.25,
        ease: "power2.out"
      })
      // Fall down
      .to(element, {
        y: 0,
        duration: 0.2,
        ease: "power2.in"
      })
      // Land (squash on impact)
      .to(element, {
        scaleY: 0.85,
        scaleX: 1.15,
        duration: 0.1,
        ease: "power2.out"
      })
      // Recover to normal
      .to(element, {
        scaleY: 1,
        scaleX: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.5)"
      });

    // Random delay until next jump
    gsap.delayedCall(gsap.utils.random(2.5, 4.5), jump);
  }

  // Start first jump after random delay
  gsap.delayedCall(gsap.utils.random(0.5, 2), jump);
}

// ==========================================
// SQUASH & STRETCH - Continuous deformation
// ==========================================

export function initSquashStretch(element: Element) {
  gsap.timeline({ repeat: -1 })
    .to(element, {
      scaleX: 1.1,
      scaleY: 0.9,
      duration: 0.5,
      ease: "sine.inOut",
      transformOrigin: "center center"
    })
    .to(element, {
      scaleX: 0.95,
      scaleY: 1.05,
      duration: 0.5,
      ease: "sine.inOut"
    })
    .to(element, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.3,
      ease: "sine.inOut"
    });
}

// ==========================================
// ORBIT - Dots rotate around center
// ==========================================

export function initOrbit(dot: Element, radius: number, duration: number, startAngle = 0) {
  const angle = { value: startAngle };

  gsap.to(angle, {
    value: startAngle + Math.PI * 2,
    duration: duration,
    ease: "none",
    repeat: -1,
    onUpdate: () => {
      const x = Math.cos(angle.value) * radius;
      const y = Math.sin(angle.value) * radius;
      gsap.set(dot, { x: x, y: y });
    }
  });
}

// ==========================================
// MOUTH EXPRESSION - Changes shape randomly
// ==========================================

export function initMouthAnimation(mouth: Element) {
  const expressions = [
    "M42 55 Q50 62, 58 55",   // smile
    "M42 58 Q50 55, 58 58",   // neutral
    "M42 60 Q50 65, 58 60",   // frown
    "M44 56 Q50 60, 56 56",   // small smile
    "M40 55 Q50 68, 60 55",   // big smile
    "M43 57 Q50 57, 57 57",   // flat
  ];

  function changeMouth() {
    gsap.to(mouth, {
      attr: { d: gsap.utils.random(expressions) },
      duration: 0.3,
      ease: "power2.out"
    });

    gsap.delayedCall(gsap.utils.random(2, 5), changeMouth);
  }

  gsap.delayedCall(gsap.utils.random(1, 3), changeMouth);
}

// ==========================================
// BASE FLOAT - Gentle floating motion
// ==========================================

export function initFloat(element: Element, options: gsap.TweenVars = {}) {
  const defaults = {
    y: gsap.utils.random(-20, -35),
    x: gsap.utils.random(-10, 10),
    rotation: gsap.utils.random(-8, 8),
    duration: gsap.utils.random(3, 5),
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  };

  gsap.to(element, { ...defaults, ...options });
}

// ==========================================
// SLOW ROTATION
// ==========================================

export function initRotation(element: Element, duration = 20) {
  gsap.to(element, {
    rotation: 360,
    duration: duration,
    ease: "none",
    repeat: -1
  });
}

// ==========================================
// INITIALIZE ALL SPOT ANIMATIONS
// ==========================================

export function initSectionFourAnimations() {
  // Set up cursor/touch tracking
  if (typeof window !== 'undefined') {
    // Mouse tracking
    document.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    });

    // Touch tracking for mobile
    document.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        cursorX = e.touches[0].clientX;
        cursorY = e.touches[0].clientY;
      }
    });

    document.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        cursorX = e.touches[0].clientX;
        cursorY = e.touches[0].clientY;
      }
    });
  }

  // Get all spots
  const spots = document.querySelectorAll('.floating-spot');

  spots.forEach((spot, index) => {
    const animationType = spot.getAttribute('data-animation');

    // Base float for all spots
    initFloat(spot, { delay: index * 0.2 });

    // Specific animations based on data-animation attribute
    switch(animationType) {
      case 'eye-track': {
        initEyeTracking(spot, 5);
        const eyelid = spot.querySelector('.eyelid');
        if (eyelid) {
          initBlink(eyelid);
        }
        break;
      }

      case 'eye-track-blink': {
        initEyeTracking(spot, 5);
        const eyelid = spot.querySelector('.eyelid');
        if (eyelid) {
          initBlink(eyelid, 12);
        }
        break;
      }

      case 'wobble': {
        const wobbleTarget = spot.querySelector('.wobble-group, .blob-body, .squiggle-path') || spot.querySelector('svg');
        if (wobbleTarget) {
          initWobble(wobbleTarget, 1);
        }
        break;
      }

      case 'wobble-eye': {
        const blobBody = spot.querySelector('.blob-body');
        if (blobBody) {
          initWobble(blobBody, 1.2);
        }
        initEyeTracking(spot, 4);
        break;
      }

      case 'jiggle': {
        const jiggleGroup = spot.querySelector('.jiggle-group');
        if (jiggleGroup) {
          initJiggle(jiggleGroup);
        }
        break;
      }

      case 'jump': {
        const jumpGroup = spot.querySelector('.jump-group');
        if (jumpGroup) {
          initJump(jumpGroup, 18);
        }
        break;
      }

      case 'squash': {
        const squashGroup = spot.querySelector('.squash-group');
        if (squashGroup) {
          initSquashStretch(squashGroup);
        }
        break;
      }

      case 'face': {
        initEyeTracking(spot, 4);
        const meltBody = spot.querySelector('.melt-body');
        if (meltBody) {
          initWobble(meltBody, 0.7);
        }
        const mouth = spot.querySelector('.mouth');
        if (mouth) {
          initMouthAnimation(mouth);
        }
        break;
      }

      case 'orbit': {
        const dot1 = spot.querySelector('.orbit-dot-1');
        const dot2 = spot.querySelector('.orbit-dot-2');
        const dot3 = spot.querySelector('.orbit-dot-3');
        if (dot1) initOrbit(dot1, 35, 3, 0);
        if (dot2) initOrbit(dot2, 35, 4, Math.PI * 0.66);
        if (dot3) initOrbit(dot3, 35, 5, Math.PI * 1.33);
        break;
      }

      case 'rotate': {
        const svg = spot.querySelector('svg');
        if (svg) {
          initRotation(svg, 20);
        }
        break;
      }
    }
  });
}
