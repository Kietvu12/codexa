import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { Reveal, easeOut } from '../motion'

const FAQ_ITEMS = [
  {
    question: 'Codexa phù hợp với những ai?',
    answer:
      'Codexa phù hợp cho chủ đầu tư, tổng thầu, tư vấn thiết kế, giám sát và các bên liên quan trong dự án xây dựng cần quản lý tài liệu, BIM và phối hợp đa bên.',
  },
  {
    question: 'Triển khai có mất nhiều thời gian không?',
    answer:
      'Quy trình khởi tạo gọn, thường chỉ vài phút để tạo dự án và mời thành viên. Đội ngũ Codexa hỗ trợ triển khai nhanh theo quy mô dự án.',
  },
  {
    question: 'Dữ liệu có được bảo mật không?',
    answer:
      'Dữ liệu được lưu trữ an toàn với phân quyền chi tiết, kiểm soát phiên bản và tuân thủ các tiêu chuẩn bảo mật phù hợp cho dự án xây dựng.',
  },
  {
    question: 'Có hỗ trợ đào tạo và triển khai không?',
    answer:
      'Có. Codexa cung cấp tài liệu hướng dẫn, đào tạo và hỗ trợ triển khai để đội ngũ làm việc hiệu quả trên nền tảng.',
  },
] as const

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

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`size-5 shrink-0 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      aria-hidden
      fill="none"
    >
      <path
        d="M5 8l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-neutral-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <Reveal className="lg:col-span-5" variant="fadeRight">
          <div className="mb-3 h-1 w-10 rounded-full bg-brand-red" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
            Hỗ trợ
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl">
            Câu hỏi thường gặp về Codexa
          </h2>
          <p className="mt-4 text-base text-neutral-500 sm:text-lg">
            Một số câu hỏi phổ biến từ khách hàng.
          </p>
          <button
            type="button"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:border-neutral-400 hover:bg-neutral-50"
          >
            Xem tất cả câu hỏi
            <ArrowRightIcon />
          </button>
        </Reveal>

        <Reveal className="lg:col-span-7" variant="fadeLeft" delay={0.1}>
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index
              const panelId = `faq-panel-${index}`
              const buttonId = `faq-button-${index}`

              return (
                <div key={item.question} className="border-b border-neutral-100 last:border-0">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="text-[15px] font-semibold text-brand-navy sm:text-base">
                        {item.question}
                      </span>
                      <ChevronDownIcon open={isOpen} />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={reduceMotion ? undefined : { height: 'auto', opacity: 1 }}
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: easeOut }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-500 sm:px-6 sm:pb-6">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
