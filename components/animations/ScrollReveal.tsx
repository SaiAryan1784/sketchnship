'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
    children: React.ReactNode
    delay?: number
    className?: string
    width?: 'fit-content' | '100%'
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    delay = 0,
    className,
    width = 'fit-content'
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-75px' })

    return (
        <div ref={ref} style={{ width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                    duration: 0.6,
                    delay,
                    ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className={cn(className)}
            >
                {children}
            </motion.div>
        </div>
    )
}
