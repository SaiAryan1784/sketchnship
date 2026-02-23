'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { Button } from '@/components/ui/button'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Prizes', href: '#prizes' },
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
                            className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-sm font-bold font-heading hover:bg-white/15 transition-colors shrink-0"
                            data-hover="true"
                        >
                            <span className="text-designer-primary">S</span>
                            <span className="text-white/30 text-xs">&</span>
                            <span className="text-developer-green">S</span>
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

                        {/* Register CTA */}
                        <button
                            onClick={() => handleNavClick('#register')}
                            className="hidden md:flex h-9 px-5 items-center justify-center text-[13px] font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors shrink-0"
                            data-hover="true"
                        >
                            Register
                        </button>

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
                                <div className="pt-2 px-1">
                                    <button
                                        onClick={() => handleNavClick('#register')}
                                        className="w-full bg-white text-black font-semibold py-2.5 rounded-xl text-sm hover:bg-gray-200 transition-colors"
                                    >
                                        Register
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}
