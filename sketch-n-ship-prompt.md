# Sketch-N-Ship Hackathon Website - Comprehensive Build Prompt

## Project Overview
Build an **Awwward-level**, ultra-premium website for "Sketch-N-Ship" - a hackathon that celebrates both designers and developers. The website must be a masterpiece that showcases the duality of design and development through innovative visual storytelling.

---

## Core Concept & Theme

### Dual Nature Philosophy
- **Left Brain (Code) meets Right Brain (Design)**
- Visual split/merge concepts throughout the experience
- Represent the journey from "Sketch" (design) to "Ship" (development)
- Use metaphors: canvas to code, pixels to production, wireframes to deployment

### Unique Selling Points
- Interactive elements that react differently based on mouse position (designer vs developer side)
- Parallax scrolling with depth and dimension
- Micro-interactions that feel alive and premium
- Split-screen aesthetics that merge beautifully
- Textured, tactile backgrounds that add depth

---

## Visual Design Requirements

### Color Palette
**Designer Side:**
- Primary: Vibrant gradient (#FF6B6B → #4ECDC4)
- Secondary: Creative purples and pinks (#C44569 → #F8B500)
- Accent: Electric blue (#00D9FF)

**Developer Side:**
- Primary: Terminal greens (#00FF41, #008F11)
- Secondary: Code editor blues (#007ACC, #264F78)
- Accent: Syntax highlighting colors (#569CD6, #CE9178, #D4D4D4)

**Neutral Foundation:**
- Dark backgrounds: #0A0E27, #1A1F3A
- Light accents: #F5F5F7, #FFFFFF
- Gradients should be smooth and sophisticated

### Typography
**Primary Font (Headings):**
- Use modern geometric sans-serif: Space Grotesk or Clash Display
- Large, bold, impactful (60-120px for hero titles)
- Variable font weights for dynamic feeling

**Secondary Font (Body):**
- Clean, readable: Inter or Manrope
- 16-18px base size
- Line height: 1.6 for readability

**Accent Font (Code/Tech):**
- Monospace: JetBrains Mono or Fira Code
- Use for developer-side elements and code snippets

### Textured Backgrounds

**Main Background Layers:**
1. **Base Layer:** Deep navy gradient (#0A0E27 to #1A1F3A)
2. **Noise Texture:** Subtle grain overlay (opacity: 0.03-0.05) for print-like quality
3. **Mesh Gradient:** Animated blob gradients that shift slowly
4. **Grid Pattern:** Subtle blueprint-style grid or dot matrix (opacity: 0.1)
5. **Lighting Effects:** Spotlight or glow effects following cursor

**Texture Variations:**
- Designer sections: Watercolor splashes, brush strokes, paper texture
- Developer sections: Circuit board patterns, code matrix, hexagonal grids
- Intersection areas: Glitch effects, pixelated transitions

---

## Technical Stack & Implementation

### Required Technology Stack
```
Framework: Next.js 14+ (App Router)
Language: TypeScript (strict mode enabled)
Styling: Tailwind CSS v3+
UI Library: shadcn/ui (recommended) or Radix UI primitives
Animation: Framer Motion (primary) + GSAP (for complex sequences)
Scroll: Lenis for smooth scrolling
3D Elements: Three.js with @react-three/fiber and @react-three/drei
Particles: react-particles or custom canvas implementation
Icons: Lucide React
Fonts: next/font with Google Fonts (Space Grotesk, Inter, JetBrains Mono)
State Management: Zustand or React Context (if needed)
Form Handling: React Hook Form + Zod validation
```

### Additional Dependencies
```bash
# Install these packages
npm install framer-motion
npm install @react-three/fiber @react-three/drei three
npm install lenis
npm install lucide-react
npm install clsx tailwind-merge
npm install react-hook-form zod @hookform/resolvers
npm install zustand (optional)

# shadcn/ui components (install as needed)
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
```

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.0s
- Lighthouse Score: 90+ across all metrics
- Smooth 60fps animations

### Next.js Configuration

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
```

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sketch-N-Ship | Where Pixels Meet Production',
  description: 'A premier hackathon for designers and developers. Join us to create, collaborate, and ship amazing projects.',
  keywords: ['hackathon', 'design', 'development', 'coding', 'UI/UX'],
  authors: [{ name: 'Sketch-N-Ship Team' }],
  openGraph: {
    title: 'Sketch-N-Ship Hackathon',
    description: 'Where Pixels Meet Production',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sketch-N-Ship Hackathon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sketch-N-Ship Hackathon',
    description: 'Where Pixels Meet Production',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}
```

```typescript
// app/page.tsx
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Tracks } from '@/components/sections/Tracks'
import { Timeline } from '@/components/sections/Timeline'
import { Prizes } from '@/components/sections/Prizes'
import { Judges } from '@/components/sections/Judges'
import { Sponsors } from '@/components/sections/Sponsors'
import { FAQ } from '@/components/sections/FAQ'
import { Registration } from '@/components/sections/Registration'
import { Footer } from '@/components/sections/Footer'
import { SmoothScroll } from '@/components/animations/SmoothScroll'

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Tracks />
        <Timeline />
        <Prizes />
        <Judges />
        <Sponsors />
        <FAQ />
        <Registration />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
```

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --noise-opacity: 0.03;
  }
  
  body {
    @apply font-body;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    @apply w-2;
  }
  
  ::-webkit-scrollbar-track {
    @apply bg-background-darker;
  }
  
  ::-webkit-scrollbar-thumb {
    @apply bg-gradient-to-b from-designer-primary to-developer-green rounded-full;
  }
}

@layer utilities {
  .noise-texture {
    position: relative;
  }
  
  .noise-texture::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: var(--noise-opacity);
    pointer-events: none;
  }
  
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-designer-primary via-designer-accent to-developer-green;
  }
  
  .glow-designer {
    box-shadow: 0 0 40px rgba(255, 107, 107, 0.3);
  }
  
  .glow-developer {
    box-shadow: 0 0 40px rgba(0, 255, 65, 0.3);
  }
}
```

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

---

## Website Structure & Sections

### 1. Hero Section (Full Screen)
**Layout:**
- Full viewport height with centered content
- Split design hint: subtle vertical divide (designer left, developer right)
- Animated title with reveal effect
- Floating 3D elements or particles in background

**Content:**
```
HERO TITLE: "SKETCH-N-SHIP"
Subtitle: "Where Pixels Meet Production"
Tagline: "A Hackathon for Designers & Developers United"
Date: 20-21 June | Location: TBD
CTA Buttons: 
  - "Register Now" (primary, glowing effect)
  - "View Challenges" (secondary, outlined)
```

**Animations:**
- Text reveal with stagger effect
- Particles floating and reacting to mouse movement
- Gradient shift on background
- Smooth scroll indicator at bottom

---

### 2. Concept/About Section
**Layout:**
- Two-column layout that merges in center
- Left: Designer perspective | Right: Developer perspective
- Center: Unified message

**Content:**
```
HEADING: "Two Sides. One Vision. Infinite Possibilities."

DESIGNER COLUMN:
Icon: Pen tool or color palette
"Sketch Your Vision"
- UI/UX Design Challenges
- Brand Identity Creation
- Interactive Prototypes
- Design Systems

DEVELOPER COLUMN:
Icon: Terminal or code brackets
"Ship Your Solution"
- Full-stack Development
- API Integration
- Performance Optimization
- Clean Architecture

CENTER MESSAGE:
"At Sketch-N-Ship, we believe the best products emerge when 
creative vision meets technical excellence. Whether you code, 
design, or both - this is your playground."
```

**Visual Effects:**
- Hover states that reveal more details
- Connecting lines/paths between columns
- Animated icons with micro-interactions
- Background elements that shift based on scroll position

---

### 3. Tracks/Categories Section
**Layout:**
- Card-based grid (3 columns desktop, 1 column mobile)
- Each card with unique hover effect
- Staggered reveal on scroll

**Track Cards:**
Each card should include:
- Icon/illustration representing the track
- Track name
- Brief description (2-3 lines)
- Tech stack or tools mentioned
- Hover effect: tilt, glow, or elevation

**Example Tracks:**
1. **Design Pioneer Track**
   - Focus: UI/UX, Visual Design, Design Systems
   - Tools: Figma, Adobe XD, Sketch, Framer

2. **Code Craftsman Track**
   - Focus: Full-stack, Backend, Frontend Excellence
   - Tools: React, Node.js, Python, APIs

3. **Fusion Master Track**
   - Focus: Design + Development combined
   - Tools: Complete creative and technical stack

4. **AI Innovation Track**
   - Focus: AI-powered design/development
   - Tools: Midjourney, ChatGPT, Copilot, Stable Diffusion

**Animation:**
- Cards fade in with stagger
- Hover lifts card with shadow
- Background pattern shifts

---

### 4. Timeline Section
**Layout:**
- Vertical timeline with alternating left/right content
- Central line with milestone dots
- Responsive: becomes vertical stack on mobile

**Timeline Items:**
```
REGISTRATION OPENS
Date: [Date]
Description: "Submit your application and form your team"

OPENING CEREMONY
Date: [Date]
Description: "Kickoff event with keynote speakers and challenge reveal"

HACK TIME
Duration: 24/48 hours
Description: "Build, design, iterate, and create magic"

SUBMISSION DEADLINE
Date: [Date], [Time]
Description: "Final submissions close - no extensions!"

JUDGING PERIOD
Date: [Date]
Description: "Expert panel reviews all projects"

WINNER ANNOUNCEMENT
Date: [Date]
Description: "Closing ceremony with awards and celebrations"
```

**Visual Effects:**
- Animated dots that fill on scroll
- Line draws as you scroll down
- Content fades in when dot is reached
- Glowing effect on active milestone

---

### 5. Prizes Section
**Layout:**
- Three-tier podium design (1st, 2nd, 3rd place)
- Premium card design with metallic gradients
- Additional special category prizes below

**Prize Tiers:**
```
🥇 FIRST PLACE
$[Amount] + Premium Swag + Mentorship
"Grand Prize Winner"

🥈 SECOND PLACE  
$[Amount] + Swag Package
"Runner Up"

🥉 THIRD PLACE
$[Amount] + Swag
"Third Place"

SPECIAL CATEGORIES:
- Best Design: $[Amount]
- Best Technical Implementation: $[Amount]
- Best Innovation: $[Amount]
- People's Choice: $[Amount]
```

**Visual Effects:**
- Metallic shine/reflection effects
- Animated trophy icons
- Particle burst on hover
- Numbers count up on scroll into view

---

### 6. Judges/Mentors Section
**Layout:**
- Card grid showcasing judges and mentors
- Circular profile images with border effects
- Expandable cards on click/hover

**Card Structure:**
```
Profile Photo (circular with gradient border)
Name
Title/Role
Company
Expertise Tags
Social Links (LinkedIn, Twitter, Portfolio)
```

**Visual Effects:**
- Grayscale to color on hover
- Smooth scale and elevation
- Rotating border gradient
- Tooltip on hover

---

### 7. Sponsors Section
**Layout:**
- Tiered rows: Platinum, Gold, Silver, Bronze
- Logo grid with proper spacing
- Monochrome logos with color on hover

**Tiers:**
```
PLATINUM SPONSORS (Largest)
[Logo Grid]

GOLD SPONSORS
[Logo Grid]

SILVER SPONSORS  
[Logo Grid]

COMMUNITY PARTNERS
[Logo Grid]
```

**Visual Effects:**
- Grayscale → color transition
- Subtle glow on hover
- Click opens sponsor website in new tab

---

### 8. FAQ Section
**Layout:**
- Accordion-style expandable questions
- Two-column on desktop, single on mobile
- Search/filter functionality (optional)

**Sample Questions:**
```
Q: Who can participate?
A: Designers, developers, and anyone passionate about creating!

Q: Do I need a team?
A: Teams of 2-4 recommended, solo submissions accepted.

Q: What are the judging criteria?
A: Innovation, Design Quality, Technical Implementation, Impact

Q: Is this virtual or in-person?
A: [Specify format]

Q: What tools can we use?
A: Any tools, frameworks, or technologies you prefer!

Q: Can I start working before the hackathon?
A: No, all work must be done during the designated hack period.
```

**Visual Effects:**
- Smooth expand/collapse with height animation
- Rotate arrow/chevron icon
- Background color shift on active question

---

### 9. Registration/CTA Section
**Layout:**
- Full-width attention-grabbing section
- Form or button linking to external registration
- Countdown timer to registration deadline (if applicable)

**Content:**
```
HEADING: "Ready to Sketch & Ship?"
Subheading: "Join [X] creators already registered!"

REGISTRATION FORM/BUTTON:
- Name
- Email  
- Role (Designer/Developer/Both)
- Team Name (optional)
- Submit CTA: "Secure My Spot"

OR

Large CTA button linking to external platform (Devpost, Eventbrite, etc.)
```

**Visual Effects:**
- Animated countdown timer
- Particle effects around CTA button
- Pulsing glow on button
- Form field animations on focus

---

### 10. Footer
**Layout:**
- Three-column layout (Logo & Tagline | Quick Links | Social & Contact)
- Bottom bar with copyright and legal links

**Content:**
```
COLUMN 1:
Logo
"Sketch-N-Ship [Year]"
Tagline

COLUMN 2:
Quick Links
- About
- Tracks
- Schedule  
- Prizes
- FAQs
- Contact

COLUMN 3:
Social Media Icons
- Instagram
- Twitter/X
- LinkedIn
- Discord
- Email

BOTTOM BAR:
"© 2024 Sketch-N-Ship. All rights reserved."
Privacy Policy | Terms of Service | Code of Conduct
```

---

## Advanced Interactive Features

### 1. Split Cursor Effect
```typescript
// components/animations/CursorFollower.tsx
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

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          backgroundColor: isDesignerSide ? '#FF6B6B' : '#00FF41',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      
      {/* Trail effect */}
      <motion.div
        className="fixed w-12 h-12 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      >
        {isDesignerSide ? (
          <div className="w-full h-full bg-gradient-to-br from-designer-primary/20 to-designer-accent/20 blur-md" />
        ) : (
          <div className="w-full h-full border border-developer-green/50 rounded-full">
            <span className="text-developer-green font-mono text-xs">{'{ }'}</span>
          </div>
        )}
      </motion.div>
    </>
  )
}
```

### 2. Parallax Scrolling
```typescript
// components/animations/ParallaxSection.tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
```

### 3. Scroll-Triggered Animations
```typescript
// components/animations/ScrollReveal.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  className
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

### 4. Magnetic Buttons
```typescript
// components/ui/magnetic-button.tsx
'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  magnetStrength?: number
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  onClick,
  magnetStrength = 0.3
}) => {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY
    
    // Calculate magnetic pull
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
    const maxDistance = Math.max(width, height) * 2
    
    if (distance < maxDistance) {
      const strength = (1 - distance / maxDistance) * magnetStrength
      setPosition({
        x: distanceX * strength,
        y: distanceY * strength
      })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      onClick={onClick}
      className={cn(
        'relative px-8 py-4 font-heading font-bold rounded-full overflow-hidden',
        'bg-gradient-to-r from-designer-primary to-developer-green',
        'hover:shadow-2xl transition-shadow duration-300',
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
```

### 5. Smooth Scroll Implementation
```typescript
// components/animations/SmoothScroll.tsx
'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

interface SmoothScrollProps {
  children: React.ReactNode
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
```

### 6. Custom Hooks

```typescript
// hooks/useScrollProgress.ts
import { useEffect, useState } from 'react'

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      setProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}
```

```typescript
// hooks/useCursorPosition.ts
import { useEffect, useState } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export const useCursorPosition = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return position
}
```

```typescript
// hooks/useMediaQuery.ts
import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

// Usage example
// const isMobile = useMediaQuery('(max-width: 768px)')
```

### 7. Theme Toggle (Optional)
```typescript
// components/ThemeToggle.tsx
'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-designer-gold" />
      ) : (
        <Moon className="w-5 h-5 text-developer-blue" />
      )}
    </motion.button>
  )
}
```

### 8. 3D Background Scene
```typescript
// components/3d/Scene3D.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <meshStandardMaterial
              color="#FF6B6B"
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>
        </Float>
        
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
```

---

## Accessibility & Best Practices

### Accessibility
- Semantic HTML5 elements
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators visible
- Sufficient color contrast (WCAG AA minimum)
- Reduced motion option for animations

### SEO Optimization
- Meta tags (title, description, OG tags)
- Structured data (JSON-LD for events)
- Clean URLs
- Fast loading times
- Mobile-first responsive design

### Performance
- Lazy loading for images and heavy elements
- Optimized asset sizes
- Code splitting
- Minimize HTTP requests
- Use of CDN for libraries
- Compressed images (WebP format)

---

## Code Structure Guidelines

### Next.js File Organization
```
/sketch-n-ship
├── /app
│   ├── layout.tsx (root layout)
│   ├── page.tsx (home page)
│   ├── globals.css (Tailwind imports)
│   └── /fonts (local fonts if needed)
├── /components
│   ├── /ui (shadcn/ui components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── ...
│   ├── /sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Tracks.tsx
│   │   ├── Timeline.tsx
│   │   ├── Prizes.tsx
│   │   ├── Judges.tsx
│   │   ├── Sponsors.tsx
│   │   ├── FAQ.tsx
│   │   ├── Registration.tsx
│   │   └── Footer.tsx
│   ├── /animations
│   │   ├── ParallaxSection.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── MagneticButton.tsx
│   │   └── CursorFollower.tsx
│   └── /3d
│       ├── Scene3D.tsx
│       └── ParticleSystem.tsx
├── /lib
│   ├── utils.ts (cn() helper, etc.)
│   ├── constants.ts
│   └── animations.ts
├── /hooks
│   ├── useScrollProgress.ts
│   ├── useCursorPosition.ts
│   └── useMediaQuery.ts
├── /public
│   ├── /images
│   ├── /textures
│   └── /icons
├── /styles (optional Tailwind plugins)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

### Tailwind CSS Configuration
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Designer side colors
        designer: {
          primary: '#FF6B6B',
          secondary: '#4ECDC4',
          accent: '#00D9FF',
          purple: '#C44569',
          gold: '#F8B500',
        },
        // Developer side colors
        developer: {
          green: '#00FF41',
          darkGreen: '#008F11',
          blue: '#007ACC',
          darkBlue: '#264F78',
          syntax: {
            blue: '#569CD6',
            orange: '#CE9178',
            gray: '#D4D4D4',
          }
        },
        // Base colors
        background: {
          dark: '#0A0E27',
          darker: '#1A1F3A',
        }
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
export default config
```

### TypeScript Guidelines
- **Strict mode enabled**: Ensure type safety throughout
- **Interface over Type**: Use interfaces for object shapes
- **Props typing**: Always type component props explicitly
- **Avoid any**: Use unknown or proper types instead
- **Utility types**: Leverage Pick, Omit, Partial, Required when needed
- **Const assertions**: Use `as const` for literal types

```typescript
// Example component structure
import { FC } from 'react'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  onCtaClick: () => void
}

export const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Component content */}
    </section>
  )
}
```

### Tailwind Best Practices
- **Use @apply sparingly**: Prefer utility classes in JSX
- **Component abstraction**: Create reusable components, not CSS classes
- **Custom utilities**: Define in tailwind.config.ts theme extension
- **Responsive design**: Use sm:, md:, lg:, xl:, 2xl: prefixes
- **Dark mode**: Use dark: prefix for dark mode variants
- **Composition**: Use cn() utility for conditional classes

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Component Pattern Example
```typescript
// components/ui/magnetic-button.tsx
'use client'

import { FC, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const MagneticButton: FC<MagneticButtonProps> = ({
  children,
  className,
  onClick
}) => {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.3
    const y = (clientY - (top + height / 2)) * 0.3
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onClick={onClick}
      className={cn(
        'px-8 py-4 bg-gradient-to-r from-designer-primary to-designer-secondary',
        'text-white font-heading font-bold rounded-full',
        'hover:shadow-2xl hover:shadow-designer-accent/50',
        'transition-shadow duration-300',
        className
      )}
    >
      {children}
    </motion.button>
  )
}
```

---

## Animation Timing & Easing

### General Timing
- Fast interactions: 150-200ms
- Medium transitions: 300-400ms
- Slow reveals: 600-800ms
- Page transitions: 800-1000ms

### Easing Functions
- **Ease Out**: UI elements appearing (cubic-bezier(0, 0, 0.2, 1))
- **Ease In**: UI elements disappearing (cubic-bezier(0.4, 0, 1, 1))
- **Ease In Out**: Size/position changes (cubic-bezier(0.4, 0, 0.2, 1))
- **Custom**: Bouncy effects (cubic-bezier(0.68, -0.55, 0.265, 1.55))

---

## Content Guidelines

### Tone of Voice
- Energetic and inspiring
- Technical but accessible
- Inclusive and welcoming
- Action-oriented

### Writing Style
- Short, punchy sentences
- Active voice
- Clear calls-to-action
- Avoid jargon unless necessary

---

## Section Implementation Examples with TypeScript & shadcn/ui

### Hero Section Example
```typescript
// components/sections/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { ChevronDown } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture">
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-darker to-background-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-designer-primary/10 to-developer-green/10 animate-gradient bg-[length:200%_200%]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        <h1 className="text-7xl md:text-9xl font-heading font-bold mb-6">
          <span className="text-gradient">SKETCH-N-SHIP</span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 mb-12">
          Where Pixels Meet Production
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticButton className="glow-designer">
            Register Now
          </MagneticButton>
          <MagneticButton className="bg-transparent border-2 border-developer-green">
            View Challenges
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  )
}
```

### FAQ Section with Accordion
```typescript
// components/sections/FAQ.tsx
'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export const FAQ = () => {
  const faqs = [
    {
      q: 'Who can participate?',
      a: 'Designers, developers, and anyone passionate about creating!',
    },
    // Add more...
  ]

  return (
    <section className="py-24 px-4">
      <ScrollReveal>
        <h2 className="text-5xl font-heading font-bold text-center mb-16">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
      </ScrollReveal>

      <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border border-white/10 rounded-lg px-6 bg-white/5"
          >
            <AccordionTrigger className="text-left font-heading">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
```

### Tracks Section with Cards
```typescript
// components/sections/Tracks.tsx
'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Palette, Code2, Zap, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export const Tracks = () => {
  const tracks = [
    {
      icon: Palette,
      title: 'Design Pioneer Track',
      description: 'UI/UX, Visual Design, Design Systems',
      tools: ['Figma', 'Adobe XD', 'Sketch'],
    },
    // Add more tracks...
  ]

  return (
    <section className="py-24 px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {tracks.map((track, i) => (
          <motion.div key={i} whileHover={{ y: -8 }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-designer-primary to-developer-green p-3 mb-4">
                  <track.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="font-heading">{track.title}</CardTitle>
                <CardDescription>{track.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {track.tools.map((tool, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

---

## Testing Checklist

### Before Launch
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iOS and Android devices
- [ ] Verify all links work
- [ ] Test form submissions and validation (React Hook Form + Zod)
- [ ] Check all animations are smooth (60fps)
- [ ] Verify images load properly (Next.js Image optimization)
- [ ] Test at different screen sizes (320px to 4K)
- [ ] Run Lighthouse audit (target: 90+ all metrics)
- [ ] Test with keyboard navigation
- [ ] Verify with screen reader (NVDA/VoiceOver)
- [ ] Check loading speed and Core Web Vitals
- [ ] Validate HTML/CSS/TypeScript
- [ ] Test error states and loading states
- [ ] Verify TypeScript has no type errors (`npm run type-check`)
- [ ] Run ESLint checks (`npm run lint`)
- [ ] Test build process (`npm run build`)
- [ ] Verify environment variables are properly configured
- [ ] Test API routes (if any)
- [ ] Check shadcn/ui component accessibility
- [ ] Verify Framer Motion animations work on all devices
- [ ] Test smooth scrolling on different browsers

---

## Inspirational References

### Design Style Inspiration
- Awwwards Site of the Day winners
- Apple product landing pages
- Stripe's gradient meshes
- Linear's website animations
- Vercel's clean design aesthetic
- Behance featured projects
- Dribbble top shots

### Technical Inspiration
- Smooth scrolling: Locomotive Scroll examples
- Particle systems: Three.js examples
- Cursor effects: Custom cursor libraries
- Typography: Variable font showcases

---

## Final Notes for AI IDE

### Priority Order
1. **Set up Next.js project structure** with TypeScript and Tailwind CSS
2. **Install and configure shadcn/ui** and other dependencies
3. **Build core layout and components** (app/layout.tsx, app/page.tsx)
4. **Create reusable components** in /components directory
5. **Implement sections one by one** (Hero → About → Tracks → etc.)
6. **Add animations** with Framer Motion and custom hooks
7. **Implement responsive design** using Tailwind breakpoints
8. **Polish and optimize** (lazy loading, image optimization, code splitting)
9. **Test thoroughly** across devices and browsers
10. **Final performance audit** and fixes

### TypeScript Best Practices
- ✅ Enable `strict: true` in tsconfig.json
- ✅ Type all component props with interfaces
- ✅ Avoid using `any` - use `unknown` or proper types
- ✅ Create type definitions in separate files when needed
- ✅ Use proper event types (React.MouseEvent, React.FormEvent, etc.)
- ✅ Leverage TypeScript utility types (Partial, Pick, Omit, etc.)
- ✅ Run `npm run type-check` before building

### Next.js Specific Guidelines
- ✅ Use `'use client'` directive for interactive components
- ✅ Optimize images with next/image component
- ✅ Load fonts with next/font for better performance
- ✅ Use Server Components by default, Client Components when needed
- ✅ Implement proper metadata for SEO
- ✅ Utilize App Router features (layouts, loading, error states)
- ✅ Keep bundle size minimal with dynamic imports where appropriate

### Tailwind CSS Guidelines
- ✅ Use utility classes directly in JSX (avoid @apply overuse)
- ✅ Create custom utilities in tailwind.config.ts theme.extend
- ✅ Use cn() utility for conditional class merging
- ✅ Implement custom colors in theme configuration
- ✅ Use responsive prefixes (sm:, md:, lg:, xl:, 2xl:)
- ✅ Leverage Tailwind's animation utilities
- ✅ Use arbitrary values sparingly [only when absolutely needed]

### shadcn/ui Component Usage
- ✅ Install only needed components to keep bundle small
- ✅ Customize component styles in /components/ui
- ✅ Use Radix UI primitives for accessibility
- ✅ Maintain consistent design tokens across components
- ✅ Test keyboard navigation and screen reader compatibility

### Animation Performance
- ✅ Use CSS transforms (translate, scale, rotate) over position changes
- ✅ Prefer opacity over color transitions when possible
- ✅ Use `will-change` sparingly and remove when done
- ✅ Implement `useReducedMotion` hook for accessibility
- ✅ Keep animations under 400ms for snappiness
- ✅ Use Framer Motion's layout animations for complex transitions
- ✅ Optimize Three.js scenes with proper geometry and material management

### Key Success Factors
- **Premium Feel**: Every detail matters, from hover states to loading animations
- **Type Safety**: Leverage TypeScript's full power for robust, maintainable code
- **Performance**: Beautiful but fast - optimize relentlessly (target <3s LCP)
- **Cohesion**: Design and developer elements should feel like two halves of a whole
- **Component Reusability**: Build modular, reusable components
- **Innovation**: Include at least 2-3 unexpected delightful moments
- **Accessibility**: WCAG AA compliance minimum (keyboard nav, screen readers, color contrast)
- **Polish**: No detail too small - cursor effects, focus states, error messages all matter

### Development Workflow
```bash
# Initial setup
npx create-next-app@latest sketch-n-ship --typescript --tailwind --app
cd sketch-n-ship
npx shadcn-ui@latest init

# Install dependencies
npm install framer-motion @react-three/fiber @react-three/drei three
npm install lenis lucide-react clsx tailwind-merge
npm install react-hook-form zod @hookform/resolvers

# Development
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Production build
npm run build
npm start
```

### Remember
This website should make visitors say "WOW" within the first 3 seconds. It should feel like a product a top-tier tech company would launch. The duality of design and development should be celebrated throughout the experience, creating a unique narrative that represents the "Sketch-N-Ship" philosophy.

**Build with:**
- ⚡ Next.js 14+ for optimal performance
- 🎨 Tailwind CSS for rapid, consistent styling  
- 💎 TypeScript for type-safe, maintainable code
- ✨ Framer Motion for buttery-smooth animations
- 🧩 shadcn/ui for accessible, customizable components

Build something that would make both designers and developers proud.

---

**END OF PROMPT**

*This website should be a testament to what happens when design excellence meets development mastery, all powered by modern web technologies. Make it unforgettable.*
