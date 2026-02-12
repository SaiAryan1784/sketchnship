'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Linkedin, Twitter } from 'lucide-react'

const judges = [
    {
        name: "Sarah Chen",
        role: "Product Designer",
        company: "Google",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        tags: ["UX", "Design Systems"]
    },
    {
        name: "Alex Rivera",
        role: "Senior Engineer",
        company: "Vercel",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        tags: ["Frontend", "Performance"]
    },
    {
        name: "Jessica Wu",
        role: "Creative Director",
        company: "Figma",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
        tags: ["Brand", "Visual Design"]
    },
    {
        name: "David Kim",
        role: "CTO",
        company: "StartupInc",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        tags: ["Scale", "Architecture"]
    }
]

export const Judges = () => {
    return (
        <section className="py-32 w-full bg-background-dark">
            <div className="container mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-white">
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Judges</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Industry experts ready to review your work.</p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {judges.map((judge, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <Card className="bg-transparent border-none overflow-hidden group">
                                <CardHeader className="p-0 mb-6 relative overflow-hidden rounded-2xl">
                                    <div className="aspect-square relative">
                                        <img
                                            src={judge.image}
                                            alt={judge.name}
                                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                                            <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors text-white">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors text-white">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-center p-0">
                                    <CardTitle className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{judge.name}</CardTitle>
                                    <CardDescription className="text-lg text-white/80 mb-2">{judge.role} @ {judge.company}</CardDescription>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {judge.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60 border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
