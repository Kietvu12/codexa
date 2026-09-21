const logoSrc = new URL(
  '../../assets/Gemini_Generated_Image_x1jq4rx1jq4rx1jq-Picsart-BackgroundRemover.png',
  import.meta.url,
).href

type LogoProps = {
  className?: string
}

export function Logo({ className = 'h-11 w-auto lg:h-12' }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="Codexa.vn — Construction Data Exchange"
      className={className}
      width={220}
      height={48}
      decoding="async"
    />
  )
}
