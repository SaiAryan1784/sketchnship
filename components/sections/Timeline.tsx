'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const timelineEvents = [
    {
        date: "1 April",
        title: "Registration Opens",
        description: "Submit your application and form your team.",
        side: "left"
    },
    {
        date: "June 20",
        title: "Opening Ceremony",
        description: "Kickoff event with keynote speakers and challenge reveal.",
        side: "right"
    },
    {
        date: "June 20-21",
        title: "Hack Time",
        description: "48 hours to build, design, iterate, and create magic.",
        side: "left"
    },
    {
        date: "June 21",
        title: "Winner Announcement",
        description: "Closing ceremony with awards and celebrations.",
        side: "right"
    }
]

export const Timeline = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section ref={containerRef} className="py-32 w-full bg-background-dark overflow-hidden relative">
            <div className="container mx-auto px-6 relative">
                <ScrollReveal width="100%" className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-white">
                        The <span className="text-cyan-400">Timeline</span>
                    </h2>
                </ScrollReveal>

                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-cyan-400 origin-top"
                        />
                    </div>

                    {/* Left Line (Mobile) */}
                    <div className="absolute left-6 top-8 bottom-8 w-px bg-white/10 md:hidden z-0">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-cyan-400 origin-top shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                        />
                    </div>

                    <div className="space-y-8 md:space-y-24 relative z-10">
                        {timelineEvents.map((event, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row items-center md:justify-center ${event.side === 'right' ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content */}
                                <div className={`w-full md:w-1/2 pl-16 pr-4 md:px-0 ${event.side === 'right' ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'} text-left mb-4 md:mb-0`}>
                                    <ScrollReveal width="100%">
                                        <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] md:bg-none border border-white/10 md:border-transparent rounded-2xl p-6 md:p-0 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30 md:hover:border-transparent group hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] md:hover:shadow-none">
                                            {/* Glow on mobile */}
                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden pointer-events-none" />

                                            <div className="text-designer-accent font-mono text-sm md:text-lg mb-2 relative z-10">{event.date}</div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 font-heading relative z-10">{event.title}</h3>
                                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed relative z-10">{event.description}</p>
                                        </div>
                                    </ScrollReveal>
                                </div>

                                {/* Mobile Dot */}
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-background-dark border-2 border-cyan-400 z-10 md:hidden flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="w-2.5 h-2.5 bg-cyan-400 rounded-full"
                                    />
                                </div>

                                {/* Desktop Dot */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background-dark border-2 border-white/50 z-10 hidden md:block">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="w-full h-full bg-white rounded-full"
                                    />
                                </div>

                                {/* Padding for the other side on desktop */}
                                <div className="hidden md:block w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
