import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = (container: HTMLElement) => {
  // Set default smoothing for all animations
  gsap.defaults({ overwrite: 'auto' });

  // Ensure container exists before setting up animations
  if (!container) {
    console.warn('SectionTwo container not found');
    return;
  }

  // Section label and subtitle fade up - smoother with longer duration
  gsap.from(container.querySelectorAll(".section-label, .section-subtitle"), {
    scrollTrigger: {
      trigger: container,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    y: 20,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "power3.out"
  });

  // Headline words slide up with stagger - smoother entrance
  const sectionHeadline = container.querySelector(".section-headline");
  if (sectionHeadline) {
    gsap.from(container.querySelectorAll(".headline-word"), {
      scrollTrigger: {
        trigger: sectionHeadline,
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
      y: 60,
      opacity: 0,
      duration: 1.4,
      stagger: 0.15,
      ease: "power3.out"
    });
  }

  // Left card slides in from left - gentler movement
  const cardsContainer = container.querySelector(".cards-container");
  const cardLeft = container.querySelector(".card-left");
  if (cardsContainer && cardLeft) {
    gsap.from(cardLeft, {
      scrollTrigger: {
        trigger: cardsContainer,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    });
  }

  // Right card slides in from right - gentler movement
  const cardRight = container.querySelector(".card-right");
  if (cardsContainer && cardRight) {
    gsap.from(cardRight, {
      scrollTrigger: {
        trigger: cardsContainer,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      x: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    });
  }

  // Plus connector pops in - smoother, less aggressive
  const plusConnector = container.querySelector(".plus-connector");
  if (cardsContainer && plusConnector) {
    gsap.from(plusConnector, {
      scrollTrigger: {
        trigger: cardsContainer,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      scale: 0.5,
      rotation: -90,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.4)",
      delay: 0.2
    });
  }

  // CTA fade up - smoother
  const ctaContainer = container.querySelector(".cta-container");
  if (ctaContainer) {
    gsap.from(ctaContainer, {
      scrollTrigger: {
        trigger: ctaContainer,
        start: "top 92%",
        toggleActions: "play none none reverse"
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  }
};

export const initFloatingAnimations = () => {
  // Floating spots with different parameters
  const spots = [
    { selector: ".spot-lips-eye", y: -25, x: 10, rotation: 5, duration: 4 },
    { selector: ".spot-diamond-teal", y: -20, x: -8, rotation: -8, duration: 5 },
    { selector: ".spot-blob-gradient", y: -30, x: 5, rotation: 10, duration: 4.5 },
    { selector: ".spot-blob-green", y: -15, x: -12, rotation: -5, duration: 3.5 },
    { selector: ".spot-diamond-pink", y: -22, x: 8, rotation: 12, duration: 4.2 },
    { selector: ".spot-eyeball", y: -18, x: -5, rotation: -10, duration: 3.8 },
    { selector: ".spot-squiggle-pink", y: -28, x: 15, rotation: 8, duration: 5.5 },
    { selector: ".spot-sun-eye", y: -20, x: -10, rotation: 15, duration: 4.8 },
    { selector: ".spot-diamond-warm", y: -25, x: 6, rotation: -12, duration: 4.3 },
    { selector: ".spot-squiggle-purple", y: -22, x: -8, rotation: 6, duration: 5.2 },
    { selector: ".spot-lips-orange", y: -18, x: 12, rotation: -8, duration: 3.6 },
  ];

  spots.forEach(({ selector, y, x, rotation, duration }) => {
    const element = document.querySelector(selector);
    if (element) {
      gsap.to(selector, {
        y,
        x,
        rotation,
        duration,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }
  });

  // Yellow dots twinkling
  gsap.to(".dot", {
    scale: 1.5,
    opacity: 0.5,
    duration: 1.5,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    stagger: { each: 0.3, from: "random" }
  });

  // Confetti triangles spinning
  gsap.to(".confetti", {
    rotation: 360,
    duration: 8,
    ease: "none",
    repeat: -1
  });

  // Plus connector slow rotation
  gsap.to(".plus-connector img", {
    rotation: 360,
    duration: 20,
    ease: "none",
    repeat: -1
  });
};

export const initParallaxAnimations = (container?: HTMLElement) => {
  const parallaxSpots = [
    { selector: ".spot-lips-eye", y: -100 },
    { selector: ".spot-sun-eye", y: -80 },
    { selector: ".spot-blob-gradient", y: -60 },
    { selector: ".spot-diamond-teal", y: -120 },
  ];

  const triggerElement = container || document.querySelector(".section-two");
  if (!triggerElement) return;

  parallaxSpots.forEach(({ selector, y }) => {
    const element = container ? container.querySelector(selector) : document.querySelector(selector);
    if (element) {
      gsap.to(element, {
        scrollTrigger: {
          trigger: triggerElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        y
      });
    }
  });
};

export const initCardHoverAnimations = () => {
  const cards = document.querySelectorAll('.experience-card');

  cards.forEach((card) => {
    const cardImage = card.querySelector('.card-image');

    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -10, scale: 1.02, duration: 0.3, ease: "power2.out" });
      if (cardImage) {
        gsap.to(cardImage, { scale: 1.1, duration: 0.4, ease: "power2.out" });
      }
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
      if (cardImage) {
        gsap.to(cardImage, { scale: 1, duration: 0.4, ease: "power2.out" });
      }
    });
  });
};
