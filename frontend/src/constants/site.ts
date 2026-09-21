export const MAIN_NAV = [
  { id: 'trang-chu', label: 'Trang chủ', href: '#' },
  { id: 'gioi-thieu', label: 'Giới thiệu', href: '#gioi-thieu' },
  { id: 'tin-tuc', label: 'Tin tức', href: '#tin-tuc' },
  { id: 'cac-goi', label: 'Các gói', href: '#cac-goi' },
  { id: 'lien-he', label: 'Liên hệ', href: '#lien-he' },
] as const

export type MainNavId = (typeof MAIN_NAV)[number]['id']

export const SOLUTION_LINKS = [
  { label: 'Quản lý tài liệu', href: '#' },
  { label: 'Cộng tác dự án', href: '#' },
  { label: 'Xem mô hình BIM', href: '#' },
  { label: 'Kiểm soát tiến độ', href: '#' },
  { label: 'Bảo mật dữ liệu', href: '#' },
] as const

export const CONTACT = {
  email: 'info@codexa.vn',
  phone: '+84 28 7300 1234',
  address: 'Hà Nội, Việt Nam',
} as const

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Facebook', href: '#' },
] as const
