import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, Plane, Watch, Globe, Hospital } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  { quarter: 'Q1 2027', title: 'Telebooking Platform', desc: 'Book doctors from any clinic, chamber, nursing home, or hospital directly from the app.', icon: Calendar, color: '#0052D4', bg: 'rgba(0,82,212,0.1)' },
  { quarter: 'Q3 2027', title: 'Logistics Automation', desc: 'Autonomous routing and predictive inventory management for partner pharmacies.', icon: Plane, color: '#06B6D4', bg: 'rgba(6,182,212,0.1)' },
  { quarter: 'Q4 2028', title: 'Health Wearables', desc: 'Integration with next-generation health monitoring devices for continuous care tracking.', icon: Watch, color: '#059669', bg: 'rgba(5,150,105,0.1)' },
  { quarter: 'Q2 2029', title: 'Hospital Network Integration', desc: 'Deep integration with hospital EMR systems for seamless patient data exchange.', icon: Hospital, color: '#7C3AED', bg: 'rgba(124,58,237,0.1)' },
  { quarter: 'Q4 2029', title: 'Pan India Expansion', desc: 'Full nationwide coverage with comprehensive healthcare logistics services across all states.', icon: Globe, color: '#D97706', bg: 'rgba(217,119,6,0.1)' },
]

export default function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const items = section.querySelectorAll('.roadmap-reveal')
    items.forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 60, rotateX: 12, z: -400, scale: 0.85 },
        { opacity: 1, y: 0, rotateX: 0, z: 0, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }, delay: i * 0.12 })
    })

    const line = section.querySelector('.timeline-fill')
    if (line) {
      gsap.fromTo(line, { scaleY: 0, transformOrigin: 'top' }, { scaleY: 1, duration: 2, ease: 'power3.out',
        scrollTrigger: { trigger: line, start: 'top 80%', toggleActions: 'play none none none' } })
    }

    // Parallax orbs
    const orbs = section.querySelectorAll('.parallax-orb')
    orbs.forEach((orb, i) => {
      gsap.to(orb, { y: (i % 2 === 0 ? -120 : 100), ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 2 } })
    })

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()) }
  }, [])

  return (
    <section id="roadmap" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden" style={{ background: 'var(--bg-primary)', perspective: '1200px' }}>
      <div className="parallax-orb absolute top-20 left-[8%] w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,82,212,0.1), transparent 70%)', filter: 'blur(60px)' }} />
      <div className="parallax-orb absolute bottom-32 right-[5%] w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)', filter: 'blur(50px)' }} />

      <div className="max-w-[1000px] mx-auto px-8 relative">
        <div className="text-center mb-16">
          <span className="roadmap-reveal section-caption block mb-3">Our Journey</span>
          <h2 className="roadmap-reveal text-4xl lg:text-[56px] font-extrabold tracking-[-2px]" style={{ color: 'var(--text-primary)' }}>Future Roadmap</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 timeline-fill" style={{ background: 'linear-gradient(to bottom, var(--accent), #06B6D4, transparent)' }} />
          <div className="space-y-12">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={i} className={`roadmap-reveal relative flex items-start gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} style={{ opacity: 0 }}>
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full ring-4 ring-white shadow-[0_0_20px_rgba(0,82,212,0.4)] animate-pulse-ring" style={{ background: m.color }} />
                  </div>
                  <div className="hidden lg:block lg:w-1/2" />
                  <div className={`ml-14 lg:ml-0 lg:w-1/2 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="glass p-6 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-400 group cursor-default" style={{ borderRadius: 20, background: `linear-gradient(160deg, rgba(255,255,255,0.6) 0%, ${m.bg} 100%)` }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: m.bg }}>
                          <m.icon className="w-5 h-5" style={{ color: m.color }} />
                        </div>
                        <span className="text-sm font-bold" style={{ color: m.color }}>{m.quarter}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{m.title}</h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{m.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
