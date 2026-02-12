'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Trophy, Medal, Star, Crown, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/ui/magnetic-button'

export const Prizes = () => {
    return (
        <section className="py-32 w-full bg-background-dark relative overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal width="100%" className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Glory</span> & Rewards
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Competing for more than just code. High-stakes prizes for the ultimate creators.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8 items-end mb-32 max-w-6xl mx-auto">
                    {/* Second Place */}
                    <div className="order-2 md:order-1">
                        <ScrollReveal delay={0.2} width="100%">
                            <div className="bg-card border border-white/10 rounded-3xl p-8 text-center relative group hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                                <div className="w-16 h-16 mx-auto mb-6 bg-gray-400/10 rounded-full flex items-center justify-center">
                                    <Medal className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Runner Up</h3>
                                <div className="text-4xl font-bold text-gray-200 mb-6">$3,000</div>
                                <ul className="text-muted-foreground space-y-3 text-sm text-left mx-auto w-fit">
                                    <li className="flex items-center gap-2">✓ Premium Swag Kit</li>
                                    <li className="flex items-center gap-2">✓ Dev Tools License</li>
                                    <li className="flex items-center gap-2">✓ Mentorship Session</li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* First Place */}
                    <div className="order-1 md:order-2">
                        <ScrollReveal width="100%">
                            <div className="bg-gradient-to-b from-yellow-500/10 to-card border border-yellow-500/30 rounded-3xl p-10 text-center relative group shadow-[0_0_60px_rgba(234,179,8,0.1)] transform md:-translate-y-8">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                    <Crown className="w-12 h-12 text-yellow-500 fill-yellow-500/20 animate-bounce" />
                                </div>
                                <div className="w-24 h-24 mx-auto mb-8 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/20">
                                    <Trophy className="w-12 h-12 text-yellow-500" />
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-2">Champion</h3>
                                <div className="text-6xl font-bold text-yellow-400 mb-8">$5,000</div>
                                <ul className="text-gray-300 space-y-4 font-medium text-left mx-auto w-fit">
                                    <li className="flex items-center gap-3"><Star className="w-5 h-5 text-yellow-500" /> Ultimate Swag Box</li>
                                    <li className="flex items-center gap-3"><Zap className="w-5 h-5 text-yellow-500" /> VC Introduction</li>
                                    <li className="flex items-center gap-3"><Crown className="w-5 h-5 text-yellow-500" /> 1-Year Mentorship</li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Third Place */}
                    <div className="order-3">
                        <ScrollReveal delay={0.4} width="100%">
                            <div className="bg-card border border-white/10 rounded-3xl p-8 text-center relative group hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                                <div className="w-16 h-16 mx-auto mb-6 bg-orange-700/10 rounded-full flex items-center justify-center">
                                    <Medal className="w-8 h-8 text-orange-700" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Third Place</h3>
                                <div className="text-4xl font-bold text-orange-600 mb-6">$1,000</div>
                                <ul className="text-muted-foreground space-y-3 text-sm text-left mx-auto w-fit">
                                    <li className="flex items-center gap-2">✓ Standard Swag</li>
                                    <li className="flex items-center gap-2">✓ Certificate</li>
                                    <li className="flex items-center gap-2">✓ Community Access</li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {[
                        { title: "Best Design", amount: "$500", color: "text-designer-primary" },
                        { title: "Best Tech", amount: "$500", color: "text-developer-green" },
                        { title: "Most Innovative", amount: "$500", color: "text-purple-400" },
                        { title: "People's Choice", amount: "$500", color: "text-blue-400" }
                    ].map((prize, i) => (
                        <ScrollReveal key={i} delay={0.5 + (i * 0.1)}>
                            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 text-center group h-full flex flex-col justify-center items-center">
                                <h4 className="text-lg font-bold text-gray-300 mb-2 group-hover:text-white transition-colors">{prize.title}</h4>
                                <p className={`text-3xl font-bold ${prize.color}`}>{prize.amount}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
