'use client';

import Image from 'next/image';

const spots = [
  { name: 'lips-eye', src: '/images/section2/01_lips_with_eye.png', className: 'spot-lips-eye top-[5%] left-[5%] w-16 md:w-24', alt: 'Lips with eye' },
  { name: 'diamond-teal', src: '/images/section2/02_diamond_teal.png', className: 'spot-diamond-teal top-[15%] right-[8%] w-12 md:w-20', alt: 'Teal diamond' },
  { name: 'blob-gradient', src: '/images/section2/03_blob_gradient.png', className: 'spot-blob-gradient bottom-[25%] left-[3%] w-14 md:w-20', alt: 'Gradient blob' },
  { name: 'blob-green', src: '/images/section2/04_blob_green.png', className: 'spot-blob-green top-[40%] right-[3%] w-10 md:w-16 hidden md:block', alt: 'Green blob' },
  { name: 'diamond-pink', src: '/images/section2/05_diamond_pink.png', className: 'spot-diamond-pink bottom-[15%] right-[10%] w-10 md:w-14', alt: 'Pink diamond' },
  { name: 'eyeball', src: '/images/section2/06_eyeball_small.png', className: 'spot-eyeball top-[25%] left-[12%] w-8 md:w-12 hidden md:block', alt: 'Eyeball' },
  { name: 'squiggle-pink', src: '/images/section2/07_squiggle_pink.png', className: 'spot-squiggle-pink bottom-[35%] right-[5%] w-12 md:w-16 hidden lg:block', alt: 'Pink squiggle' },
  { name: 'sun-eye', src: '/images/section2/08_sun_eye.png', className: 'spot-sun-eye top-[8%] left-[40%] w-10 md:w-14', alt: 'Sun with eye' },
  { name: 'diamond-warm', src: '/images/section2/09_diamond_warm.png', className: 'spot-diamond-warm bottom-[40%] left-[8%] w-8 md:w-12 hidden md:block', alt: 'Warm diamond' },
  { name: 'squiggle-purple', src: '/images/section2/10_squiggle_purple.png', className: 'spot-squiggle-purple top-[55%] left-[2%] w-10 md:w-14 hidden lg:block', alt: 'Purple squiggle' },
  { name: 'lips-orange', src: '/images/section2/11_lips_orange.png', className: 'spot-lips-orange bottom-[10%] left-[15%] w-10 md:w-14 hidden md:block', alt: 'Orange lips' },
];

export default function SpotIllustrations() {
  return (
    <>
      {spots.map((spot) => (
        <div
          key={spot.name}
          className={`spot absolute z-10 ${spot.className}`}
        >
          <Image
            src={spot.src}
            alt={spot.alt}
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
      ))}
    </>
  );
}
