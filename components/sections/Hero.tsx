'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex overflow-hidden">
            {/* Designer Side (Left) */}
            <div className="w-1/2 h-full bg-gradient-to-br from-background-dark via-background-darker to-[#1A0B2E] relative flex items-center justify-end px-12 border-r border-[#ffffff10]">
                <div className="absolute inset-0 noise-texture opacity-30 pointer-events-none" />
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-designer-primary/20 rounded-full blur-[100px]" />

                <div className="text-right z-10 max-w-lg">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-7xl font-bold font-heading text-gradient-designer mb-4"
                    >
                        SKETCH
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-muted-foreground font-light font-sans mb-8"
                    >
                        Where pixels meet passion. <br /> Design the future.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Button variant="outline" className="border-designer-primary text-designer-primary hover:bg-designer-primary hover:text-white transition-all duration-300">
                            View Design Tracks
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Developer Side (Right) */}
            <div className="w-1/2 h-full bg-gradient-to-bl from-background-dark via-[#0d1618] to-[#0A1A12] relative flex items-center justify-start px-12">
                <div className="absolute inset-0 noise-texture opacity-30 pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-developer-primary/20 rounded-full blur-[100px]" />

                <div className="text-left z-10 max-w-lg">
                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-7xl font-bold font-heading text-gradient-developer mb-4"
                    >
                        SHIP
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-muted-foreground font-light font-mono mb-8"
                    >
                        Where code meets production. <br /> Deploy the dream.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Button variant="outline" className="border-developer-green text-developer-green hover:bg-developer-green hover:text-black transition-all duration-300">
                            View Dev Tracks
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Center Merge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.8, type: 'spring' }}
                    className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer"
                >
                    <span className="text-2xl font-bold text-white">&</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute top-24 w-max text-center"
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">Hackathon 2024</p>
                    <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold rounded-full px-8 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        Register Now
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    )
}
