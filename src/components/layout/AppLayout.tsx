import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { TopBar } from './TopBar'

export function AppLayout() {
  return (
    <div className="min-h-dvh bg-ink-950 text-white">
      <div className="sticky top-0 z-50">
        <TopBar />
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

