'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Trophy, Medal, Star } from 'lucide-react'

export const Prizes = () => {
    return (
        <section className="py-32 w-full bg-background-darker relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal width="100%" className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-white">
                        <span className="text-yellow-500">Prizes</span> & Awards
                    </h2>
                    <p className="text-xl text-muted-foreground">What's at stake for the winners?</p>
                </ScrollReveal>

                <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-24">
                    {/* Second Place */}
                    <div className="w-full md:w-1/3 order-2 md:order-1">
                        <ScrollReveal delay={0.2} width="100%">
                            <div className="bg-[#1A1F3A] border border-gray-400/30 rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Medal className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-2">2nd Place</h3>
                                <p className="text-4xl font-bold text-gray-400 mb-4">$3,000</p>
                                <p className="text-muted-foreground">+ Swag Package</p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* First Place */}
                    <div className="w-full md:w-1/3 order-1 md:order-2 mb-12 md:mb-0">
                        <ScrollReveal width="100%">
                            <div className="bg-[#1A1F3A] border border-yellow-500/50 rounded-2xl p-10 text-center transform md:-translate-y-12 shadow-[0_0_50px_rgba(234,179,8,0.2)] relative group overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6 drop-shadow-lg" />
                                <h3 className="text-3xl font-bold text-white mb-2">1st Place</h3>
                                <p className="text-5xl font-bold text-yellow-500 mb-4">$5,000</p>
                                <p className="text-muted-foreground">+ Premium Swag + Mentorship</p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Third Place */}
                    <div className="w-full md:w-1/3 order-3">
                        <ScrollReveal delay={0.4} width="100%">
                            <div className="bg-[#1A1F3A] border border-orange-700/30 rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Medal className="w-16 h-16 text-orange-700 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-2">3rd Place</h3>
                                <p className="text-4xl font-bold text-orange-700 mb-4">$1,000</p>
                                <p className="text-muted-foreground">+ Swag</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Best Design", amount: "$500" },
                        { title: "Best Technical", amount: "$500" },
                        { title: "Best Innovation", amount: "$500" },
                        { title: "People's Choice", amount: "$500" }
                    ].map((prize, i) => (
                        <ScrollReveal key={i} delay={0.5 + (i * 0.1)}>
                            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                                <CardHeader className="text-center">
                                    <Star className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                                    <CardTitle className="text-white">{prize.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-2xl font-bold text-purple-400">{prize.amount}</p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
