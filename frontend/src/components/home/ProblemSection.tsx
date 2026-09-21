import { Reveal, Stagger, StaggerItem } from '../motion'

const FEATURES = [
  'Tài liệu luôn được cập nhật',
  'Kết nối đa bên liên quan',
  'Kiểm soát phiên bản chặt chẽ',
  'Dễ dàng tìm kiếm và chia sẻ',
] as const

const FOLDERS = [
  { name: 'Documents', count: '1,248', unit: 'files', tone: 'bg-sky-500' },
  { name: 'Drawings', count: '320', unit: 'files', tone: 'bg-blue-600' },
  { name: 'BIM Models', count: '86', unit: 'files', tone: 'bg-indigo-500' },
  { name: 'Issues', count: '24', unit: 'items', tone: 'bg-orange-500' },
  { name: 'RFI', count: '16', unit: 'items', tone: 'bg-emerald-500' },
] as const

const visualSrc = new URL('../../assets/HeroVisual.png', import.meta.url).href

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" className="size-3" aria-hidden fill="none">
      <path
        d="M2.5 6.2 5 8.7 9.5 3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" aria-hidden fill="none">
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

function FolderRow({
  name,
  count,
  unit,
  tone,
}: (typeof FOLDERS)[number]) {
  return (
    <li className="flex items-center gap-3 border-b border-neutral-100 py-3 last:border-0">
      <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${tone}`}>
        <svg viewBox="0 0 24 24" className="size-5 fill-white/95" aria-hidden>
          <path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" />
        </svg>
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-neutral-800">{name}</p>
        <p className="text-xs text-neutral-500">
          {count} {unit}
        </p>
      </div>
    </li>
  )
}

function ProblemSectionVisual() {
  return (
    <div className="relative mx-auto min-h-[420px] w-full max-w-xl lg:max-w-none lg:min-h-[480px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2394b4d4' stroke-width='0.6'%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px',
        }}
      />

      <img
        src={visualSrc}
        alt=""
        className="absolute left-[18%] top-6 h-[78%] w-[38%] rounded-lg object-cover object-center opacity-90 shadow-lg"
        width={280}
        height={420}
        decoding="async"
      />

      <div className="absolute left-0 top-[12%] z-10 w-[min(100%,17.5rem)] rounded-2xl bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:w-72">
        <ul>{FOLDERS.map((folder) => <FolderRow key={folder.name} {...folder} />)}</ul>
      </div>

      <div className="absolute bottom-4 right-0 z-20 w-[min(100%,14rem)] sm:w-56">
        <div className="overflow-hidden rounded-2xl border-4 border-white shadow-[0_20px_44px_rgba(15,23,42,0.18)]">
          <img
            src={visualSrc}
            alt="Công trường thi công"
            className="aspect-4/3 w-full object-cover object-[70%_40%]"
            width={224}
            height={168}
            decoding="async"
          />
        </div>

        <div className="absolute -top-10 right-2 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 shadow-[0_12px_28px_rgba(15,23,42,0.14)] sm:-top-12 sm:right-0">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
            TA
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-neutral-800">Cập nhật mới</p>
            <p className="text-[11px] text-neutral-500">v2.1 · 12/06/2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
        <Reveal className="max-w-xl" variant="fadeRight">
          <div className="mb-3 h-1 w-10 rounded-full bg-brand-red" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
            Vấn đề
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-[2.5rem]">
            Thông tin dự án không còn thất lạc
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500 sm:text-lg">
            Quản lý tập trung, minh bạch và dễ dàng truy cập cho toàn bộ thành viên dự án.
          </p>
          <Stagger className="mt-8 space-y-4">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <CheckIcon />
                  </span>
                  <span className="text-[15px] font-medium text-neutral-700 sm:text-base">
                    {feature}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <button
            type="button"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:border-neutral-400 hover:bg-neutral-50"
          >
            Khám phá giải pháp
            <ArrowRightIcon />
          </button>
        </Reveal>

        <Reveal variant="fadeLeft" delay={0.12}>
          <ProblemSectionVisual />
        </Reveal>
      </div>
    </section>
  )
}
