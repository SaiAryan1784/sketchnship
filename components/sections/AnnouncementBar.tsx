'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const AnnouncementBar = () => {
    return (
        <a
            href="https://bit.ly/round1_submission"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-0 inset-x-0 z-40 h-9 md:h-10 flex items-center justify-center gap-2 px-4 bg-background-dark/90 backdrop-blur-md border-b border-white/10 hover:bg-white/5 transition-colors group"
            data-hover="true"
        >
            <span className="relative flex w-1.5 h-1.5 shrink-0">
                <motion.span
                    className="absolute inset-0 rounded-full bg-developer-green"
                    animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="relative w-1.5 h-1.5 rounded-full bg-developer-green" />
            </span>

            <span className="text-xs md:text-sm font-medium text-white/90 tracking-wide">
                <span className="hidden md:inline">Round 1 Submissions are LIVE — Submit your entry now</span>
                <span className="md:hidden">Round 1 is LIVE — Submit now</span>
            </span>

            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/70 shrink-0 group-hover:translate-x-1 group-hover:text-white transition-all" />
        </a>
    )
}
