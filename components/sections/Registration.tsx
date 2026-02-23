'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const TiltButton = ({ children, className, ...props }: React.ComponentProps<typeof Button> & { children: React.ReactNode }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setTilt({ x: y * -15, y: x * 15 })
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => { setIsHovering(false); setTilt({ x: 0, y: 0 }) }}
            animate={{
                rotateX: tilt.x,
                rotateY: tilt.y,
                scale: isHovering ? 1.08 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ perspective: 800, transformStyle: 'preserve-3d' }}
            className="inline-block"
        >
            <Button className={className} {...props} data-hover="true">
                {children}
            </Button>
        </motion.div>
    )
}

export const Registration = () => {
    return (
        <section className="py-32 w-full relative overflow-hidden flex items-center justify-center min-h-[600px]">
            {/* Clean dark background with subtle texture */}
            <div className="absolute inset-0 bg-background-darker">
                <div className="absolute inset-0 noise-texture opacity-20 pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <ScrollReveal width="100%">
                    <h2 className="text-6xl md:text-8xl font-bold font-heading mb-8 text-white tracking-tight">
                        Ready to <br />
                        <span className="text-cyan-400">Sketch & Ship?</span>
                    </h2>
                    <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Join 500+ creators for a weekend of innovation, design, and code. Spots are limited!
                    </p>

                    <TiltButton
                        size="lg"
                        className="h-16 px-12 text-xl font-bold rounded-full bg-white text-black hover:bg-gray-100 shadow-[0_8px_30px_rgba(255,255,255,0.15)] group"
                    >
                        Secure My Spot <ArrowRight className="ml-2 w-6 h-6 inline-block group-hover:translate-x-1 transition-transform" />
                    </TiltButton>

                    <p className="mt-8 text-sm text-gray-500 font-mono">
                        Registration closes July 1st • Free for accepted hackers
                    </p>
                </ScrollReveal>
            </div>
        </section>
    )
}
