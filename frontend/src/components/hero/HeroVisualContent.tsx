import { MotionEnterItem, StaggerEnter } from '../motion'

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

export function HeroVisualContent() {
  return (
    <StaggerEnter className="w-full max-w-4xl">
        <MotionEnterItem>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-xs">
            Nền tảng CDE cho ngành xây dựng
          </p>
        </MotionEnterItem>
        <MotionEnterItem>
          <h1 className="mt-3 whitespace-nowrap text-[clamp(2.35rem,4.8vw+1.5rem,6.25rem)] font-bold leading-none tracking-tight sm:mt-4">
            CDE BIM Codexa
          </h1>
        </MotionEnterItem>
        <MotionEnterItem>
          <p className="mt-3 max-w-xl text-lg leading-snug text-white/90 sm:text-xl lg:text-2xl">
            Kết nối dự án, tài liệu và con người trên một nền tảng duy nhất.
          </p>
        </MotionEnterItem>
        <MotionEnterItem>
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-4">
            <button
              type="button"
              className="inline-flex h-(--height-hero-cta) items-center gap-2 rounded-full bg-brand-red px-6 text-[15px] font-semibold text-white shadow-[0_4px_18px_rgba(239,35,60,0.5)] transition-colors hover:bg-brand-red-hover sm:px-7"
            >
              Dùng thử miễn phí
              <ArrowRightIcon />
            </button>
            <button type="button" className="btn-video">
              <span className="btn-video__circle">
                <svg viewBox="0 0 24 24" aria-hidden>
                  <path d="M6 4l14 8-14 8V4z" />
                </svg>
              </span>
              <span>Xem video</span>
            </button>
          </div>
        </MotionEnterItem>
    </StaggerEnter>
  )
}
