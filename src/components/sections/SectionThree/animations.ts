import gsap from 'gsap';

// ==========================================
// EYE TRACKING - Follow cursor
// ==========================================

export function initEyeTracking(container: Element, maxMove = 5) {
  const svg = container.querySelector('svg');
  const pupil = container.querySelector('.pupil');
  if (!svg || !pupil) return;

  document.addEventListener('mousemove', (e) => {
    const rect = svg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate angle to cursor
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const distance = Math.min(maxMove,
      Math.hypot(e.clientX - centerX, e.clientY - centerY) / 50
    );

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    gsap.to(pupil, {
      x: moveX,
      y: moveY,
      duration: 0.2,
      ease: "power2.out"
    });
  });
}

// Random eye movement (for elements not near cursor)
export function randomEyeMovement(pupilGroup: string | Element) {
  function look() {
    const x = gsap.utils.random(-5, 5);
    const y = gsap.utils.random(-3, 3);

    gsap.to(pupilGroup, {
      x: x,
      y: y,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        gsap.delayedCall(gsap.utils.random(1, 3), look);
      }
    });
  }
  look();
}

// ==========================================
// BLINK ANIMATION
// ==========================================

export function initBlink(eyelidSelector: string) {
  const eyelids = document.querySelectorAll(eyelidSelector);

  eyelids.forEach(eyelid => {
    function blink() {
      gsap.timeline()
        .to(eyelid, {
          attr: { ry: 12 }, // Close eye
          duration: 0.08,
          ease: "power2.in"
        })
        .to(eyelid, {
          attr: { ry: 0 }, // Open eye
          duration: 0.12,
          ease: "power2.out"
        });

      gsap.delayedCall(gsap.utils.random(2, 5), blink);
    }
    gsap.delayedCall(gsap.utils.random(1, 3), blink);
  });
}

// ==========================================
// WOBBLE ANIMATION - Organic oscillation
// ==========================================

export function initWobble(element: string | Element, intensity = 1) {
  gsap.to(element, {
    scaleX: 1 + (0.05 * intensity),
    scaleY: 1 - (0.03 * intensity),
    duration: 0.8,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    transformOrigin: "center bottom"
  });

  // Add slight rotation wobble
  gsap.to(element, {
    rotation: gsap.utils.random(-3, 3) * intensity,
    duration: 1.2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  });
}

// ==========================================
// JIGGLE ANIMATION - Geometric vibration
// ==========================================

export function initJiggle(element: string | Element) {
  gsap.to(element, {
    rotation: "random(-4, 4)",
    duration: 0.08,
    yoyo: true,
    repeat: -1,
    repeatRefresh: true
  });
}

// Triggered jiggle (on interaction)
export function triggerJiggle(element: string | Element) {
  gsap.timeline()
    .to(element, { rotation: -5, duration: 0.05 })
    .to(element, { rotation: 5, duration: 0.05 })
    .to(element, { rotation: -3, duration: 0.05 })
    .to(element, { rotation: 3, duration: 0.05 })
    .to(element, { rotation: 0, duration: 0.1, ease: "elastic.out" });
}

// ==========================================
// JUMP ANIMATION - Squash & stretch hop
// ==========================================

export function initJump(element: string | Element, height = 20) {
  function jump() {
    gsap.timeline()
      // Anticipation (squat)
      .to(element, {
        scaleY: 0.85,
        scaleX: 1.1,
        y: 3,
        duration: 0.12,
        ease: "power2.in",
        transformOrigin: "center bottom"
      })
      // Jump up (stretch)
      .to(element, {
        scaleY: 1.15,
        scaleX: 0.92,
        y: -height,
        duration: 0.2,
        ease: "power2.out"
      })
      // Fall down
      .to(element, {
        y: 0,
        duration: 0.18,
        ease: "power2.in"
      })
      // Land (squash)
      .to(element, {
        scaleY: 0.88,
        scaleX: 1.12,
        duration: 0.08,
        ease: "power2.out"
      })
      // Recover
      .to(element, {
        scaleY: 1,
        scaleX: 1,
        duration: 0.25,
        ease: "elastic.out(1, 0.5)"
      });

    gsap.delayedCall(gsap.utils.random(2, 5), jump);
  }
  gsap.delayedCall(gsap.utils.random(0.5, 2), jump);
}

// ==========================================
// BASE FLOAT - Sine.inOut floating motion
// ==========================================

export function initFloat(element: string | Element, options = {}) {
  const defaults = {
    y: gsap.utils.random(-20, -35),
    x: gsap.utils.random(-10, 10),
    rotation: gsap.utils.random(-10, 10),
    duration: gsap.utils.random(3, 5),
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  };

  gsap.to(element, { ...defaults, ...options });
}

