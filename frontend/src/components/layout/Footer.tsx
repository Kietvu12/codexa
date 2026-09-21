import {
  CONTACT,
  MAIN_NAV,
  SOLUTION_LINKS,
  SOCIAL_LINKS,
} from '../../constants/site'
import { Reveal, Stagger, StaggerItem } from '../motion'
import { Logo } from './Logo'

function SocialIcon({ label }: { label: string }) {
  if (label === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    )
  }
  if (label === 'YouTube') {
    return (
      <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
        <path d="M21.58 7.2a2.72 2.72 0 0 0-1.91-1.92C18.25 4.8 12 4.8 12 4.8s-6.25 0-7.67.48a2.72 2.72 0 0 0-1.91 1.92A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .42 4.8 2.72 2.72 0 0 0 1.91 1.92c1.42.48 7.67.48 7.67.48s6.25 0 7.67-.48a2.72 2.72 0 0 0 1.91-1.92A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.42-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
      <path d="M13.5 9.5V7.7c0-.8.5-1 1-.1 0 0 2.8 1.3 4.8 3.8v-3.3h3.5v9.5h-3.5v-1.2c-1.2 1.9-3.5 3.2-5.8 3.2-2.4 0-4.5-1.8-4.5-4.5s2.1-4.8 4.5-4.8c.7 0 1.5.2 2 .5zm-1 4.8c0 1.2.9 2 2 2s2-.8 2-2-.9-2-2-2-2 .8-2 2zM2 12C2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10S2 17.5 2 12z" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white">
      <Reveal className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-14" variant="fadeUp">
        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <StaggerItem className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Logo className="h-12 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              Kết nối dữ liệu, kiến tạo giá trị bền vững cho ngành xây dựng Việt Nam.
            </p>
            <div className="flex gap-2 pt-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-red"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem>
            <h2 className="mb-4 text-base font-semibold">Liên kết</h2>
            <ul className="space-y-2.5 text-sm text-white/75">
              {MAIN_NAV.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h2 className="mb-4 text-base font-semibold">Giải pháp</h2>
            <ul className="space-y-2.5 text-sm text-white/75">
              {SOLUTION_LINKS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h2 className="mb-4 text-base font-semibold">Liên hệ</h2>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-2">
                <span className="mt-0.5 text-white/50" aria-hidden>
                  ✉
                </span>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-white/50" aria-hidden>
                  ☎
                </span>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-white/50" aria-hidden>
                  ⌖
                </span>
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </StaggerItem>
        </Stagger>
      </Reveal>

      <Reveal variant="fadeIn" delay={0.08}>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>© {year} Codexa.vn. All rights reserved.</p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            <a href="#" className="hover:text-white/80">
              Điều khoản sử dụng
            </a>
            <span aria-hidden>|</span>
            <a href="#" className="hover:text-white/80">
              Chính sách bảo mật
            </a>
          </p>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
