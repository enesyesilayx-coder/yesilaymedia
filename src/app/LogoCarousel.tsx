'use client'

import { useEffect, useRef } from 'react'

const logos = [
  { src: '/logos/apple.svg', alt: 'Apple' },
  { src: '/logos/homeday.svg', alt: 'Homeday GmbH' },
  { src: '/logos/einfach-zum-angebot.svg', alt: 'Einfach Zum Angebot GmbH' },
  { src: '/logos/aroundhome.svg', alt: 'Aroundhome GmbH' },
  { src: '/logos/verivox.svg', alt: 'Verivox GmbH' },
  { src: '/logos/nuernberger.svg', alt: 'Nürnberger Versicherung' },
  { src: '/logos/hanse-merkur.svg', alt: 'Hanse Merkur Versicherung' },
]

export default function LogoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Wait for images to load, then measure one set
    const measure = () => {
      const items = track.querySelectorAll('.logo-item')
      if (items.length === 0) return

      // Width of one set = sum of first 7 items + gaps
      let setWidth = 0
      for (let i = 0; i < logos.length; i++) {
        setWidth += (items[i] as HTMLElement).offsetWidth
      }
      setWidth += logos.length * 80 // gaps (including trailing gap before next set)

      track.style.setProperty('--scroll-width', `-${setWidth}px`)
    }

    // Measure after images load
    const images = track.querySelectorAll('img')
    let loaded = 0
    const onLoad = () => {
      loaded++
      if (loaded >= images.length) measure()
    }
    images.forEach(img => {
      if (img.complete) { loaded++; } else { img.addEventListener('load', onLoad) }
    })
    if (loaded >= images.length) measure()

    return () => {
      images.forEach(img => img.removeEventListener('load', onLoad))
    }
  }, [])

  return (
    <div className="logo-carousel">
      <div className="logo-track" ref={trackRef}>
        {/* Three sets for guaranteed seamless coverage */}
        {[0, 1, 2].map(setIndex =>
          logos.map((logo, i) => (
            <img
              key={`${setIndex}-${i}`}
              className="logo-item"
              src={logo.src}
              alt={logo.alt}
            />
          ))
        )}
      </div>
    </div>
  )
}
