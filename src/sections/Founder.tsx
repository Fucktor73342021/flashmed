import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const missions = [
  'Hyperlocal pharmacy aggregation network',
  'Intelligent prescription fulfillment routing',
  'Real-time healthcare logistics coordination',
  'Oxygen supply network and emergency access',
  'Hospital connectivity and patient support infrastructure',
]

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Photo rotates in from 3D
    const photo = section.querySelector('.photo-3d')
    if (photo) {
      gsap.fromTo(photo, { opacity: 0, rotateY: -40, x: -100, z: -500, scale: 0.7 },
        { opacity: 1, rotateY: 0, x: 0, z: 0, scale: 1, duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: photo, start: 'top 80%', toggleActions: 'play none none none' } })

      // Scroll-linked subtle rotation
      gsap.to(photo, { rotateY: 5, y: -30, ease: 'none',
        scrollTrigger: { trigger: photo, start: 'top 50%', end: 'top 0%', scrub: 2 } })
    }

    // Content items fly in from right with 3D depth
    const items = section.querySelectorAll('.founder-reveal')
    items.forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, x: 80, rotateX: 10, z: -300 },
        { opacity: 1, x: 0, rotateX: 0, z: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }, delay: i * 0.1 })
    })

    // Decorative orbs
    const orbs = section.querySelectorAll('.parallax-orb')
    orbs.forEach((orb, i) => {
      gsap.to(orb, { y: (i % 2 === 0 ? -80 : 60), ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 2 } })
    })

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()) }
  }, [])

  return (
    <section id="founder" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden" style={{ background: 'var(--bg-secondary)', perspective: '1300px' }}>
      <div className="parallax-orb absolute top-10 right-[10%] w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,82,212,0.1), transparent 70%)', filter: 'blur(60px)' }} />
      <div className="parallax-orb absolute bottom-20 left-[5%] w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)', filter: 'blur(50px)' }} />

      <div className="max-w-[1200px] mx-auto px-8 relative" style={{ transformStyle: 'preserve-3d' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="photo-3d" style={{ transformStyle: 'preserve-3d' }}>
            <div className="relative max-w-[380px] mx-auto lg:mx-0">
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-3xl blur-3xl opacity-0 hover:opacity-100 transition-opacity duration-700" />
              <div className="relative glass p-3 rounded-3xl group hover:shadow-[0_40px_100px_rgba(0,82,212,0.2)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]" style={{ transformStyle: 'preserve-3d' }}>
                <img src="/photo-ceo.png" alt="Nahid Hasan - Founder of FlashMed" className="w-full rounded-2xl object-cover aspect-[3/4]" />
                <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass px-5 py-3 animate-pulse-ring" style={{ borderRadius: 16 }}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--success)' }} />
                  <span className="text-xs font-bold" style={{ color: 'var(--accent)' }}>Launching in May 2026</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ transformStyle: 'preserve-3d' }}>
            <span className="founder-reveal section-caption block mb-4">The Vision</span>
            <h2 className="founder-reveal text-4xl lg:text-[52px] font-extrabold tracking-[-2px] leading-[1.05] mb-3" style={{ color: 'var(--text-primary)' }}>Nahid Hasan</h2>
            <p className="founder-reveal text-lg font-semibold mb-6" style={{ color: 'var(--accent)' }}>Founder & CEO, FlashMed</p>
            <p className="founder-reveal text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Building India's hyperlocal healthcare fulfillment infrastructure. Not an app — a nationwide network connecting 1.4 billion Indians to licensed pharmacies, blood banks, and emergency services through intelligent technology. A 21-year-old physics student from Murshidabad University who chose to solve India's healthcare access problem before finishing his degree.
            </p>
            <p className="founder-reveal text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>FlashMed is building:</p>
            <div className="space-y-3 mb-8">
              {missions.map((m, i) => (
                <div key={i} className="founder-reveal flex items-center gap-3 glass px-4 py-3 rounded-xl hover:bg-white/80 hover:translate-x-2 hover:shadow-md transition-all duration-300 cursor-default group">
                  <CheckCircle2 className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" style={{ color: 'var(--success)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{m}</span>
                </div>
              ))}
            </div>
            <div className="founder-reveal glass p-6 border-l-4 rounded-r-xl transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,82,212,0.12)]" style={{ borderLeftColor: 'var(--accent)' }}>
              <blockquote className="text-lg lg:text-xl font-medium italic leading-relaxed" style={{ color: 'var(--accent)' }}>
                &ldquo;Healthcare access should be as reliable as electricity. We are building the infrastructure to make that true for every Indian.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
