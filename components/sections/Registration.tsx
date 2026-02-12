'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const Registration = () => {
    return (
        <section className="py-32 w-full relative overflow-hidden flex items-center justify-center min-h-[600px]">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-background-darker">
                <div className="absolute inset-0 bg-gradient-to-r from-designer-primary/20 to-developer-green/20 mix-blend-overlay" />
                <div className="absolute -inset-[100%] opacity-30 animate-[spin_60s_linear_infinite]">
                    <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-10 blur-3xl" />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <ScrollReveal width="100%">
                    <h2 className="text-6xl md:text-8xl font-bold font-heading mb-8 text-white tracking-tight">
                        Ready to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-designer-primary via-white to-developer-green">Sketch & Ship?</span>
                    </h2>
                    <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Join 500+ creators for a weekend of innovation, design, and code. Spots are limited!
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button size="lg" className="h-16 px-12 text-xl font-bold rounded-full bg-white text-black hover:bg-white/90 shadow-[0_0_50px_rgba(255,255,255,0.4)] group">
                            Secure My Spot <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                    <p className="mt-8 text-sm text-gray-500 font-mono">
                        Registration closes July 1st • Free for accepted hackers
                    </p>
                </ScrollReveal>
            </div>
        </section>
    )
}
