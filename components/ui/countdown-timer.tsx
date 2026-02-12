'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export const CountdownTimer = () => {
    const targetDate = new Date('2026-06-20T00:00:00') // Updated to June 20, 2026
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +targetDate - +new Date()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                })
            }
        }

        const timer = setInterval(calculateTimeLeft, 1000)
        calculateTimeLeft() // Initial calculation

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex gap-4 md:gap-8 justify-center items-center py-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 px-8 w-fit mx-auto">
            <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-bold font-mono text-white tracking-widest">
                    {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-widest mt-2">Days</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-bold font-mono text-white tracking-widest">
                    {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-widest mt-2">Hours</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-bold font-mono text-white tracking-widest">
                    {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-widest mt-2">Mins</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-bold font-mono text-designer-accent tracking-widest">
                    {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-xs text-designer-accent uppercase tracking-widest mt-2">Secs</span>
            </div>
        </div>
    )
}
