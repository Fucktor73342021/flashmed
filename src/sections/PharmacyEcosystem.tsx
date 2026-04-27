import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Smartphone, Camera, MapPin, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const screens = [
  { image: '/mobile-1.jpg', caption: 'Personalized Dashboard', desc: 'Good evening, User — a personalized greeting with live delivery tracking and emergency coordination at a glance.', icon: Smartphone },
  { image: '/mobile-2.jpg', caption: 'Prescription Upload', desc: 'Snap a photo or upload from gallery. FlashMed routes your prescription to the best-matched verified pharmacy.', icon: Camera },
  { image: '/mobile-3.jpg', caption: 'Fulfillment Flow', desc: 'Four clear steps: Upload → Quote → Confirm → Deliver. Full transparency at every stage.', icon: MapPin },
]

export default function PharmacyEcosystem() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const titles = section.querySelectorAll('.depth-title')
    titles.forEach((t, i) => {
      gsap.fromTo(t, { opacity: 0, y: 60, scale: 0.7, rotateX: 15, z: -500 },
        { opacity: 1, y: 0, scale: 1, rotateX: 0, z: 0, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: t, start: 'top 88%', toggleActions: 'play none none none' }, delay: i * 0.1 })
    })

    // Phone cards fly in from deep Z with 3D tilt
    const cards = section.querySelectorAll('.phone-depth')
    cards.forEach((card, i) => {
      const dz = -1000 - i * 250
      gsap.fromTo(card,
        { opacity: 0, scale: 0.3, z: dz, rotateY: i === 1 ? 0 : (i === 0 ? 50 : -50), y: 80 },
        { opacity: 1, scale: 1, z: 0, rotateY: 0, y: 0, duration: 1.6, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }, delay: i * 0.25 })

      // Scroll-linked 3D tilt
      gsap.to(card, {
        rotateY: i === 0 ? 8 : (i === 2 ? -8 : 0),
        rotateX: -5,
        y: -40,
        ease: 'none',
        scrollTrigger: { trigger: card, start: 'top 50%', end: 'top 0%', scrub: 1.5 }
      })
    })

    // Info cards slide in from alternating sides
    const infos = section.querySelectorAll('.info-slide')
    infos.forEach((info, i) => {
      gsap.fromTo(info, { opacity: 0, x: i % 2 === 0 ? -100 : 100, rotateY: i % 2 === 0 ? 20 : -20 },
        { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: info, start: 'top 88%', toggleActions: 'play none none none' }, delay: 0.3 + i * 0.15 })
    })

    // Decorative parallax orbs
    const orbs = section.querySelectorAll('.parallax-orb')
    orbs.forEach((orb, i) => {
      gsap.to(orb, { y: (i % 2 === 0 ? -100 : 80), ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 2 } })
    })

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()) }
  }, [])

  return (
    <section id="partners" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden" style={{ background: 'var(--bg-primary)', perspective: '1500px' }}>
      <div className="parallax-orb absolute top-20 right-[5%] w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)', filter: 'blur(60px)' }} />
      <div className="parallax-orb absolute bottom-20 left-[8%] w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)', filter: 'blur(50px)' }} />

      <div className="max-w-[1400px] mx-auto px-8 relative" style={{ transformStyle: 'preserve-3d' }}>
        <div className="text-center mb-20">
          <span className="depth-title section-caption block mb-4">Pharmacy Partner Ecosystem</span>
          <h2 className="depth-title text-4xl lg:text-[56px] font-extrabold tracking-[-2px]" style={{ color: 'var(--text-primary)' }}>The Platform Experience</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start" style={{ transformStyle: 'preserve-3d' }}>
          {screens.map((screen, i) => (
            <div key={i} className="relative" style={{ transformStyle: 'preserve-3d' }}>
              <div className="phone-depth" style={{ transformStyle: 'preserve-3d' }}>
                <div className="relative rounded-[36px] overflow-hidden shadow-[0_32px_80px_rgba(0,82,212,0.18)] border-[6px] border-white/70 transition-all duration-600 hover:shadow-[0_40px_100px_rgba(0,82,212,0.3)] hover:-translate-y-3 hover:scale-[1.02] group">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-white/90 rounded-b-2xl z-10" />
                  <img src={screen.image} alt={screen.caption} className="w-full h-[520px] object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                </div>
                <div className="absolute -bottom-6 left-[10%] right-[10%] h-6 rounded-full blur-2xl opacity-30" style={{ background: 'var(--accent)' }} />
              </div>

              <div className="info-slide mt-8 glass p-6" style={{ borderRadius: 20 }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-glow)' }}>
                    {i === 0 && <Smartphone className="w-4 h-4" style={{ color: 'var(--accent)' }} />}
                    {i === 1 && <Camera className="w-4 h-4" style={{ color: 'var(--accent)' }} />}
                    {i === 2 && <MapPin className="w-4 h-4" style={{ color: 'var(--accent)' }} />}
                  </div>
                  <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>{screen.caption}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{screen.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass px-8 py-4 animate-pulse-ring" style={{ borderRadius: 20 }}>
            <Zap className="w-6 h-6" style={{ color: 'var(--accent)' }} />
            <span className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Download the FlashMed Platform on Android. iOS coming soon.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
