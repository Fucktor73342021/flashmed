import { useEffect, useRef, useState } from 'react'
import { Network, Truck, HeartPulse } from 'lucide-react'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 14 })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.hero-reveal')
    els?.forEach((child, i) => {
      const el = child as HTMLElement
      el.style.opacity = '0'
      el.style.transform = 'translateY(50px) translateZ(-300px) scale(0.7) rotateX(15deg)'
      setTimeout(() => {
        el.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0) translateZ(0) scale(1) rotateX(0deg)'
      }, 300 + i * 200)
    })
  }, [])

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Floating decorative orbs */}
      <div className="absolute top-[10%] left-[5%] w-[280px] h-[280px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)', filter: 'blur(60px)', transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.6}px)` }} />
      <div className="absolute top-[60%] right-[8%] w-[240px] h-[240px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%)', filter: 'blur(60px)', transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.5}px)` }} />
      <div className="absolute bottom-[15%] left-[30%] w-[200px] h-[200px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)', filter: 'blur(60px)', transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * 0.8}px)` }} />

      {/* Decorative floating shapes */}
      <div className="absolute top-[20%] right-[15%] w-16 h-16 glass opacity-40 animate-float pointer-events-none" style={{ borderRadius: '50%', transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.2}px, 100px)` }} />
      <div className="absolute bottom-[25%] left-[10%] w-12 h-12 glass opacity-30 animate-float-delay pointer-events-none" style={{ borderRadius: 16, transform: `translate3d(${mousePos.x * -0.2}px, ${mousePos.y * 0.3}px, 80px)` }} />
      <div className="absolute top-[40%] left-[20%] w-8 h-8 opacity-25 animate-float pointer-events-none" style={{ borderRadius: '50%', background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', filter: 'blur(2px)', transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.3}px, 60px)` }} />

      <div className="relative z-10 text-center max-w-[980px] mx-auto px-6" style={{ transformStyle: 'preserve-3d' }}>
        <div className="hero-reveal section-caption mb-8" style={{ opacity: 0 }}>Hyperlocal Healthcare Infrastructure</div>

        <h1 className="hero-reveal text-[48px] lg:text-[72px] font-black leading-[0.95] tracking-[-3px] mb-6" style={{ opacity: 0, color: 'var(--text-primary)', transform: `translate3d(${mousePos.x * -0.3}px, ${mousePos.y * -0.2}px, 40px)` }}>
          The Operating System for<br />Local Pharmacy Fulfillment
        </h1>

        <p className="hero-reveal text-lg lg:text-xl font-medium mb-10 max-w-[640px] mx-auto leading-relaxed" style={{ opacity: 0, color: 'var(--text-secondary)', transform: `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.15}px, 20px)` }}>
          Connecting patients, pharmacies, and last-mile healthcare logistics through intelligent technology.
        </p>

        <div className="hero-reveal flex flex-wrap gap-4 justify-center mb-14" style={{ opacity: 0 }}>
          <button className="btn-outline" onClick={() => document.querySelector('#marketplace')?.scrollIntoView({ behavior: 'smooth' })}>Explore Platform</button>
          <button className="btn-gradient" onClick={() => document.querySelector('#partners')?.scrollIntoView({ behavior: 'smooth' })}>Partner Pharmacy Network</button>
        </div>

        <div className="hero-reveal flex flex-wrap gap-4 justify-center" style={{ opacity: 0 }}>
          <div className="stat-pill-new"><Network className="w-5 h-5" style={{ color: 'var(--accent)' }} /><span>Hyperlocal Network</span></div>
          <div className="stat-pill-new"><Truck className="w-5 h-5" style={{ color: 'var(--accent)' }} /><span>Intelligent Routing</span></div>
          <div className="stat-pill-new"><HeartPulse className="w-5 h-5" style={{ color: 'var(--accent)' }} /><span>Healthcare Fulfillment</span></div>
        </div>
      </div>
    </section>
  )
}
