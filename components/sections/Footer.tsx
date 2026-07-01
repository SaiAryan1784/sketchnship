'use client'

import { Youtube, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

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
                            <li><a href="#tracks" className="hover:text-designer-primary transition-colors">Tracks</a></li>
                            <li><a href="#faq" className="hover:text-designer-primary transition-colors">FAQ</a></li>
                            <li><a href="#register" className="hover:text-designer-primary transition-colors">Register</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Stay Updated</h4>
                        <div className="flex gap-2 mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-designer-primary/50 w-full"
                            />
                            <button className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-white/90 transition-colors">
                                Subscribe
                            </button>
                        </div>
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
