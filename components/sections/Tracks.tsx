'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { BrainCircuit, HeartHandshake, Blocks, HeartPulse, Lightbulb, GraduationCap, Gamepad2, Cloud } from 'lucide-react'
import { useRef, MouseEvent } from 'react'

const tracks = [
    {
        title: "Data & Gen Ai",
        description: "Explore the frontiers of artificial intelligence and machine learning to build intelligent, data-driven solutions.",
        icon: BrainCircuit,
        accentColor: "rgba(168, 85, 247, 0.4)", // Purple
        borderColor: "group-hover:border-purple-500/50",
        iconColor: "text-purple-400"
    },
    {
        title: "Social Dev Goals",
        description: "Create impactful solutions addressing global challenges, sustainability, and driving social change.",
        icon: HeartHandshake,
        accentColor: "rgba(16, 185, 129, 0.4)", // Emerald
        borderColor: "group-hover:border-emerald-500/50",
        iconColor: "text-emerald-400"
    },
    {
        title: "Blockchain",
        description: "Build decentralized apps, smart contracts, and secure, transparent communication systems.",
        icon: Blocks,
        accentColor: "rgba(245, 158, 11, 0.4)", // Amber
        borderColor: "group-hover:border-amber-500/50",
        iconColor: "text-amber-400"
    },
    {
        title: "Healthcare",
        description: "Innovate in health tech, diagnostics, and wellness to improve patient care and accessibility.",
        icon: HeartPulse,
        accentColor: "rgba(244, 63, 94, 0.4)", // Rose
        borderColor: "group-hover:border-rose-500/50",
        iconColor: "text-rose-400"
    },
    {
        title: "Open innovation",
        description: "Push boundaries with open-source tools and unconstrained, creative problem-solving.",
        icon: Lightbulb,
        accentColor: "rgba(234, 179, 8, 0.4)", // Yellow
        borderColor: "group-hover:border-yellow-500/50",
        iconColor: "text-yellow-400"
    },
    {
        title: "EdTech",
        description: "Transform the future of learning with interactive and personalized platforms.",
        icon: GraduationCap,
        accentColor: "rgba(59, 130, 246, 0.4)", // Blue
        borderColor: "group-hover:border-blue-500/50",
        iconColor: "text-blue-400"
    },
    {
        title: "AR/VR & Gaming",
        description: "Craft immersive virtual realities and next-generation interactive entertainment.",
        icon: Gamepad2,
        accentColor: "rgba(217, 70, 239, 0.4)", // Fuchsia
        borderColor: "group-hover:border-fuchsia-500/50",
        iconColor: "text-fuchsia-400"
    },
    {
        title: "Cloud & DevOps",
        description: "Architect scalable infrastructure and streamline modern deployment pipelines with cutting-edge cloud tech.",
        icon: Cloud,
        accentColor: "rgba(6, 182, 212, 0.4)", // Cyan
        borderColor: "group-hover:border-cyan-500/50",
        iconColor: "text-cyan-400"
    }
]

// Holographic 3D Tilt Card Component
const TrackCard = ({ track, index }: { track: typeof tracks[0], index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    // Mouse position for spotlight
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // 3D Tilt springs
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

    const rotateX = useMotionTemplate`${mouseYSpring}deg`
    const rotateY = useMotionTemplate`${mouseXSpring}deg`

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()

        // Calculate raw relative mouse position
        const relativeX = e.clientX - rect.left
        const relativeY = e.clientY - rect.top

        mouseX.set(relativeX)
        mouseY.set(relativeY)

        // Calculate rotation based on cursor position (-0.5 to 0.5)
        const xPct = relativeX / rect.width - 0.5
        const yPct = relativeY / rect.height - 0.5

        // Max rotation of 10 degrees
        x.set(xPct * 10)
        y.set(yPct * -10) // Invert Y axis for realistic tilt
    }

    function handleMouseLeave() {
        x.set(0)
        y.set(0)
    }

    return (
        <ScrollReveal delay={index * 0.1} className="h-full" width="100%">
            <div className="relative h-full perspective-1000 group">
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="h-full w-full relative z-10"
                >
                    <Card className={`h-full bg-white/5 backdrop-blur-xl border-white/10 ${track.borderColor} transition-colors duration-500 overflow-hidden relative flex flex-col rounded-2xl`}>
                        {/* Interactive Spotlight */}
                        <motion.div
                            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                            style={{
                                background: useMotionTemplate`
                                    radial-gradient(
                                    350px circle at ${mouseX}px ${mouseY}px,
                                    ${track.accentColor},
                                    transparent 80%
                                    )
                                `,
                            }}
                        />

                        {/* Top-down subtle gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

                        <CardHeader className="flex-none relative z-10 pt-8 px-8" style={{ transform: "translateZ(40px)" }}>
                            <div className={`w-14 h-14 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl backdrop-blur-sm`}>
                                <track.icon className={`w-7 h-7 ${track.iconColor} drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]`} />
                            </div>
                            <CardTitle className="text-2xl font-bold text-white tracking-tight">
                                {track.title}
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="flex-1 relative z-10 px-8 pb-8" style={{ transform: "translateZ(30px)" }}>
                            <CardDescription className="text-muted-foreground/90 text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                {track.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </ScrollReveal>
    )
}

export const Tracks = () => {
    return (
        <section className="py-32 w-full bg-background relative overflow-hidden">
            {/* Awesome glowing background orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <ScrollReveal className="mb-20 text-center" width="100%">
                    <div className="inline-flex mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md items-center justify-center shadow-lg">
                        <span className="text-sm font-medium tracking-wider text-cyan-400 uppercase">Immersive Domains</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white pb-2 drop-shadow-md">
                        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Path</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore eight cutting-edge tracks. Bring your unique skills to the table and tackle challenges that will shape the future of technology.
                    </p>
                </ScrollReveal>

                {/* Sleek 4-column responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 auto-rows-[1fr]">
                    {tracks.map((track, index) => (
                        <TrackCard key={index} track={track} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
