'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarPlus, Download, User } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ProblemStatementsCTA } from '@/components/sections/ProblemStatementsCTA'
import { NotionIcon } from '@/components/ui/notion-icon'

type Phase = 'logistics' | 'sketch' | 'ship' | 'judge'

interface AgendaItem {
    min: number
    emoji: string
    title: string
    phase: Phase
    desc: string
    /** Named presenter, shown on the item when set */
    speaker?: string
    /**
     * Brand mark that replaces the emoji wherever the item is drawn. `emoji` is still
     * required and still used for the calendar exports, which are plain text.
     */
    icon?: React.ComponentType<{ className?: string }>
}

// `min` = minutes from midnight IST on event day
const agenda: AgendaItem[] = [
    { min: 510, emoji: '📝', title: 'Registration', phase: 'logistics', desc: "Check in, grab your badge, and settle into your team's spot." },
    { min: 570, emoji: '☕', title: 'Networking & Snacks', phase: 'logistics', desc: 'Meet the other teams, mentors, and organisers over coffee.' },
    { min: 600, emoji: '🎤', title: 'Opening Keynote', phase: 'sketch', desc: 'Welcome, house rules, and how the day will run.' },
    { min: 615, emoji: '🚀', title: 'Hackathon Begins', phase: 'ship', desc: 'Problem statements drop. The clock starts now.' },
    { min: 690, emoji: '📓', title: 'Intro to Notion', phase: 'sketch', desc: 'Sponsor session on running your team and your build inside Notion.', speaker: 'Omna Gupta', icon: NotionIcon },
    { min: 720, emoji: '💡', title: 'Mentorship Round', phase: 'sketch', desc: 'Mentors circle the room to unblock, review, and push your build.' },
    { min: 780, emoji: '🍽️', title: 'Lunch', phase: 'logistics', desc: 'Refuel and reset. Builds keep running while you eat.' },
    { min: 885, emoji: '📤', title: 'Submission Deadline', phase: 'ship', desc: 'Final commits and demo links go in. Nothing accepted after this.' },
    { min: 900, emoji: '⚖️', title: 'Round 1 Judging', phase: 'judge', desc: 'Judges review every submission and shortlist the top teams.' },
    { min: 990, emoji: '☕', title: 'Evening Snacks', phase: 'logistics', desc: 'Breather before finals. Shortlisted teams prep their demo.' },
    { min: 1020, emoji: '🏆', title: 'Final Round Judging', phase: 'judge', desc: 'Top teams pitch live to the judging panel.' },
    { min: 1080, emoji: '🎉', title: 'Results & Closing', phase: 'judge', desc: 'Winners announced, prizes handed out, and we close the day.' },
]

// Rail spans 08:00 to 19:00 so no tick sits flush against an edge
const RAIL_START = 480
const RAIL_END = 1140
const RAIL_SPAN = RAIL_END - RAIL_START

const hourLabels = [540, 720, 900, 1080] // 9AM, 12PM, 3PM, 6PM

const pctOf = (min: number) => ((min - RAIL_START) / RAIL_SPAN) * 100

// Tailwind cannot see interpolated class names, so every variant is a full string
const phaseStyle: Record<Phase, { dot: string; text: string; border: string; bg: string; glow: string; line: string; label: string }> = {
    logistics: {
        dot: 'bg-white',
        text: 'text-white',
        border: 'border-white/30',
        bg: 'bg-white/10',
        glow: 'shadow-[0_0_16px_rgba(255,255,255,0.7)]',
        line: 'bg-white/50',
        label: 'Logistics',
    },
    sketch: {
        dot: 'bg-designer-primary',
        text: 'text-designer-primary',
        border: 'border-designer-primary/40',
        bg: 'bg-designer-primary/10',
        glow: 'shadow-[0_0_16px_rgba(255,0,128,0.8)]',
        line: 'bg-designer-primary/50',
        label: 'Sketch',
    },
    ship: {
        dot: 'bg-developer-green',
        text: 'text-developer-green',
        border: 'border-developer-green/40',
        bg: 'bg-developer-green/10',
        glow: 'shadow-[0_0_16px_rgba(0,255,65,0.8)]',
        line: 'bg-developer-green/50',
        label: 'Ship',
    },
    judge: {
        dot: 'bg-cyan-400',
        text: 'text-cyan-400',
        border: 'border-cyan-400/40',
        bg: 'bg-cyan-400/10',
        glow: 'shadow-[0_0_16px_rgba(34,211,238,0.8)]',
        line: 'bg-cyan-400/50',
        label: 'Judge',
    },
}

