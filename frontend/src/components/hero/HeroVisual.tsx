import { easeOut, motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import type { MainNavId } from '../../constants/site'
import { Header } from '../layout/Header'

const heroBackgroundSrc = new URL('../../assets/HeroVisual.png', import.meta.url).href

type HeroVisualProps = {
  activeNav?: MainNavId
  children?: ReactNode
}

export function HeroVisual({ activeNav = 'trang-chu', children }: HeroVisualProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative isolate min-h-[min(540px,88svh)] text-white sm:min-h-[min(620px,85svh)] lg:min-h-[min(680px,82svh)]">
      {reduceMotion ? (
        <img
          src={heroBackgroundSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
      ) : (
        <motion.img
          src={heroBackgroundSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          initial={{ scale: 1.06, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: easeOut }}
        />
      )}
      <div
        className="absolute inset-0 bg-linear-to-b from-brand-navy/88 via-brand-navy/55 to-brand-navy/40 sm:bg-linear-to-r sm:from-brand-navy/75 sm:via-brand-navy/35 sm:to-brand-navy/15"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-[min(540px,88svh)] flex-col sm:min-h-[min(620px,85svh)] lg:min-h-[min(680px,82svh)]">
        <Header activeNav={activeNav} variant="overlay" />
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-start justify-center px-4 pb-10 pt-4 sm:px-6 sm:pb-10 sm:pt-2 lg:px-10 lg:pb-12">
          {children}
        </div>
      </div>
    </section>
  )
}
