'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { allStores } from './stores';
import StoreCard from './StoreCard';
import NewMexicoMap from './NewMexicoMap';
import { initSectionFourAnimations } from './animations';
import {
  SpotEyeball,
  SpotLips,
  SpotDiamond,
  SpotTriangles,
  SpotAmoeba,
  SpotStar,
  SpotPill,
  SpotFace,
  SpotEyeDiamond,
  SpotSquiggle,
  SpotRing,
  SpotSpiral
} from './FloatingSpots';

export default function SectionFour() {
  const [activeStore, setActiveStore] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const storeListRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    // Initialize GSAP animations after component mounts
    const timer = setTimeout(() => {
      initSectionFourAnimations();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleStoreSelect = (id: string) => {
    const newActiveStore = activeStore === id ? null : id;
    setActiveStore(newActiveStore);

    // Scroll to the selected card
    if (newActiveStore && cardRefs.current[newActiveStore] && storeListRef.current) {
      const card = cardRefs.current[newActiveStore];
      const container = storeListRef.current;

      if (card) {
        const cardTop = card.offsetTop;
        const containerHeight = container.clientHeight;
        const cardHeight = card.clientHeight;

        // Scroll to center the card in view
        container.scrollTo({
          top: cardTop - (containerHeight / 2) + (cardHeight / 2),
          behavior: 'smooth'
        });
      }
    }
  };

  const setCardRef = (id: string) => (el: HTMLDivElement | null) => {
    cardRefs.current[id] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="section-four relative min-h-screen bg-navy py-20 md:py-32 px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(232, 212, 77, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232, 212, 77, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    >
      {/* Large Background Image - Top Right Corner */}
      <div className="absolute -top-[5%] -right-[10%] w-[70%] h-[70%] md:-top-[10%] md:-right-[15%] md:w-[60%] md:h-[60%] pointer-events-none z-[1] opacity-5 rotate-12">
        <Image
          src="/images/section-four-bg.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Floating Spot Illustrations */}
      <SpotEyeball />
      <SpotLips />
      <SpotDiamond />
      <SpotTriangles />
      <SpotAmoeba />
      <SpotStar />
      <SpotPill />
      <SpotFace />
      <SpotEyeDiamond />
      <SpotSquiggle />
      <SpotRing />
      <SpotSpiral />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label text-xs md:text-sm tracking-widest mb-2 text-white/50"
          >
            04 — VISIT US
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="section-headline mb-4 md:mb-6"
          >
            <h2 className="headline-word font-bebas text-6xl md:text-8xl lg:text-9xl text-white leading-none">
              FIND YOUR
            </h2>
            <h2 className="headline-word font-bebas text-6xl md:text-8xl lg:text-9xl text-yellow leading-none">
              OASIS
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="subheadline text-white/70 text-base md:text-lg max-w-xl mx-auto"
          >
            10 locations across New Mexico. Locally owned and operated.
          </motion.p>
        </div>

        {/* Map and Store List */}
        <div className="locations-content grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="map-container relative bg-navy-light/30 rounded-2xl p-6 md:p-8 border border-purple/20 aspect-square lg:aspect-auto lg:min-h-[500px]"
          >
            <NewMexicoMap
              activeStore={activeStore}
              onPinClick={handleStoreSelect}
            />
          </motion.div>

          {/* Store List */}
          <div
            ref={storeListRef}
            className="stores-list space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar"
          >
            {allStores.map((store, index) => (
              <StoreCard
                key={store.id}
                ref={setCardRef(store.id)}
                store={store}
                index={index}
                isActive={activeStore === store.id}
                onSelect={handleStoreSelect}
              />
            ))}
          </div>
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
            className="font-bebas text-xl md:text-2xl px-8 py-4 bg-yellow text-charcoal hover:bg-yellow-light transition-colors tracking-wide rounded-lg"
          >
            VIEW ALL LOCATIONS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="font-bebas text-xl md:text-2xl px-8 py-4 bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-colors tracking-wide rounded-lg"
          >
            CONTACT US
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
