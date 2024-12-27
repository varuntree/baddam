'use client'
import { ReactNode, useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { usePathname } from 'next/navigation'

interface LocomotiveScrollProviderProps {
  children: ReactNode
}

export default function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!containerRef.current) return

    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        locomotiveScrollRef.current = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          smoothMobile: true,
          multiplier: 1,
          class: 'is-revealed',
          touchMultiplier: 2,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          }
        })
      } catch (error) {
        console.error('Locomotive Scroll error:', error)
      }
    })()

    return () => {
      locomotiveScrollRef.current?.destroy()
    }
  }, [pathname])

  return (
    <main 
      data-scroll-container 
      ref={containerRef}
      className="relative min-h-screen"
    >
      {children}
    </main>
  )
}
