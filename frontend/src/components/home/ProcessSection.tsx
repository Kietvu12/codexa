import { easeOut, motion, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Reveal, viewportOnce } from '../motion'

const STEPS = [
  {
    num: '01',
    title: 'Khởi tạo dự án',
    description: 'Thiết lập trong vài phút',
  },
  {
    num: '02',
    title: 'Mời thành viên',
    description: 'Kết nối các bên liên quan',
  },
  {
    num: '03',
    title: 'Tải dữ liệu',
    description: 'Tài liệu, bản vẽ, mô hình BIM',
  },
  {
    num: '04',
    title: 'Bắt đầu sử dụng',
    description: 'Làm việc ngay trên nền tảng',
  },
] as const

const FLOW_DURATION = 2.35
const STEP_INTERVAL = FLOW_DURATION / STEPS.length
const TIMELINE_X = '1.375rem'

const processVisualSrc = new URL('../../assets/HeroVisual.png', import.meta.url).href

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4 shrink-0" aria-hidden fill="none">
      <path
        d="M4 10h12M12 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ProcessSteps() {
  const reduceMotion = useReducedMotion()
  const listRef = useRef<HTMLOListElement>(null)
  const isInView = useInView(listRef, { once: true, amount: 0.35 })
  const [activeIndex, setActiveIndex] = useState(() => (reduceMotion ? STEPS.length - 1 : -1))
  const [flowDone, setFlowDone] = useState(() => reduceMotion)

  useEffect(() => {
    if (reduceMotion) {
      setActiveIndex(STEPS.length - 1)
      setFlowDone(true)
      return
    }

    if (!isInView) {
      setActiveIndex(-1)
      setFlowDone(false)
      return
    }

    setActiveIndex(-1)
    setFlowDone(false)

    const stepTimers = STEPS.map((_, index) =>
      window.setTimeout(() => setActiveIndex(index), index * STEP_INTERVAL * 1000),
    )
    const doneTimer = window.setTimeout(() => setFlowDone(true), FLOW_DURATION * 1000)

    return () => {
      stepTimers.forEach(clearTimeout)
      clearTimeout(doneTimer)
    }
  }, [isInView, reduceMotion])

  return (
    <ol ref={listRef} className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        className="absolute top-5 bottom-5 w-px -translate-x-1/2 bg-sky-400/30"
        style={{ left: TIMELINE_X }}
        aria-hidden
      />

      {!reduceMotion && (
        <>
          <motion.div
            className={`process-timeline-track absolute top-5 bottom-5 w-px -translate-x-1/2 rounded-full ${flowDone ? 'process-timeline-track--live' : ''}`}
            style={{ left: TIMELINE_X, transformOrigin: 'top' }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isInView ? 1 : 0 }}
            transition={{ duration: FLOW_DURATION, ease: easeOut }}
            aria-hidden
          />
          <motion.div
            className="process-timeline-pulse absolute z-20 size-2.5 -translate-x-1/2 rounded-full bg-cyan-100"
            style={{ left: TIMELINE_X }}
            initial={{ top: '1.25rem', opacity: 0 }}
            animate={
              isInView
                ? { top: 'calc(100% - 1.25rem)', opacity: [0, 1, 1, 0.35] }
                : { top: '1.25rem', opacity: 0 }
            }
            transition={{ duration: FLOW_DURATION, ease: easeOut }}
            aria-hidden
          />
        </>
      )}

      {reduceMotion && (
        <div
          className="process-timeline-track process-timeline-track--live absolute top-5 bottom-5 w-px -translate-x-1/2 rounded-full"
          style={{ left: TIMELINE_X }}
          aria-hidden
        />
      )}

      {STEPS.map((step, index) => {
        const isActive = activeIndex >= index

        return (
          <li
            key={step.num}
            className={`relative flex gap-4 ${index < STEPS.length - 1 ? 'pb-8 sm:pb-9' : ''}`}
          >
            <motion.span
              className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-bold tracking-wide text-white"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: isActive ? 1 : 0.88,
                      opacity: isActive ? 1 : 0.45,
                      boxShadow: isActive
                        ? '0 0 0 4px rgb(56 189 248 / 0.25), 0 8px 22px rgb(14 165 233 / 0.45)'
                        : '0 0 0 0 rgb(56 189 248 / 0), 0 4px 12px rgb(14 165 233 / 0.15)',
                    }
              }
              transition={{ duration: 0.35, ease: easeOut }}
            >
              {step.num}
            </motion.span>
            <motion.div
              className="min-w-0 flex-1 pt-1.5"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: isActive ? 1 : 0.35,
                      x: isActive ? 0 : -8,
                    }
              }
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <h3 className="text-base font-bold text-white sm:text-lg">{step.title}</h3>
              <p className="mt-1 text-sm leading-snug text-sky-200/75 sm:text-[15px]">
                {step.description}
              </p>
            </motion.div>
          </li>
        )
      })}
    </ol>
  )
}

