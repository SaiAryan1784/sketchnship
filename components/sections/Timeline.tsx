'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const timelineEvents = [
    {
        date: "June 15",
        title: "Registration Opens",
        description: "Submit your application and form your team.",
        side: "left"
    },
    {
        date: "July 01",
        title: "Opening Ceremony",
        description: "Kickoff event with keynote speakers and challenge reveal.",
        side: "right"
    },
    {
        date: "July 01-03",
        title: "Hack Time",
        description: "48 hours to build, design, iterate, and create magic.",
        side: "left"
    },
    {
        date: "July 03",
        title: "Submission Deadline",
        description: "Final submissions close at 12:00 PM. No extensions!",
        side: "right"
    },
    {
        date: "July 04",
        title: "Judging Period",
        description: "Expert panel reviews all projects.",
        side: "left"
    },
    {
        date: "July 05",
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
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-designer-accent to-developer-accent">Timeline</span>
                    </h2>
                </ScrollReveal>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-designer-primary via-purple-500 to-developer-green"
                        />
                    </div>

                    <div className="space-y-12 md:space-y-24">
                        {timelineEvents.map((event, i) => (
                            <div key={i} className={`flex flex-col md:flex-row items-center ${event.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                {/* Content */}
                                <div className={`w-full md:w-1/2 ${event.side === 'right' ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'} text-center mb-8 md:mb-0`}>
                                    <ScrollReveal width="100%">
                                        <div className="text-designer-accent font-mono text-lg mb-2">{event.date}</div>
                                        <h3 className="text-3xl font-bold text-white mb-4 font-heading">{event.title}</h3>
                                        <p className="text-muted-foreground">{event.description}</p>
                                    </ScrollReveal>
                                </div>

                                {/* Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background-dark border-2 border-white/50 z-10 hidden md:block">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="w-full h-full bg-white rounded-full"
                                    />
                                </div>

                                {/* Padding for the other side on desktop */}
                                <div className="w-full md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
