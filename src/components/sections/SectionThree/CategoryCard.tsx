'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  productCount: string;
  index: number;
}

export default function CategoryCard({
  title,
  description,
  imageSrc,
  imageAlt,
  productCount,
  index
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(156, 95, 245, 0.35)",
        transition: { duration: 0.3 }
      }}
      className="category-card relative overflow-hidden rounded-xl md:rounded-[20px] p-4 md:p-6 lg:p-8
        bg-purple border border-purple-light/30
        cursor-pointer group"
    >
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow to-pink" />

      {/* Product count badge */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-yellow text-charcoal font-bebas text-xs md:text-sm px-2 py-0.5 md:px-3 md:py-1 rounded-full">
        {productCount}
      </div>

      {/* Illustration */}
      <motion.div
        className="card-illustration relative w-full aspect-[4/3] md:aspect-square mb-3 md:mb-4 flex items-center justify-center"
        initial={{ scale: 0.8, rotate: -5 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.1 + 0.2,
          type: "spring",
          stiffness: 120,
          damping: 14
        }}
        whileHover={{
          y: -6,
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.3 }
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
          className="object-contain max-h-[100px] md:max-h-[180px] lg:max-h-[220px] w-auto"
        />
      </motion.div>

      {/* Title */}
      <h3 className="card-title font-bebas text-lg md:text-2xl lg:text-3xl text-yellow mb-1 md:mb-2 tracking-wide text-center transition-colors duration-300 group-hover:text-white leading-tight">
        {title}
      </h3>

      {/* Description - hidden on mobile, visible on hover for tablet+ */}
      <p className="card-description hidden md:block text-white/80 text-sm md:text-base leading-relaxed text-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {description}
      </p>
    </motion.div>
  );
}