const formatTime = (min: number) => {
    const h24 = Math.floor(min / 60)
    const m = min % 60
    const suffix = h24 >= 12 ? 'PM' : 'AM'
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12
    return `${h12}:${String(m).padStart(2, '0')} ${suffix}`
}

const formatHourLabel = (min: number) => {
    const h24 = Math.floor(min / 60)
    const suffix = h24 >= 12 ? 'PM' : 'AM'
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12
    return `${h12}${suffix}`
}

const formatDuration = (mins: number) => {
    const h = Math.floor(mins / 60)
    const m = mins % 60
    if (h && m) return `${h}h ${m}m`
    if (h) return `${h}h`
    return `${m}m`
}

// Absolute instant for a given minute-of-day on event day, pinned to IST
const instantFor = (min: number) => {
    const h = String(Math.floor(min / 60)).padStart(2, '0')
    const m = String(min % 60).padStart(2, '0')
    return new Date(`2026-07-25T${h}:${m}:00+05:30`)
}

const EVENT_START = instantFor(agenda[0].min)
const EVENT_END = instantFor(RAIL_END)

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n))

const pad = (n: number) => String(n).padStart(2, '0')

const toIcsUtc = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`

const escapeIcs = (s: string) => s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')

const buildIcs = () => {
    const stamp = toIcsUtc(new Date())
    const lines: string[] = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Sketch N Ship//Agenda//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
    ]

    agenda.forEach((item, i) => {
        const next = agenda[i + 1]
        const endMin = next ? next.min : item.min + 60
        lines.push(
            'BEGIN:VEVENT',
            `UID:sns-2026-${item.min}@sketchnship`,
            `DTSTAMP:${stamp}`,
            `DTSTART:${toIcsUtc(instantFor(item.min))}`,
            `DTEND:${toIcsUtc(instantFor(endMin))}`,
            `SUMMARY:${escapeIcs(`${item.emoji} ${item.title}`)}`,
            `DESCRIPTION:${escapeIcs(item.speaker ? `${item.desc}\n\nSpeaker: ${item.speaker}` : item.desc)}`,
            'END:VEVENT'
        )
    })

    lines.push('END:VCALENDAR')
    // RFC 5545 requires CRLF line endings
    return lines.join('\r\n')
}

// TODO: fill in the venue address so it lands in people's calendars
const VENUE = ''

/**
 * Google's template URL carries exactly one event, and eleven separate entries for a
 * day you are physically attending just means eleven notifications. So this is a single
 * 08:30 to 18:30 block with the run of show in the description.
 *
 * Deliberately not the Calendar API: inserting events needs OAuth with the
 * `calendar.events` scope, which Google treats as sensitive and gates behind app
 * verification. This link needs no auth and no backend.
 */
const buildGoogleCalendarUrl = () => {
    const dayStart = instantFor(agenda[0].min)
    const dayEnd = instantFor(agenda[agenda.length - 1].min + 30)

    const details = [
        'Full run of show for Sketch N Ship with AI, presented by GDG Noida.',
        '',
        ...agenda.map((item) => {
            const who = item.speaker ? ` (${item.speaker})` : ''
            return `${formatTime(item.min)} · ${item.emoji} ${item.title}${who}`
        }),
        '',
        'All times IST.',
    ].join('\n')

    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: 'Sketch N Ship with AI · Hackathon Day',
        dates: `${toIcsUtc(dayStart)}/${toIcsUtc(dayEnd)}`,
        details,
        ctz: 'Asia/Kolkata',
    })
    if (VENUE) params.set('location', VENUE)

    return `https://calendar.google.com/calendar/render?${params.toString()}`
}

// Deterministic, so it is safe to compute once at module scope
const GOOGLE_CALENDAR_URL = buildGoogleCalendarUrl()

