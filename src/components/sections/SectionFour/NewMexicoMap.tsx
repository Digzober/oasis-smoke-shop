'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface MapProps {
  activeStore: string | null;
  onPinClick: (id: string) => void;
}

// Store pin positions on the map (calibrated to accurate NM outline)
// Albuquerque metro area is roughly at coordinates (107°W, 35°N)
const pinPositions: Record<string, { x: number; y: number; label: string }> = {
  // Bernalillo (north of ABQ, along I-25)
  'bernalillo': { x: 168, y: 152, label: 'Bernalillo' },
  // Rio Rancho (northwest of ABQ)
  'rio-rancho': { x: 158, y: 168, label: 'Rio Rancho' },
  // East Albuquerque stores (clustered in ABQ metro)
  'heights': { x: 178, y: 182, label: 'Heights' },
  'san-mateo': { x: 170, y: 188, label: 'San Mateo' },
  'midtown': { x: 168, y: 185, label: 'Midtown' },
  'paseo': { x: 172, y: 175, label: 'Paseo' },
  'eubank': { x: 182, y: 190, label: 'Eubank' },
  // West Albuquerque stores
  'coors': { x: 158, y: 188, label: 'Coors' },
  '98th': { x: 152, y: 195, label: '98th St' },
  'golf-course': { x: 160, y: 178, label: 'Golf Course' },
};

// Zoom levels with viewBox configurations
const zoomLevels = [
  { level: 1, viewBox: "0 0 400 450", label: "NM" },
  { level: 2, viewBox: "80 100 240 200", label: "Metro" },
  { level: 3, viewBox: "120 140 100 100", label: "ABQ" },
];

