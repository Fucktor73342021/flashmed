import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Lock, FileText, CheckCircle, Phone, Mail, MapPin, Twitter } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const trustItems = [
  { icon: Shield, title: 'Licensed Partner Pharmacies', desc: 'Every pharmacy is verified, licensed, and regularly audited for compliance with the Drugs and Cosmetics Act, 1940.' },
  { icon: Lock, title: 'Secure Prescription Fulfillment', desc: 'End-to-end encryption for prescription uploads. Patient data is handled under strict privacy protocols.' },
  { icon: FileText, title: 'Transparent Marketplace Policies', desc: 'Clear pricing, fair commission structures, and no hidden fees. Every transaction is documented and auditable.' },
  { icon: CheckCircle, title: 'Healthcare Standards Verified', desc: 'All partners meet national healthcare compliance standards. Continuous monitoring ensures quality maintenance.' },
]

export default function TrustAndContact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Trust cards pop from Z-depth
    const trustCards = section.querySelectorAll('.trust-card')
    trustCards.forEach((card, i) => {
      gsap.fromTo(card, { opacity: 0, scale: 0.6, z: -500, rotateY: i % 2 === 0 ? 20 : -20 },
        { opacity: 1, scale: 1, z: 0, rotateY: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }, delay: i * 0.1 })
    })

    // Contact cards slide up from deep
    const contacts = section.querySelectorAll('.contact-card')
    contacts.forEach((card, i) => {
      gsap.fromTo(card, { opacity: 0, y: 60, z: -300, rotateX: 10 },
        { opacity: 1, y: 0, z: 0, rotateX: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }, delay: i * 0.1 })
    })

    // Policy links
    const links = section.querySelectorAll('.policy-link')
    links.forEach((link, i) => {
      gsap.fromTo(link, { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: link, start: 'top 92%', toggleActions: 'play none none none' }, delay: i * 0.08 })
    })

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()) }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 lg:py-36" style={{ background: 'var(--bg-secondary)', perspective: '1200px' }}>
      <div className="max-w-[1200px] mx-auto px-8" style={{ transformStyle: 'preserve-3d' }}>
        <div className="text-center mb-16">
          <span className="tc-reveal section-caption block mb-3">Trust & Compliance</span>
          <h2 className="tc-reveal text-4xl lg:text-[56px] font-extrabold tracking-[-2px] mb-4" style={{ color: 'var(--text-primary)' }}>Built on Trust, Verified by Standards</h2>
          <p className="tc-reveal text-lg" style={{ color: 'var(--text-secondary)' }}>Every layer of FlashMed is designed with compliance, security, and transparency at its core.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20" style={{ transformStyle: 'preserve-3d' }}>
          {trustItems.map((item, i) => (
            <div key={i} className="trust-card glass p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,82,212,0.12)] hover:-translate-y-4 group cursor-default" style={{ transformStyle: 'preserve-3d' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110" style={{ background: 'var(--accent-glow)' }}>
                <item.icon className="w-6 h-6" style={{ color: 'var(--accent)' }} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a href="/privacy-policy.html" className="policy-link glass px-6 py-3 text-sm font-semibold hover:bg-white/80 hover:-translate-y-1 hover:shadow-md transition-all duration-300" style={{ color: 'var(--text-primary)', borderRadius: 16 }}>Privacy Policy</a>
          <a href="/payment-policy.html" className="policy-link glass px-6 py-3 text-sm font-semibold hover:bg-white/80 hover:-translate-y-1 hover:shadow-md transition-all duration-300" style={{ color: 'var(--text-primary)', borderRadius: 16 }}>Payment, Refund & Cancellation</a>
          <a href="/terms" className="policy-link glass px-6 py-3 text-sm font-semibold hover:bg-white/80 hover:-translate-y-1 hover:shadow-md transition-all duration-300" style={{ color: 'var(--text-primary)', borderRadius: 16 }}>Terms & Conditions</a>
        </div>

        <div className="text-center mb-14">
          <h2 className="tc-reveal text-4xl lg:text-[56px] font-extrabold tracking-[-2px] mb-4" style={{ color: 'var(--text-primary)' }}>Get in Touch</h2>
          <p className="tc-reveal text-lg" style={{ color: 'var(--text-secondary)' }}>We're here to help — 24 hours a day, 7 days a week</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 max-w-[800px] mx-auto" style={{ transformStyle: 'preserve-3d' }}>
          <div className="contact-card glass p-7 flex items-start gap-5 hover:shadow-[0_20px_50px_rgba(0,82,212,0.12)] hover:-translate-y-3 transition-all duration-400 group">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110" style={{ background: 'var(--accent-glow)' }}>
              <Phone className="w-7 h-7" style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <p className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>+91 9242545884</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>24/7 Support</p>
            </div>
          </div>
          <div className="contact-card glass p-7 flex items-start gap-5 hover:shadow-[0_20px_50px_rgba(0,82,212,0.12)] hover:-translate-y-3 transition-all duration-400 group">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110" style={{ background: 'var(--accent-glow)' }}>
              <Mail className="w-7 h-7" style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <p className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>support@flashmed.in</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>For inquiries & support</p>
            </div>
          </div>
        </div>

        <div className="contact-card glass p-7 flex items-start gap-5 mb-10 max-w-[800px] mx-auto hover:shadow-[0_20px_50px_rgba(0,82,212,0.12)] hover:-translate-y-3 transition-all duration-400 group">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110" style={{ background: 'var(--accent-glow)' }}>
            <MapPin className="w-7 h-7" style={{ color: 'var(--accent)' }} />
          </div>
          <div>
            <p className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>Ratanpur, Dhuliyan, Murshidabad, 742202</p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>West Bengal, India</p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://x.com/nahid_hasan7334" target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass flex items-center justify-center transition-all duration-300 hover:bg-[var(--accent)] hover:text-white hover:scale-110 hover:shadow-[0_8px_24px_var(--accent-glow)] group" style={{ borderRadius: 16 }}>
            <Twitter className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} />
          </a>
          <a href="mailto:support@flashmed.in" className="w-14 h-14 glass flex items-center justify-center transition-all duration-300 hover:bg-[var(--accent)] hover:text-white hover:scale-110 hover:shadow-[0_8px_24px_var(--accent-glow)] group" style={{ borderRadius: 16 }}>
            <Mail className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} />
          </a>
        </div>
      </div>
    </section>
  )
}
