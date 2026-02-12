'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
    children: React.ReactNode
    speed?: number
    className?: string
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
    children,
    speed = 0.5,
    className
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    // Map scroll progress to a transform value
    // We use existing CSS variables or relative units if possible, but pixels work fine for parallax
    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    )
}