export default function NewMexicoMap({ activeStore, onPinClick }: MapProps) {
  const [zoomIndex, setZoomIndex] = useState(0);
  const currentZoom = zoomLevels[zoomIndex];

  const handleZoomIn = () => {
    if (zoomIndex < zoomLevels.length - 1) {
      setZoomIndex(zoomIndex + 1);
    }
  };

  const handleZoomOut = () => {
    if (zoomIndex > 0) {
      setZoomIndex(zoomIndex - 1);
    }
  };

  const handleReset = () => {
    setZoomIndex(0);
  };

  return (
    <div className="relative w-full h-full">
      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          disabled={zoomIndex >= zoomLevels.length - 1}
          className="w-8 h-8 bg-purple/80 hover:bg-purple text-white rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Zoom in"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </button>
        <button
          onClick={handleZoomOut}
          disabled={zoomIndex <= 0}
          className="w-8 h-8 bg-purple/80 hover:bg-purple text-white rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Zoom out"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M19 13H5v-2h14v2z"/>
          </svg>
        </button>
        <button
          onClick={handleReset}
          disabled={zoomIndex === 0}
          className="w-8 h-8 bg-navy-light/80 hover:bg-navy-light text-white rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bebas"
          aria-label="Reset zoom"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
          </svg>
        </button>
      </div>

      {/* Zoom Level Indicator */}
      <div className="absolute top-4 left-4 z-10 bg-navy-dark/80 rounded-lg px-3 py-1.5 text-xs text-white/70">
        <span className="font-bebas tracking-wide">{currentZoom.label}</span>
        <span className="ml-2 text-yellow">{currentZoom.level}x</span>
      </div>

      <motion.svg
        viewBox={currentZoom.viewBox}
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))' }}
        animate={{ viewBox: currentZoom.viewBox }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <defs>
          {/* Gradient for state fill */}
          <linearGradient id="stateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(156, 95, 245, 0.25)" />
            <stop offset="100%" stopColor="rgba(156, 95, 245, 0.1)" />
          </linearGradient>

          {/* Glow filter for highways */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* New Mexico state outline - accurate shape */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="
            M 50 50
            L 350 50
            L 350 400
            L 130 400
            L 130 360
            L 50 360
            L 50 50
            Z
          "
          fill="url(#stateGradient)"
          stroke="#9C5FF5"
          strokeWidth="2.5"
        />

        {/* State border glow */}
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          d="
            M 50 50
            L 350 50
            L 350 400
            L 130 400
            L 130 360
            L 50 360
            L 50 50
            Z
          "
          fill="none"
          stroke="#9C5FF5"
          strokeWidth="6"
          filter="url(#glow)"
        />

        {/* === MAJOR HIGHWAYS === */}

        {/* I-25 - North-South through center (Colorado to Las Cruces) */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          d="M 170 50 L 170 100 Q 168 130, 170 160 L 168 200 Q 165 250, 170 300 L 175 350 L 180 400"
          fill="none"
          stroke="#E8D44D"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* I-40 - East-West through Albuquerque */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.7 }}
          d="M 50 185 L 100 185 Q 130 183, 165 185 L 200 185 Q 250 187, 300 185 L 350 185"
          fill="none"
          stroke="#E8D44D"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* I-10 - Southern route (Las Cruces area, through bootheel to Arizona) */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.9 }}
          d="M 50 340 L 80 335 Q 100 330, 120 340 L 160 350 Q 200 360, 250 355 L 350 350"
          fill="none"
          stroke="#E8D44D"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* US-550 - Bernalillo to Farmington */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.1 }}
          d="M 168 155 L 140 120 Q 120 90, 90 60"
          fill="none"
          stroke="#D97B2B"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Highway Labels - only show at lower zoom levels */}
        {zoomIndex < 2 && (
          <g className="highway-labels" style={{ fontSize: '10px', fontWeight: 'bold' }}>
            {/* I-25 label */}
            <rect x="155" y="125" width="28" height="14" rx="2" fill="#E8D44D"/>
            <text x="169" y="135" textAnchor="middle" fill="#0D1B2A" style={{ fontSize: '9px', fontWeight: 'bold' }}>I-25</text>

            {/* I-40 label */}
            <rect x="240" y="175" width="28" height="14" rx="2" fill="#E8D44D"/>
            <text x="254" y="185" textAnchor="middle" fill="#0D1B2A" style={{ fontSize: '9px', fontWeight: 'bold' }}>I-40</text>

            {/* I-10 label */}
            <rect x="240" y="343" width="28" height="14" rx="2" fill="#E8D44D" opacity="0.7"/>
            <text x="254" y="353" textAnchor="middle" fill="#0D1B2A" style={{ fontSize: '9px', fontWeight: 'bold' }}>I-10</text>

            {/* US-550 label */}
            <rect x="105" y="95" width="32" height="14" rx="2" fill="#D97B2B" opacity="0.8"/>
            <text x="121" y="105" textAnchor="middle" fill="#0D1B2A" style={{ fontSize: '8px', fontWeight: 'bold' }}>US-550</text>
          </g>
        )}

        {/* === CITIES === */}
        {zoomIndex < 2 && (
          <>
            {/* Santa Fe */}
            <circle cx="195" cy="140" r="4" fill="#E84B8A" opacity="0.6"/>
            <text x="205" y="143" className="fill-white/50" style={{ fontSize: '9px' }}>Santa Fe</text>

            {/* Las Cruces - in southern NM near I-10/I-25 junction */}
            <circle cx="175" cy="355" r="4" fill="#E84B8A" opacity="0.5"/>
            <text x="185" y="358" className="fill-white/40" style={{ fontSize: '8px' }}>Las Cruces</text>

            {/* Farmington */}
            <circle cx="85" cy="65" r="3" fill="#E84B8A" opacity="0.4"/>
            <text x="70" y="80" className="fill-white/40" style={{ fontSize: '8px' }}>Farmington</text>

            {/* Roswell */}
            <circle cx="260" cy="280" r="3" fill="#E84B8A" opacity="0.4"/>
            <text x="270" y="283" className="fill-white/40" style={{ fontSize: '8px' }}>Roswell</text>
          </>
        )}

        {/* === ALBUQUERQUE METRO AREA HIGHLIGHT === */}
        <motion.ellipse
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          cx="168"
          cy="182"
          rx="45"
          ry="35"
          fill="rgba(232, 75, 138, 0.15)"
          stroke="#E84B8A"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* ABQ Metro label */}
        <text
          x="168"
          y="225"
          textAnchor="middle"
          className="fill-pink"
          style={{ fontSize: zoomIndex >= 2 ? '6px' : '11px', fontWeight: 600, letterSpacing: '0.05em' }}
        >
          ALBUQUERQUE
        </text>

        {/* === STORE PINS === */}
        {Object.entries(pinPositions).map(([id, { x, y, label }], index) => (
          <g
            key={id}
            className={`map-pin cursor-pointer ${activeStore === id ? 'active' : ''}`}
            onClick={() => onPinClick(id)}
            style={{ cursor: 'pointer' }}
          >
            {/* Pulse ring (animated on active) */}
            <motion.circle
              className="pin-ring"
              cx={x}
              cy={y}
              r={zoomIndex >= 2 ? 4 : 8}
              fill="none"
              stroke="#E84B8A"
              strokeWidth={zoomIndex >= 2 ? 1 : 2}
              initial={{ scale: 1, opacity: 0 }}
              animate={activeStore === id ? {
                scale: [1, 2],
                opacity: [0.8, 0],
              } : {}}
              transition={{
                duration: 1,
                repeat: activeStore === id ? Infinity : 0,
                ease: "easeOut"
              }}
            />

            {/* Pin dot - larger when zoomed in */}
            <motion.circle
              className="pin-dot"
              cx={x}
              cy={y}
              r={zoomIndex >= 2 ? 4 : 6}
              fill={activeStore === id ? "#E8D44D" : "#E84B8A"}
              stroke="#0D1B2A"
              strokeWidth={zoomIndex >= 2 ? 1 : 2}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 1.5 + index * 0.08,
                type: "spring",
                stiffness: 300
              }}
              whileHover={{ scale: 1.4 }}
              style={{ cursor: 'pointer', pointerEvents: 'all' }}
            />

            {/* Label - always show when zoomed in, or when active */}
            <motion.g
              initial={{ opacity: 0, y: 5 }}
              animate={{
                opacity: (zoomIndex >= 2 || activeStore === id) ? 1 : 0,
                y: (zoomIndex >= 2 || activeStore === id) ? 0 : 5
              }}
              transition={{ duration: 0.2 }}
            >
              <rect
                x={x - (zoomIndex >= 2 ? 18 : 25)}
                y={y - (zoomIndex >= 2 ? 12 : 22)}
                width={zoomIndex >= 2 ? 36 : 50}
                height={zoomIndex >= 2 ? 8 : 14}
                rx={zoomIndex >= 2 ? 2 : 3}
                fill="rgba(0,0,0,0.8)"
              />
              <text
                x={x}
                y={y - (zoomIndex >= 2 ? 6 : 12)}
                textAnchor="middle"
                className="fill-white"
                style={{ fontSize: zoomIndex >= 2 ? '5px' : '8px', fontWeight: 600 }}
              >
                {label.toUpperCase()}
              </text>
            </motion.g>
          </g>
        ))}

        {/* State name watermark - only at full zoom out */}
        {zoomIndex === 0 && (
          <text
            x="200"
            y="430"
            textAnchor="middle"
            className="fill-white/20"
            style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.3em' }}
          >
            NEW MEXICO
          </text>
        )}

        {/* Compass rose - only at full zoom out */}
        {zoomIndex === 0 && (
          <g transform="translate(330, 420)">
            <circle cx="0" cy="0" r="15" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
            <path d="M 0 -12 L 3 0 L 0 3 L -3 0 Z" fill="#E8D44D" opacity="0.8"/>
            <path d="M 0 12 L 3 0 L 0 -3 L -3 0 Z" fill="rgba(255,255,255,0.3)"/>
            <text x="0" y="-18" textAnchor="middle" className="fill-white/50" style={{ fontSize: '8px' }}>N</text>
          </g>
        )}
      </motion.svg>

      {/* Legend - only at full zoom out */}
      {zoomIndex === 0 && (
        <div className="absolute bottom-4 left-4 bg-navy-dark/80 rounded-lg p-3 text-xs">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-yellow rounded" />
              <span className="text-white/60">Interstate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-orange rounded" />
              <span className="text-white/60">US Highway</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink" />
              <span className="text-white/60">Oasis Location</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow" />
              <span className="text-white/60">Selected</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
