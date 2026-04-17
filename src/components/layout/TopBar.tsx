import { Container } from './Container'

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] opacity-90">
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.23.2 2.42.57 3.56a1 1 0 0 1-.25 1.01l-2.2 2.22Z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] opacity-90">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.24-7.4 4.63a2 2 0 0 1-2.12 0L4 8.24V6l7.88 4.93a.5.5 0 0 0 .52 0L20 6v2.24Z"
      />
    </svg>
  )
}

export function TopBar() {
  return (
    <div className="border-b border-white/10 bg-ink-950/95 text-white backdrop-blur supports-[backdrop-filter]:bg-ink-950/80">
      <Container className="flex flex-col gap-2.5 py-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-3.5">
        <div className="flex items-center justify-center gap-2.5 sm:justify-start">
          <PhoneIcon />
          <span className="font-semibold tracking-wide text-white/95">(31) 0000-0000</span>
        </div>
        <div className="flex items-center justify-center gap-2.5 sm:justify-end">
          <MailIcon />
          <span className="font-semibold tracking-wide text-white/95">novainfinity@gmail.com</span>
        </div>
      </Container>
    </div>
  )
}

