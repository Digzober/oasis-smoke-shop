'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Image from 'next/image';
import { BubbleBackground } from '@/components/BubbleBackground';
import CategoryCard from './CategoryCard';
import { initSectionThreeAnimations } from './animations';
import twinkleStar from '../../../../public/lottie/twinkle-star.json';
import blobAnimation from '../../../../public/lottie/blob.json';

// Product categories data
const categories = [
  {
    title: 'GLASS',
    description: 'Pipes, bongs, bubblers & dab rigs',
    imageSrc: '/images/section3/rolling.png',
    imageAlt: 'Glass pipes illustration',
    productCount: '200+'
  },
  {
    title: 'PAPERS',
    description: 'Papers, cones, trays & tips',
    imageSrc: '/images/section3/vapes.png',
    imageAlt: 'Rolling papers illustration',
    productCount: '150+'
  },
  {
    title: 'GRINDERS',
    description: 'Premium metal & acrylic',
    imageSrc: '/images/section3/grinders.png',
    imageAlt: 'Grinders illustration',
    productCount: '75+'
  },
  {
    title: 'INCENSE & AROMA',
    description: 'Sticks, cones & essential oils',
    imageSrc: '/images/section3/incense.png',
    imageAlt: 'Incense illustration',
    productCount: '100+'
  },
  {
    title: 'VAPES & DEVICES',
    description: 'Batteries, dry herb & accessories',
    imageSrc: '/images/section3/glass.png',
    imageAlt: 'Vapes illustration',
    productCount: '80+'
  },
  {
    title: 'LOCAL ARTISAN',
    description: 'New Mexico made goods',
    imageSrc: '/images/section3/artisan.png',
    imageAlt: 'Local artisan illustration',
    productCount: '50+'
  }
];

// Yellow dots positions
const dots = [
  { top: '8%', left: '15%' },
  { top: '15%', right: '12%' },
  { top: '35%', left: '5%' },
  { top: '50%', right: '8%' },
  { bottom: '30%', left: '18%' },
  { bottom: '20%', right: '15%' },
  { top: '70%', left: '8%' },
  { bottom: '35%', right: '5%' },
];

