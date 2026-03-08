'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'
import { Layers, Palette, PenTool, MousePointer2 } from 'lucide-react'

export const About = () => {
    return (
        <section className="relative py-32 w-full overflow-hidden bg-background-dark">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal width="100%" className="text-center mb-20 md:mb-32">
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 drop-shadow-lg">
                        <span className="text-designer-primary">Sketch it,</span> <span className="text-white">Build it,</span> <span className="text-developer-green">Ship it.</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                        Great ideas take shape when creative vision meets technical execution. At Sketch-N-Ship, ideas are imagined by designers and shipped by builders, if you are one of them or both! Join us!
                    </p>
                </ScrollReveal>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8 relative w-full max-w-6xl mx-auto">

                    {/* Round 1: Design Canvas */}
                    <motion.div
                        className="w-full md:w-[45%] rounded-xl overflow-hidden border border-white/10 bg-[#0f0f0f] shadow-2xl relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* OS Window Header */}
                        <div className="bg-[#1a1a1a] px-4 py-3 flex items-center border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="ml-4 text-xs text-white/40 font-mono tracking-wider">Round 1: Sketch Vision</span>
                        </div>
                        {/* Canvas Body */}
                        <div className="p-8 relative min-h-[340px] bg-[radial-gradient(#ffffff11_1px,transparent_0)] bg-[size:20px_20px] flex flex-col justify-center">
                            <div className="space-y-4 relative z-10">
                                <h3 className="text-3xl font-bold text-designer-primary mb-6">Sketch Your Vision</h3>

                                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 group hover:bg-white/10 transition-all flex items-center gap-4 relative overflow-hidden">
                                    <div className="w-10 h-10 rounded-lg bg-designer-primary/20 flex items-center justify-center text-designer-primary shrink-0">
                                        <Layers className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white font-medium text-sm md:text-base">UI/UX Design Challenges</span>
                                    {/* Fake cursor on hover */}
                                    <MousePointer2 className="w-5 h-5 text-white absolute bottom-[-10px] right-2 opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all drop-shadow-md z-10" fill="currentColor" />
                                </div>

                                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 group hover:bg-white/10 transition-all flex items-center gap-4 relative overflow-hidden">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                                        <Palette className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white font-medium text-sm md:text-base">Brand Identity Creation</span>
                                    <MousePointer2 className="w-5 h-5 text-white absolute bottom-[-10px] right-2 opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all drop-shadow-md z-10" fill="currentColor" />
                                </div>

                                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 group hover:bg-white/10 transition-all flex items-center gap-4 relative overflow-hidden">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                        <PenTool className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white font-medium text-sm md:text-base">Interactive Prototypes</span>
                                    <MousePointer2 className="w-5 h-5 text-white absolute bottom-[-10px] right-2 opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all drop-shadow-md z-10" fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Straight Animated Arrow (Desktop) */}
                    <div className="hidden md:flex justify-center shrink-0 w-16">
                        <svg width="60" height="20" viewBox="0 0 60 20" className="overflow-visible">
                            <path d="M0 10 L50 10" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                            <polygon points="50,4 60,10 50,16" fill="rgba(255,255,255,0.1)" />

                            {/* Glowing line trace */}
                            <motion.path
                                d="M0 10 L50 10"
                                stroke="#06b6d4"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "circIn" }}
                                style={{ filter: 'drop-shadow(0 0 4px rgba(6,182,212,0.5))' }}
                            />
                            {/* Arrow head flash */}
                            <motion.polygon
                                points="50,4 60,10 50,16"
                                fill="#06b6d4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "circIn" }}
                                style={{ filter: 'drop-shadow(0 0 4px rgba(6,182,212,0.8))' }}
                            />
                        </svg>
                    </div>

                    {/* Mobile Downward Arrow */}
                    <div className="flex md:hidden justify-center shrink-0 my-4 h-16 pointer-events-none">
                        <svg width="20" height="60" viewBox="0 0 20 60" className="overflow-visible">
                            <path d="M10 0 L10 50" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                            <polygon points="4,50 10,60 16,50" fill="rgba(255,255,255,0.1)" />
                            <motion.path
                                d="M10 0 L10 50"
                                stroke="#06b6d4"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "circIn" }}
                            />
                            <motion.polygon
                                points="4,50 10,60 16,50"
                                fill="#06b6d4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "circIn" }}
                                style={{ filter: 'drop-shadow(0 0 4px rgba(6,182,212,0.8))' }}
                            />
                        </svg>
                    </div>

                    {/* Round 2: IDE / Code Editor */}
                    <motion.div
                        className="w-full md:w-[45%] rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Editor Header */}
                        <div className="bg-[#1a1a1a] px-4 py-3 flex items-center border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="ml-4 text-xs text-white/40 font-mono tracking-wider">Round 2: Ship.tsx</span>
                        </div>
                        {/* Editor Body */}
                        <div className="p-8 relative min-h-[340px] font-mono text-sm md:text-base flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-white mb-6 font-sans">Ship Your Solution</h3>

                            {/* Code Syntax Highlighting Look */}
                            <div className="space-y-3 text-gray-400">
                                <div className="flex">
                                    <span className="text-gray-600 w-8 select-none border-r border-white/10 mr-4 pr-2 text-right">1</span>
                                    <span><span className="text-developer-green">export const</span> <span className="text-blue-400">Round2</span> = () =&gt; {'{'}</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 w-8 select-none border-r border-white/10 mr-4 pr-2 text-right">2</span>
                                    <span className="pl-4"><span className="text-developer-green">return</span> (</span>
                                </div>
                                <div className="flex group hover:bg-white/5 cursor-pointer transition-colors rounded">
                                    <span className="text-gray-600 w-8 select-none border-r border-white/10 mr-4 pr-2 text-right">3</span>
                                    <span className="pl-8 text-white group-hover:text-developer-accent transition-colors">
                                        &lt;<span className="text-yellow-200">FullStackDev</span> /&gt;
                                    </span>
                                </div>
                                <div className="flex group hover:bg-white/5 cursor-pointer transition-colors rounded">
                                    <span className="text-gray-600 w-8 select-none border-r border-white/10 mr-4 pr-2 text-right">4</span>
                                    <span className="pl-8 text-white group-hover:text-developer-accent transition-colors">
                                        &lt;<span className="text-yellow-200">APIIntegration</span> /&gt;
                                    </span>
                                </div>
                                <div className="flex group hover:bg-white/5 cursor-pointer transition-colors rounded">
                                    <span className="text-gray-600 w-8 select-none border-r border-white/10 mr-4 pr-2 text-right">5</span>
                                    <span className="pl-8 text-white group-hover:text-developer-accent transition-colors">
                                        &lt;<span className="text-yellow-200">PerformanceOpt</span> /&gt;
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 w-8 select-none border-r border-white/10 mr-4 pr-2 text-right">6</span>
                                    <span className="pl-4">)</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 w-8 select-none border-r border-white/10 mr-4 pr-2 text-right">7</span>
                                    <span>{'}'}</span>
                                </div>
                                {/* Animated Terminal cursor */}
                                <div className="flex">
                                    <span className="text-gray-600 w-8 select-none border-r border-white/10 mr-4 pr-2 text-right">8</span>
                                    <span className="animate-pulse bg-white/50 w-2 h-5 inline-block opacity-70 mt-1"></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
