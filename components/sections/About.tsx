'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'
import { MousePointer2, Sparkles, MapPin } from 'lucide-react'

const round1Steps = [
    'Choose an Innovation Track',
    'Submit Your Solution PPT',
    'Expert Evaluation',
    'Top Teams Qualify',
]

const round2Code = [
    { line: 1, content: <><span className="text-developer-green">export const</span> <span className="text-blue-400">Round2</span> = () =&gt; {'{'}</> },
    { line: 2, content: <span className="pl-4"><span className="text-gray-500">{'// New challenges revealed on-site'}</span></span> },
    { line: 3, content: <span className="pl-4"><span className="text-developer-green">return</span> (</span> },
    { line: 4, content: <span className="pl-8">&lt;&gt;</span> },
    { line: 5, content: <span className="pl-12 text-white">&lt;<span className="text-yellow-200">BuildWithAI</span> /&gt;</span>, highlight: true },
    { line: 6, content: <span className="pl-12 text-white">&lt;<span className="text-yellow-200">DemoDay</span> /&gt;</span>, highlight: true },
    { line: 7, content: <span className="pl-8">&lt;/&gt;</span> },
    { line: 8, content: <span className="pl-4">)</span> },
    { line: 9, content: <span>{'}'}</span> },
]

export const About = () => {
    return (
        <section className="relative py-32 w-full overflow-hidden bg-background-dark">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal width="100%" className="text-center mb-20 md:mb-32">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6">
                        <Sparkles className="w-3.5 h-3.5" />
                        AI Buildathon
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 drop-shadow-lg">
                        <span className="text-designer-primary">Sketch it,</span> <span className="text-white">Build it,</span> <span className="text-developer-green">Ship it.</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                        Submit your idea online, get shortlisted by experts, then build from scratch at the offline round — with brand-new tracks and problem statements revealed on-site.
                    </p>
                </ScrollReveal>

                <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 lg:gap-6 relative w-full max-w-6xl mx-auto">

                    {/* Round 1: Design Canvas */}
                    <motion.div
                        className="w-full md:w-[45%] rounded-xl overflow-hidden border border-white/10 bg-[#0f0f0f] shadow-2xl relative z-10 flex flex-col"
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
                            <span className="ml-4 text-xs text-white/40 font-mono tracking-wider">Round 1: Innovation Qualifiers</span>
                        </div>

                        {/* Canvas Body */}
                        <div className="p-8 flex-1 bg-[radial-gradient(#ffffff11_1px,transparent_0)] bg-[size:20px_20px] flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-designer-primary mb-6">Sketch Your Solution</h3>

                            <ul className="space-y-3 relative z-10">
                                {round1Steps.map((step, i) => (
                                    <li
                                        key={step}
                                        className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 group hover:bg-white/10 transition-all flex items-center gap-3 relative overflow-hidden"
                                    >
                                        <span className="text-designer-primary/60 font-mono text-xs w-5 shrink-0">•</span>
                                        <span className={`text-sm md:text-base font-medium transition-colors ${i === round1Steps.length - 1 ? 'text-designer-primary group-hover:text-designer-primary' : 'text-gray-300 group-hover:text-white'}`}>
                                            {step}
                                        </span>
                                        <MousePointer2 className="w-4 h-4 text-white absolute bottom-[-10px] right-2 opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all drop-shadow-md z-10" fill="currentColor" />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="px-4 py-3 border-t border-white/5 bg-[#1a1a1a] flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-white/40 shrink-0" />
                            <span className="text-[11px] font-mono text-white/40 tracking-wide">Online Submission</span>
                        </div>
                    </motion.div>

                    {/* Arrow — Desktop */}
                    <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-28 gap-3 self-center">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 text-center leading-snug">
                            Selected<br />Teams
                        </span>
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

                    {/* Arrow — Mobile */}
                    {/* Mobile Downward Arrow */}
                    <div className="flex md:hidden flex-col items-center shrink-0 my-2 gap-2 pointer-events-none">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">Selected Teams</span>
                        <svg width="20" height="48" viewBox="0 0 20 48" className="overflow-visible">
                            <path d="M10 0 L10 38" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                            <polygon points="4,38 10,48 16,38" fill="rgba(255,255,255,0.1)" />
                            <motion.path
                                d="M10 0 L10 38"
                                stroke="#06b6d4"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "circIn" }}
                            />
                            <motion.polygon
                                points="4,38 10,48 16,38"
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
                        className="w-full md:w-[45%] rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl relative z-10 flex flex-col"
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
                            <span className="ml-4 text-xs text-white/40 font-mono tracking-wider">Round 2: Offline Buildathon</span>
                        </div>

                        {/* Editor Body */}
                        <div className="p-8 flex-1 font-mono text-xs md:text-sm flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-white mb-6 font-sans">Build with AI</h3>

                            {/* Code Syntax Highlighting Look */}
                            <div className="space-y-1.5 text-gray-400">
                                {round2Code.map(({ line, content, highlight }) => (
                                    <div
                                        key={line}
                                        className={`flex ${highlight ? 'group hover:bg-white/5 cursor-default transition-colors rounded-sm' : ''}`}
                                    >
                                        <span className="text-gray-600 w-6 select-none border-r border-white/10 mr-3 pr-2 text-right shrink-0">{line}</span>
                                        <span className={highlight ? 'group-hover:text-developer-accent transition-colors' : ''}>{content}</span>
                                    </div>
                                ))}
                                <div className="flex">
                                    <span className="text-gray-600 w-6 select-none border-r border-white/10 mr-3 pr-2 text-right shrink-0">10</span>
                                    <span className="animate-pulse bg-white/50 w-2 h-4 inline-block opacity-70 mt-0.5" />
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-3 border-t border-white/5 bg-[#1a1a1a] flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-developer-green/60 shrink-0" />
                            <span className="text-[11px] font-mono text-white/40 tracking-wide">Offline · 12 Hours</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
