'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import gsap from 'gsap'
import { TopoBackground } from '@/components/TopoBackground'
import SectionTwo from '@/components/sections/SectionTwo'

export default function Home() {
  const scrollDownRef = useRef<HTMLDivElement>(null)
  const lipsRef = useRef<HTMLImageElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollDownRef,
    offset: ["start end", "end start"]
  })

  // Scale from 1 to 1.7 (70% increase) as user scrolls toward it
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.7])

  // GSAP animation for lips/tongue scroll arrow
  useEffect(() => {
    if (!lipsRef.current) return

    const tl = gsap.timeline({ repeat: -1 })

    // Playful licking motion - tongue sticks out and wiggles
    tl.to(lipsRef.current, {
      scaleX: 1.1,
      duration: 0.3,
      ease: "power2.out"
    })
    .to(lipsRef.current, {
      rotation: -5,
      duration: 0.2,
      ease: "power1.inOut"
    })
    .to(lipsRef.current, {
      rotation: 5,
      duration: 0.2,
      ease: "power1.inOut"
    })
    .to(lipsRef.current, {
      rotation: -3,
      duration: 0.15,
      ease: "power1.inOut"
    })
    .to(lipsRef.current, {
      rotation: 3,
      duration: 0.15,
      ease: "power1.inOut"
    })
    .to(lipsRef.current, {
      rotation: 0,
      scaleX: 1,
      duration: 0.3,
      ease: "power2.inOut"
    })
    .to(lipsRef.current, {
      y: -10,
      duration: 0.4,
      ease: "power2.out"
    })
    .to(lipsRef.current, {
      y: 0,
      duration: 0.4,
      ease: "bounce.out"
    })
    .to({}, { duration: 1.5 }) // Pause before repeating

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <>
      <main className="min-h-screen bg-orange relative overflow-hidden">
        <TopoBackground />

      {/* Navigation - Desktop */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6 md:p-8 hidden md:flex justify-between items-center">
        <div className="flex gap-10 items-center">
          <a href="#" className="font-bebas text-2xl hover:text-yellow transition-colors">HOME</a>
          <a href="#" className="font-bebas text-2xl hover:text-yellow transition-colors">SHOP</a>
          <a href="#" className="font-bebas text-2xl hover:text-yellow transition-colors">LOCATIONS</a>
        </div>
        <div className="text-center">
          <div className="font-bebas text-5xl lg:text-6xl tracking-wider leading-none">OASIS</div>
          <div className="font-bebas text-lg lg:text-xl tracking-[0.3em] text-yellow -mt-1">SMOKE SHOP</div>
        </div>
        <div className="flex gap-10 items-center">
          <a href="#" className="font-bebas text-2xl hover:text-yellow transition-colors">ABOUT</a>
          <a href="#" className="font-bebas text-2xl hover:text-yellow transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Navigation - Mobile */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-5 flex md:hidden justify-between items-center">
        <button className="text-white p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className="text-center">
          <div className="font-bebas text-4xl tracking-wider leading-none">OASIS</div>
          <div className="font-bebas text-sm tracking-[0.25em] text-yellow -mt-1">SMOKE SHOP</div>
        </div>
        <div className="w-10"></div>
      </nav>

      {/* Diagonal Stripes Accent - Left */}
      <div className="absolute -left-10 bottom-1/4 flex gap-2 md:gap-3 -rotate-45 z-[5] opacity-50">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-2 md:w-3 h-32 md:h-64 bg-yellow" />
        ))}
      </div>

      {/* Diagonal Stripes Accent - Right (hidden on mobile) - moved to bottom right */}
      <div className="absolute -right-10 bottom-[15%] hidden md:flex gap-3 -rotate-45 z-[5] opacity-50">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-3 h-64 bg-yellow" />
        ))}
      </div>


      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-16 pt-20 md:pt-0 relative z-10">
        <div className="max-w-4xl text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm tracking-widest mb-2 opacity-60"
          >
            01 — NEW MEXICO OWNED SINCE 1998
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-bebas text-lg md:text-xl text-yellow tracking-wider mb-2 md:mb-4"
          >
            THE ORIGINAL SMOKE SHOP
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="headline text-5xl md:text-9xl mb-4 md:mb-8"
          >
            SMOKE LOCAL
            <br />
            <span className="headline-outline">SUPPORT LOCAL</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-bebas text-lg md:text-2xl tracking-wide max-w-xl mx-auto mb-3 md:mb-4 px-2"
          >
            NOT CORPORATE. NEVER WILL BE. JUST NEW MEXICANS SERVING NEW MEXICANS WITH THE BEST GLASS, ACCESSORIES, AND LOCAL ARTISAN GOODS.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-sm md:text-base opacity-80 max-w-lg mx-auto px-2 hidden md:block"
          >
            Shop our curated collection of premium smoking accessories, then step through to our connected Oasis Cannabis Co. dispensary. One building. Two experiences. Zero hassle.
          </motion.p>
        </div>

        {/* Lottie illustration - Mobile - Above text, centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute left-1/2 -translate-x-1/2 top-16 lg:hidden z-0 opacity-70"
        >
          <DotLottieReact
            src="/lottie/hot-balloon.lottie"
            loop
            autoplay
            style={{ width: 195, height: 234 }}
          />
        </motion.div>

        {/* Lottie illustration - Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute right-[15%] top-1/2 -translate-y-1/2 hidden lg:block z-0"
        >
          <DotLottieReact
            src="/lottie/hot-balloon.lottie"
            loop
            autoplay
            style={{ width: 600, height: 700 }}
          />
        </motion.div>
      </section>

      {/* Scroll Down Indicator - Bottom Center */}
      <motion.div
        ref={scrollDownRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <motion.div
          style={{ scale }}
          className="flex flex-col items-center"
        >
          <Image
            ref={lipsRef}
            src="/images/scroll-arrow.png"
            alt="Scroll down"
            width={180}
            height={180}
            className="w-[100px] h-[100px] md:w-[180px] md:h-[180px]"
          />
          <p className="font-bebas text-base md:text-xl tracking-widest mt-1 md:mt-2 text-yellow">
            SCROLL DOWN
          </p>
        </motion.div>
      </motion.div>

      </main>

      {/* Section Two - One Building, Two Experiences */}
      <SectionTwo />
    </>
  )
}
