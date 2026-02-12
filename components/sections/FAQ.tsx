'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
    {
        question: "Who can participate?",
        answer: "Designers, developers, and anyone passionate about creating! Whether you're a student, a professional, or a hobbyist, if you love to build, you're welcome here."
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
        question: "Can I start working before the event?",
        answer: "No, all code and design work must be created during the hackathon. You can bring ideas and sketches, but no pre-written code."
    }
]

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-32 w-full bg-background-dark relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <ScrollReveal width="100%" className="sticky top-32">
                            <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-white tracking-tight leading-none">
                                Got <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-designer-secondary to-developer-secondary">Questions?</span>
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Everything you need to know about the event. Can't find the answer? Reach out to us.
                            </p>
                            <a href="mailto:help@sketchnship.com" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors inline-block">
                                Contact Support
                            </a>
                        </ScrollReveal>
                    </div>

                    <div className="md:w-2/3 space-y-4">
                        {faqs.map((faq, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div
                                    className={`group border rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${openIndex === index ? 'bg-white/5 border-white/20' : 'bg-transparent border-white/5 hover:border-white/10'}`}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <div className="p-6 md:p-8 flex justify-between items-center gap-4">
                                        <h3 className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                            {faq.question}
                                        </h3>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${openIndex === index ? 'bg-white text-black border-white rotate-180' : 'bg-transparent text-white border-white/20 group-hover:border-white/50'}`}>
                                            {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 md:px-8 pb-8 pt-0">
                                                    <p className="text-lg text-gray-400 leading-relaxed border-t border-white/5 pt-6">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
