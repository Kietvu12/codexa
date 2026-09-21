import { easeOut, motion, useReducedMotion } from 'motion/react'
import { Reveal } from '../motion'

const ctaBackgroundSrc = new URL('../../assets/HeroVisual.png', import.meta.url).href

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

export function CtaSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {reduceMotion ? (
        <img
          src={ctaBackgroundSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[80%_30%] opacity-25"
          width={1920}
          height={1080}
          decoding="async"
        />
      ) : (
        <motion.img
          src={ctaBackgroundSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[80%_30%] opacity-25"
          width={1920}
          height={1080}
          decoding="async"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: easeOut }}
        />
      )}
      <div
        className="absolute inset-0 bg-linear-to-r from-brand-navy via-brand-navy/92 to-brand-navy/75"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <Reveal className="max-w-xl" variant="fadeRight">
            <div className="mb-3 h-1 w-10 rounded-full bg-brand-red" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Bắt đầu ngay hôm nay
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.35rem]">
              Đưa dự án của bạn lên Codexa
            </h2>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              Trải nghiệm miễn phí 14 ngày. Không cần thẻ tín dụng.
            </p>
          </Reveal>

          <Reveal
            className="flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-4 lg:shrink-0"
            variant="fadeLeft"
            delay={0.12}
          >
            <button
              type="button"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-red px-6 text-[15px] font-semibold text-white shadow-[0_4px_18px_rgba(239,35,60,0.45)] transition-colors hover:bg-brand-red-hover sm:px-7"
            >
              Dùng thử miễn phí
              <ArrowRightIcon />
            </button>
            <button
              type="button"
              className="inline-flex h-12 items-center rounded-full border border-white/70 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white/10 sm:px-7"
            >
              Liên hệ tư vấn
            </button>
          </Reveal>
        </div>

        <Reveal
          className="pointer-events-none mt-10 hidden text-right text-[11px] font-semibold tracking-[0.28em] text-white/55 uppercase lg:absolute lg:top-14 lg:right-10 lg:mt-0 lg:block"
          variant="fadeIn"
          delay={0.2}
        >
          Construction
          <br />
          Data
          <br />
          Exchange
        </Reveal>
      </div>
    </section>
  )
}
