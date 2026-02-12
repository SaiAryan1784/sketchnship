'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'

export const Sponsors = () => {
    return (
        <section className="py-32 w-full bg-background-darker relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-background-darker to-background-darker pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal width="100%" className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
                        Supported By
                    </h2>
                </ScrollReveal>

                {/* Platinum */}
                <div className="mb-20">
                    <h3 className="text-center text-sm font-mono text-gray-500 mb-8 uppercase tracking-widest">Platinum Sponsors</h3>
                    <div className="flex flex-wrap justify-center gap-12 items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <div className="w-48 h-16 bg-white/10 rounded flex items-center justify-center text-white/30 font-bold text-xl">LOGO</div>
                        <div className="w-48 h-16 bg-white/10 rounded flex items-center justify-center text-white/30 font-bold text-xl">LOGO</div>
                    </div>
                </div>

                {/* Gold */}
                <div className="mb-20">
                    <h3 className="text-center text-sm font-mono text-gray-500 mb-8 uppercase tracking-widest">Gold Sponsors</h3>
                    <div className="flex flex-wrap justify-center gap-10 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="w-32 h-12 bg-white/5 rounded flex items-center justify-center text-white/20 font-bold">LOGO</div>
                        <div className="w-32 h-12 bg-white/5 rounded flex items-center justify-center text-white/20 font-bold">LOGO</div>
                        <div className="w-32 h-12 bg-white/5 rounded flex items-center justify-center text-white/20 font-bold">LOGO</div>
                    </div>
                </div>

                {/* Silver */}
                <div>
                    <h3 className="text-center text-sm font-mono text-gray-500 mb-8 uppercase tracking-widest">Silver Sponsors</h3>
                    <div className="flex flex-wrap justify-center gap-8 items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="w-24 h-10 bg-white/5 rounded flex items-center justify-center text-white/10 font-bold text-sm">LOGO</div>
                        <div className="w-24 h-10 bg-white/5 rounded flex items-center justify-center text-white/10 font-bold text-sm">LOGO</div>
                        <div className="w-24 h-10 bg-white/5 rounded flex items-center justify-center text-white/10 font-bold text-sm">LOGO</div>
                        <div className="w-24 h-10 bg-white/5 rounded flex items-center justify-center text-white/10 font-bold text-sm">LOGO</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
