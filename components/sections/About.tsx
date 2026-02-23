'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ParallaxSection } from '@/components/animations/ParallaxSection'
import { PenTool, Terminal, Layers, Cpu, Palette, Code2 } from 'lucide-react'

export const About = () => {
    return (
        <section className="relative py-32 w-full overflow-hidden bg-background-dark">
            <div className="container mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                        <span className="text-designer-primary">Two Sides.</span> <span className="text-white">One Vision.</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                        At Sketch-N-Ship, we believe the best products emerge when creative vision meets technical excellence.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-12 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />

                    {/* Designer Column */}
                    <div className="relative">
                        <ParallaxSection speed={0.1}>
                            <div className="bg-[#1A1F3A]/50 border border-designer-primary/20 backdrop-blur-sm p-8 rounded-2xl hover:border-designer-primary/50 transition-colors duration-500 group">
                                <div className="w-16 h-16 bg-designer-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <PenTool className="w-8 h-8 text-designer-primary" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4 font-heading">Sketch Your Vision</h3>
                                <ul className="space-y-4">
                                    {[
                                        { text: "UI/UX Design Challenges", icon: Layers },
                                        { text: "Brand Identity Creation", icon: Palette },
                                        { text: "Interactive Prototypes", icon: PenTool }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                                            <item.icon className="w-5 h-5 mr-3 text-designer-secondary" />
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ParallaxSection>
                    </div>

                    {/* Developer Column */}
                    <div className="relative md:mt-12">
                        <ParallaxSection speed={0.2}>
                            <div className="bg-[#0A1A12]/50 border border-developer-green/20 backdrop-blur-sm p-8 rounded-2xl hover:border-developer-green/50 transition-colors duration-500 group">
                                <div className="w-16 h-16 bg-developer-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Terminal className="w-8 h-8 text-developer-green" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4 font-heading">Ship Your Solution</h3>
                                <ul className="space-y-4">
                                    {[
                                        { text: "Full-stack Development", icon: Code2 },
                                        { text: "API Integration", icon: Terminal },
                                        { text: "Performance Optimization", icon: Layers } // using Layers as placeholder for now
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                                            <item.icon className="w-5 h-5 mr-3 text-developer-accent" />
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ParallaxSection>
                    </div>
                </div>
            </div>
        </section>
    )
}
