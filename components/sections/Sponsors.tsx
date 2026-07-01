'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'

type Sponsor = {
    name: string
    logo: string
    cardClass?: string
    imgClass?: string
}

const sponsorTiers: { tier: string; accent: string; sponsors: Sponsor[] }[] = [
    {
        tier: 'Platinum',
        accent: 'text-cyan-300',
        sponsors: [{ name: 'Devfolio', logo: '/Devfolio.webp', cardClass: 'bg-white rounded-xl p-3' }],
    },
    {
        tier: 'Gold',
        accent: 'text-amber-400',
        sponsors: [{
            name: 'Neo4j',
            logo: '/New4j.png',
            cardClass: 'bg-white rounded-xl p-3',
            imgClass: 'h-12 w-12 object-cover object-left-bottom',
        }],
    },
    {
        tier: 'Silver',
        accent: 'text-slate-300',
        sponsors: [{ name: 'GitHub', logo: '/GitHub.png', cardClass: 'bg-white rounded-xl p-3' }],
    },
]

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

            <div className="container mx-auto px-6 flex flex-col items-center gap-10 md:gap-12">
                {sponsorTiers.map((tier, i) => (
                    <ScrollReveal key={tier.tier} delay={i * 0.1} width="100%">
                        <div className="flex flex-col items-center gap-5">
                            <span className={`font-mono text-xs uppercase tracking-[0.25em] ${tier.accent}`}>
                                {tier.tier}
                            </span>

                            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                                {tier.sponsors.map((sponsor) => (
                                    <div
                                        key={sponsor.name}
                                        className={`flex items-center justify-center h-20 px-8 border border-white/10 rounded-xl transition-colors hover:border-white/20 ${sponsor.cardClass ?? 'bg-white rounded-xl p-3'}`}
                                    >
                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className={`object-contain ${sponsor.imgClass ?? 'h-12 w-auto'}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
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
