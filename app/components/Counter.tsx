'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, motion, useAnimation } from 'framer-motion'

interface NumberCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  decimals?: number
}

export default function NumberCounter({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0
}: NumberCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / (duration * 1000)

        if (progress < 1) {
          const currentCount = easeOutExpo(progress) * end
          setCount(currentCount)
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      controls.start({ opacity: 1, y: 0 })

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [isInView, end, duration, controls])

  // Easing function for smooth animation
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </motion.span>
  )
}
