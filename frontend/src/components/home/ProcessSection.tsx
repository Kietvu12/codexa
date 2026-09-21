import { easeOut, motion, useReducedMotion } from 'motion/react'
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

  return (
    <ol className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        className="absolute top-5 bottom-5 left-[1.375rem] w-px bg-sky-400/45"
        aria-hidden
      />
      {STEPS.map((step, index) => {
        const StepItem = reduceMotion ? 'li' : motion.li

        return (
          <StepItem
            key={step.num}
            {...(!reduceMotion && {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: viewportOnce,
              transition: { delay: index * 0.08, duration: 0.5, ease: easeOut },
            })}
            className={`relative flex gap-4 ${index < STEPS.length - 1 ? 'pb-8 sm:pb-9' : ''}`}
          >
            <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-bold tracking-wide text-white shadow-[0_6px_18px_rgba(14,165,233,0.35)]">
              {step.num}
            </span>
            <div className="pt-1.5">
              <h3 className="text-base font-bold text-white sm:text-lg">{step.title}</h3>
              <p className="mt-1 text-sm text-sky-200/75 sm:text-[15px]">{step.description}</p>
            </div>
          </StepItem>
        )
      })}
    </ol>
  )
}

function ProcessVisual() {
  const reduceMotion = useReducedMotion()
  const VisualTag = reduceMotion ? 'div' : motion.div

  return (
    <VisualTag
      {...(!reduceMotion && {
        initial: { opacity: 0, x: 40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: viewportOnce,
        transition: { duration: 0.65, ease: easeOut },
      })}
      className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:absolute lg:inset-y-0 lg:right-0 lg:min-h-0 lg:w-[42%] xl:w-[44%]"
    >
      <img
        src={processVisualSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={800}
        height={600}
        decoding="async"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-brand-navy from-25% via-brand-navy/55 to-brand-navy/10"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-sky-950/25 mix-blend-multiply"
        aria-hidden
      />
      <p className="absolute right-6 bottom-8 text-right text-lg font-bold tracking-[0.22em] text-sky-200/90 uppercase sm:right-10 sm:bottom-10 sm:text-xl">
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
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-12">
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
            className="lg:col-span-4 lg:col-start-6 xl:col-span-4 xl:col-start-5"
            variant="fadeUp"
            delay={0.1}
          >
            <ProcessSteps />
          </Reveal>

          <div className="hidden lg:col-span-3 lg:block" aria-hidden />
        </div>
      </div>

      <ProcessVisual />
    </section>
  )
}