function ProcessVisual({ placement }: { placement: 'bleed' | 'stacked' }) {
  const reduceMotion = useReducedMotion()
  const VisualTag = reduceMotion ? 'div' : motion.div
  const isBleed = placement === 'bleed'

  return (
    <VisualTag
      {...(!reduceMotion && {
        initial: { opacity: 0, x: isBleed ? 48 : 24 },
        whileInView: { opacity: 1, x: 0 },
        viewport: viewportOnce,
        transition: { duration: 0.65, ease: easeOut },
      })}
      className={
        isBleed
          ? 'pointer-events-none absolute inset-y-0 right-0 left-[34%] overflow-hidden xl:left-[32%]'
          : 'relative min-h-[280px] overflow-hidden rounded-xl sm:min-h-[340px]'
      }
      aria-hidden={isBleed}
    >
      <img
        src={processVisualSrc}
        alt={isBleed ? '' : 'Công trình xây dựng'}
        className={
          isBleed
            ? 'absolute inset-0 h-full w-full object-cover object-[58%_center] [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.45)_8%,black_22%,black_100%)]'
            : 'absolute inset-0 h-full w-full object-cover object-center [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.35)_6%,black_20%,black_100%)]'
        }
        width={800}
        height={600}
        decoding="async"
      />
      <div
        className={
          isBleed
            ? 'absolute inset-0 bg-linear-to-r from-brand-navy from-0% via-brand-navy/70 via-[24%] to-brand-navy/5 to-[52%]'
            : 'absolute inset-0 bg-linear-to-r from-brand-navy/90 from-0% via-brand-navy/40 via-[35%] to-transparent to-[70%]'
        }
        aria-hidden
      />
      {isBleed ? (
        <div className="process-visual-blend pointer-events-none absolute inset-y-0 left-0 z-10" aria-hidden />
      ) : null}
      <div className="absolute inset-0 bg-sky-950/25 mix-blend-multiply" aria-hidden />
      <p
        className={
          isBleed
            ? 'absolute right-8 bottom-10 text-right text-lg font-bold tracking-[0.22em] text-sky-200/90 uppercase sm:text-xl lg:right-12'
            : 'absolute right-4 bottom-6 text-right text-sm font-bold tracking-[0.18em] text-sky-200/90 uppercase'
        }
      >
        Better
        <br />
        Data
        <br />
        Better
        <br />
        Buildings
      </p>
    </VisualTag>
  )
}

export function ProcessSection() {
  return (
    <section className="relative overflow-x-hidden bg-brand-navy text-white lg:min-h-[520px]">
      <div className="hidden lg:block">
        <ProcessVisual placement="bleed" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 xl:gap-x-12">
          <Reveal className="lg:col-span-5 xl:col-span-4" variant="fadeRight">
            <div className="mb-3 h-1 w-10 rounded-full bg-brand-red" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Quy trình đơn giản
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.35rem]">
              Hợp với cách làm việc tại Việt Nam
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              Triển khai nhanh, dễ sử dụng, phù hợp với mọi quy mô dự án.
            </p>
            <button type="button" className="btn-glass-outline mt-8 sm:mt-9">
              Xem chi tiết quy trình
              <ArrowRightIcon />
            </button>
          </Reveal>

          <Reveal
            className="lg:col-span-5 lg:col-start-6 xl:col-span-4 xl:col-start-6"
            variant="fadeUp"
            delay={0.08}
          >
            <ProcessSteps />
          </Reveal>
        </div>

        <Reveal className="mt-10 lg:hidden" variant="fadeUp" delay={0.1}>
          <ProcessVisual placement="stacked" />
        </Reveal>
      </div>
    </section>
  )
}
