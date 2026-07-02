'use client'

import { Youtube, Twitter, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="w-full bg-[#050816] border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <img src="/Sketch N Ship Logo.png" alt="Sketch N Ship" className="h-10 w-auto mb-4" />
                        <p className="text-muted-foreground max-w-xs mb-4 leading-relaxed">
                            Where ideas move from <span className="font-bold text-white">sketch to shipped product</span>.<br />
                            A hackathon bringing designers and developers together to build.
                        </p>
                        <a
                            href="https://gdg.community.dev/gdg-noida/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm text-gray-400 hover:text-white mb-6 transition-colors"
                        >
                            Presented by <span className="font-semibold text-white">GDG Noida</span>
                        </a>
                        <div className="flex gap-4">
                            {[
                                { Icon: Twitter, href: 'https://x.com/gdg_noida' },
                                { Icon: Linkedin, href: 'https://in.linkedin.com/company/noidagdg' },
                                { Icon: Instagram, href: 'https://www.instagram.com/gdg_noida' },
                                { Icon: Youtube, href: 'https://www.youtube.com/@gdg_noida' },
                            ].map(({ Icon, href }, i) => (
                                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Event</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><a href="#about" className="hover:text-designer-primary transition-colors">About</a></li>
                            <li><a href="#timeline" className="hover:text-designer-primary transition-colors">Timeline</a></li>
                            {/* <li><a href="#tracks" className="hover:text-designer-primary transition-colors">Tracks</a></li> */}
                            <li><a href="#faq" className="hover:text-designer-primary transition-colors">FAQ</a></li>
                            <li><a href="#register" className="hover:text-designer-primary transition-colors">Register</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Get Involved</h4>
                        <p className="text-muted-foreground mb-6 leading-relaxed">Spots are limited. Register before they run out.</p>
                        <a
                            href="https://www.commudle.com/communities/gdg-noida/hackathons/sketch-n-ship/fill-form/84"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full text-center bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors mb-4"
                        >
                            Register Now
                        </a>
                        <a
                            href="https://bit.ly/sketchnshipdiscord"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full bg-[#5865F2]/10 border border-[#5865F2]/30 text-[#5865F2] hover:bg-[#5865F2]/20 transition-colors rounded-lg px-4 py-3 mb-4 font-medium text-sm"
                        >
                            Looking for teammates? Join our Discord
                            <ArrowRight className="w-4 h-4 shrink-0 ml-2" />
                        </a>
                        <a href="mailto:noida.gdg@gmail.com" className="flex items-center text-muted-foreground hover:text-white transition-colors">
                            <Mail className="w-4 h-4 mr-2" />
                            noida.gdg@gmail.com
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; 2026 Sketch-N-Ship. All rights reserved.</p>
                    <p>Designed with &lt;3 and [ ]</p>
                </div>
            </div>
        </footer>
    )
}
