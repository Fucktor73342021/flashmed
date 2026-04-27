import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Route, ShieldCheck, Package, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const logistics = [
  { icon: Route, title: 'Intelligent Routing', desc: 'AI optimizes delivery routes in real-time based on traffic, distance, pharmacy capacity, and fulfillment priority.', color: '#0052D4', bg: 'rgba(0,82,212,0.08)' },
  { icon: ShieldCheck, title: 'Verified Partner Network', desc: 'Every pharmacy on the platform is licensed, verified, and audited. Only registered drug-licensed sellers can join.', color: '#059669', bg: 'rgba(5,150,105,0.08)' },
  { icon: Package, title: 'Last-Mile Coordination', desc: 'Seamless handoff from pharmacy to patient. Real-time delivery partner assignment with OTP-verified handover.', color: '#D97706', bg: 'rgba(217,119,6,0.08)' },
  { icon: MapPin, title: 'Live Fulfillment Tracking', desc: 'Full visibility into fulfillment status — from prescription upload to pharmacy acceptance to doorstep delivery.', color: '#7C3AED', bg: 'rgba(124,58,237,0.08)' },
]

export default function LogisticsEngine() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const titles = section.querySelectorAll('.depth-title')
    titles.forEach((t, i) => {
      gsap.fromTo(t, { opacity: 0, y: 70, scale: 0.65, rotateX: 18, z: -600 },
        { opacity: 1, y: 0, scale: 1, rotateX: 0, z: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: t, start: 'top 88%', toggleActions: 'play none none none' }, delay: i * 0.1 })
    })

    // Cards with 3D flip entrance
    const cards = section.querySelectorAll('.logistics-card')
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, scale: 0.4, z: -700 - i * 150, rotateY: i % 2 === 0 ? 60 : -60, rotateX: 10 },
        { opacity: 1, scale: 1, z: 0, rotateY: 0, rotateX: 0, duration: 1.3, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }, delay: i * 0.18 })

      gsap.to(card, {
        rotateY: i % 2 === 0 ? -6 : 6,
        y: -25,
        ease: 'none',
        scrollTrigger: { trigger: card, start: 'top 55%', end: 'top 5%', scrub: 1.5 }
      })
    })

    const inners = section.querySelectorAll('.inner-reveal')
    inners.forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 25, rotateX: 8 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' }, delay: 0.3 + i * 0.08 })
    })

    // Decorative orbs parallax
    const orbs = section.querySelectorAll('.parallax-orb')
    orbs.forEach((orb, i) => {
      gsap.to(orb, { y: (i % 2 === 0 ? -90 : 70), ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 2 } })
    })

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()) }
  }, [])

  return (
    <section id="logistics" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden" style={{ background: 'var(--bg-secondary)', perspective: '1400px' }}>
      <div className="parallax-orb absolute -top-16 -left-16 w-60 h-60 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.12), transparent 70%)', filter: 'blur(50px)' }} />
      <div className="parallax-orb absolute bottom-10 right-[10%] w-52 h-52 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)', filter: 'blur(50px)' }} />

      <div className="max-w-[1400px] mx-auto px-8 relative" style={{ transformStyle: 'preserve-3d' }}>
        <div className="text-center mb-16">
          <span className="depth-title section-caption block mb-4">Infrastructure</span>
          <h2 className="depth-title text-4xl lg:text-[56px] font-extrabold tracking-[-2px]" style={{ color: 'var(--text-primary)' }}>Hyperlocal Logistics Engine</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ transformStyle: 'preserve-3d' }}>
          {logistics.map((l, i) => (
            <div key={i} className="logistics-card" style={{ transformStyle: 'preserve-3d' }}>
              <div className="glass p-8 h-full flex flex-col transition-all duration-500 hover:shadow-[0_32px_64px_rgba(0,82,212,0.15)] hover:-translate-y-4 group cursor-default" style={{ borderRadius: 28, background: `linear-gradient(160deg, rgba(255,255,255,0.6) 0%, ${l.bg} 100%)` }}>
                <div className="inner-reveal w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1" style={{ background: l.bg }}>
                  <l.icon className="w-7 h-7" style={{ color: l.color }} />
                </div>
                <h3 className="inner-reveal text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{l.title}</h3>
                <p className="inner-reveal text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{l.desc}</p>
                <div className="inner-reveal mt-auto w-16 h-1 rounded-full transition-all duration-500 group-hover:w-24" style={{ background: l.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
