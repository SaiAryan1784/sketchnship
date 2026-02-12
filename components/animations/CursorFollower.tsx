'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const CursorFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isDesignerSide, setIsDesignerSide] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            setIsDesignerSide(e.clientX < window.innerWidth / 2)
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('mousemove', handleMouseMove)
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('mousemove', handleMouseMove)
            }
        }
    }, [])

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                    backgroundColor: isDesignerSide ? '#FF6B6B' : '#00FF41',
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />

            {/* Trail effect */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-40 flex items-center justify-center"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            >
                {isDesignerSide ? (
                    <div className="w-full h-full bg-designer-primary/20 blur-md rounded-full" />
                ) : (
                    <div className="w-full h-full border border-developer-green/50 rounded-full flex items-center justify-center">
                        <span className="text-developer-green font-mono text-[10px]">{'{ }'}</span>
                    </div>
                )}
            </motion.div>
        </>
    )
}
