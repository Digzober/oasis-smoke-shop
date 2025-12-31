'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Lightbulb, Tag } from 'lucide-react';
import { initSectionFiveAnimations } from './animations';
import {
  SpotEyeball,
  SpotDiamond,
  SpotMeltingFace,
  SpotLipsEye
} from './FloatingSpots';

const values = [
  {
    icon: Heart,
    title: "FAMILY FIRST",
    description: "We're not a corporation—we're a family. Three generations deep in the Land of Enchantment."
  },
  {
    icon: MapPin,
    title: "LOCAL LOVE",
    description: "Every dollar you spend here stays here. We support local charities, sponsor community events, and hire our neighbors."
  },
  {
    icon: Lightbulb,
    title: "KNOW YOUR SMOKE",
    description: "Our staff aren't just employees—they're enthusiasts. We'll help you find exactly what you need, no judgment."
  },
  {
    icon: Tag,
    title: "FAIR PRICES",
    description: "Quality doesn't have to break the bank. We keep our prices competitive so you can enjoy the good stuff."
  }
];

export default function SectionFive() {
  useEffect(() => {
    // Initialize GSAP animations after component mounts
    const timer = setTimeout(() => {
      initSectionFiveAnimations();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="section-about relative py-20 md:py-32 px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: '#D97B2B' }}
    >
      {/* Topographic Background Pattern */}
      <div
        className="topo-bg-about absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 Q25 5, 40 15 T70 10 T90 20' fill='none' stroke='%230D1B2A' stroke-width='0.5'/%3E%3Cpath d='M5 30 Q20 25, 35 35 T65 30 T95 40' fill='none' stroke='%230D1B2A' stroke-width='0.5'/%3E%3Cpath d='M10 50 Q25 45, 40 55 T70 50 T90 60' fill='none' stroke='%230D1B2A' stroke-width='0.5'/%3E%3Cpath d='M5 70 Q20 65, 35 75 T65 70 T95 80' fill='none' stroke='%230D1B2A' stroke-width='0.5'/%3E%3Cpath d='M10 90 Q25 85, 40 95 T70 90 T90 100' fill='none' stroke='%230D1B2A' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Floating Spot Illustrations */}
      <SpotEyeball />
      <SpotDiamond />
      <SpotMeltingFace />
      <SpotLipsEye />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm tracking-widest mb-2 text-[#0D1B2A]/60"
          >
            05 — ABOUT US
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-4 md:mb-6"
          >
            <h2 className="font-bebas text-6xl md:text-8xl lg:text-9xl text-white leading-none">
              OUR ROOTS
            </h2>
            <h2 className="font-bebas text-6xl md:text-8xl lg:text-9xl text-yellow leading-none">
              RUN DEEP
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#0D1B2A]/80 text-base md:text-lg max-w-xl mx-auto font-inter"
          >
            Family owned. Locally operated. As New Mexican as green chile.
          </motion.p>
        </div>

        {/* Story Timeline */}
        <div className="story-timeline flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mb-16 md:mb-24">
          {/* 2011 Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="story-card story-card-2011 bg-[#0D1B2A] rounded-2xl p-6 md:p-10 max-w-md w-full"
          >
            <span className="font-bebas text-6xl md:text-8xl text-yellow leading-none block">
              2011
            </span>
            <h3 className="font-bebas text-2xl md:text-3xl text-white mt-4 mb-3 tracking-wide">
              WHERE IT ALL BEGAN
            </h3>
            <p className="font-inter text-sm md:text-base text-white/70 leading-relaxed">
              What started as a single shop on Menaul Boulevard has grown into New Mexico&apos;s most trusted smoke shop family. Founded by Kane Oueis, a born-and-raised New Mexican with a passion for community and quality, Oasis was built on a simple idea: treat every customer like family.
            </p>
          </motion.div>

          {/* Timeline Connector */}
          <div className="timeline-connector hidden md:block h-1 w-20 lg:w-32 bg-gradient-to-r from-yellow via-pink to-yellow rounded-full mx-4" />

          {/* Vertical connector for mobile */}
          <div className="timeline-connector md:hidden w-1 h-16 bg-gradient-to-b from-yellow via-pink to-yellow rounded-full" />

          {/* Today Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="story-card story-card-today bg-[#0D1B2A] rounded-2xl p-6 md:p-10 max-w-md w-full"
          >
            <span className="font-bebas text-6xl md:text-8xl text-yellow leading-none block">
              TODAY
            </span>
            <h3 className="font-bebas text-2xl md:text-3xl text-white mt-4 mb-3 tracking-wide">
              10 LOCATIONS STRONG
            </h3>
            <p className="font-inter text-sm md:text-base text-white/70 leading-relaxed">
              Over a decade later, we&apos;ve served more than 40,000 customers across 10 locations in Albuquerque, Rio Rancho, and Bernalillo. But no matter how much we grow, we never forget where we came from. Every store is staffed by locals who know the products and love the community.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-16 md:mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bebas text-3xl md:text-4xl text-[#0D1B2A] text-center mb-10 md:mb-14 tracking-wide"
          >
            WHAT WE STAND FOR
          </motion.h3>

          <div className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="value-card bg-[#0D1B2A]/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center cursor-pointer transition-all duration-300"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
              >
                <div className="value-icon w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 bg-yellow rounded-full flex items-center justify-center">
                  <value.icon className="w-7 h-7 md:w-8 md:h-8 text-[#0D1B2A]" />
                </div>
                <h4 className="font-bebas text-xl md:text-2xl text-yellow mb-3 tracking-wide">
                  {value.title}
                </h4>
                <p className="font-inter text-sm text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder Quote */}
        <div className="founder-section text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-3xl mx-auto"
          >
            {/* Quote marks */}
            <span className="absolute -top-8 -left-4 md:-left-8 text-[#0D1B2A]/20 font-bebas text-8xl md:text-9xl leading-none">
              &ldquo;
            </span>
            <span className="absolute -bottom-16 -right-4 md:-right-8 text-[#0D1B2A]/20 font-bebas text-8xl md:text-9xl leading-none">
              &rdquo;
            </span>

            <p className="founder-quote font-bebas text-2xl md:text-4xl lg:text-5xl text-[#0D1B2A] leading-tight px-8 md:px-12">
              We didn&apos;t just open a smoke shop. We built a place where people feel at home.
            </p>
            <p className="founder-name font-inter text-base md:text-lg text-[#0D1B2A]/70 mt-6 md:mt-8">
              — Kane Oueis, Founder
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
