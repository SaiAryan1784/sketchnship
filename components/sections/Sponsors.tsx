'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'

const sponsors = {
    platinum: ["TechCorp", "InnovateX", "FutureScale"],
    gold: ["DevFlow", "PixelPerfect", "CloudNine", "CodeBase"],
    silver: ["StartUp", "RocketShip", "NextGen", "AlphaBit", "BetaTest"]
}

const Marquee = ({ children, direction = 1, speed = 20 }: { children: React.ReactNode, direction?: number, speed?: number }) => {
    return (
        <div className="flex overflow-hidden w-full relative group">
            <div className="absolute inset-y-0 left-0 w-24 bg-background-darker/80 z-10" style={{ maskImage: 'linear-gradient(to right, black, transparent)' }} />
            <div className="absolute inset-y-0 right-0 w-24 bg-background-darker/80 z-10" style={{ maskImage: 'linear-gradient(to left, black, transparent)' }} />

            <motion.div
                className="flex gap-16 py-8 px-8 items-center min-w-max"
                animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            >
                {children}
                {children} {/* Duplicate for seamless loop */}
            </motion.div>
        </div>
    )
}

export const Sponsors = () => {
    return (
        <section className="py-32 w-full bg-background-darker border-t border-white/5 relative">
            <div className="absolute inset-0 noise-texture opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 mb-16">
                <ScrollReveal width="100%" className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        Our <span className="text-cyan-400">Partners</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Supported by the industry's leading visionaries.
                    </p>
                </ScrollReveal>
            </div>

            <div className="space-y-12">
                {/* Platinum Tier */}
                <div>
                    <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Platinum Sponsors</p>
                    <Marquee speed={30}>
                        {sponsors.platinum.map((logo, i) => (
                            <div key={i} className="text-4xl md:text-6xl font-black text-white/10 hover:text-white/80 transition-colors uppercase tracking-widest cursor-pointer">
                                {logo}
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Gold Tier */}
                <div>
                    <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Gold Sponsors</p>
                    <Marquee direction={-1} speed={40}>
                        {sponsors.gold.map((logo, i) => (
                            <div key={i} className="text-3xl md:text-5xl font-bold text-white/10 hover:text-designer-primary/80 transition-colors uppercase tracking-widest cursor-pointer">
                                {logo}
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Silver Tier */}
                <div>
                    <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Silver Sponsors</p>
                    <Marquee speed={50}>
                        {sponsors.silver.map((logo, i) => (
                            <div key={i} className="text-2xl md:text-4xl font-bold text-white/10 hover:text-developer-green/80 transition-colors uppercase tracking-widest cursor-pointer">
                                {logo}
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>

            <div className="text-center mt-24">
                <a href="#" className="inline-block border-b border-white/20 text-white/60 hover:text-white hover:border-white transition-colors pb-1">
                    Interested in sponsoring? Download our prospectus.
                </a>
            </div>
        </section>
    )
}
