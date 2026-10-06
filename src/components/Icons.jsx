const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
})

export const ArrowRight = ({ size }) => (
  <svg {...base(size)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
export const Play = ({ size }) => (
  <svg {...base(size)}>
    <path d="M8 5l11 7-11 7z" />
  </svg>
)
export const ChevronLeft = ({ size }) => (
  <svg {...base(size)}>
    <path d="M15 6l-6 6 6 6" />
  </svg>
)
export const ChevronRight = ({ size }) => (
  <svg {...base(size)}>
    <path d="M9 6l6 6-6 6" />
  </svg>
)
export const Calendar = ({ size }) => (
  <svg {...base(size)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 11h18" />
  </svg>
)
export const Clock = ({ size }) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)
export const Star = ({ size }) => (
  <svg {...base(size)} fill="currentColor" stroke="none">
    <path d="M12 2l3 6.9 7.5.6-5.7 4.9 1.8 7.3L12 17.8 5.4 21.7l1.8-7.3L1.5 9.5 9 8.9z" />
  </svg>
)
export const MenuIcon = ({ size }) => (
  <svg {...base(size)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)
export const CloseIcon = ({ size }) => (
  <svg {...base(size)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)
export const Facebook = ({ size }) => (
  <svg {...base(size)}>
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8z" />
  </svg>
)
export const Twitter = ({ size }) => (
  <svg {...base(size)}>
    <path d="M23 3a10.9 10.9 0 0 1-3.1 1.5 4.5 4.5 0 0 0-7.9 3v1A10.7 10.7 0 0 1 3 4s-4 9 5 13a11.6 11.6 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.1-.8A7.7 7.7 0 0 0 23 3z" />
  </svg>
)
export const Linkedin = ({ size }) => (
  <svg {...base(size)}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
)
export const Instagram = ({ size }) => (
  <svg {...base(size)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".6" />
  </svg>
)
export const Mail = ({ size }) => (
  <svg {...base(size)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)
export const Phone = ({ size }) => (
  <svg {...base(size)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
)
export const Pin = ({ size }) => (
  <svg {...base(size)}>
    <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)

export const LogoMark = ({ size = 34 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ff7a2f" />
        <stop offset=".5" stopColor="#ec4899" />
        <stop offset="1" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="15" fill="none" stroke="url(#logo-grad)" strokeWidth="6" />
    <circle cx="20" cy="20" r="5" fill="url(#logo-grad)" />
  </svg>
)

const sv = {
  width: 44,
  height: 44,
  viewBox: '0 0 48 48',
  fill: 'none',
  strokeWidth: 2.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

const serviceIcons = {
  phone: (
    <svg {...sv}>
      <rect x="6" y="6" width="36" height="36" rx="10" fill="#ffedd5" stroke="#f97316" />
      <g transform="translate(12 12)">
        <path
          d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"
          stroke="#c2410c"
        />
      </g>
    </svg>
  ),
  shield: (
    <svg {...sv}>
      <path d="M24 5l15 6v11c0 9-6.5 16-15 20-8.5-4-15-11-15-20V11z" fill="#dbeafe" stroke="#3b82f6" />
      <path d="M17 24l5 5 9-10" stroke="#2563eb" />
    </svg>
  ),
  seo: (
    <svg {...sv}>
      <text x="2" y="40" fontSize="17" fontWeight="800" fill="#141b34" stroke="none" fontFamily="Arial, sans-serif">
        SEO
      </text>
      <path d="M6 20l10-8 8 6 14-12" stroke="#f59e0b" />
      <path d="M30 6h8v8" stroke="#f59e0b" />
    </svg>
  ),
  web: (
    <svg {...sv}>
      <rect x="5" y="9" width="38" height="30" rx="4" fill="#dbeafe" stroke="#3b82f6" />
      <path d="M5 17h38" stroke="#3b82f6" />
      <path d="M20 24l-5 4 5 4M28 24l5 4-5 4" stroke="#2563eb" />
    </svg>
  ),
  content: (
    <svg {...sv}>
      <rect x="9" y="6" width="26" height="36" rx="3" fill="#ede9fe" stroke="#8b5cf6" />
      <path d="M15 16h14M15 23h14M15 30h8" stroke="#8b5cf6" />
      <circle cx="37" cy="14" r="6" fill="#fde68a" stroke="#f59e0b" />
    </svg>
  ),
  ppc: (
    <svg {...sv}>
      <rect x="6" y="8" width="30" height="22" rx="3" fill="#ffedd5" stroke="#f97316" />
      <path d="M12 18h12M12 24h8" stroke="#f97316" />
      <path d="M28 26l14 6-6 2-2 6z" fill="#f97316" stroke="#c2410c" />
    </svg>
  ),
  shop: (
    <svg {...sv}>
      <circle cx="24" cy="24" r="18" fill="#dcfce7" stroke="#22c55e" />
      <path d="M14 16h4l3 12h11l3-9H19" stroke="#15803d" />
      <circle cx="22" cy="33" r="1.5" fill="#15803d" stroke="none" />
      <circle cx="31" cy="33" r="1.5" fill="#15803d" stroke="none" />
    </svg>
  ),
  social: (
    <svg {...sv}>
      <rect x="12" y="4" width="24" height="40" rx="5" fill="#fce7f3" stroke="#ec4899" />
      <path
        d="M24 31s-6-4-6-8a3.2 3.2 0 0 1 6-1.5A3.2 3.2 0 0 1 30 23c0 4-6 8-6 8z"
        fill="#ec4899"
        stroke="none"
      />
    </svg>
  ),
}

export const ServiceIcon = ({ name }) => serviceIcons[name] || null
