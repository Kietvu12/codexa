import type { ReactNode } from 'react'
import type { MainNavId } from '../../constants/site'
import { Footer } from './Footer'
import { Header } from './Header'

type MainLayoutProps = {
  children: ReactNode
  activeNav?: MainNavId
  /** Khi có hero (vd. HeroVisual), header nằm trong hero — không render Header riêng */
  hero?: ReactNode
}

export function MainLayout({ children, activeNav, hero }: MainLayoutProps) {
  return (
    <div className="flex min-h-svh flex-col">
      {hero ?? <Header activeNav={activeNav} />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
