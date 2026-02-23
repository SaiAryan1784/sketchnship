'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Paintbrush, Code, Zap, Bot } from 'lucide-react'

const tracks = [
    {
        title: "Design Pioneer",
        description: "Push the boundaries of UI/UX. Create interfaces that delight and inspire.",
        icon: Paintbrush,
        accentColor: "bg-designer-primary/10",
        border: "group-hover:border-designer-primary/50",
        iconColor: "text-designer-primary"
    },
    {
        title: "Code Craftsman",
        description: "Architect robust solutions. Clean code, scalable capability, and performance.",
        icon: Code,
        accentColor: "bg-developer-green/10",
        border: "group-hover:border-developer-green/50",
        iconColor: "text-developer-green"
    },
    {
        title: "Fusion Master",
        description: "The perfect blend of form and function. Where design meets engineering.",
        icon: Zap,
        accentColor: "bg-cyan-400/10",
        border: "group-hover:border-cyan-400/50",
        iconColor: "text-cyan-400"
    },
    {
        title: "AI Innovation",
        description: "Leverage the power of AI to create intelligent, adaptive experiences.",
        icon: Bot,
        accentColor: "bg-white/10",
        border: "group-hover:border-white/30",
        iconColor: "text-white"
    }
]

export const Tracks = () => {
    return (
        <section className="py-32 w-full bg-background-darker relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal className="mb-16 text-center" width="100%">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white">
                        Choose Your <span className="text-cyan-400">Path</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Whether you're a pixel perfectionist or a logic wizard, there's a track for you.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tracks.map((track, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="h-full"
                            >
                                <Card className={`h-full bg-background-dark border-border/50 ${track.border} transition-colors duration-300 overflow-hidden group relative`}>
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 ${track.accentColor} transition-opacity duration-500`} />

                                    <CardHeader>
                                        <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors`}>
                                            <track.icon className={`w-6 h-6 ${track.iconColor}`} />
                                        </div>
                                        <CardTitle className="text-xl font-bold text-white">
                                            {track.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-muted-foreground">
                                            {track.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
