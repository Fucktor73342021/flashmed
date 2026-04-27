import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Upload, Brain, CreditCard, FolderOpen } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { icon: Upload, title: 'Prescription Fulfillment', desc: 'Patients upload prescriptions via camera or gallery. Our platform instantly routes them to verified, licensed neighborhood pharmacies with available stock.', color: '#0052D4', bg: 'rgba(0,82,212,0.08)' },
  { icon: Brain, title: 'Intelligent Matching', desc: 'AI-powered pharmacy matching based on real-time inventory, proximity, pricing transparency, and fulfillment capacity.', color: '#7C3AED', bg: 'rgba(124,58,237,0.08)' },
  { icon: CreditCard, title: 'Transparent Pricing', desc: 'Real-time quotes from competing pharmacies. Patients compare and choose based on price, distance, and delivery estimate.', color: '#059669', bg: 'rgba(5,150,105,0.08)' },
  { icon: FolderOpen, title: 'Digital Health Records', desc: 'Secure, encrypted prescription history and fulfillment tracking. Full audit trail of every healthcare transaction.', color: '#D97706', bg: 'rgba(217,119,6,0.08)' },
]

export default function MarketplaceNetwork() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Title flies in from deep Z
    const titles = section.querySelectorAll('.depth-title')
    titles.forEach((t, i) => {
      gsap.fromTo(t, { opacity: 0, y: 80, scale: 0.6, rotateX: 20, z: -500 },
        { opacity: 1, y: 0, scale: 1, rotateX: 0, z: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: t, start: 'top 88%', toggleActions: 'play none none none' }, delay: i * 0.1 })
    })

    // Cards fly in from deep Z space with 3D rotation
    const cards = section.querySelectorAll('.depth-card')
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, scale: 0.35, z: -800 - i * 200, rotateY: i % 2 === 0 ? 45 : -45, x: i % 2 === 0 ? 120 : -120 },
        { opacity: 1, scale: 1, z: 0, rotateY: 0, x: 0, duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }, delay: i * 0.15 })

      // Scroll-linked subtle rotation as user scrolls past
      gsap.to(card, {
        rotateY: i % 2 === 0 ? -8 : 8,
        y: -30,
        ease: 'none',
        scrollTrigger: { trigger: card, start: 'top 60%', end: 'top 10%', scrub: 1.5 }
      })
    })

    // Inner content reveals
    const inners = section.querySelectorAll('.inner-reveal')
    inners.forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 30, rotateX: 10 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' }, delay: 0.3 + i * 0.08 })
    })

    // Decorative orbs parallax
    const orbs = section.querySelectorAll('.parallax-orb')
    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        y: (i % 2 === 0 ? -80 : 60),
        rotate: i * 45,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 2 }
      })
    })

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()) }
  }, [])

  return (
    <section id="marketplace" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden" style={{ background: 'var(--bg-secondary)', perspective: '1400px' }}>
      {/* Floating orbs */}
      <div className="parallax-orb absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)', filter: 'blur(50px)' }} />
      <div className="parallax-orb absolute bottom-10 -left-20 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)', filter: 'blur(50px)' }} />
      <div className="parallax-orb absolute top-1/2 left-1/2 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-[1400px] mx-auto px-8 relative" style={{ transformStyle: 'preserve-3d' }}>
        <div className="text-center mb-16">
          <span className="depth-title section-caption block mb-4">Healthcare Technology</span>
          <h2 className="depth-title text-4xl lg:text-[56px] font-extrabold tracking-[-2px]" style={{ color: 'var(--text-primary)' }}>Marketplace Network</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ transformStyle: 'preserve-3d' }}>
          {features.map((f, i) => (
            <div key={i} className="depth-card" style={{ transformStyle: 'preserve-3d' }}>
              <div className="glass p-8 h-full flex flex-col transition-all duration-500 hover:shadow-[0_32px_64px_rgba(0,82,212,0.15)] hover:-translate-y-4 group cursor-default" style={{ borderRadius: 28, background: `linear-gradient(160deg, rgba(255,255,255,0.6) 0%, ${f.bg} 100%)` }}>
                <div className="inner-reveal w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2" style={{ background: f.bg }}>
                  <f.icon className="w-7 h-7" style={{ color: f.color }} />
                </div>
                <h3 className="inner-reveal text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{f.title}</h3>
                <p className="inner-reveal text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
                <div className="inner-reveal mt-auto w-full h-1 rounded-full transition-all duration-500 group-hover:h-2" style={{ background: f.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
