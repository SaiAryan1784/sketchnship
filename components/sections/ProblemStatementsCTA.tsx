'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Lock, Rocket } from 'lucide-react'
import { CountdownTimer } from '@/components/ui/countdown-timer'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

// TODO: swap in the real problem statements page before the event
const PROBLEM_STATEMENTS_URL = 'https://bit.ly/sketchnship-problem-statements'

// 10:15 AM IST on event day, matching the "Hackathon Begins" slot in the agenda
const GO_LIVE = new Date('2026-07-25T10:15:00+05:30')

export const ProblemStatementsCTA = () => {
    const [isLive, setIsLive] = useState(false)

    // Handles a page load that already happens after the drop. The timer's onComplete
    // handles the flip for someone sitting on the page when 10:15 hits.
    useEffect(() => {
        if (Date.now() >= GO_LIVE.getTime()) setIsLive(true)
    }, [])

    return (
        <ScrollReveal width="100%" className="mt-16 md:mt-24">
            <div
                className={`relative overflow-hidden rounded-3xl border p-8 md:p-12 text-center transition-colors duration-500 ${isLive
                    ? 'border-developer-green/40 bg-developer-green/[0.04]'
                    : 'border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01]'
                    }`}
            >
                {/* Ambience */}
                <div
                    className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none transition-colors duration-500 ${isLive ? 'bg-developer-green/15' : 'bg-cyan-500/10'
                        }`}
                />

                <div className="relative z-10 flex flex-col items-center">
                    <div
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border font-mono text-xs uppercase tracking-widest mb-6 ${isLive
                            ? 'border-developer-green/40 bg-developer-green/10 text-developer-green'
                            : 'border-cyan-400/30 bg-cyan-400/10 text-cyan-400'
                            }`}
                    >
                        {isLive ? <Rocket className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                        Problem Statements
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4 leading-tight">
                        {isLive ? (
                            <>
                                Problem statements are <span className="text-developer-green">live</span>
                            </>
                        ) : (
                            <>
                                Drops at <span className="text-cyan-400">10:15 AM</span>
                            </>
                        )}
                    </h3>

                    <p className="text-muted-foreground max-w-xl leading-relaxed mb-10">
                        {isLive
                            ? 'Tracks and problem statements are out. Pick yours and start building.'
                            : 'Problem statements stay sealed until the hackathon begins. This unlocks the moment they drop.'}
                    </p>

                    {!isLive && (
                        <div className="mb-10">
                            <CountdownTimer target={GO_LIVE} variant="compact" onComplete={() => setIsLive(true)} />
                        </div>
                    )}

                    {isLive ? (
                        <div className="relative inline-block">
                            <motion.div
                                className="absolute inset-0 rounded-full bg-developer-green/40 blur-xl pointer-events-none"
                                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.15, 0.6] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <a
                                href={PROBLEM_STATEMENTS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex items-center gap-2 h-14 px-10 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 shadow-[0_8px_30px_rgba(0,255,65,0.2)] transition-colors group"
                                data-hover="true"
                            >
                                View Problem Statements
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ) : (
                        <div
                            aria-disabled="true"
                            className="inline-flex items-center gap-2 h-14 px-10 rounded-full border border-white/15 bg-white/[0.04] text-white/40 font-bold text-lg cursor-not-allowed select-none"
                        >
                            <Lock className="w-4 h-4" />
                            Unlocks at 10:15 AM IST
                        </div>
                    )}
                </div>
            </div>
        </ScrollReveal>
    )
}
