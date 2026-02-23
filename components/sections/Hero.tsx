'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CountdownTimer } from '@/components/ui/countdown-timer'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const TiltButton = ({ children, className, ...props }: React.ComponentProps<typeof Button> & { children: React.ReactNode }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setTilt({ x: y * -20, y: x * 20 })
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => { setIsHovering(false); setTilt({ x: 0, y: 0 }) }}
            animate={{
                rotateX: tilt.x,
                rotateY: tilt.y,
                scale: isHovering ? 1.05 : 1,
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

export const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col pt-20 md:pt-0">
            {/* Background Ambience — subtle, no gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-designer-primary/5 rounded-full blur-[150px] mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-developer-green/5 rounded-full blur-[150px] mix-blend-screen" />
            </div>

            <div className="flex-1 flex flex-col md:flex-row relative z-20">
                {/* Designer Side (Left) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end px-6 md:px-12 py-12 md:py-0 border-b md:border-b-0 md:border-r border-white/5 relative group transition-all duration-500 hover:bg-white/[0.02]">
                    <div className="absolute inset-0 noise-texture opacity-30 pointer-events-none" />

                    <div className="text-center md:text-right max-w-lg">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-xl md:text-2xl font-light text-cyan-400 mb-2 tracking-widest">CREATE</h2>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading text-designer-primary mb-4 leading-tight">
                                SKETCH
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-400 font-light font-sans mb-8 leading-relaxed"
                        >
                            Where pixels meet passion. <br className="hidden md:block" />
                            Design interfaces that <span className="text-white font-medium">breathe</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Button
                                variant="outline"
                                className="border-designer-primary/50 text-designer-primary hover:bg-designer-primary hover:text-white transition-all duration-300 rounded-full px-8 py-6 text-lg"
                                data-hover="true"
                            >
                                View Design Tracks
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Developer Side (Right) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:px-12 py-12 md:py-0 relative group transition-all duration-500 hover:bg-white/[0.02]">
                    <div className="absolute inset-0 noise-texture opacity-30 pointer-events-none" />

                    <div className="text-center md:text-left max-w-lg">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-xl md:text-2xl font-light text-cyan-400 mb-2 tracking-widest font-mono">BUILD</h2>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading text-developer-green mb-4 leading-tight">
                                SHIP
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-400 font-light font-mono mb-8 leading-relaxed"
                        >
                            Where code meets production. <br className="hidden md:block" />
                            Deploy systems that <span className="text-white font-medium">scale</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Button
                                variant="outline"
                                className="border-developer-green/50 text-developer-green hover:bg-developer-green hover:text-black transition-all duration-300 rounded-full px-8 py-6 text-lg"
                                data-hover="true"
                            >
                                View Dev Tracks
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Center Absolute Elements (Ampersand) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.8, type: 'spring' }}
                    className="w-20 h-20 bg-background-dark/80 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl"
                >
                    <span className="text-4xl font-bold text-cyan-400">&</span>
                </motion.div>
            </div>

            {/* Countdown Section - Fixed at Bottom */}
            <div className="w-full bg-background-dark/50 backdrop-blur-md border-t border-white/5 py-8 z-30">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="text-center md:text-left">
                        <p className="text-white/60 text-xs uppercase tracking-[0.3em] mb-1">Hackathon Begins</p>
                        <p className="text-white font-bold text-xl">June 20-21, 2026</p>
                    </div>

                    <div className="scale-75 md:scale-100 origin-center">
                        <CountdownTimer />
                    </div>

                    <TiltButton
                        size="lg"
                        className="bg-white text-black hover:bg-gray-100 font-bold rounded-full px-10 py-5 text-lg shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition-all duration-300 group"
                    >
                        Register Now <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" />
                    </TiltButton>
                </motion.div>
            </div>
        </section>
    )
}
