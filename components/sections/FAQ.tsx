'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const faqs = [
    {
        question: "Who can participate?",
        answer: "Designers, developers, and anyone passionate about creating! Whether you're a student, a professional, or a hobbyist — if you love to build, you're welcome here."
    },
    {
        question: "Do I need a team?",
        answer: "You can participate solo or in teams of up to 4 people. Don't have a team? No worries! We'll have a team formation session at the beginning of the event."
    },
    {
        question: "What does it cost?",
        answer: "Nothing! Sketch-N-Ship is completely free for all admitted participants. We'll provide food, drinks, and a place to hack."
    },
    {
        question: "What should I bring?",
        answer: "Bring your laptop, charger, and any hardware you want to hack on. If you're staying overnight, bring a sleeping bag and toiletries."
    },
    {
        question: "Who owns the IP?",
        answer: "You do! The team that creates the project owns all intellectual property rights. We just want to see what you build."
    },
    {
        question: "Can I start early?",
        answer: "No, all code and design work must be created during the hackathon. You can bring ideas and sketches, but no pre-written code."
    }
]

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-32 w-full bg-background-dark">
            <div className="container mx-auto px-6 max-w-3xl">
                <ScrollReveal width="100%" className="mb-16">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">FAQ</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
                        Common questions
                    </h2>
                </ScrollReveal>

                <div className="border-t border-white/10">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index
                        return (
                            <ScrollReveal key={index} delay={index * 0.04} width="100%">
                                <div
                                    className="border-b border-white/10 cursor-pointer group"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                >
                                    <div className="py-6 flex items-center justify-between gap-6">
                                        <h3 className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white'
                                            }`}>
                                            {faq.question}
                                        </h3>

                                        {/* Minimal plus/minus toggle */}
                                        <div className="relative w-5 h-5 shrink-0">
                                            <motion.span
                                                animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-1/2 left-0 w-5 h-px bg-white/40 -translate-y-1/2"
                                            />
                                            <span className="absolute top-0 left-1/2 w-px h-5 bg-white/40 -translate-x-1/2" />
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-6 text-white/40 text-base leading-relaxed max-w-2xl">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </ScrollReveal>
                        )
                    })}
                </div>

                <ScrollReveal width="100%" className="mt-12">
                    <p className="text-white/30 text-sm">
                        Still have questions? <a href="mailto:help@sketchnship.com" className="text-cyan-400 hover:underline">Get in touch</a>
                    </p>
                </ScrollReveal>
            </div>
        </section>
    )
}
