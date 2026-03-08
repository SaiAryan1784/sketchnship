'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const faqs = [
    {
        question: "Who can participate?",
        answer: "Designers, developers, and anyone who loves building things. Whether you're a student, a professional, or a curious beginner, if you enjoy turning ideas into real projects, you're welcome at Sketch-N-Ship."
    },
    {
        question: "Do I need a team to participate?",
        answer: "You can join solo or with a team of up to four people. Coming alone? No problem. We'll host a team formation session at the start of the event so participants can meet collaborators and form teams."
    },
    {
        question: "How much does it cost?",
        answer: "Nothing. Sketch-N-Ship is completely free for accepted participants. We'll provide food, drinks, and a place where you can focus on building."
    },
    {
        question: "What should I bring?",
        answer: "Bring the essentials (Laptop, Charger, and Any hardware you'd like to hack on). If you plan to stay overnight, you may also want to bring a sleeping bag and basic toiletries."
    },
    {
        question: "Who owns the projects built during the hackathon?",
        answer: "Your team does. You retain full ownership of everything you create during Sketch-N-Ship. We're simply excited to see what you build."
    },
    {
        question: "What happens during the sketch round?",
        answer: "The hackathon begins with an idea and design phase. Teams present their product concept, problem statement, and design approach. The most promising ideas move forward to the development round where teams begin building."
    },
    {
        question: "Can I start early?",
        answer: "No. All coding and design work must be created during the official hackathon period. You're welcome to come prepared with ideas, research, or sketches but no pre-built projects or pre-written code are allowed."
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
                        Everything You Might Be Wondering
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
