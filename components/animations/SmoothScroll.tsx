'use client'

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}
