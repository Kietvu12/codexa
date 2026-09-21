import { animate, motion, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { easeOut, Stagger, StaggerItem } from '../motion'

function useCountUp(target: number, active: boolean) {
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(() => (reduceMotion ? target : 0))

  useEffect(() => {
    if (reduceMotion) {
      setCount(target)
      return
    }

    if (!active) {
      setCount(0)
      return
    }

    const duration = target >= 100 ? 1.75 : target >= 30 ? 1.35 : 1.05

    const controls = animate(0, target, {
      duration,
      ease: easeOut,
      onUpdate: (latest) => setCount(Math.round(latest)),
    })

    return () => controls.stop()
  }, [active, reduceMotion, target])

  return count
}

function AnimatedStatValue({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.45 })

  const count = useCountUp(value, isInView)

  return (
    <span ref={ref} className="tabular-nums">
      {count}
    </span>
  )
}

type StatItem = {
  value: number
  suffix?: '+'
  label: string
  icon: ReactNode
}

function IconBusinesses() {
  return (
    <svg viewBox="0 0 32 32" className="size-9 shrink-0" fill="none" aria-hidden>
      <circle cx="16" cy="10" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 26v-2.5a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5V26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="22" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconYears() {
  return (
    <svg viewBox="0 0 32 32" className="size-9 shrink-0" fill="none" aria-hidden>
      <rect x="7" y="7" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="15" y="7" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="23" y="7" width="2" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="7" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="7" y="23" width="6" height="2" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="15" y="23" width="6" height="2" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconProjects() {
  return (
    <svg viewBox="0 0 32 32" className="size-9 shrink-0" fill="none" aria-hidden>
      <path
        d="M16 4 26 8v8c0 5.5-4 9.5-10 12-6-2.5-10-6.5-10-12V8l10-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V12h3v2h2v-2h3v6h-3v-2h-2v2h-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconProvinces() {
  return (
    <svg viewBox="0 0 32 32" className="size-9 shrink-0" fill="none" aria-hidden>
      <circle cx="16" cy="13" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 26v-2a4.5 4.5 0 0 1 4.5-4.5H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 6V4M12 7l-1.5-1.5M20 7l1.5-1.5M23 13h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const STATS: StatItem[] = [
  {
    value: 60,
    suffix: '+',
    label: 'Doanh nghiệp tin dùng',
    icon: <IconBusinesses />,
  },
  {
    value: 9,
    label: 'Năm phát triển',
    icon: <IconYears />,
  },
  {
    value: 500,
    suffix: '+',
    label: 'Dự án đang hoạt động',
    icon: <IconProjects />,
  },
  {
    value: 35,
    suffix: '+',
    label: 'Tỉnh thành triển khai',
    icon: <IconProvinces />,
  },
]

function StatCard({ value, suffix, label, icon }: StatItem) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="stat-card"
      whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-white/90">{icon}</div>
        <p
          className="text-right text-[2rem] font-bold leading-none tracking-tight text-white sm:text-[2.125rem]"
          aria-label={`${value}${suffix ?? ''}`}
        >
          <AnimatedStatValue value={value} />
          {suffix ? <span className="text-brand-red">{suffix}</span> : null}
        </p>
      </div>
      <p className="mt-4 text-sm leading-snug text-white/75 sm:text-[15px]">{label}</p>
    </motion.article>
  )
}

export function HeroAchievementCards() {
  return (
    <section className="bg-brand-navy px-4 pb-10 pt-6 text-white sm:px-6 sm:pb-12 sm:pt-8 lg:px-10">
      <Stagger className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StaggerItem key={stat.label}>
            <StatCard {...stat} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
