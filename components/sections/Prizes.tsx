'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'

const prizes = [
    { rank: '01', label: 'Champion', amount: '5,000', perks: ['Ultimate Swag Box', 'VC Introduction', '1-Year Mentorship'] },
    { rank: '02', label: 'Runner Up', amount: '3,000', perks: ['Premium Swag Kit', 'Dev Tools License', 'Mentorship Session'] },
    { rank: '03', label: 'Third Place', amount: '1,000', perks: ['Standard Swag', 'Certificate', 'Community Access'] },
]

const bonuses = [
    { label: 'Best Design', amount: '500' },
    { label: 'Best Tech', amount: '500' },
    { label: 'Most Innovative', amount: '500' },
    { label: "People's Choice", amount: '500' },
]

export const Prizes = () => {
    return (
        <section className="py-32 w-full bg-background-dark relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <ScrollReveal width="100%" className="mb-20">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">What you win</p>
                    <h2 className="text-5xl md:text-7xl font-bold font-heading text-white tracking-tight">
                        Prizes
                    </h2>
                </ScrollReveal>

                {/* Main prizes — editorial horizontal rows */}
                <div className="border-t border-white/10">
                    {prizes.map((prize, i) => (
                        <ScrollReveal key={i} delay={i * 0.1} width="100%">
                            <motion.div
                                whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                                className="border-b border-white/10 py-10 md:py-12 px-2 md:px-6 grid grid-cols-12 gap-4 items-center transition-colors duration-300 group cursor-default"
                            >
                                {/* Rank */}
                                <div className="col-span-2 md:col-span-1">
                                    <span className="text-white/15 font-mono text-sm group-hover:text-cyan-400 transition-colors duration-300">
                                        {prize.rank}
                                    </span>
                                </div>

                                {/* Label */}
                                <div className="col-span-4 md:col-span-3">
                                    <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
                                        {prize.label}
                                    </h3>
                                </div>

                                {/* Perks */}
                                <div className="col-span-6 md:col-span-5 hidden md:flex items-center gap-3 flex-wrap">
                                    {prize.perks.map((perk, j) => (
                                        <span key={j} className="text-xs font-mono text-white/30 px-3 py-1 rounded-full border border-white/8 group-hover:border-white/15 group-hover:text-white/50 transition-all duration-300">
                                            {perk}
                                        </span>
                                    ))}
                                </div>

                                {/* Amount */}
                                <div className="col-span-6 md:col-span-3 text-right">
                                    <span className="text-3xl md:text-5xl font-bold text-white font-heading tabular-nums tracking-tight">
                                        ${prize.amount}
                                    </span>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bonus prizes — single row of identical items */}
                <div className="mt-16">
                    <ScrollReveal width="100%">
                        <p className="text-white/30 font-mono text-xs uppercase tracking-widest mb-8">Special Categories</p>
                    </ScrollReveal>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden">
                        {bonuses.map((bonus, i) => (
                            <ScrollReveal key={i} delay={0.3 + i * 0.05} width="100%">
                                <div className="bg-background-dark p-8 text-center hover:bg-white/[0.03] transition-colors duration-300 cursor-default">
                                    <p className="text-white/40 text-sm font-medium mb-2">{bonus.label}</p>
                                    <p className="text-2xl md:text-3xl font-bold text-white font-heading tabular-nums">${bonus.amount}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
