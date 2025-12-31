'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Clock, TrendingUp, PartyPopper } from 'lucide-react';
import { initSectionSixAnimations } from './animations';
import {
  SpotStar,
  SpotPill,
  SpotAmoeba,
  SpotRing
} from './FloatingSpots';

const benefits = [
  { icon: DollarSign, text: "EMPLOYEE DISCOUNTS" },
  { icon: Clock, text: "FLEXIBLE SCHEDULES" },
  { icon: TrendingUp, text: "GROWTH OPPORTUNITIES" },
  { icon: PartyPopper, text: "FUN ENVIRONMENT" }
];

const jobs = [
  {
    title: "SALES ASSOCIATE",
    location: "Multiple Locations",
    type: "Full-time / Part-time",
    description: "Be the face of Oasis. Help customers find their perfect products, keep the store looking fresh, and vibe with an awesome team."
  },
  {
    title: "ASSISTANT MANAGER",
    location: "Heights Location",
    type: "Full-time",
    description: "Lead shifts, train new team members, handle inventory, and help us deliver an A+ customer experience every single day."
  },
  {
    title: "INVENTORY SPECIALIST",
    location: "Warehouse / Coors",
    type: "Full-time",
    description: "Keep our shelves stocked and our counts accurate. Perfect for detail-oriented folks who love organization."
  }
];

export default function SectionSix() {
  useEffect(() => {
    // Initialize GSAP animations after component mounts
    const timer = setTimeout(() => {
      initSectionSixAnimations();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="careers"
      className="section-careers relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-navy"
      style={{
        backgroundImage: `
          linear-gradient(rgba(232, 212, 77, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232, 212, 77, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
    >
      {/* Floating Spot Illustrations */}
      <SpotStar />
      <SpotPill />
      <SpotAmoeba />
      <SpotRing />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm tracking-widest mb-2 text-white/50"
          >
            06 — CAREERS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-4 md:mb-6"
          >
            <h2 className="font-bebas text-6xl md:text-8xl lg:text-9xl text-white leading-none">
              JOIN THE
            </h2>
            <h2 className="careers-headline font-bebas text-6xl md:text-8xl lg:text-9xl text-yellow leading-none">
              FAMILY
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 text-base md:text-lg max-w-xl mx-auto font-inter"
          >
            We&apos;re always looking for passionate people who love smoke culture and treating customers right.
          </motion.p>
        </div>

        {/* Benefits Marquee */}
        <div className="benefits-marquee bg-orange py-4 -mx-4 md:-mx-8 mb-12 md:mb-16 overflow-hidden">
          <div className="benefits-marquee-content flex gap-16 whitespace-nowrap">
            {[...benefits, ...benefits].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-bebas text-lg md:text-xl tracking-wide">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="jobs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="job-card relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm cursor-pointer transition-all duration-300"
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Job Type Badge */}
              <span className="job-type-badge absolute top-5 right-5 bg-yellow text-navy font-inter text-[11px] font-semibold uppercase px-3 py-1.5 rounded-full">
                {job.type}
              </span>

              {/* Job Title */}
              <h3 className="font-bebas text-2xl md:text-3xl text-white mb-2 pr-24">
                {job.title}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-2 text-pink mb-5">
                <MapPin className="w-4 h-4" />
                <span className="font-inter text-sm">{job.location}</span>
              </div>

              {/* Description */}
              <p className="font-inter text-sm md:text-[15px] text-white/70 leading-relaxed mb-6">
                {job.description}
              </p>

              {/* Apply Button */}
              <button className="apply-btn w-full bg-transparent border-2 border-yellow text-yellow font-bebas text-lg tracking-wider py-3 px-6 rounded-lg hover:bg-yellow hover:text-navy transition-colors duration-300">
                APPLY NOW
              </button>
            </motion.div>
          ))}
        </div>

        {/* General Application CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h4 className="font-bebas text-2xl md:text-3xl text-white/60 mb-5 tracking-wide">
            DON&apos;T SEE YOUR ROLE?
          </h4>
          <p className="font-inter text-white/50 text-sm md:text-base mb-6 max-w-md mx-auto">
            We&apos;re always accepting applications. Send your resume to{' '}
            <a href="mailto:careers@oasisvape.com" className="text-yellow hover:underline">
              careers@oasisvape.com
            </a>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-orange text-white font-bebas text-xl tracking-wider py-4 px-12 rounded-xl hover:bg-yellow hover:text-navy transition-colors duration-300"
          >
            SEND GENERAL APPLICATION
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
