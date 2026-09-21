import { easeOut, motion, useReducedMotion } from 'motion/react'
import { Reveal } from '../motion'

const ctaBackgroundSrc = new URL(
  '../../assets/ChatGPT Image Sep 21, 2026, 11_18_53 AM.png',
  import.meta.url,
).href

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
          className="absolute inset-0 h-full w-full object-cover object-[22%_center] sm:object-[28%_center] lg:object-[32%_center]"
          width={1920}
          height={1080}
          decoding="async"
        />
      ) : (
        <motion.img
          src={ctaBackgroundSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[22%_center] sm:object-[28%_center] lg:object-[32%_center]"
          width={1920}
          height={1080}
          decoding="async"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 1.1, ease: easeOut }}
        />
      )}
      <div
        className="absolute inset-0 bg-linear-to-r from-brand-navy/75 from-0% via-brand-navy/35 via-45% to-transparent to-85%"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-16">
        <Reveal
          className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-8"
          variant="fadeUp"
        >
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <div className="mb-3 h-1 w-10 rounded-full bg-brand-red" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Bắt đầu ngay hôm nay
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.35rem]">
              Đưa dự án của bạn lên
              <br />
              Codexa
            </h2>
          </div>

          <p
            className="pointer-events-none hidden text-right text-[11px] leading-relaxed font-semibold tracking-[0.28em] text-white/55 uppercase lg:col-start-2 lg:row-start-1 lg:block lg:justify-self-end lg:self-start"
            aria-hidden
          >
            Construction
            <br />
            Data
            <br />
            Exchange
          </p>

          <p className="text-base text-white/75 sm:text-lg lg:col-start-1 lg:row-start-2 lg:max-w-md lg:self-center">
            Trải nghiệm miễn phí 14 ngày. Không cần thẻ tín dụng.
          </p>

          <div className="flex shrink-0 flex-col gap-3 self-end min-[420px]:flex-row min-[420px]:flex-nowrap min-[420px]:items-center min-[420px]:gap-4 lg:col-start-2 lg:row-start-2 lg:justify-self-end lg:self-center">
            <button
              type="button"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-red px-6 text-[15px] font-semibold whitespace-nowrap text-white shadow-[0_4px_18px_rgba(239,35,60,0.45)] transition-colors hover:bg-brand-red-hover sm:px-7"
            >
              Dùng thử miễn phí
              <ArrowRightIcon />
            </button>
            <button
              type="button"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-white/70 px-6 text-[15px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-white/10 sm:px-7"
            >
              Liên hệ tư vấn
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
