'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Lock } from 'lucide-react'

export const Registration = () => {
    return (
        <section className="py-32 w-full relative overflow-hidden flex items-center justify-center min-h-[600px]">
            {/* Clean dark background with subtle texture */}
            <div className="absolute inset-0 bg-background-darker">
                <div className="absolute inset-0 noise-texture opacity-20 pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <ScrollReveal width="100%">
                    <h2 className="text-6xl md:text-8xl font-bold font-heading mb-8 text-white tracking-tight">
                        Ready to <br />
                        <span className="text-cyan-400">Sketch & Ship?</span>
                    </h2>
                    <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                        <span className="font-bold text-white">200-250 participants</span> are in for a high-energy day of design, development, and product building. Start with a sketch. End with something real.
                    </p>

                    <div
                        aria-disabled="true"
                        className="inline-flex items-center gap-3 h-16 px-12 text-xl font-bold rounded-full border border-white/15 bg-white/[0.04] text-white/40 cursor-not-allowed select-none"
                    >
                        <Lock className="w-5 h-5" />
                        Registration Closed
                    </div>

                    <p className="mt-8 text-sm text-gray-500 font-mono">
                        Registration closed <span className="text-[#a1a100]">July 10th</span> &bull; Shortlisted teams, see you July 25th
                    </p>
                </ScrollReveal>
            </div>
        </section>
    )
}
