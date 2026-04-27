import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import MarketplaceNetwork from '../sections/MarketplaceNetwork'
import PharmacyEcosystem from '../sections/PharmacyEcosystem'
import LogisticsEngine from '../sections/LogisticsEngine'
import FulfillmentIntelligence from '../sections/FulfillmentIntelligence'
import Founder from '../sections/Founder'
import Roadmap from '../sections/Roadmap'
import TrustAndContact from '../sections/TrustAndContact'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="relative" style={{ background: 'var(--bg-primary)' }}>
      {/* Decorative background orbs - pure CSS, no WebGL */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[15%] left-[8%] w-[350px] h-[350px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-[55%] right-[5%] w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.05), transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[10%] left-[25%] w-[250px] h-[250px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.04), transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <Navbar />
      <main className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <MarketplaceNetwork />
        <PharmacyEcosystem />
        <LogisticsEngine />
        <FulfillmentIntelligence />
        <Founder />
        <Roadmap />
        <TrustAndContact />
      </main>
      <Footer />
    </div>
  )
}
