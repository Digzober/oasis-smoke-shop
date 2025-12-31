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
// WOBBLE - Organic deformation
// ==========================================

export function initWobble(element: Element, intensity = 1) {
  gsap.to(element, {
    scaleX: 1 + (0.04 * intensity),
    scaleY: 1 - (0.03 * intensity),
    duration: 0.7 + Math.random() * 0.3,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    transformOrigin: "center center"
  });

  gsap.to(element, {
    rotation: gsap.utils.random(-2, 2) * intensity,
    duration: 1 + Math.random() * 0.5,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  });
}

// ==========================================
// JUMP - Squash, leap, land, bounce
// ==========================================

export function initJump(element: Element, height = 20) {
  function jump() {
    gsap.timeline()
      .to(element, {
        scaleY: 0.8,
        scaleX: 1.15,
        y: 5,
        duration: 0.15,
        ease: "power2.in",
        transformOrigin: "center bottom"
      })
      .to(element, {
        scaleY: 1.2,
        scaleX: 0.85,
        y: -height,
        duration: 0.25,
        ease: "power2.out"
      })
      .to(element, {
        y: 0,
        duration: 0.2,
        ease: "power2.in"
      })
      .to(element, {
        scaleY: 0.85,
        scaleX: 1.15,
        duration: 0.1,
        ease: "power2.out"
      })
      .to(element, {
        scaleY: 1,
        scaleX: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.5)"
      });

    gsap.delayedCall(gsap.utils.random(2.5, 4.5), jump);
  }

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
// JOB CARDS ANIMATION
// ==========================================

export function initJobCardsAnimation() {
  gsap.from(".job-card", {
    scrollTrigger: {
      trigger: ".jobs-grid",
      start: "top 80%"
    },
    rotationY: 90,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    transformPerspective: 1000,
    transformOrigin: "center center"
  });
}

// ==========================================
// BENEFITS MARQUEE
// ==========================================

export function initBenefitsMarquee() {
  const marqueeContent = document.querySelector('.benefits-marquee-content');
  if (marqueeContent) {
    // Duplicate content for seamless loop
    marqueeContent.innerHTML += marqueeContent.innerHTML;

    gsap.to('.benefits-marquee-content', {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1
    });
  }
}

// ==========================================
// MAGNETIC BUTTON EFFECT
// ==========================================

export function initMagneticButtons() {
  const applyButtons = document.querySelectorAll('.apply-btn');

  applyButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = (btn as HTMLElement).getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)"
      });
    });
  });
}

// ==========================================
// HEADLINE SPLIT TEXT ANIMATION
// ==========================================

export function initHeadlineAnimation() {
  const headline = document.querySelector('.careers-headline');
  if (!headline) return;

  const text = headline.textContent || '';
  const chars = text.split('');
  headline.innerHTML = chars.map(char =>
    `<span class="char" style="display: inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
  ).join('');

  gsap.from(".careers-headline .char", {
    scrollTrigger: {
      trigger: ".section-careers",
      start: "top 80%"
    },
    y: 100,
    opacity: 0,
    rotation: () => gsap.utils.random(-20, 20),
    duration: 0.8,
    stagger: 0.03,
    ease: "back.out(1.7)"
  });
}

// ==========================================
// INITIALIZE ALL SECTION SIX ANIMATIONS
// ==========================================

export function initSectionSixAnimations() {
  // Set up cursor/touch tracking
  if (typeof window !== 'undefined') {
    document.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    });

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
  initJobCardsAnimation();
  initBenefitsMarquee();
  initMagneticButtons();

  // Get all spots in Section Six
  const spots = document.querySelectorAll('.section-careers .floating-spot');

  spots.forEach((spot, index) => {
    const animationType = spot.getAttribute('data-animation');

    // Base float for all spots
    initFloat(spot, { delay: index * 0.2 });

    // Specific animations based on data-animation attribute
    switch(animationType) {
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

      case 'wobble-eye': {
        const blobBody = spot.querySelector('.blob-body');
        if (blobBody) {
          initWobble(blobBody, 1.2);
        }
        initEyeTracking(spot, 4);
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
    }
  });

  // Job card hover animations
  const jobCards = document.querySelectorAll('.job-card');
  jobCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -15,
        scale: 1.03,
        boxShadow: "0 25px 50px rgba(232, 212, 77, 0.3)",
        duration: 0.4,
        ease: "power2.out"
      });

      const badge = card.querySelector('.job-type-badge');
      if (badge) {
        gsap.to(badge, {
          scale: 1.1,
          duration: 0.3,
          yoyo: true,
          repeat: 1
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
