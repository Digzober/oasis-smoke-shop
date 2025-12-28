'use client';

import Image from 'next/image';

interface ExperienceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  side: 'left' | 'right';
}

export default function ExperienceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  side
}: ExperienceCardProps) {
  return (
    <div
      className={`experience-card ${side === 'left' ? 'card-left' : 'card-right'}
        relative overflow-hidden rounded-[20px] p-6 md:p-8
        bg-white/5 border border-white/10
        backdrop-blur-sm
        transition-transform duration-300
        before:absolute before:inset-x-0 before:top-0 before:h-1
        before:bg-gradient-to-r before:from-yellow before:to-pink
      `}
    >
      <div className="card-image relative w-full aspect-square mb-6 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={350}
          height={350}
          className="object-contain max-h-[280px] md:max-h-[350px] w-auto"
        />
      </div>

      <h3 className="font-bebas text-3xl md:text-4xl text-yellow mb-3 tracking-wide">
        {title}
      </h3>

      <p className="text-white/70 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
