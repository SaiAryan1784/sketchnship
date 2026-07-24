'use client'

import { useEffect, useRef, useState } from 'react'

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

const partsFrom = (ms: number): TimeLeft => {
    if (ms <= 0) return ZERO
    return {
        days: Math.floor(ms / 86_400_000),
        hours: Math.floor((ms / 3_600_000) % 24),
        minutes: Math.floor((ms / 60_000) % 60),
        seconds: Math.floor((ms / 1000) % 60),
    }
}

interface CountdownTimerProps {
    /** Absolute instant to count down to. Build it with an explicit UTC offset. */
    target: Date
    variant?: 'panel' | 'compact'
    /** Fires once, when the target is reached or is already in the past. */
    onComplete?: () => void
}

export const CountdownTimer = ({ target, variant = 'panel', onComplete }: CountdownTimerProps) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(ZERO)
    const fired = useRef(false)

    // Held in a ref so an inline arrow from the caller does not restart the interval
    const onCompleteRef = useRef(onComplete)
    onCompleteRef.current = onComplete

    // Depend on the primitive, not the Date object: an inline `new Date(...)` would be
    // a fresh reference every render and would tear the interval down each time.
    const targetMs = target.getTime()

    useEffect(() => {
        fired.current = false

        const update = () => {
            const diff = targetMs - Date.now()
            // Always write, including past-target, so the display settles on zeros
            // instead of freezing on the last positive reading.
            setTimeLeft(partsFrom(diff))
            if (diff <= 0 && !fired.current) {
                fired.current = true
                onCompleteRef.current?.()
            }
        }

        update()
        const timer = setInterval(update, 1000)
        return () => clearInterval(timer)
    }, [targetMs])

    const units = [
        { value: timeLeft.days, label: 'Days', accent: false },
        { value: timeLeft.hours, label: 'Hours', accent: false },
        { value: timeLeft.minutes, label: 'Mins', accent: false },
        { value: timeLeft.seconds, label: 'Secs', accent: true },
    ]

    if (variant === 'compact') {
        return (
            <div className="flex gap-3 sm:gap-5 justify-center items-center">
                {units.map((unit, i) => (
                    <div key={unit.label} className="flex gap-3 sm:gap-5 items-center">
                        {i > 0 && <div className="h-6 w-px bg-white/10" />}
                        <div className="flex flex-col items-center">
                            <span className={`text-2xl md:text-3xl font-bold font-mono tracking-widest ${unit.accent ? 'text-designer-accent' : 'text-white'}`}>
                                {String(unit.value).padStart(2, '0')}
                            </span>
                            <span className={`text-[10px] uppercase tracking-widest mt-1 ${unit.accent ? 'text-designer-accent' : 'text-gray-400'}`}>
                                {unit.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="flex gap-4 md:gap-8 justify-center items-center py-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 px-8 w-fit mx-auto">
            {units.map((unit, i) => (
                <div key={unit.label} className="flex gap-4 md:gap-8 items-center">
                    {i > 0 && <div className="h-8 w-px bg-white/10" />}
                    <div className="flex flex-col items-center">
                        <span className={`text-3xl md:text-5xl font-bold font-mono tracking-widest ${unit.accent ? 'text-designer-accent' : 'text-white'}`}>
                            {String(unit.value).padStart(2, '0')}
                        </span>
                        <span className={`text-xs uppercase tracking-widest mt-2 ${unit.accent ? 'text-designer-accent' : 'text-gray-400'}`}>
                            {unit.label}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
