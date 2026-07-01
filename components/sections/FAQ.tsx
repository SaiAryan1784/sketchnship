'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const faqs = [
    {
        question: "Who can participate?",
        answer: "Designers, developers, builders, students, professionals, and anyone passionate about creating impactful products. If you enjoy solving problems and bringing ideas to life with AI, Sketch n Ship with AI is for you."
    },
    {
        question: "Do I need a team to participate?",
        answer: "Yes. All participants must register as part of a team consisting of 2 to 4 members. Solo registrations are not allowed. If you're looking for teammates, keep an eye on our community channels where team formation opportunities will be shared."
    },
    {
        question: "How much does it cost?",
        answer: "Nothing. Sketch n Ship with AI is completely free for accepted participants. We'll provide food, drinks, workspace, and everything you need to focus on building."
    },
    {
        question: "What should I bring?",
        answer: "Bring your laptop, charger, and any hardware or tools you'd like to build with. Most importantly, bring your curiosity, creativity, and passion for building."
    },
    {
        question: "Who owns the projects built during the hackathon?",
        answer: "Your team does. You retain full ownership of everything you create during Sketch n Ship with AI. We're simply here to support and celebrate what you build."
    },
    {
        question: "What is the Innovation Round?",
        answer: "The Innovation Round is the online qualifying stage of Sketch n Ship with AI. Teams will receive a set of themes and submit their ideas, concepts, prototypes, or early solutions. Submissions will be evaluated based on innovation, problem understanding, feasibility, execution, and potential impact. Selected teams will be invited to the offline hackathon, where a fresh set of problem statements will be revealed and teams will build their solutions during the event."
    },
    {
        question: "Can I start building before the hackathon?",
        answer: "No. For the offline hackathon, all development work must begin after the official problem statements are announced. Teams may prepare by researching, learning new technologies, and brainstorming ideas, but projects submitted during the hackathon must be built during the event itself."
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
