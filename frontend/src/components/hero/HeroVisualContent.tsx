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
          <h1 className="mt-3 max-w-[14ch] text-[clamp(2rem,8vw+0.75rem,6.25rem)] font-bold leading-[1.02] tracking-tight sm:mt-4 sm:max-w-none sm:leading-none">
            CDE BIM Codexa
          </h1>
        </MotionEnterItem>
        <MotionEnterItem>
          <p className="mt-3 max-w-xl text-lg leading-snug text-white/90 sm:text-xl lg:text-2xl">
            Kết nối dự án, tài liệu và con người trên một nền tảng duy nhất.
          </p>
        </MotionEnterItem>
        <MotionEnterItem>
          <div className="mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-7 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <button type="button" className="btn-primary btn-hover-fx w-full sm:w-auto">
              Dùng thử miễn phí
              <ArrowRightIcon />
            </button>
            <button type="button" className="btn-video btn-hover-fx w-full sm:w-auto">
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
