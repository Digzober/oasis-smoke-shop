import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
// STORY CARDS TIMELINE ANIMATION
// ==========================================

export function initStoryCardsAnimation() {
  // Cards slide in from opposite sides
  gsap.from(".story-card-2011", {
    scrollTrigger: {
      trigger: ".story-timeline",
      start: "top 80%"
    },
    x: -200,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".story-card-today", {
    scrollTrigger: {
      trigger: ".story-timeline",
      start: "top 80%"
    },
    x: 200,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Animated line grows between them
  gsap.from(".timeline-connector", {
    scrollTrigger: {
      trigger: ".story-timeline",
      start: "top 75%"
    },
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1.5,
    delay: 0.5,
    ease: "power2.inOut"
  });
}

// ==========================================
// VALUES CARDS ANIMATION
// ==========================================

export function initValuesAnimation() {
  gsap.from(".value-card", {
    scrollTrigger: {
      trigger: ".values-grid",
      start: "top 80%"
    },
    y: 80,
    opacity: 0,
    scale: 0.8,
    rotation: () => gsap.utils.random(-10, 10),
    duration: 0.8,
    stagger: {
      each: 0.15,
      from: "random"
    },
    ease: "back.out(1.7)"
  });
}

// ==========================================
// FOUNDER QUOTE ANIMATION
// ==========================================

export function initFounderQuoteAnimation() {
  gsap.from(".founder-quote", {
    scrollTrigger: {
      trigger: ".founder-section",
      start: "top 80%"
    },
    opacity: 0,
    y: 40,
    duration: 0.8
  });

  gsap.from(".founder-name", {
    scrollTrigger: {
      trigger: ".founder-section",
      start: "top 80%"
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.5
  });
}

// ==========================================
// TOPOGRAPHIC BACKGROUND PARALLAX
// ==========================================

export function initTopoParallax() {
  gsap.to(".topo-bg-about", {
    scrollTrigger: {
      trigger: ".section-about",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    },
    y: 100,
    ease: "none"
  });
}

// ==========================================
// INITIALIZE ALL SECTION FIVE ANIMATIONS
// ==========================================

export function initSectionFiveAnimations() {
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

  // Initialize scroll-triggered animations
  initStoryCardsAnimation();
  initValuesAnimation();
  initFounderQuoteAnimation();
  initTopoParallax();

  // Get all spots in Section Five
  const spots = document.querySelectorAll('.section-about .floating-spot');

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

      case 'jiggle': {
        const jiggleGroup = spot.querySelector('.jiggle-group');
        if (jiggleGroup) {
          initJiggle(jiggleGroup);
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
    }
  });

  // Value card hover animations
  const valueCards = document.querySelectorAll('.value-card');
  valueCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        duration: 0.3
      });

      // Icon spins
      const icon = card.querySelector('.value-icon');
      if (icon) {
        gsap.to(icon, {
          rotation: 360,
          duration: 0.6,
          ease: "back.out(1.7)"
        });
      }
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        duration: 0.3
      });
    });
  });
}
