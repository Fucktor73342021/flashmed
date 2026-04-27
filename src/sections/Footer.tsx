export default function Footer() {
  return (
    <footer className="relative py-14 border-t border-white/50" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col items-center text-center">
          <a href="/" className="flex items-center gap-3 mb-4 group">
            <img src="/logo.png" alt="FlashMed" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
            <span className="text-2xl font-extrabold" style={{ color: 'var(--text-primary)' }}>FlashMed</span>
          </a>
          <p className="text-base mb-2" style={{ color: 'var(--text-secondary)' }}>India's Hyperlocal Healthcare Infrastructure</p>
          <a href="mailto:support@flashmed.in" className="text-sm font-semibold mb-6 transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>support@flashmed.in</a>
          <div className="flex gap-8 text-sm" style={{ color: 'var(--text-muted)' }}>
            <a href="/privacy-policy.html" className="transition-colors hover:text-[var(--accent)] relative group">Privacy<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent)] transition-all group-hover:w-full" /></a>
            <a href="/payment-policy.html" className="transition-colors hover:text-[var(--accent)] relative group">Payments<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent)] transition-all group-hover:w-full" /></a>
            <a href="/terms" className="transition-colors hover:text-[var(--accent)] relative group">Terms<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent)] transition-all group-hover:w-full" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
