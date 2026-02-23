'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Linkedin, Twitter } from 'lucide-react'
import { MagneticButton } from '@/components/ui/magnetic-button'

const judges = [
    {
        name: "Sarah Chen",
        role: "Product Designer",
        company: "Google",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop",
        tags: ["UX", "Design Systems"],
        accentColor: "bg-cyan-400"
    },
    {
        name: "Alex Rivera",
        role: "Senior Engineer",
        company: "Vercel",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
        tags: ["Frontend", "Performance"],
        accentColor: "bg-white"
    },
    {
        name: "Jessica Wu",
        role: "Creative Director",
        company: "Figma",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop",
        tags: ["Brand", "Visual Design"],
        accentColor: "bg-designer-primary"
    },
    {
        name: "David Kim",
        role: "CTO",
        company: "StartupInc",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
        tags: ["Scale", "Architecture"],
        accentColor: "bg-developer-green"
    }
]

export const Judges = () => {
    return (
        <section className="py-32 w-full bg-background-darker">
            <div className="container mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-white tracking-tight">
                        The <span className="text-cyan-400">Jury</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Experts from top tech giants.</p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {judges.map((judge, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="group relative h-[420px] w-full [perspective:1000px]">
                                {/* 3D Flip Container */}
                                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                    {/* Front Side */}
                                    <div className="absolute inset-0 h-full w-full rounded-3xl overflow-hidden shadow-2xl bg-card border border-white/10 [backface-visibility:hidden]">
                                        <div className="h-3/4 w-full relative">
                                            <img
                                                src={judge.image}
                                                alt={judge.name}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background-darker via-transparent to-transparent opacity-80" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full p-6 bg-background-darker border-t border-white/5 h-1/4 flex flex-col justify-center">
                                            <h3 className="text-2xl font-bold text-white mb-1">{judge.name}</h3>
                                            <p className="text-gray-400 font-mono text-sm">{judge.company}</p>
                                        </div>
                                    </div>

                                    {/* Back Side */}
                                    <div className="absolute inset-0 h-full w-full rounded-3xl bg-background-card p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] border border-white/10 flex flex-col justify-between overflow-hidden relative">
                                        <div className={`absolute inset-0 ${judge.accentColor} opacity-5`} />

                                        <div className="relative z-10">
                                            <div className={`w-16 h-16 rounded-2xl ${judge.accentColor} opacity-80 mb-6 shadow-lg`} />
                                            <h3 className="text-3xl font-bold text-white mb-2">{judge.name}</h3>
                                            <p className="text-blue-400 font-medium text-lg mb-6">{judge.role}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {judge.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 rounded-full bg-white text-black text-xs font-bold shadow-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4 relative z-10 pt-6">
                                            <MagneticButton>
                                                <a href="#" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg group/icon">
                                                    <Linkedin className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
                                                </a>
                                            </MagneticButton>
                                            <MagneticButton>
                                                <a href="#" className="w-12 h-12 rounded-full bg-black/50 text-white border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 shadow-lg group/icon">
                                                    <Twitter className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
                                                </a>
                                            </MagneticButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
