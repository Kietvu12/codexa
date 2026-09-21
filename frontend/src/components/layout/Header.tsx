import { AnimatePresence, easeOut, motion, useReducedMotion } from 'motion/react'
import { useEffect, useId, useState } from 'react'
import { MAIN_NAV, type MainNavId } from '../../constants/site'
import { Logo } from './Logo'

type HeaderProps = {
  activeNav?: MainNavId
  variant?: 'solid' | 'overlay'
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden fill="none">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function NavLinks({
  activeNav,
  onNavigate,
  className,
}: {
  activeNav: MainNavId
  onNavigate?: () => void
  className?: string
}) {
  return (
    <ul className={className}>
      {MAIN_NAV.map((item) => {
        const isActive = item.id === activeNav
        return (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={onNavigate}
              className={`block py-3.5 text-base font-medium transition-colors sm:text-[15px] lg:inline-block lg:py-2 ${
                isActive
                  ? 'text-white lg:relative lg:after:absolute lg:after:bottom-0 lg:after:left-1/2 lg:after:h-0.5 lg:after:w-9 lg:after:-translate-x-1/2 lg:after:rounded-full lg:after:bg-white lg:after:content-[""]'
                  : 'text-white/85 hover:text-white'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function HeaderActions({ compact }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${compact ? 'flex-col' : 'shrink-0 sm:gap-3'}`}>
      <button
        type="button"
        className={`rounded-full border border-white/90 font-medium text-white transition-colors hover:bg-white/10 ${
          compact ? 'w-full px-5 py-3 text-sm' : 'px-3 py-2 text-xs sm:px-5 sm:text-sm'
        }`}
      >
        Đăng nhập
      </button>
      <button
        type="button"
        className={`rounded-full bg-brand-red font-semibold text-white shadow-[0_4px_14px_rgba(239,35,60,0.45)] transition-colors hover:bg-brand-red-hover ${
          compact ? 'w-full px-5 py-3 text-sm' : 'px-3 py-2 text-xs sm:px-5 sm:text-sm'
        }`}
      >
        {compact ? 'Dùng thử miễn phí' : (
          <>
            <span className="hidden sm:inline">Dùng thử miễn phí</span>
            <span className="sm:hidden">Dùng thử</span>
          </>
        )}
      </button>
    </div>
  )
}

export function Header({ activeNav = 'trang-chu', variant = 'solid' }: HeaderProps) {
  const isOverlay = variant === 'overlay'
  const reduceMotion = useReducedMotion()
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileNavId = useId()

  const headerClassName = isOverlay
    ? 'relative z-50 border-b border-white/10 bg-transparent text-white'
    : 'relative z-50 border-b border-white/10 bg-brand-navy text-white shadow-[0_4px_24px_rgba(0,0,0,0.25)]'

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  const headerBody = (
    <>
      {!isOverlay && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
      )}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-10 lg:py-4">
        <a
          href="#"
          className="shrink-0 rounded-sm outline-offset-4 focus-visible:outline-2 focus-visible:outline-white"
        >
          <Logo className="h-9 w-auto sm:h-11 lg:h-12" />
        </a>

        <nav className="hidden flex-1 items-center justify-center lg:flex" aria-label="Menu chính">
          <NavLinks
            activeNav={activeNav}
            className="flex items-center gap-8 xl:gap-10"
          />
        </nav>

        <div className="hidden items-center lg:flex">
          <HeaderActions />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="rounded-full bg-brand-red px-3 py-2 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(239,35,60,0.45)] hover:bg-brand-red-hover sm:hidden"
          >
            Dùng thử
          </button>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:bg-white/10"
            aria-expanded={mobileOpen}
            aria-controls={mobileNavId}
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-brand-navy/70 backdrop-blur-sm lg:hidden"
              aria-label="Đóng menu"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMobile}
            />
            <motion.div
              id={mobileNavId}
              role="dialog"
              aria-modal="true"
              aria-label="Menu điều hướng"
              className="fixed inset-x-0 top-0 z-50 max-h-[100dvh] overflow-y-auto border-b border-white/10 bg-brand-navy px-4 pb-8 pt-[4.25rem] shadow-2xl sm:px-6 lg:hidden"
              initial={reduceMotion ? false : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: easeOut }}
            >
              <nav aria-label="Menu chính">
                <NavLinks
                  activeNav={activeNav}
                  onNavigate={closeMobile}
                  className="divide-y divide-white/10 border-y border-white/10"
                />
              </nav>
              <div className="mt-6">
                <HeaderActions compact />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
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
