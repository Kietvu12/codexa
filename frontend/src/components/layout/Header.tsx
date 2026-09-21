import { easeOut, motion, useReducedMotion } from 'motion/react'
import { MAIN_NAV, type MainNavId } from '../../constants/site'
import { Logo } from './Logo'

type HeaderProps = {
  activeNav?: MainNavId
  variant?: 'solid' | 'overlay'
}

export function Header({ activeNav = 'trang-chu', variant = 'solid' }: HeaderProps) {
  const isOverlay = variant === 'overlay'
  const reduceMotion = useReducedMotion()
  const headerClassName = isOverlay
    ? 'relative z-50 border-b border-white/10 bg-transparent text-white'
    : 'relative z-50 border-b border-white/10 bg-brand-navy text-white shadow-[0_4px_24px_rgba(0,0,0,0.25)]'

  const headerBody = (
    <>
      {!isOverlay && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
      )}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
        <a href="#" className="shrink-0 rounded-sm outline-offset-4 focus-visible:outline-2 focus-visible:outline-white">
          <Logo />
        </a>

        <nav
          className="hidden flex-1 items-center justify-center gap-8 xl:gap-10 lg:flex"
          aria-label="Menu chính"
        >
          {MAIN_NAV.map((item) => {
            const isActive = item.id === activeNav
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-2 text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'text-white after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-9 after:-translate-x-1/2 after:rounded-full after:bg-white after:content-[""]'
                    : 'text-white/85 hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="rounded-full border border-white/90 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10 sm:px-5 sm:text-sm"
          >
            Đăng nhập
          </button>
          <button
            type="button"
            className="rounded-full bg-brand-red px-3 py-2 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(239,35,60,0.45)] transition-colors hover:bg-brand-red-hover sm:px-5 sm:text-sm"
          >
            <span className="hidden sm:inline">Dùng thử miễn phí</span>
            <span className="sm:hidden">Dùng thử</span>
          </button>
        </div>
      </div>
    </>
  )

  if (reduceMotion) {
    return <header className={headerClassName}>{headerBody}</header>
  }

  return (
    <motion.header
      className={headerClassName}
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeOut }}
    >
      {headerBody}
    </motion.header>
  )
}
