'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'

const DiscordIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.0991.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6066 3.9495-1.5218 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
)

const navLinks = [
    { label: 'About', href: '#about' },
    // { label: 'Tracks', href: '#tracks' },
    { label: 'Timeline', href: '#timeline' },
    // { label: 'Prizes', href: '#prizes' },
    { label: 'FAQ', href: '#faq' },
]

export const Navbar = () => {
    const [visible, setVisible] = useState(true)
    const [atTop, setAtTop] = useState(true)
    const [mobileOpen, setMobileOpen] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious() ?? 0
        setAtTop(latest < 50)
        // Hide on scroll down, show on scroll up
        if (latest > previous && latest > 150) {
            setVisible(false)
            setMobileOpen(false)
        } else {
            setVisible(true)
        }
    })

    const handleNavClick = (href: string) => {
        setMobileOpen(false)
        const el = document.querySelector(href)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
                >
                    {/* Floating pill */}
                    <div className={`flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-500 ${atTop
                        ? 'bg-white/[0.04] border-white/8 backdrop-blur-md'
                        : 'bg-background-dark/80 border-white/10 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]'
                        }`}>
                        {/* Logo */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center justify-center px-2 h-9 hover:opacity-80 transition-opacity shrink-0"
                            data-hover="true"
                        >
                            <img src="/Sketch N Ship Logo.png" alt="Sketch N Ship" className="h-7 w-auto" />
                        </button>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className="px-3.5 py-1.5 text-[13px] font-medium text-white/45 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
                                    data-hover="true"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* Discord */}
                        <a
                            href="https://bit.ly/sketchnshipdiscord"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex w-9 h-9 rounded-full items-center justify-center text-white/45 hover:text-[#5865F2] hover:bg-[#5865F2]/10 transition-colors shrink-0"
                            data-hover="true"
                            aria-label="Join Discord"
                        >
                            <DiscordIcon className="w-4 h-4" />
                        </a>

                        {/* Register CTA */}
                        <a
                            href="https://www.commudle.com/communities/gdg-noida/hackathons/sketch-n-ship/fill-form/84"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex h-9 px-5 items-center justify-center text-[13px] font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors shrink-0"
                            data-hover="true"
                        >
                            Register
                        </a>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                            data-hover="true"
                        >
                            <div className="flex flex-col gap-1 items-center">
                                <motion.span
                                    animate={mobileOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                                    className="w-3.5 h-px bg-current block"
                                />
                                <motion.span
                                    animate={mobileOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                                    className="w-3.5 h-px bg-current block"
                                />
                            </div>
                        </button>
                    </div>

                    {/* Mobile dropdown */}
                    <AnimatePresence>
                        {mobileOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                animate={{ opacity: 1, y: 4, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="md:hidden mt-2 bg-background-dark/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-[0_12px_48px_rgba(0,0,0,0.5)]"
                            >
                                {navLinks.map((link) => (
                                    <button
                                        key={link.label}
                                        onClick={() => handleNavClick(link.href)}
                                        className="w-full text-left px-4 py-2.5 text-sm text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                ))}
                                <a
                                    href="https://bit.ly/sketchnshipdiscord"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-[#5865F2] hover:bg-[#5865F2]/10 rounded-xl transition-colors"
                                >
                                    <DiscordIcon className="w-4 h-4" />
                                    Join Discord
                                </a>
                                <div className="pt-2 px-1">
                                    <a
                                        href="https://www.commudle.com/communities/gdg-noida/hackathons/sketch-n-ship/fill-form/84"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-white text-black font-semibold py-2.5 rounded-xl text-sm hover:bg-gray-200 transition-colors block text-center"
                                    >
                                        Register
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}
