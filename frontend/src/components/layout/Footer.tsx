import {
  CONTACT,
  MAIN_NAV,
  SOLUTION_LINKS,
  SOCIAL_LINKS,
} from '../../constants/site'
import { Reveal, Stagger, StaggerItem } from '../motion'
import { Logo } from './Logo'

const footerIconSrc = {
  linkedin: new URL('../../assets/icon/icons8-linkedin-100.png', import.meta.url).href,
  youtube: new URL('../../assets/icon/icons8-youtube-100.png', import.meta.url).href,
  facebook: new URL('../../assets/icon/icons8-facebook-100.png', import.meta.url).href,
  email: new URL('../../assets/icon/icons8-email-96.png', import.meta.url).href,
  phone: new URL('../../assets/icon/icons8-call-100.png', import.meta.url).href,
  location: new URL('../../assets/icon/icons8-location-100.png', import.meta.url).href,
} as const

const socialIconByLabel: Record<(typeof SOCIAL_LINKS)[number]['label'], string> = {
  LinkedIn: footerIconSrc.linkedin,
  YouTube: footerIconSrc.youtube,
  Facebook: footerIconSrc.facebook,
}

function FooterIcon({ src, className = 'size-4' }: { src: string; className?: string }) {
  return (
    <img
      src={src}
      alt=""
      className={`shrink-0 object-contain ${className}`}
      width={16}
      height={16}
      decoding="async"
      aria-hidden
    />
  )
}

function FooterBrand() {
  return (
    <div className="space-y-4">
      <a href="#" className="inline-block rounded-sm outline-offset-4 focus-visible:outline-2 focus-visible:outline-white">
        <Logo className="h-12 w-auto max-w-[min(100%,14rem)] sm:max-w-[15rem]" />
      </a>
      <p className="max-w-xs text-sm leading-relaxed text-white/75">
        Kết nối dữ liệu, kiến tạo giá trị bền vững cho ngành xây dựng Việt Nam.
      </p>
      <div className="flex gap-2 pt-0.5">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="flex size-9 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-brand-red"
          >
            <FooterIcon src={socialIconByLabel[social.label]} />
          </a>
        ))}
      </div>
    </div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white">
      <Reveal className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-14" variant="fadeUp">
        <Stagger className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
          <StaggerItem>
            <FooterBrand />
          </StaggerItem>

          <StaggerItem>
            <h2 className="mb-4 text-base font-semibold text-white">Liên kết</h2>
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
            <h2 className="mb-4 text-base font-semibold text-white">Giải pháp</h2>
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
            <h2 className="mb-4 text-base font-semibold text-white">Liên hệ</h2>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-2.5">
                <FooterIcon src={footerIconSrc.email} className="mt-0.5 size-4" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <FooterIcon src={footerIconSrc.phone} className="mt-0.5 size-4" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <FooterIcon src={footerIconSrc.location} className="mt-0.5 size-4" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </StaggerItem>
        </Stagger>
      </Reveal>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>© {year} Codexa.vn. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a href="#" className="transition-colors hover:text-white/85">
              Điều khoản sử dụng
            </a>
            <span className="text-white/35" aria-hidden>
              |
            </span>
            <a href="#" className="transition-colors hover:text-white/85">
              Chính sách bảo mật
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
