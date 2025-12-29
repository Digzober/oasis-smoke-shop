'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { Store } from './stores';

interface StoreCardProps {
  store: Store;
  index: number;
  isActive: boolean;
  onSelect: (id: string) => void;
}

const StoreCard = forwardRef<HTMLDivElement, StoreCardProps>(
  ({ store, index, isActive, onSelect }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        animate={{
          scale: isActive ? 1.02 : 1,
          transition: { duration: 0.2 }
        }}
        whileHover={{
          scale: isActive ? 1.02 : 1.01,
          transition: { duration: 0.2 }
        }}
        onClick={() => onSelect(store.id)}
        className={`store-card relative p-3 md:p-4 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
          isActive
            ? 'bg-purple/30 border-yellow shadow-lg shadow-yellow/10'
            : 'bg-navy-light/50 border-transparent hover:border-purple/50'
        }`}
      >
        {/* Store header */}
        <div className="flex items-center justify-between mb-1.5">
          <h3 className={`font-bebas text-lg md:text-xl tracking-wide transition-colors ${
            isActive ? 'text-yellow' : 'text-yellow/90'
          }`}>
            {store.name}
          </h3>
          <div className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className={`w-4 h-4 transition-colors ${
              isActive ? 'fill-yellow' : 'fill-pink'
            }`}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        </div>

        {/* Region badge */}
        <div className="text-[10px] text-white/50 uppercase tracking-wider mb-2">
          {store.region}
        </div>

        {/* Store details */}
        <div className="space-y-1.5 text-xs">
          {/* Address */}
          <div className="flex items-start gap-1.5 text-white/70">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0 mt-0.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
            <span className="leading-tight">{store.address}, {store.city}</span>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-1.5 text-white/70">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0 mt-0.5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 11H11V7h1.5v4.5H16v1.5h-3.5z"/>
            </svg>
            <span className="leading-tight">{store.hours}</span>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-1.5 text-white/70">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0 mt-0.5">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>{store.phone}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-3">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(store.address + ', ' + store.city)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 bg-yellow text-charcoal font-bebas text-xs tracking-wide rounded-md hover:bg-yellow-light transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
            </svg>
            DIRECTIONS
          </a>
          <a
            href={`tel:${store.phone.replace(/[^0-9]/g, '')}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 bg-transparent text-white border border-white/30 font-bebas text-xs tracking-wide rounded-md hover:bg-white/10 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            CALL
          </a>
        </div>
      </motion.div>
    );
  }
);

StoreCard.displayName = 'StoreCard';

export default StoreCard;
