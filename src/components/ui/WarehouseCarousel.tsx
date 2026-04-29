import { useEffect, useMemo, useState } from 'react'

import galpao1 from '../../assets/galpão1.jpeg'
import galpao2 from '../../assets/galpão2.jpeg'
import galpao3 from '../../assets/galpão3.jpeg'
import galpao4 from '../../assets/galpão4.jpeg'
import galpao5 from '../../assets/galpão5.jpeg'
import galpao6 from '../../assets/galpão6.jpeg'
import galpao7 from '../../assets/galpão7.jpeg'
import galpao8 from '../../assets/galpão8.jpeg'

type WarehouseCarouselProps = {
  className?: string
}

export function WarehouseCarousel({ className }: WarehouseCarouselProps) {
  const slides = useMemo(
    () => [
      { src: galpao1, alt: 'Galpão da Infinity Distribuição (1)' },
      { src: galpao2, alt: 'Galpão da Infinity Distribuição (2)' },
      { src: galpao3, alt: 'Galpão da Infinity Distribuição (3)' },
      { src: galpao4, alt: 'Galpão da Infinity Distribuição (4)' },
      { src: galpao5, alt: 'Galpão da Infinity Distribuição (5)' },
      { src: galpao6, alt: 'Galpão da Infinity Distribuição (6)' },
      { src: galpao7, alt: 'Galpão da Infinity Distribuição (7)' },
      { src: galpao8, alt: 'Galpão da Infinity Distribuição (8)' },
    ],
    [],
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = (index: number) => {
    const next = ((index % slides.length) + slides.length) % slides.length
    setActiveIndex(next)
  }

  const prev = () => goTo(activeIndex - 1)
  const next = () => goTo(activeIndex + 1)

  useEffect(() => {
    if (isPaused) return
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [isPaused, slides.length])

  const heightClass = 'h-[260px] sm:h-[320px] lg:h-[480px]'

  return (
    <div className={['w-full', className].filter(Boolean).join(' ')}>
      <div
        className={[
          'relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm shadow-black/40',
          heightClass,
        ].join(' ')}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((s, idx) => {
          const isActive = idx === activeIndex
          return (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              className={[
                'absolute inset-0 h-full w-full object-cover',
                'transition-opacity duration-500',
                isActive ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
              loading={idx === 0 ? 'eager' : 'lazy'}
              draggable={false}
            />
          )
        })}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />

        <button
          type="button"
          onClick={prev}
          aria-label="Imagem anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-2 text-white/90 shadow-sm shadow-black/30 backdrop-blur hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
            <path
              fill="currentColor"
              d="M15.5 5.5 9 12l6.5 6.5-1.4 1.4L6.2 12l7.9-7.9 1.4 1.4Z"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Próxima imagem"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-2 text-white/90 shadow-sm shadow-black/30 backdrop-blur hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
            <path
              fill="currentColor"
              d="M8.5 18.5 15 12 8.5 5.5l1.4-1.4 7.9 7.9-7.9 7.9-1.4-1.4Z"
            />
          </svg>
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, idx) => {
            const isActive = idx === activeIndex
            return (
              <button
                key={idx}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`Ir para a imagem ${idx + 1}`}
                className={[
                  'h-2.5 w-2.5 rounded-full border border-white/20 shadow-sm shadow-black/30',
                  'transition-colors',
                  isActive ? 'bg-white/90' : 'bg-white/25 hover:bg-white/45',
                ].join(' ')}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