// ==========================================
// SQUASH & STRETCH (continuous)
// ==========================================

export function initSquashStretch(element: string | Element) {
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
// ORBITAL ANIMATION
// ==========================================

export function initOrbit(element: string | Element, radius: number, duration: number, startAngle = 0) {
  const angle = { value: startAngle };

  gsap.to(angle, {
    value: startAngle + Math.PI * 2,
    duration: duration,
    ease: "none",
    repeat: -1,
    onUpdate: () => {
      const x = Math.cos(angle.value) * radius;
      const y = Math.sin(angle.value) * radius;
      gsap.set(element, { x: x, y: y });
    }
  });
}

// ==========================================
// PULSE ANIMATION
// ==========================================

export function initPulse(element: string | Element, scale = 1.15, duration = 1) {
  gsap.to(element, {
    scale: scale,
    duration: duration,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  });
}

// ==========================================
// SPIN ANIMATION
// ==========================================

export function initSpin(element: string | Element, duration = 8) {
  gsap.to(element, {
    rotation: 360,
    duration: duration,
    ease: "none",
    repeat: -1
  });
}

// ==========================================
// BOUNCE ANIMATION
// ==========================================

export function initBounce(element: string | Element) {
  gsap.to(element, {
    y: -15,
    duration: 0.6,
    ease: "power1.out",
    yoyo: true,
    repeat: -1
  });
}

// ==========================================
// SWING ANIMATION - Pendulum-like motion
// ==========================================

export function initSwing(element: string | Element, angle = 15, duration = 2) {
  gsap.to(element, {
    rotation: angle,
    duration: duration / 2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    transformOrigin: "top center"
  });
}

// ==========================================
// MORPHING/BREATHING - Scale breathing effect
// ==========================================

export function initBreathing(element: string | Element) {
  gsap.to(element, {
    scale: 1.08,
    duration: 1.5,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  });
}

// ==========================================
// Initialize all Section Three animations
// ==========================================

export function initSectionThreeAnimations() {
  // Animated spots - jumping with squash & stretch
  gsap.utils.toArray('.spot-jump').forEach((el) => {
    initJump(el as Element, gsap.utils.random(15, 25));
  });

  // Animated spots - organic wobbling
  gsap.utils.toArray('.spot-wobble').forEach((el) => {
    initWobble(el as Element, gsap.utils.random(0.8, 1.2));
  });

  // Animated spots - base floating with sine.inOut
  gsap.utils.toArray('.spot-float').forEach((el, i) => {
    initFloat(el as Element, {
      y: gsap.utils.random(-20, -35),
      x: gsap.utils.random(-8, 8),
      rotation: gsap.utils.random(-10, 10),
      duration: gsap.utils.random(3, 5),
      delay: i * 0.15
    });
  });

  // Animated spots - squash stretch
  gsap.utils.toArray('.spot-squash').forEach((el) => {
    initSquashStretch(el as Element);
  });

  // Animated spots - orbiting
  gsap.utils.toArray('.spot-orbit').forEach((el, i) => {
    initOrbit(el as Element, gsap.utils.random(10, 20), gsap.utils.random(4, 8), i * (Math.PI / 3));
  });

  // Animated spots - pulsing
  gsap.utils.toArray('.spot-pulse').forEach((el) => {
    initPulse(el as Element, gsap.utils.random(1.1, 1.25), gsap.utils.random(0.8, 1.5));
  });

  // Animated spots - spinning
  gsap.utils.toArray('.spot-spin').forEach((el) => {
    initSpin(el as Element, gsap.utils.random(6, 12));
  });

  // Animated spots - bouncing
  gsap.utils.toArray('.spot-bounce').forEach((el) => {
    initBounce(el as Element);
  });

  // Animated spots - jiggling (geometric)
  gsap.utils.toArray('.spot-jiggle').forEach((el) => {
    initJiggle(el as Element);
  });

  // Animated spots - swinging
  gsap.utils.toArray('.spot-swing').forEach((el) => {
    initSwing(el as Element, gsap.utils.random(10, 20), gsap.utils.random(1.5, 3));
  });

  // Animated spots - breathing
  gsap.utils.toArray('.spot-breathe').forEach((el) => {
    initBreathing(el as Element);
  });

  // Eye tracking for elements with eyes
  gsap.utils.toArray('.spot-eye').forEach((el) => {
    initEyeTracking(el as Element, 5);
  });

  // Blinking for elements with eyelids
  if (document.querySelectorAll('.spot-eye .eyelid').length > 0) {
    initBlink('.spot-eye .eyelid');
  }
}
