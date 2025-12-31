'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { initFooterAnimations } from './animations';
import { SpotSpiral } from './FloatingSpots';

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Locations", href: "#locations" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "mailto:info@oasisvape.com" }
];

const products = [
  { label: "Vapes", href: "#" },
  { label: "Glass", href: "#" },
  { label: "CBD", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "E-Liquids", href: "#" }
];

export default function Footer() {
  useEffect(() => {
    // Initialize GSAP animations after component mounts
    const timer = setTimeout(() => {
      initFooterAnimations();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0a1420] overflow-hidden">
      {/* Floating Spot */}
      <SpotSpiral />

      {/* Newsletter Band */}
      <div className="newsletter-band bg-mint py-10 md:py-14 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bebas text-3xl md:text-4xl text-[#0D1B2A] mb-1">
              STAY IN THE LOOP
            </h3>
            <p className="font-inter text-sm md:text-base text-[#0D1B2A]/70">
              Get deals, new arrivals, and updates straight to your inbox.
            </p>
          </div>

          <form className="newsletter-wrapper flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="email@example.com"
              className="newsletter-input bg-white border-none py-4 px-6 font-inter text-base rounded-lg min-w-[280px] md:min-w-[320px] outline-none focus:ring-2 focus:ring-navy/20"
            />
            <button
              type="submit"
              className="newsletter-submit bg-[#0D1B2A] text-white font-bebas text-lg tracking-wider py-4 px-8 rounded-lg hover:bg-orange transition-colors duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-column"
          >
            <Image
              src="/images/oasis-logo.png"
              alt="Oasis Smoke Shop"
              width={80}
              height={80}
              className="footer-logo mb-5 cursor-pointer"
            />
            <p className="font-inter text-base text-white/70 mb-3">
              New Mexico&apos;s Premier Smoke Shop
            </p>
            <p className="font-inter text-sm text-white/40">
              Est. 2011 | Albuquerque, NM
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="footer-column"
          >
            <h4 className="font-bebas text-xl text-yellow tracking-wider mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="footer-link font-inter text-sm text-white/70 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-column"
          >
            <h4 className="font-bebas text-xl text-yellow tracking-wider mb-6">
              PRODUCTS
            </h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.label}>
                  <a
                    href={product.href}
                    className="footer-link font-inter text-sm text-white/70 hover:text-white transition-colors inline-block"
                  >
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="footer-column"
          >
            <h4 className="font-bebas text-xl text-yellow tracking-wider mb-6">
              CONNECT
            </h4>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:info@oasisvape.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-pink" />
                <span className="font-inter text-sm">info@oasisvape.com</span>
              </a>
              <a
                href="tel:5055036527"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-pink" />
                <span className="font-inter text-sm">(505) 503-6527</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow hover:text-[#0D1B2A] transition-colors cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow hover:text-[#0D1B2A] transition-colors cursor-pointer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              {/* TikTok Icon (custom) */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow hover:text-[#0D1B2A] transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-inter text-xs md:text-sm text-white/50">
            &copy; 2024 Oasis Smoke Shop. All rights reserved.
          </p>

          <div className="flex items-center gap-4 md:gap-8">
            <a
              href="#"
              className="font-inter text-xs md:text-sm text-white/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-inter text-xs md:text-sm text-white/50 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>

          <p className="font-inter text-xs md:text-sm text-white/50">
            Made with <span className="text-mint">&#9829;</span> in New Mexico
          </p>
        </div>
      </div>
    </footer>
  );
}
