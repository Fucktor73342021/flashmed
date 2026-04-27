import { Link } from 'react-router'
import { ArrowLeft, AlertTriangle } from 'lucide-react'
import Footer from '../sections/Footer'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <header className="sticky top-0 z-50 border-b border-white/50" style={{ background: 'rgba(216,240,255,0.85)', backdropFilter: 'blur(24px)' }}>
        <div className="max-w-[1200px] mx-auto px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="FlashMed" className="h-9 w-auto transition-transform group-hover:scale-110" />
            <span className="text-xl font-extrabold" style={{ color: 'var(--text-primary)' }}>FlashMed</span>
          </Link>
          <div className="flex items-center gap-3">
            <a href="/privacy-policy.html" className="flex items-center gap-2 btn-outline text-sm py-2.5 px-5">Privacy</a>
            <a href="/payment-policy.html" className="flex items-center gap-2 btn-outline text-sm py-2.5 px-5">Payments</a>
            <Link to="/" className="flex items-center gap-2 btn-outline text-sm py-2.5 px-5"><ArrowLeft className="w-4 h-4" /> Back</Link>
          </div>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-8 py-20">
        <div className="glass p-10 lg:p-14">
          <div className="flex items-center gap-3 mb-2">
            <img src="/logo.png" alt="" className="h-10 w-auto" />
            <h1 className="text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>Terms and Conditions</h1>
          </div>
          <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>flashmed.in | support@flashmed.in</p>
          <div className="inline-flex glass px-4 py-2 mb-8 mt-3" style={{ borderRadius: 12, background: 'rgba(0,82,212,0.08)' }}>
            <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Effective Date: April 26, 2026 | Version 1.0</span>
          </div>

          <div className="p-6 mb-8 rounded-2xl border-2 border-amber-300" style={{ background: 'rgba(245,158,11,0.08)' }}>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: 'var(--warning)' }} />
              <div>
                <h3 className="font-bold mb-2" style={{ color: '#92400E' }}>IMPORTANT NOTICE</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#78350F' }}>
                  <strong>FlashMed is a technology platform — a connector service only.</strong> FlashMed does not sell, manufacture, stock, supply, distribute, store, or handle any medicine, medical product, pharmaceutical item, dietary supplement, blood, blood components, or any health-related product whatsoever. All transactions for goods or services occur strictly and exclusively between registered independent third-party sellers (pharmacies), blood banks, delivery partners, and customers.
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-6 mb-10" style={{ borderRadius: 20 }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--accent)' }}>Table of Contents</h3>
            <ol className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {[
                'Definitions and Platform Nature',
                'Eligibility and Account Registration',
                'Terms for Customers',
                'Terms for Sellers (Pharmacies & Medical Stores)',
                'Terms for Blood Banks',
                'Terms for Delivery Partners',
                'Blood Emergency Service — Special Terms',
                'Payments, Fees, and Refunds',
                'Prohibited Activities',
                'Intellectual Property',
                'Data Privacy and Security',
                'Limitation of Liability',
                'Indemnification',
                'Governing Law and Dispute Resolution',
                'Modifications to Terms',
              ].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="font-semibold" style={{ color: 'var(--accent)' }}>{i + 1}.</span>{item}</li>
              ))}
            </ol>
          </div>

          <T title="1. Definitions and Platform Nature">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              FlashMed is an <strong style={{ color: 'var(--text-primary)' }}>online marketplace and technology intermediary platform</strong> governed by the Information Technology Act, 2000 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
            </p>
            <div className="glass p-5 mt-4" style={{ borderRadius: 16, borderLeft: '4px solid var(--accent)' }}>
              <h3 className="font-semibold mb-3" style={{ color: 'var(--accent)' }}>Platform Nature — Unambiguous Clarification</h3>
              <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>FlashMed <strong style={{ color: 'var(--text-primary)' }}>does not</strong>:</p>
              <ul className="space-y-1.5">
                {[
                  'Sell, stock, supply, or distribute medicines, pharmaceuticals, or any health products',
                  'Sell, collect, store, transport, or supply blood or any blood components or derivatives',
                  'Manufacture or repackage any product listed on the platform',
                  'Provide medical advice, prescriptions, or health recommendations',
                  'Guarantee availability, pricing, or delivery timelines of any product or service',
                  'Act as a principal in any transaction between a seller and a customer',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: 'var(--accent-light)' }} />{item}
                  </li>
                ))}
              </ul>
            </div>
          </T>

          <T title="2. Eligibility and Account Registration">
            <ul className="space-y-2">
              {['You must be at least 18 years of age to register and use the Platform',
                'You must be legally capable of entering into a binding contract under the Indian Contract Act, 1872',
                'You must provide accurate, complete, and current information during registration',
                'You must have a valid Indian mobile number for authentication',
              ].map((item, i) => (
                <li key={i} className="flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: 'var(--accent-light)' }} />{item}
                </li>
              ))}
            </ul>
          </T>

          <T title="3. Terms for Customers">
            <div className="glass p-5 mb-4" style={{ borderRadius: 16, borderLeft: '4px solid var(--accent)' }}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4" style={{ background: 'var(--accent)' }}>Customer</span>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>3.1 Prescription Requirement</h3>
              <ul className="space-y-2 mb-4">
                {[
                  'Customers must upload a valid, legible prescription issued by a registered medical practitioner for all Schedule H, H1, and X drugs',
                  'Uploading a forged, altered, stolen, or fabricated prescription constitutes a criminal offence',
                  'FlashMed does not verify prescriptions directly. Verification is the sole responsibility of the registered Seller/Pharmacy',
                  'OTC medicines may be ordered without a prescription where legally permitted',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: 'var(--text-secondary)' }} />{item}
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>3.2 Ordering and Acceptance</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Placing an order on the Platform constitutes a <strong>request only</strong> — it is not a confirmed purchase until accepted by a Seller. Prices are quoted by the Seller independently. FlashMed does not set, control, or guarantee medicine prices.
              </p>
            </div>
          </T>

          <T title="4. Terms for Sellers">
            <div className="glass p-5" style={{ borderRadius: 16, borderLeft: '4px solid var(--success)' }}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4" style={{ background: 'var(--success)' }}>Seller / Pharmacy</span>
              <ul className="space-y-2 mb-4">
                {[
                  'All registered Sellers must hold a valid and current Drug License',
                  'Sellers must have a licensed pharmacist physically present on-premises during all operating hours',
                  'Sellers must comply with the Drugs and Cosmetics Act, 1940, the Pharmacy Act, 1948, and GST regulations',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: 'var(--text-secondary)' }} />{item}
                  </li>
                ))}
              </ul>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                FlashMed charges a <strong style={{ color: 'var(--text-primary)' }}>platform fee of 8%</strong> on every completed transaction. Sellers receive <strong style={{ color: 'var(--text-primary)' }}>91% of the order value</strong> after deduction of 8% platform fee and 1% TDS.
              </p>
            </div>
          </T>

          <T title="5. Terms for Blood Banks">
            <div className="glass p-5" style={{ borderRadius: 16, borderLeft: '4px solid #EF4444' }}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4" style={{ background: '#EF4444' }}>Blood Bank</span>
              <div className="p-4 rounded-lg mb-4 border border-red-200" style={{ background: 'rgba(239,68,68,0.06)' }}>
                <p className="text-sm" style={{ color: '#991B1B' }}>
                  <strong>FlashMed does not collect, store, process, transport, supply, or sell blood or blood components under any circumstances.</strong> The blood emergency feature is a communication and coordination tool only.
                </p>
              </div>
            </div>
          </T>

          <T title="6. Terms for Delivery Partners">
            <div className="glass p-5" style={{ borderRadius: 16, borderLeft: '4px solid var(--warning)' }}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4" style={{ background: 'var(--warning)' }}>Delivery Partner</span>
              <ul className="space-y-2">
                {[
                  'Delivery Partners must be Indian citizens aged 18 years or above',
                  'Must hold a valid driving license appropriate for the vehicle used',
                  'Delivery Partners are independent contractors, not employees of FlashMed',
                  'GPS location tracking during active duty hours for delivery coordination',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: 'var(--text-secondary)' }} />{item}
                  </li>
                ))}
              </ul>
            </div>
          </T>

          <T title="7. Blood Emergency Service — Special Terms">
            <div className="p-5 rounded-xl border-2 border-red-200" style={{ background: 'rgba(239,68,68,0.04)' }}>
              <h3 className="font-semibold mb-3" style={{ color: '#991B1B' }}>7.1 Nature of Blood Emergency Service</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#991B1B' }}>
                The Blood Emergency (&ldquo;Blood SOS&rdquo;) feature is a <strong>non-commercial, life-saving communication service</strong>. FlashMed uses this feature to connect patients in urgent need with registered blood banks and voluntary registered donors. <strong>FlashMed does not supply, transport, store, or sell blood</strong>.
              </p>
            </div>
          </T>

          <T title="8. Payments, Fees, and Refunds">
            <ul className="space-y-2">
              {['Payments are processed through Razorpay, a PCI-DSS compliant payment gateway',
                'All transactions are in Indian Rupees (INR)',
                'Eligible for refund: Order cancelled before Seller acceptance; Seller unable to fulfill',
                'Not eligible for refund: Order cancelled after Seller accepts; failed deliveries due to incorrect address',
                'Approved refunds processed within 5–7 business days',
              ].map((item, i) => (
                <li key={i} className="flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: 'var(--accent-light)' }} />{item}
                </li>
              ))}
            </ul>
          </T>

          <T title="9. Prohibited Activities">
            <ul className="space-y-2">
              {['Using the Platform for any illegal purpose',
                'Attempting to procure narcotic drugs without valid prescription',
                'Uploading fake, forged, or stolen prescriptions',
                'Submitting false blood emergency requests',
                'Creating multiple accounts to abuse referral or promotional systems',
                'Soliciting transactions outside the Platform to avoid fees',
              ].map((item, i) => (
                <li key={i} className="flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: '#EF4444' }} />{item}
                </li>
              ))}
            </ul>
          </T>

          <T title="10. Intellectual Property">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              All content on the Platform including but not limited to the name &ldquo;FlashMed&rdquo;, the FlashMed logo, the lightning bolt emblem, application design, user interface, code, graphics, text, and data compilations are the exclusive intellectual property of FlashMed.
            </p>
          </T>

          <T title="11. Data Privacy and Security">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Please refer to our <a href="/privacy-policy.html" className="font-semibold" style={{ color: 'var(--accent)' }}>Privacy Policy</a> for detailed information.
            </p>
          </T>

          <T title="12. Limitation of Liability">
            <div className="p-5 rounded-xl border-2 border-red-200" style={{ background: 'rgba(239,68,68,0.04)' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#991B1B' }}>
                To the fullest extent permitted by applicable law, <strong>FlashMed&apos;s total aggregate liability</strong> to any User for any claim shall not exceed the <strong>platform fee paid by that User in the specific transaction</strong> giving rise to the claim.
              </p>
            </div>
          </T>

          <T title="13. Indemnification">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              You agree to defend, indemnify, and hold harmless FlashMed, its directors, officers, employees, agents, licensors, and service providers from and against any and all claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms and Conditions and your use or misuse of the Platform.
            </p>
          </T>

          <T title="14. Governing Law and Dispute Resolution">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              These Terms are governed by the laws of the Republic of India. All disputes shall be subject to the exclusive jurisdiction of the courts at <strong style={{ color: 'var(--text-primary)' }}>Kolkata, West Bengal, India</strong>.
            </p>
          </T>

          <T title="15. Modifications to Terms">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              FlashMed reserves the right to modify these Terms at any time. Material changes will be communicated via in-app notification and/or email at least 7 days before taking effect.
            </p>
          </T>

          <div className="mt-12 p-8 rounded-2xl text-white" style={{ background: 'var(--text-primary)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--accent-light)' }}>Grievance Officer & Contact</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              <strong className="text-white">FlashMed</strong><br />
              Website: flashmed.in<br />
              Email: <a href="mailto:support@flashmed.in" className="font-semibold" style={{ color: 'var(--accent-light)' }}>support@flashmed.in</a>
            </p>
            <p className="text-gray-400 text-xs">
              Grievance response: Within 48 hours | Resolution: Within 30 days
            </p>
          </div>

          <p className="text-center text-xs mt-10" style={{ color: 'var(--text-muted)' }}>
            These Terms and Conditions were last updated on April 26, 2026.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function T({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-6">
      <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2" style={{ color: 'var(--text-primary)', borderColor: 'rgba(0,82,212,0.1)' }}>{title}</h2>
      {children}
    </div>
  )
}
