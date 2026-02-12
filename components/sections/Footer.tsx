'use client'

import { Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="w-full bg-[#050816] border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white font-heading mb-4">Sketch-N-Ship</h3>
                        <p className="text-muted-foreground max-w-xs mb-6">
                            Where creative vision meets technical excellence. A hackathon for designers and developers united.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-white font-bold mb-6">Event</h4>
                            <ul className="space-y-4 text-muted-foreground">
                                <li><a href="#" className="hover:text-designer-primary transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-designer-primary transition-colors">Schedule</a></li>
                                <li><a href="#" className="hover:text-designer-primary transition-colors">Tracks</a></li>
                                <li><a href="#" className="hover:text-designer-primary transition-colors">Prizes</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6">Resources</h4>
                            <ul className="space-y-4 text-muted-foreground">
                                <li><a href="#" className="hover:text-developer-green transition-colors">Rules</a></li>
                                <li><a href="#" className="hover:text-developer-green transition-colors">Code of Conduct</a></li>
                                <li><a href="#" className="hover:text-developer-green transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-developer-green transition-colors">Contact</a></li>
                            </ul>
                        </div>
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
                        <a href="mailto:hello@sketchnship.com" className="flex items-center text-muted-foreground hover:text-white transition-colors">
                            <Mail className="w-4 h-4 mr-2" />
                            hello@sketchnship.com
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; 2024 Sketch-N-Ship. All rights reserved.</p>
                    <p>Designed with &lt;3 and [ ]</p>
                </div>
            </div>
        </footer>
    )
}
