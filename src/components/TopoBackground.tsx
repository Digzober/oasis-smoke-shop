'use client'

import { useEffect, useRef } from 'react'

interface TopoBackgroundProps {
  className?: string
  opacity?: number
}

export function TopoBackground({ className = '', opacity = 0.12 }: TopoBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const noise = (x: number, y: number, t: number) => {
      return (
        Math.sin(x * 0.02 + t) * Math.cos(y * 0.02 + t * 0.5) +
        Math.sin(x * 0.01 - t * 0.3) * Math.cos(y * 0.015 + t * 0.2) +
        Math.sin((x + y) * 0.008 + t * 0.1)
      )
    }

    let time = 0
    let animationId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.lineWidth = 1

      for (let level = -3; level <= 3; level += 0.4) {
        ctx.beginPath()
        let started = false

        for (let x = 0; x < canvas.width; x += 8) {
          for (let y = 0; y < canvas.height; y += 8) {
            const n = noise(x, y, time)
            if (Math.abs(n - level) < 0.1) {
              if (!started) {
                ctx.moveTo(x, y)
                started = true
              } else {
                ctx.lineTo(x, y)
              }
            }
          }
        }
        ctx.stroke()
      }

      time += 0.003
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    />
  )
}
