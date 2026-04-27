import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Wind, Building2, Home, Radio, Activity } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const fulfillment = [
  { icon: Wind, title: 'Oxygen Supply Network', desc: 'Real-time oxygen cylinder availability tracking across verified suppliers. Instant location and status updates during healthcare emergencies.', color: '#06B6D4', bg: 'rgba(6,182,212,0.08)' },
  { icon: Building2, title: 'Hospital Connectivity', desc: 'Direct admission coordination with nearby hospitals. Reduces emergency response friction and improves patient handoff workflows.', color: '#6366F1', bg: 'rgba(99,102,241,0.08)' },
  { icon: Home, title: 'Patient Family Support', desc: 'Helps patient families find verified, budget-friendly accommodation near hospitals for convenient long-term care support.', color: '#059669', bg: 'rgba(5,150,105,0.08)' },
  { icon: Radio, title: 'Emergency Response Sync', desc: 'Synchronizes hospitals, pharmacies, donors, and delivery partners into a unified emergency response command layer.', color: '#D97706', bg: 'rgba(245,158,11,0.08)' },
  { icon: Activity, title: 'Healthcare Analytics', desc: 'Real-time dashboards tracking fulfillment rates, partner performance, prescription trends, and logistics efficiency across the network.', color: '#EC4899', bg: 'rgba(236,72,153,0.08)' },
]

export default function FulfillmentIntelligence() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const titles = section.querySelectorAll('.depth-title')
    titles.forEach((t, i) => {
      gsap.fromTo(t, { opacity: 0, y: 70, scale: 0.65, rotateX: 16, z: -600 },
        { opacity: 1, y: 0, scale: 1, rotateX: 0, z: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: t, start: 'top 88%', toggleActions: 'play none none none' }, delay: i * 0.1 })
    })

    // Cards cascade from deep Z
    const cards = section.querySelectorAll('.fulfill-card')
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, scale: 0.38, z: -800 - i * 180, rotateY: i % 2 === 0 ? 35 : -35, x: i % 2 === 0 ? 60 : -60 },
        { opacity: 1, scale: 1, z: 0, rotateY: 0, x: 0, duration: 1.5, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }, delay: i * 0.14 })

      gsap.to(card, {
        rotateY: i % 2 === 0 ? -5 : 5,
        y: -20,
        ease: 'none',
        scrollTrigger: { trigger: card, start: 'top 55%', end: 'top 5%', scrub: 1.5 }
      })
    })

    const inners = section.querySelectorAll('.inner-reveal')
    inners.forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 20, rotateX: 6, scale: 0.95 },
        { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 93%', toggleActions: 'play none none none' }, delay: 0.35 + i * 0.06 })
    })

    // Accent lines grow
    const lines = section.querySelectorAll('.accent-line')
    lines.forEach((line, i) => {
      gsap.fromTo(line, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: line, start: 'top 90%', toggleActions: 'play none none none' }, delay: 0.5 + i * 0.1 })
    })

    // Orbs
    const orbs = section.querySelectorAll('.parallax-orb')
    orbs.forEach((orb, i) => {
      gsap.to(orb, { y: (i % 2 === 0 ? -100 : 80), ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 2 } })
    })

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()) }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden" style={{ background: 'var(--bg-primary)', perspective: '1400px' }}>
      <div className="parallax-orb absolute top-20 right-[8%] w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.1), transparent 70%)', filter: 'blur(60px)' }} />
      <div className="parallax-orb absolute bottom-16 left-[5%] w-52 h-52 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)', filter: 'blur(50px)' }} />

      <div className="max-w-[1400px] mx-auto px-8 relative" style={{ transformStyle: 'preserve-3d' }}>
        <div className="text-center mb-16">
          <span className="depth-title section-caption block mb-4">Intelligence Layer</span>
          <h2 className="depth-title text-4xl lg:text-[56px] font-extrabold tracking-[-2px]" style={{ color: 'var(--text-primary)' }}>Healthcare Fulfillment Intelligence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5" style={{ transformStyle: 'preserve-3d' }}>
          {fulfillment.map((f, i) => (
            <div key={i} className="fulfill-card" style={{ transformStyle: 'preserve-3d' }}>
              <div className="glass p-7 h-full flex flex-col transition-all duration-500 hover:shadow-[0_32px_64px_rgba(0,82,212,0.15)] hover:-translate-y-4 group cursor-default" style={{ borderRadius: 28, background: `linear-gradient(160deg, rgba(255,255,255,0.6) 0%, ${f.bg} 100%)` }}>
                <div className="inner-reveal w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-6" style={{ background: f.bg }}>
                  <f.icon className="w-6 h-6" style={{ color: f.color }} />
                </div>
                <h3 className="inner-reveal text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{f.title}</h3>
                <p className="inner-reveal text-xs leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
                <div className="accent-line mt-auto w-full h-1 rounded-full origin-left" style={{ background: f.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
