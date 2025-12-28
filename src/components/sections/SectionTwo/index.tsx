'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ExperienceCard from './ExperienceCard';
import {
  initScrollAnimations,
  initCardHoverAnimations
} from './animations';

gsap.registerPlugin(ScrollTrigger);

// Yellow dots positions with unique classes for animation
const dots = [
  { top: '12%', left: '25%', className: 'dot-1' },
  { top: '20%', right: '20%', className: 'dot-2' },
  { top: '45%', left: '10%', className: 'dot-3' },
  { top: '60%', right: '15%', className: 'dot-4' },
  { bottom: '25%', left: '30%', className: 'dot-5' },
  { bottom: '18%', right: '25%', className: 'dot-6' },
  { top: '75%', left: '20%', className: 'dot-7' },
  { bottom: '40%', right: '8%', className: 'dot-8' },
];

export default function SectionTwo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      initScrollAnimations(sectionRef.current!);
      initCardHoverAnimations();

      // Animate yellow dots floating around - smoother with longer durations
      gsap.to(".dot-1", { x: 10, y: -8, duration: 4.5, ease: "power1.inOut", yoyo: true, repeat: -1 });
      gsap.to(".dot-2", { x: -8, y: 6, duration: 5.5, ease: "power1.inOut", yoyo: true, repeat: -1 });
      gsap.to(".dot-3", { x: 8, y: 10, duration: 5, ease: "power1.inOut", yoyo: true, repeat: -1 });
      gsap.to(".dot-4", { x: -6, y: -10, duration: 6, ease: "power1.inOut", yoyo: true, repeat: -1 });
      gsap.to(".dot-5", { x: 10, y: -6, duration: 4.8, ease: "power1.inOut", yoyo: true, repeat: -1 });
      gsap.to(".dot-6", { x: -8, y: 8, duration: 5.2, ease: "power1.inOut", yoyo: true, repeat: -1 });
      gsap.to(".dot-7", { x: 6, y: 12, duration: 5.8, ease: "power1.inOut", yoyo: true, repeat: -1 });
      gsap.to(".dot-8", { x: -10, y: -8, duration: 5.4, ease: "power1.inOut", yoyo: true, repeat: -1 });

      // Animate seashell floating - gentler movement
      gsap.to(".seashell-decoration", {
        x: 8,
        y: -10,
        rotation: 5,
        duration: 6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      // Animate jellyfish floating - gentler movement
      gsap.to(".jellyfish-decoration", {
        x: -8,
        y: -12,
        rotation: -3,
        duration: 7,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      // Animate blue eyes floating - each with unique movement
      gsap.to(".blue-eye-1", { x: 6, y: -8, rotation: 4, duration: 5.5, ease: "power1.inOut", yoyo: true, repeat: -1 });
      gsap.to(".blue-eye-2", { x: -5, y: 7, rotation: -3, duration: 6.2, ease: "power1.inOut", yoyo: true, repeat: -1 });
      gsap.to(".blue-eye-3", { x: 8, y: -6, rotation: 5, duration: 5.8, ease: "power1.inOut", yoyo: true, repeat: -1 });
      gsap.to(".blue-eye-4", { x: -7, y: -9, rotation: -4, duration: 6.5, ease: "power1.inOut", yoyo: true, repeat: -1 });
      gsap.to(".blue-eye-5", { x: 5, y: 8, rotation: 3, duration: 5.2, ease: "power1.inOut", yoyo: true, repeat: -1 });
      gsap.to(".blue-eye-6", { x: -6, y: -5, rotation: -2, duration: 6.8, ease: "power1.inOut", yoyo: true, repeat: -1 });

      // Button entrance animation on scroll
      gsap.from(".btn-cta", {
        scrollTrigger: {
          trigger: ".cta-container",
          start: "top 90%",
          toggleActions: "play none none reverse"
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      });

      // Continuous pulse animation on button
      gsap.to(".btn-cta", {
        scale: 1.08,
        duration: 1.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-two relative min-h-screen bg-navy py-20 md:py-32 px-4 md:px-8 overflow-hidden"
    >
      {/* Yellow Dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className={`dot ${dot.className} absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow z-5`}
          style={{ top: dot.top, left: dot.left, right: dot.right, bottom: dot.bottom }}
        />
      ))}

      {/* Decorative Seashell - Top Right */}
      <div className="seashell-decoration absolute top-[6%] right-[2%] md:top-[10%] md:right-[4%] w-24 h-24 md:w-48 md:h-48 opacity-70 z-5">
        <DotLottieReact
          src="/lottie/seashell.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Decorative Jellyfish - Bottom Left */}
      <div className="jellyfish-decoration absolute bottom-[18%] left-[2%] md:bottom-[22%] md:left-[4%] w-28 h-28 md:w-56 md:h-56 opacity-60 z-5">
        <DotLottieReact
          src="/lottie/jellyfish.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Decorative Blue Eyes - scattered across page */}
      <div className="blue-eye-1 absolute top-[38%] right-[6%] md:top-[35%] md:right-[8%] w-14 h-14 md:w-24 md:h-24 opacity-80 z-5">
        <DotLottieReact
          src="/lottie/blue-eye.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="blue-eye-2 absolute top-[8%] left-[8%] md:top-[12%] md:left-[12%] w-10 h-10 md:w-16 md:h-16 opacity-70 z-5">
        <DotLottieReact
          src="/lottie/blue-eye.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="blue-eye-3 absolute bottom-[35%] right-[3%] md:bottom-[40%] md:right-[5%] w-12 h-12 md:w-20 md:h-20 opacity-75 z-5 hidden md:block">
        <DotLottieReact
          src="/lottie/blue-eye.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="blue-eye-4 absolute top-[55%] left-[4%] md:top-[50%] md:left-[6%] w-10 h-10 md:w-18 md:h-18 opacity-65 z-5">
        <DotLottieReact
          src="/lottie/blue-eye.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="blue-eye-5 absolute bottom-[12%] right-[15%] md:bottom-[15%] md:right-[20%] w-8 h-8 md:w-14 md:h-14 opacity-60 z-5 hidden md:block">
        <DotLottieReact
          src="/lottie/blue-eye.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="blue-eye-6 absolute top-[22%] right-[25%] md:top-[18%] md:right-[30%] w-8 h-8 md:w-12 md:h-12 opacity-55 z-5 hidden lg:block">
        <DotLottieReact
          src="/lottie/blue-eye.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="section-label text-xs md:text-sm tracking-widest mb-2 text-white/60">
            02 — THE OASIS EXPERIENCE
          </p>
          <p className="section-subtitle font-bebas text-lg md:text-xl text-yellow tracking-wider mb-6 md:mb-8">
            SMOKE SHOP + DISPENSARY UNDER ONE ROOF
          </p>

          <div className="section-headline overflow-hidden relative">
            <h2 className="headline-word font-bebas text-5xl md:text-8xl lg:text-9xl text-white leading-none">
              ONE BUILDING
            </h2>
            <div className="relative">
              <h2 className="headline-word font-bebas text-5xl md:text-8xl lg:text-9xl leading-none headline-outline mt-2">
                TWO EXPERIENCES
              </h2>
              {/* Cat Playing with Ball - positioned on ERIE in EXPERIENCES */}
              <div className="cat-decoration absolute -top-[37px] right-[24%] md:-top-16 md:right-[26%] lg:-top-[92px] lg:right-[28%] w-16 h-16 md:w-28 md:h-28 lg:w-40 lg:h-40 z-30">
                <DotLottieReact
                  src="/lottie/cat-ball.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="cards-container relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-24">
          {/* Left Card - Smoke Shop */}
          <div className="w-full max-w-sm md:max-w-md z-10">
            <ExperienceCard
              title="SHOP THE GOODS"
              description="Glass pipes, rolling accessories, grinders, incense, lighters, and locally made artisan products. Curated by people who actually know what they are talking about."
              imageSrc="/images/section2/pipe_guy.png"
              imageAlt="Smoke shop illustration"
              side="left"
            />
          </div>

          {/* Plus Connector */}
          <div className="plus-connector flex-shrink-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 z-20">
            <DotLottieReact
              src="/lottie/plus.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Right Card - Dispensary */}
          <div className="w-full max-w-sm md:max-w-md z-10">
            <ExperienceCard
              title="ACCESS THE PLANT"
              description="Step through to our connected Oasis Cannabis Co. dispensary for premium flower, edibles, concentrates, and vapes. Recreational and medical."
              imageSrc="/images/section2/meditation.png"
              imageAlt="Dispensary illustration"
              side="right"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-container text-center">
          <p className="text-white/70 text-base md:text-lg mb-6 max-w-xl mx-auto">
            Zero hassle. One stop. New Mexico&apos;s only true smoke shop + dispensary experience.
          </p>

          <button className="btn-cta font-bebas text-xl md:text-2xl px-8 py-4 bg-yellow text-charcoal hover:bg-yellow-light transition-colors tracking-wide rounded-lg">
            FIND A LOCATION
          </button>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3 md:py-6 z-10">
        <div className="flex animate-marquee">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8 px-2 md:px-4">
              <span className={`font-bebas text-4xl md:text-7xl whitespace-nowrap ${i % 2 === 0 ? 'text-white' : 'headline-outline'}`}>
                SHOP LOCAL
              </span>
              <span className="w-2 h-2 md:w-4 md:h-4 bg-yellow rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
