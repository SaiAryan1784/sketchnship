'use client'

import { SmoothScroll } from '@/components/animations/SmoothScroll'
import { CursorFollower } from '@/components/animations/CursorFollower'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Tracks } from '@/components/sections/Tracks'
import { Navbar } from '@/components/sections/Navbar'

import { Timeline } from '@/components/sections/Timeline'
import { Prizes } from '@/components/sections/Prizes'
import { Judges } from '@/components/sections/Judges'
import { Sponsors } from '@/components/sections/Sponsors'
import { FAQ } from '@/components/sections/FAQ'
import { Registration } from '@/components/sections/Registration'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <SmoothScroll>
      <CursorFollower />
      <Navbar />
      <main className="relative min-h-screen bg-background-dark overflow-x-hidden">
        <Hero />
        <div id="about"><About /></div>
        <div id="tracks"><Tracks /></div>
        <div id="timeline"><Timeline /></div>
        <div id="prizes"><Prizes /></div>
        <Judges />
        <Sponsors />
        <div id="faq"><FAQ /></div>
        <div id="register"><Registration /></div>
        <Footer />
      </main>
    </SmoothScroll>
  )
}
