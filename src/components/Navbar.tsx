import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Platform', href: '#hero' },
  { label: 'Network', href: '#marketplace' },
  { label: 'Logistics', href: '#logistics' },
  { label: 'Partners', href: '#partners' },
  { label: 'Vision', href: '#founder' },
  { label: 'Roadmap', href: '#roadmap' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(216,240,255,0.85)] backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,82,212,0.1)]'
          : 'bg-transparent'
      }`}
      style={{ height: 76 }}
    >
      <div className="max-w-[1400px] mx-auto px-8 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="FlashMed"
            className="h-[42px] w-auto transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            FlashMed
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => handleNav(e, link.href)} className="nav-link-new">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button className="btn-outline text-sm py-3 px-6" onClick={() => document.querySelector('#marketplace')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Platform
          </button>
          <button className="btn-gradient text-sm py-3 px-6" onClick={() => document.querySelector('#partners')?.scrollIntoView({ behavior: 'smooth' })}>
            Partner Pharmacy
          </button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass-strong mx-4 mt-2 p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={(e) => handleNav(e, link.href)} className="text-lg font-semibold py-2" style={{ color: 'var(--text-secondary)' }}>
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4 border-t border-white/50">
              <a href="/payment-policy.html" className="btn-gradient text-sm flex-1 text-center">Payments</a>
              <a href="/privacy-policy.html" className="btn-outline text-sm flex-1 text-center">Privacy</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
