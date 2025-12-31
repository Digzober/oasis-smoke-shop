import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
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
// BASE FLOAT - Gentle floating motion
// ==========================================

export function initFloat(element: Element, options: gsap.TweenVars = {}) {
  const defaults = {
    y: gsap.utils.random(-15, -25),
    x: gsap.utils.random(-8, 8),
    rotation: gsap.utils.random(-5, 5),
    duration: gsap.utils.random(3, 5),
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  };

  gsap.to(element, { ...defaults, ...options });
}

// ==========================================
// NEWSLETTER INPUT FOCUS ANIMATION
// ==========================================

export function initNewsletterAnimations() {
  const emailInput = document.querySelector('.newsletter-input') as HTMLInputElement;
  const newsletterWrapper = document.querySelector('.newsletter-wrapper');

  if (emailInput && newsletterWrapper) {
    emailInput.addEventListener('focus', () => {
      gsap.to(newsletterWrapper, {
        scale: 1.02,
        boxShadow: "0 0 30px rgba(126, 236, 211, 0.4)",
        duration: 0.3
      });
    });

    emailInput.addEventListener('blur', () => {
      gsap.to(newsletterWrapper, {
        scale: 1,
        boxShadow: "0 0 0 rgba(126, 236, 211, 0)",
        duration: 0.3
      });
    });
  }
}

// ==========================================
// SUBSCRIBE BUTTON SUCCESS ANIMATION
// ==========================================

export function initSubscribeButtonAnimation() {
  const subscribeBtn = document.querySelector('.newsletter-submit');

  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const btn = subscribeBtn as HTMLButtonElement;
      const originalText = btn.textContent;
      const originalWidth = btn.offsetWidth;

      gsap.timeline()
        .to(btn, {
          scale: 0.95,
          duration: 0.1
        })
        .to(btn, {
          width: 50,
          borderRadius: "50%",
          duration: 0.4
        })
        .to(btn, {
          rotation: 360,
          duration: 0.5,
          ease: "power2.inOut"
        })
        .to(btn, {
          backgroundColor: "#7EECD3",
          duration: 0.2
        })
        .call(() => {
          btn.innerHTML = "&#10003;";
        })
        .to(btn, {
          scale: 1.2,
          duration: 0.2,
          yoyo: true,
          repeat: 1
        })
        .to(btn, {
          delay: 1.5,
          width: originalWidth,
          borderRadius: "8px",
          rotation: 0,
          scale: 1,
          backgroundColor: "#0D1B2A",
          duration: 0.4,
          onComplete: () => {
            btn.textContent = originalText;
          }
        });
    });
  }
}

// ==========================================
// LOGO GLOW ANIMATION
// ==========================================

export function initLogoGlow() {
  const footerLogo = document.querySelector('.footer-logo');

  if (footerLogo) {
    gsap.to(footerLogo, {
      filter: "drop-shadow(0 0 20px rgba(232, 212, 77, 0.5))",
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    footerLogo.addEventListener('mouseenter', () => {
      gsap.to(footerLogo, {
        rotation: 5,
        scale: 1.1,
        duration: 0.3
      });
    });

    footerLogo.addEventListener('mouseleave', () => {
      gsap.to(footerLogo, {
        rotation: 0,
        scale: 1,
        duration: 0.3
      });
    });
  }
}

// ==========================================
// SOCIAL ICONS BOUNCE
// ==========================================

export function initSocialIconsAnimation() {
  const socialIcons = document.querySelectorAll('.social-icon');

  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        y: -8,
        scale: 1.2,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    });

    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)"
      });
    });
  });
}

// ==========================================
// FOOTER LINKS UNDERLINE ANIMATION
// ==========================================

export function initFooterLinksAnimation() {
  const footerLinks = document.querySelectorAll('.footer-link');

  footerLinks.forEach(link => {
    const underline = document.createElement('span');
    underline.className = 'link-underline absolute bottom-0 left-0 w-full h-[1px] bg-yellow transform scale-x-0';
    underline.style.transformOrigin = 'left center';
    (link as HTMLElement).style.position = 'relative';
    link.appendChild(underline);

    link.addEventListener('mouseenter', () => {
      gsap.to(underline, {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 0.3
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(underline, {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.3
      });
    });
  });
}

// ==========================================
// FOOTER COLUMNS REVEAL
// ==========================================

export function initFooterColumnsReveal() {
  gsap.from(".footer-column", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  });
}

// ==========================================
// INITIALIZE ALL FOOTER ANIMATIONS
// ==========================================

export function initFooterAnimations() {
  initNewsletterAnimations();
  initSubscribeButtonAnimation();
  initLogoGlow();
  initSocialIconsAnimation();
  initFooterLinksAnimation();
  initFooterColumnsReveal();

  // Get all spots in footer
  const spots = document.querySelectorAll('footer .floating-spot');

  spots.forEach((spot, index) => {
    const animationType = spot.getAttribute('data-animation');

    // Base float for all spots
    initFloat(spot, { delay: index * 0.2 });

    // Specific animations based on data-animation attribute
    if (animationType === 'rotate') {
      const svg = spot.querySelector('svg');
      if (svg) {
        initRotation(svg, 20);
      }
    }
  });
}
