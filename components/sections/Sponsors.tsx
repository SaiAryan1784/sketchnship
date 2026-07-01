'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'

const sponsors = [
    { name: "GitHub", logo: "/GitHub.png", dark: false },
    { name: "Neo4j", logo: "/New4j.png", dark: false },
]

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
                        Supported by the industry&apos;s leading visionaries.
                    </p>
                </ScrollReveal>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {/* <Marquee speed={40}>
                    {[...sponsors, ...sponsors, ...sponsors].map((sponsor, i) => (
                        <div key={i} className={`flex items-center justify-center h-20 px-8 ${sponsor.dark ? '' : 'bg-white rounded-xl p-3'}`}>
                            <img src={sponsor.logo} alt={sponsor.name} className="h-12 w-auto object-contain" />
                        </div>
                    ))}
                </Marquee> */}
                {
                    sponsors.map((sponsor, i) => (
                        <div key={i} className={`flex items-center justify-center h-20 px-8 ${sponsor.dark ? '' : 'bg-white rounded-xl p-3'}`}>
                            <img src={sponsor.logo} alt={sponsor.name} className="h-12 w-auto object-contain" />
                        </div>
                    ))
                }
            </div>

            <div className="text-center mt-16">
                <a
                    href="https://bit.ly/Sketch-n-Ship"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-colors rounded-lg font-mono text-sm uppercase tracking-widest"
                >
                    Want to sponsor us?
                </a>
            </div>
        </section>
    )
}
