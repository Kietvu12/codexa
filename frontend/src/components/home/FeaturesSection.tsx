import { Reveal, Stagger, StaggerItem } from '../motion'

const FEATURES = [
  {
    title: 'Kho tài liệu tập trung',
    description: 'Lưu trữ và quản lý mọi loại tài liệu dự án trên một nền tảng duy nhất.',
    icon: 'folder',
  },
  {
    title: 'Cộng tác dễ dàng',
    description: 'Kết nối tất cả các bên liên quan trong dự án.',
    icon: 'collaboration',
  },
  {
    title: 'Xem mô hình BIM',
    description: 'Hỗ trợ xem và quản lý mô hình trực tiếp trên trình duyệt.',
    icon: 'bim',
  },
  {
    title: 'Theo dõi tiến độ',
    description: 'Cập nhật và giám sát tiến độ dự án theo thời gian thực.',
    icon: 'progress',
  },
  {
    title: 'Kiểm soát chặt chẽ',
    description: 'Phân quyền, nhật ký hoạt động và quản lý phiên bản.',
    icon: 'shield',
  },
  {
    title: 'Linh hoạt tùy chỉnh',
    description: 'Đáp ứng nhu cầu của từng doanh nghiệp.',
    icon: 'grid',
  },
] as const

function FeatureIcon({ name }: { name: (typeof FEATURES)[number]['icon'] }) {
  const className = 'size-6 stroke-sky-600'
  const props = { className, fill: 'none' as const, 'aria-hidden': true }

  switch (name) {
    case 'folder':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path
            d="M4 8V6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'collaboration':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="9" cy="8" r="3" strokeWidth="1.75" />
          <path d="M4 19v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M16 4.5a3 3 0 0 1 0 5.5M19 19v-1a2.5 2.5 0 0 0-2-2.45" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      )
    case 'bim':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path
            d="M12 4 20 8.5v7L12 20 4 15.5v-7L12 4Z"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M12 4v16M4 8.5l8 4.5 8-4.5" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      )
    case 'progress':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="12" r="8" strokeWidth="1.75" />
          <path d="M12 8v4l3 2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path
            d="M12 3 19 6v6c0 4.5-3.2 7.8-7 9-3.8-1.2-7-4.5-7-9V6l7-3Z"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="m9 12 2 2 4-4.5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'grid':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="4" y="4" width="6" height="6" rx="1.25" strokeWidth="1.75" />
          <rect x="14" y="4" width="6" height="6" rx="1.25" strokeWidth="1.75" />
          <rect x="4" y="14" width="6" height="6" rx="1.25" strokeWidth="1.75" />
          <rect x="14" y="14" width="6" height="6" rx="1.25" strokeWidth="1.75" />
        </svg>
      )
    default:
      return null
  }
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: (typeof FEATURES)[number]['icon']
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] sm:p-7">
      <div className="flex size-12 items-center justify-center rounded-xl bg-sky-100">
        <FeatureIcon name={icon} />
      </div>
      <h3 className="mt-5 text-lg font-bold leading-snug text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-[15px]">{description}</p>
    </article>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-neutral-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-3xl" variant="fadeUp">
          <div className="mb-3 h-1 w-10 rounded-full bg-brand-red" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
            Tính năng
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-[2.35rem]">
            Các nhóm tính năng của Codexa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500 sm:text-lg">
            Một nền tảng toàn diện phục vụ mọi giai đoạn của dự án, từ thiết kế, thi công đến vận
            hành.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <FeatureCard {...feature} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