const downloadIcs = () => {
    const blob = new Blob([buildIcs()], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'sketch-n-ship-agenda.ics'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
}

const nearestIndex = (min: number) => {
    let best = 0
    let bestDist = Infinity
    agenda.forEach((item, i) => {
        const dist = Math.abs(item.min - min)
        if (dist < bestDist) {
            bestDist = dist
            best = i
        }
    })
    return best
}

// Index of the item currently running, or the most recent one if between items
const currentIndex = (min: number) => {
    let idx = 0
    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].min <= min) idx = i
    }
    return idx
}

const PulseDot = ({ className }: { className: string }) => (
    <span className="relative flex w-1.5 h-1.5 shrink-0">
        <motion.span
            className={`absolute inset-0 rounded-full ${className}`}
            animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className={`relative w-1.5 h-1.5 rounded-full ${className}`} />
    </span>
)

export const Agenda = () => {
    const [now, setNow] = useState<Date | null>(null)
    const [selected, setSelected] = useState(0)
    const [expanded, setExpanded] = useState<number | null>(null)
    const [hoverMin, setHoverMin] = useState<number | null>(null)
    const [dragging, setDragging] = useState(false)

    const trackRef = useRef<HTMLDivElement>(null)
    const tickRefs = useRef<(HTMLButtonElement | null)[]>([])
    const autoSelected = useRef(false)

    useEffect(() => {
        const tick = () => setNow(new Date())
        tick()
        const t = setInterval(tick, 30_000)
        return () => clearInterval(t)
    }, [])

    const status = useMemo(() => {
        if (!now) return 'pending' as const
        if (now < EVENT_START) return 'before' as const
        if (now > EVENT_END) return 'after' as const
        return 'live' as const
    }, [now])

    // Minute-of-day right now, only meaningful while the event is running
    const nowMin = useMemo(() => {
        if (!now || status !== 'live') return null
        return (now.getTime() - instantFor(0).getTime()) / 60000
    }, [now, status])

    const nowPct = nowMin === null ? null : clamp(pctOf(nowMin), 0, 100)
    const liveIndex = nowMin === null ? null : currentIndex(nowMin)

    // Jump to the running item once, on first real clock reading
    useEffect(() => {
        if (autoSelected.current || liveIndex === null) return
        autoSelected.current = true
        setSelected(liveIndex)
        setExpanded(liveIndex)
    }, [liveIndex])

    const countdown = useMemo(() => {
        if (!now || status !== 'before') return null
        const diff = EVENT_START.getTime() - now.getTime()
        const days = Math.floor(diff / 86_400_000)
        const hours = Math.floor((diff / 3_600_000) % 24)
        const mins = Math.floor((diff / 60_000) % 60)
        if (days > 0) return `${days}d ${hours}h`
        if (hours > 0) return `${hours}h ${mins}m`
        return `${mins}m`
    }, [now, status])

    const minFromEvent = useCallback((clientX: number) => {
        const rect = trackRef.current?.getBoundingClientRect()
        if (!rect || rect.width === 0) return null
        const ratio = clamp((clientX - rect.left) / rect.width, 0, 1)
        return RAIL_START + ratio * RAIL_SPAN
    }, [])

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const min = minFromEvent(e.clientX)
        if (min === null) return
        setHoverMin(min)
        if (dragging) setSelected(nearestIndex(min))
    }

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const min = minFromEvent(e.clientX)
        if (min === null) return
        // Stop the drag from turning into a text selection across the section
        e.preventDefault()
        e.currentTarget.setPointerCapture(e.pointerId)
        setDragging(true)
        setHoverMin(min)
        setSelected(nearestIndex(min))
    }

    const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId)
        }
        setDragging(false)
    }

    const focusTick = (i: number) => {
        setSelected(i)
        tickRefs.current[i]?.focus()
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault()
            focusTick(Math.min(agenda.length - 1, selected + 1))
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault()
            focusTick(Math.max(0, selected - 1))
        } else if (e.key === 'Home') {
            e.preventDefault()
            focusTick(0)
        } else if (e.key === 'End') {
            e.preventDefault()
            focusTick(agenda.length - 1)
        }
    }

    const active = agenda[selected]
    const activeStyle = phaseStyle[active.phase]
    const nextItem = agenda[selected + 1]
    const blockLabel = nextItem ? `${formatDuration(nextItem.min - active.min)} block` : 'Wrap'

    return (
        <section className="py-32 w-full bg-background-dark relative overflow-hidden">
            {/* Ambience */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-designer-primary/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal width="100%" className="mb-14 md:mb-16">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        {/* Live status chip */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 font-mono text-xs tracking-widest uppercase text-white/70">
                            {status === 'live' && <PulseDot className="bg-developer-green" />}
                            {status === 'before' && <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />}
                            {status === 'pending' && <span>Run of Show</span>}
                            {status === 'before' && <span>Starts in {countdown}</span>}
                            {status === 'live' && liveIndex !== null && (
                                <span className="normal-case tracking-normal">
                                    Happening now: <span className="text-white font-semibold">{agenda[liveIndex].title}</span>
                                </span>
                            )}
                            {status === 'after' && <span>That&apos;s a wrap</span>}
                        </div>

                        <a
                            href={GOOGLE_CALENDAR_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 font-mono text-xs tracking-widest uppercase hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-colors"
                            data-hover="true"
                        >
                            <CalendarPlus className="w-3.5 h-3.5" />
                            Add to Google Calendar
                        </a>

                        {/* Fallback for Apple Calendar and Outlook, which have no equivalent link format */}
                        <button
                            onClick={downloadIcs}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white/30 font-mono text-xs tracking-widest uppercase hover:text-white/70 transition-colors"
                            data-hover="true"
                            title="Download .ics for Apple Calendar or Outlook"
                        >
                            <Download className="w-3.5 h-3.5" />
                            .ics
                        </button>
                    </div>

                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">25 July 2026 · IST</p>
                    <h2 className="text-5xl md:text-7xl font-bold font-heading text-white">
                        The <span className="text-cyan-400">Agenda</span>
                    </h2>
                </ScrollReveal>

                {/* ---------- Desktop: detail card + scrub rail ---------- */}
                <div className="hidden md:grid grid-cols-[minmax(0,340px)_minmax(0,1fr)] gap-10 lg:gap-16 items-center">
                    {/* Detail card */}
                    <ScrollReveal width="100%">
                        <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-2xl p-8 min-h-[360px] flex flex-col select-none">
                            {/*
                              Deliberately NOT wrapped in AnimatePresence. `mode="wait"` queues an exit
                              per selection change, so drag-scrubbing (dozens of changes a second)
                              leaves the card several items behind the rail. A keyed remount with an
                              enter-only transition always renders the current selection.
                            */}
                            <motion.div
                                key={selected}
                                initial={dragging ? false : { opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                                className="flex flex-col h-full"
                                aria-live="polite"
                            >
                                <div className={`w-16 h-16 rounded-2xl border ${activeStyle.border} ${activeStyle.bg} ${activeStyle.glow} flex items-center justify-center text-3xl mb-6`}>
                                    {active.icon ? <active.icon className="w-8 h-8 text-white" /> : active.emoji}
                                </div>

                                <div className={`font-mono text-4xl font-bold mb-3 ${activeStyle.text}`}>
                                    {formatTime(active.min)}
                                </div>

                                <h3 className="text-3xl font-bold font-heading text-white mb-3 leading-tight">{active.title}</h3>

                                {active.speaker && (
                                    <div className={`flex items-center gap-2 text-sm font-medium mb-3 ${activeStyle.text}`}>
                                        <User className="w-3.5 h-3.5 shrink-0" />
                                        {active.speaker}
                                    </div>
                                )}

                                <p className="text-muted-foreground leading-relaxed mb-6">{active.desc}</p>

                                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/10">
                                    <span className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest border ${activeStyle.border} ${activeStyle.bg} ${activeStyle.text}`}>
                                        {activeStyle.label}
                                    </span>
                                    <span className="text-white/30 font-mono text-xs tracking-wide">{blockLabel}</span>
                                    {liveIndex === selected && (
                                        <span className="ml-auto flex items-center gap-2 text-developer-green font-mono text-[11px] uppercase tracking-widest">
                                            <PulseDot className="bg-developer-green" />
                                            Now
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </ScrollReveal>

                    {/* Rail */}
                    <div className="select-none">
                        <div className="flex items-center justify-between mb-4 font-mono text-[11px] uppercase tracking-widest text-white/30">
                            <span>08:00</span>
                            <span className="text-white/25">click a stop · drag to scrub · ← → to step</span>
                            <span>19:00</span>
                        </div>

                        <div
                            role="group"
                            aria-label="Event day agenda timeline"
                            onKeyDown={handleKeyDown}
                            onPointerMove={handlePointerMove}
                            onPointerDown={handlePointerDown}
                            onPointerUp={endDrag}
                            onPointerCancel={endDrag}
                            onPointerLeave={(e) => {
                                endDrag(e)
                                setHoverMin(null)
                            }}
                            className="relative h-[260px] cursor-ew-resize touch-none outline-none"
                            data-hover="true"
                        >
                            {/* Ghost scrub marker */}
                            {hoverMin !== null && (
                                <div
                                    className="absolute inset-y-6 w-px bg-white/15 pointer-events-none z-0"
                                    style={{ left: `${clamp(pctOf(hoverMin), 0, 100)}%` }}
                                >
                                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] text-white/60 bg-background-dark/95 border border-white/10 rounded px-2 py-0.5">
                                        {formatTime(Math.round(hoverMin))}
                                    </span>
                                </div>
                            )}

                            {/* NOW playhead */}
                            {nowPct !== null && (
                                <div
                                    className="absolute inset-y-4 w-px bg-developer-green/50 pointer-events-none z-0"
                                    style={{ left: `${nowPct}%` }}
                                >
                                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-developer-green whitespace-nowrap">
                                        <PulseDot className="bg-developer-green" />
                                        Now
                                    </span>
                                </div>
                            )}

                            {/* Track */}
                            <div
                                ref={trackRef}
                                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-white/15 rounded-full pointer-events-none z-10"
                            >
                                {/* Elapsed fill */}
                                {nowPct !== null && (
                                    <div
                                        className="absolute left-0 top-0 h-full bg-cyan-400 rounded-full shadow-[0_0_14px_rgba(34,211,238,0.7)]"
                                        style={{ width: `${nowPct}%` }}
                                    />
                                )}
                                {status === 'after' && (
                                    <div className="absolute left-0 top-0 h-full w-full bg-cyan-400/40 rounded-full" />
                                )}

                                {/* Ticks. Label alternates above/below so the two 15-minute pairs
                                    (10:00/10:15 and 2:45/3:00) never overlap, and the label sits
                                    inside the button so the whole stack is the click target. */}
                                {agenda.map((item, i) => {
                                    const style = phaseStyle[item.phase]
                                    const isActive = i === selected
                                    const isNow = liveIndex === i
                                    const above = i % 2 === 0

                                    const label = (
                                        <span
                                            className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 ${above ? 'bottom-full' : 'top-full'}`}
                                        >
                                            {!above && <span className={`w-px h-4 ${isActive ? style.line : 'bg-white/15'} transition-colors`} />}
                                            <span
                                                className={`text-lg leading-none transition-all duration-200 ${isActive ? 'opacity-100 scale-125' : 'opacity-45 group-hover:opacity-90'}`}
                                            >
                                                {item.icon ? <item.icon className="w-4.5 h-4.5 text-white" /> : item.emoji}
                                            </span>
                                            <span
                                                className={`font-mono text-[10px] whitespace-nowrap transition-colors duration-200 ${isActive ? `${style.text} font-bold` : 'text-white/35 group-hover:text-white/75'}`}
                                            >
                                                {formatTime(item.min)}
                                            </span>
                                            {above && <span className={`w-px h-4 ${isActive ? style.line : 'bg-white/15'} transition-colors`} />}
                                        </span>
                                    )

                                    return (
                                        <button
                                            key={item.min}
                                            ref={(el) => {
                                                tickRefs.current[i] = el
                                            }}
                                            onClick={() => setSelected(i)}
                                            aria-label={item.speaker ? `${formatTime(item.min)}, ${item.title}, ${item.speaker}` : `${formatTime(item.min)}, ${item.title}`}
                                            aria-pressed={isActive}
                                            tabIndex={isActive ? 0 : -1}
                                            data-hover="true"
                                            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 pointer-events-auto group focus:outline-none z-20"
                                            style={{ left: `${pctOf(item.min)}%` }}
                                        >
                                            {/* Dot */}
                                            <motion.span
                                                animate={{ scale: isActive ? 1.8 : 1 }}
                                                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                                                className={`absolute inset-0 rounded-full ${style.dot} ${isActive ? style.glow : 'opacity-60'} group-hover:opacity-100 transition-opacity`}
                                            />

                                            {/* Ring on the item that is live right now */}
                                            {isNow && (
                                                <motion.span
                                                    className="absolute -inset-2 rounded-full border border-developer-green"
                                                    animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                                                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                                                />
                                            )}

                                            {/* Focus ring for keyboard users */}
                                            <span className="absolute -inset-2 rounded-full ring-2 ring-white/70 opacity-0 group-focus-visible:opacity-100 transition-opacity" />

                                            {label}
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Hour gridlines, behind everything */}
                            {hourLabels.map((min) => (
                                <div
                                    key={min}
                                    className="absolute inset-y-10 w-px bg-white/[0.06] pointer-events-none"
                                    style={{ left: `${pctOf(min)}%` }}
                                >
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-2 font-mono text-[10px] uppercase tracking-widest text-white/25">
                                        {formatHourLabel(min)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Phase legend */}
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8">
                            {(Object.keys(phaseStyle) as Phase[]).map((p) => (
                                <span key={p} className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
                                    <span className={`w-1.5 h-1.5 rounded-full ${phaseStyle[p].dot}`} />
                                    {phaseStyle[p].label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ---------- Mobile: stacked expandable cards ---------- */}
                <div className="md:hidden space-y-3">
                    {agenda.map((item, i) => {
                        const style = phaseStyle[item.phase]
                        const isOpen = expanded === i
                        const isNow = liveIndex === i
                        return (
                            <ScrollReveal key={item.min} delay={i * 0.03} width="100%">
                                <button
                                    onClick={() => setExpanded(isOpen ? null : i)}
                                    className={`w-full text-left rounded-2xl border bg-gradient-to-br from-white/[0.04] to-white/[0.01] border-l-2 overflow-hidden transition-colors ${isNow ? 'border-developer-green/40' : 'border-white/10'} ${style.border}`}
                                    data-hover="true"
                                >
                                    <div className="flex items-center gap-3 px-4 py-4">
                                        <span className="text-xl shrink-0">
                                            {item.icon ? <item.icon className="w-5 h-5 text-white" /> : item.emoji}
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <div className={`font-mono text-xs mb-1 ${style.text}`}>{formatTime(item.min)}</div>
                                            <div className="text-white font-medium leading-snug">{item.title}</div>
                                        </div>
                                        {isNow && (
                                            <span className="flex items-center gap-1.5 shrink-0 font-mono text-[10px] uppercase tracking-widest text-developer-green">
                                                <PulseDot className="bg-developer-green" />
                                                Now
                                            </span>
                                        )}
                                        <div className="relative w-4 h-4 shrink-0">
                                            <motion.span
                                                animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-1/2 left-0 w-4 h-px bg-white/40 -translate-y-1/2"
                                            />
                                            <span className="absolute top-0 left-1/2 w-px h-4 bg-white/40 -translate-x-1/2" />
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-4 pl-12">
                                                    {item.speaker && (
                                                        <div className={`flex items-center gap-1.5 text-xs font-medium mb-2 ${style.text}`}>
                                                            <User className="w-3 h-3 shrink-0" />
                                                            {item.speaker}
                                                        </div>
                                                    )}
                                                    <p className="text-white/45 text-sm leading-relaxed mb-3">{item.desc}</p>
                                                    <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border ${style.border} ${style.bg} ${style.text}`}>
                                                        {style.label}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </ScrollReveal>
                        )
                    })}
                </div>

                <ProblemStatementsCTA />
            </div>
        </section>
    )
}
