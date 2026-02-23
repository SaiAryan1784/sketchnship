'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

export const CursorFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isDesignerSide, setIsDesignerSide] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    // Use spring for smooth size transition
    const cursorSize = useSpring(24, { stiffness: 500, damping: 28 })
    const trailSize = useSpring(48, { stiffness: 150, damping: 20 })

    useEffect(() => {
        // Check if we are on the client side
        if (typeof window === 'undefined') return

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            setIsDesignerSide(e.clientX < window.innerWidth / 2)

            // Check for hoverable elements (buttons, links, inputs, or anything with data-hover)
            const target = e.target as HTMLElement
            const isClickable =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.closest('button') ||
                target.closest('a') ||
                target.hasAttribute('data-hover')

            setIsHovering(!!isClickable)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useEffect(() => {
        if (isHovering) {
            cursorSize.set(64)
            trailSize.set(0) // Hide trail when hovering for cleaner look
        } else {
            cursorSize.set(24)
            trailSize.set(48)
        }
    }, [isHovering, cursorSize, trailSize])

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className={cn(
                    "fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference flex items-center justify-center backdrop-blur-[1px]",
                    isHovering ? "bg-white" : "bg-transparent"
                )}
                style={{
                    width: cursorSize,
                    height: cursorSize,
                }}
                animate={{
                    x: mousePosition.x - (isHovering ? 32 : 12),
                    y: mousePosition.y - (isHovering ? 32 : 12),
                    backgroundColor: isHovering ? '#FFFFFF' : (isDesignerSide ? '#FF0080' : '#00FF41'),
                    opacity: isHovering ? 0.8 : 1
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />


            {/* Trail effect */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-40 flex items-center justify-center"
                style={{
                    width: trailSize,
                    height: trailSize,
                }}
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                    opacity: isHovering ? 0 : 1
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            >
                {!isHovering && (
                    isDesignerSide ? (
                        <div className="w-full h-full bg-designer-primary/20 blur-md rounded-full" />
                    ) : (
                        <div className="w-full h-full border border-developer-green/50 rounded-full flex items-center justify-center">
                            <span className="text-developer-green font-mono text-[10px]">{'{ }'}</span>
                        </div>
                    )
                )}
            </motion.div>
        </>
    )
}
