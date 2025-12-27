'use client'

import { motion } from 'framer-motion'
import { TopoBackground } from '@/components/TopoBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-orange relative overflow-hidden">
      <TopoBackground />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
        <div className="flex gap-8">
          <a href="#" className="font-bebas text-lg hover:text-yellow transition-colors">HOME</a>
          <a href="#" className="font-bebas text-lg hover:text-yellow transition-colors">SHOP</a>
          <a href="#" className="font-bebas text-lg hover:text-yellow transition-colors">LOCATIONS</a>
        </div>
        <div className="font-bebas text-3xl tracking-wider">OASIS</div>
        <div className="flex gap-8">
          <a href="#" className="font-bebas text-lg hover:text-yellow transition-colors">ABOUT</a>
          <a href="#" className="font-bebas text-lg hover:text-yellow transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Diagonal Stripes Accent */}
      <div className="absolute left-10 bottom-1/4 flex gap-2 -rotate-45 z-10">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="w-2 h-24 bg-yellow" />
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-8 md:px-16 relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-widest mb-2 opacity-60"
          >
            01 — NEW MEXICO OWNED SINCE 1998
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-bebas text-xl text-yellow tracking-wider mb-4"
          >
            THE ORIGINAL SMOKE SHOP
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="headline text-7xl md:text-9xl mb-8"
          >
            SMOKE LOCAL
            <br />
            <span className="headline-outline">SUPPORT LOCAL</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-bebas text-2xl tracking-wide max-w-xl mb-4"
          >
            NOT CORPORATE. NEVER WILL BE. JUST NEW MEXICANS SERVING NEW MEXICANS WITH THE BEST GLASS, ACCESSORIES, AND LOCAL ARTISAN GOODS.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-base opacity-80 max-w-lg"
          >
            Shop our curated collection of premium smoking accessories, then step through to our connected Oasis Cannabis Co. dispensary. One building. Two experiences. Zero hassle.
          </motion.p>
        </div>

        {/* Placeholder for Lottie illustration */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-96 h-[500px] border-2 border-dashed border-white/30 rounded-3xl flex items-center justify-center">
            <span className="text-white/50 text-center p-8">
              Psychedelic Lottie<br />Illustration Here
            </span>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-6 z-10">
        <div className="flex animate-marquee">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className={`font-bebas text-7xl whitespace-nowrap ${i % 2 === 0 ? 'text-white' : 'headline-outline'}`}>
                SHOP LOCAL
              </span>
              <span className="w-4 h-4 bg-yellow rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