// Floating dot animation variants
const dotVariants = {
  animate: (i: number) => ({
    x: [0, (i % 2 === 0 ? 8 : -8), 0],
    y: [0, (i % 3 === 0 ? -10 : 6), 0],
    transition: {
      duration: 4 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

// Animated spots data - visible on mobile and desktop
const animatedSpots = [
  // Jumping spots
  { className: 'spot-jump', color: 'bg-yellow', size: 'w-4 h-4 md:w-6 md:h-6', position: 'top-[12%] left-[8%]' },
  { className: 'spot-jump', color: 'bg-pink', size: 'w-3 h-3 md:w-5 md:h-5', position: 'top-[25%] right-[10%]' },
  { className: 'spot-jump', color: 'bg-purple', size: 'w-5 h-5 md:w-7 md:h-7', position: 'bottom-[18%] left-[12%]' },

  // Wobbling spots
  { className: 'spot-wobble', color: 'bg-orange', size: 'w-6 h-6 md:w-8 md:h-8', position: 'top-[40%] right-[5%]' },
  { className: 'spot-wobble', color: 'bg-yellow', size: 'w-4 h-4 md:w-6 md:h-6', position: 'bottom-[35%] right-[8%]' },

  // Floating spots
  { className: 'spot-float', color: 'bg-mint-dark', size: 'w-5 h-5 md:w-7 md:h-7', position: 'top-[55%] left-[5%]' },
  { className: 'spot-float', color: 'bg-purple-light', size: 'w-4 h-4 md:w-5 md:h-5', position: 'top-[8%] right-[25%]' },
  { className: 'spot-float', color: 'bg-pink', size: 'w-3 h-3 md:w-4 md:h-4', position: 'bottom-[45%] left-[3%]' },

  // Squash stretch spots
  { className: 'spot-squash', color: 'bg-yellow', size: 'w-5 h-5 md:w-7 md:h-7', position: 'top-[70%] right-[3%]' },
  { className: 'spot-squash', color: 'bg-orange', size: 'w-4 h-4 md:w-6 md:h-6', position: 'bottom-[25%] left-[6%]' },

  // Pulsing spots
  { className: 'spot-pulse', color: 'bg-purple', size: 'w-3 h-3 md:w-4 md:h-4', position: 'top-[18%] left-[15%]' },
  { className: 'spot-pulse', color: 'bg-pink', size: 'w-4 h-4 md:w-5 md:h-5', position: 'bottom-[12%] right-[12%]' },

  // Bouncing spots
  { className: 'spot-bounce', color: 'bg-yellow', size: 'w-3 h-3 md:w-5 md:h-5', position: 'top-[48%] right-[2%]' },
  { className: 'spot-bounce', color: 'bg-mint-dark', size: 'w-4 h-4 md:w-6 md:h-6', position: 'bottom-[55%] left-[2%]' },

  // Spinning spots (squares/diamonds)
  { className: 'spot-spin', color: 'bg-purple-light', size: 'w-4 h-4 md:w-5 md:h-5', position: 'top-[32%] left-[4%]', shape: 'rounded-sm' },
  { className: 'spot-spin', color: 'bg-orange', size: 'w-3 h-3 md:w-4 md:h-4', position: 'bottom-[40%] right-[4%]', shape: 'rounded-sm' },
];

export default function SectionThree() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize GSAP animations after component mounts
    const timer = setTimeout(() => {
      initSectionThreeAnimations();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="section-three relative min-h-screen bg-mint py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Bubble Background */}
      <BubbleBackground />

      {/* Large Background Image - Top Left Corner */}
      <div className="absolute -top-[10%] -left-[15%] w-[70%] h-[70%] md:w-[60%] md:h-[60%] pointer-events-none z-[1] opacity-10 -rotate-12">
        <Image
          src="/images/section-three-bg.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Animated Spots - Visible on mobile and desktop */}
      {animatedSpots.map((spot, i) => (
        <div
          key={i}
          className={`${spot.className} absolute ${spot.size} ${spot.color} ${spot.position} ${spot.shape || 'rounded-full'} z-10 opacity-80`}
        />
      ))}

      {/* Twinkle Star Decorations - Hidden on mobile, visible on tablet+ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:block absolute md:top-[5%] md:right-[3%] md:w-48 md:h-48 lg:w-56 lg:h-56 z-10"
      >
        <Lottie
          animationData={twinkleStar}
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hidden md:block absolute md:top-[15%] md:left-[2%] md:w-40 md:h-40 lg:w-48 lg:h-48 z-10"
      >
        <Lottie
          animationData={twinkleStar}
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hidden md:block absolute md:bottom-[15%] md:right-[2%] md:w-44 md:h-44 lg:w-52 lg:h-52 z-10"
      >
        <Lottie
          animationData={twinkleStar}
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden md:block absolute md:bottom-[30%] md:left-[1%] md:w-36 md:h-36 lg:w-44 lg:h-44 z-10"
      >
        <Lottie
          animationData={twinkleStar}
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Blob Lottie - Bottom on mobile, left side on desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-[2%] md:left-[6%] md:translate-x-0 md:bottom-auto md:top-[9%] lg:left-[8%] lg:top-[7%] w-32 h-32 md:w-56 md:h-56 lg:w-72 lg:h-72 z-5 opacity-60 md:opacity-80"
      >
        <Lottie
          animationData={blobAnimation}
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Purple Dots - Hidden on mobile */}
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={dotVariants}
          animate="animate"
          className="hidden md:block absolute w-3 h-3 rounded-full bg-purple z-5"
          style={{ top: dot.top, left: dot.left, right: dot.right, bottom: dot.bottom }}
        />
      ))}

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 relative">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label text-xs md:text-sm tracking-widest mb-2 text-charcoal/60"
          >
            03 — WHAT WE CARRY
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="section-headline mb-4 md:mb-6 relative"
          >
            <h2 className="headline-word font-bebas text-6xl md:text-8xl lg:text-9xl text-charcoal leading-none">
              THE GOODS
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="section-subtitle text-charcoal/80 text-base md:text-lg max-w-xl mx-auto"
          >
            Curated by people who actually know what they&apos;re talking about.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              imageSrc={category.imageSrc}
              imageAlt={category.imageAlt}
              productCount={category.productCount}
              index={index}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary font-bebas text-xl md:text-2xl px-8 py-4 bg-yellow text-charcoal hover:bg-yellow-light transition-colors tracking-wide rounded-lg"
          >
            SHOP ALL PRODUCTS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary font-bebas text-xl md:text-2xl px-8 py-4 bg-transparent text-charcoal border-2 border-charcoal hover:bg-charcoal hover:text-white transition-colors tracking-wide rounded-lg"
          >
            VISIT A STORE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
