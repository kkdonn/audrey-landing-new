import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

/**
 * AudRI — Audit Realtime Intelligence Landing Page
 * Design: Bold Narrative with dramatic contrasts, large typography, and full-width sections
 * Color Scheme: Deep charcoal (#1F2937), vibrant orange (#FF6B35), white, cream (#FFF8F0)
 */

const CALENDLY_URL = 'https://calendly.com/keshav-glifiq/glif-demo';

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [expandedUseCase, setExpandedUseCase] = useState('ordinary-claims');

  // Document ticker data - exact from approved code
  const documents = [
    { name: 'POLICY-2024.PDF', subtitle: 'Handling Guidelines' },
    { name: 'SOP-CLAIMS.PDF', subtitle: 'Standard Procedure' },
    { name: 'CLAIM-0847.DOC', subtitle: 'Claims Assessment' },
    { name: 'UNDERWRITING.PDF', subtitle: 'Risk Standards' },
    { name: 'COMPLIANCE-Q4.PDF', subtitle: 'Regulatory Framework' },
    { name: 'ADJUSTER-GUIDE.PDF', subtitle: 'Field Procedures' },
    { name: 'RESERVE-CALC.PDF', subtitle: 'Reserve Methodology' },
    { name: 'AUDIT-TRAIL.DOC', subtitle: 'Quality Standards' },
    { name: 'COVERAGE-MATRIX.PDF', subtitle: 'Coverage Rules' },
    { name: 'ESCALATION.PDF', subtitle: 'Escalation Protocols' },
  ];

  // Intersection Observer for scroll-triggered reveals
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set(prev).add(entry.target.id));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-scroll-reveal]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Floating Vertical Document Ticker */}
      <div className="floating-doc-ticker" aria-hidden="true">
        <div className="ticker-vertical-track">
          {/* First set */}
          {documents.map((doc, idx) => (
            <div key={`doc-1-${idx}`} className="ticker-vertical-chip">
              <div className="ticker-vertical-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <span className="ticker-vertical-label">{doc.name}</span>
              <span className="ticker-vertical-dot"></span>
              <span className="ticker-vertical-sub">{doc.subtitle}</span>
            </div>
          ))}
          {/* Second set for seamless loop */}
          {documents.map((doc, idx) => (
            <div key={`doc-2-${idx}`} className="ticker-vertical-chip">
              <div className="ticker-vertical-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <span className="ticker-vertical-label">{doc.name}</span>
              <span className="ticker-vertical-dot"></span>
              <span className="ticker-vertical-sub">{doc.subtitle}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663435268381/XBmnJFRFV2AWx6JickRUTq/audri-logo_7f90b384.png" alt="AudRI Logo" className="w-10 h-10 rounded-lg" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#1F2937]">AudRI</span>
              <span className="text-xs text-gray-500 leading-none">Audit Realtime Intelligence</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#problem" className="text-gray-600 hover:text-[#1F2937] transition">Problem</a>
            <a href="#solution" className="text-gray-600 hover:text-[#1F2937] transition">Solution</a>
            <a href="#use-cases" className="text-gray-600 hover:text-[#1F2937] transition">Use Cases</a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#E55A24] transition inline-block">
              Let's talk
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="hero" data-scroll-reveal>
            <h1 className="text-6xl md:text-7xl font-bold text-[#1F2937] leading-tight mb-6">
              Prevent audit failures <span className="text-[#FF6B35]">before they happen.</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              AudRI is not an audit tool. It's a system that turns messy, unstructured documents into reliable, repeatable audit decisions—at scale.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E55A24] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-2 w-fit">
                Let's talk <ArrowRight size={20} />
              </a>
              <button className="px-8 py-4 bg-white text-[#1F2937] font-bold rounded-lg border-2 border-[#1F2937] hover:bg-gray-50 transition flex items-center gap-2">
                View how AudRI transforms your audit process <ArrowRight size={20} />
              </button>
            </div>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#FF6B35] font-bold">•</span>
                <span>Eliminate audit failures driven by inconsistent judgment and human fatigue</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6B35] font-bold">•</span>
                <span>Turn unstructured documents into a governed, traceable decision process</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6B35] font-bold">•</span>
                <span>Give your auditors a system that thinks in policies, not PDFs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-[#1F2937] text-white relative overflow-hidden" data-scroll-reveal>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible('problem') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-12">
              The real problem isn't more tools. It's that your most important decisions are still made <span className="text-[#FF6B35]">document by document, person by person</span>, with no shared standard.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663435268381/XBmnJFRFV2AWx6JickRUTq/hero-chaos-f6yyCeo5REHUCV6EjG87bL.webp" 
                  alt="Chaos in audit processes"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <p className="text-xl leading-relaxed">
                  Your team makes <strong>thousands of judgment calls every day</strong> from <strong>unstructured documents</strong>—policies, claims, emails, reports, attachments.
                </p>
                <p className="text-xl leading-relaxed">
                  Those documents <strong>don't follow a consistent structure</strong>, and there's <strong>no clear, shared process</strong> for how each decision should be made.
                </p>
                <div className="space-y-6 pt-6 border-t border-gray-600">
                  <p className="font-semibold text-2xl">The result:</p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/10 border-2 border-[#FF6B35] rounded-full px-6 py-4 flex items-center gap-3">
                      <span className="text-[#FF6B35] text-2xl font-bold">•</span>
                      <span className="text-lg font-medium">Different auditors interpret the same document differently</span>
                    </div>
                    <div className="bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/10 border-2 border-[#FF6B35] rounded-full px-6 py-4 flex items-center gap-3">
                      <span className="text-[#FF6B35] text-2xl font-bold">•</span>
                      <span className="text-lg font-medium">Institutional expertise lives in people's heads, not in a system</span>
                    </div>
                    <div className="bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/10 border-2 border-[#FF6B35] rounded-full px-6 py-4 flex items-center gap-3">
                      <span className="text-[#FF6B35] text-2xl font-bold">•</span>
                      <span className="text-lg font-medium">You catch issues <strong>after</strong> they become audit findings or regulatory problems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center">
              <p className="text-2xl text-gray-300 font-semibold">
                Meanwhile, every "solution" so far has focused on <strong className="text-[#FF6B35]">speeding up parts of the work</strong>, not fixing the core issue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Gap Section */}
      <section className="py-24 bg-[#FFF8F0] text-[#1F2937] relative overflow-hidden" data-scroll-reveal>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible('tech-gap') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="tech-gap" data-scroll-reveal>
            <h2 className="text-5xl md:text-6xl font-bold mb-12">
              Technology made the layers faster. It never fixed the <span className="text-[#FF6B35]">process.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <p className="text-xl leading-relaxed">
                  OCR, RPA, and point-solution AI tools <strong>sped up individual steps</strong>—data entry, document reading, basic extraction.
                </p>
                <p className="text-xl leading-relaxed">
                  But they all stop at the same place:
                </p>
                <ul className="space-y-4 py-4 border-y-2 border-[#FF6B35]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B35] font-bold">•</span>
                    <span className="text-lg">They <strong>automate layers around the process</strong> (reading, routing, extracting)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B35] font-bold">•</span>
                    <span className="text-lg">They <strong>do not automate the process itself</strong>—how a decision is actually made</span>
                  </li>
                </ul>
                <p className="text-xl leading-relaxed pt-4">
                  So you end up with faster intake, faster extraction, and the <strong>same fragile, human-only decision process</strong> sitting in the middle.
                </p>
                <p className="text-2xl font-bold text-[#FF6B35] pt-6">
                  AudRI starts where every other tool stops.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663435268381/XBmnJFRFV2AWx6JickRUTq/hero-clarity-C9tTQSmEgGLpPRFFpZGvit.webp" 
                  alt="Clarity in audit processes"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Section - Every tool automated a layer */}
      <section className="py-20 bg-white text-center relative overflow-hidden border-y border-gray-200" style={{backgroundColor: '#b6afaf'}}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-4xl md:text-5xl font-bold leading-tight text-[#1F2937]">
            Every tool automated <em className="text-[#FF6B35] not-italic">a layer.</em><br />
            Nobody automated the process.
          </p>
        </div>
      </section>

      {/* The Answer Section - Mechanism */}
      <section className="py-24 bg-white text-[#1F2937]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-sm font-semibold text-[#FF6B35] mb-4 tracking-widest">THE ANSWER</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              "We started where every other tool stopped…"<br />
              The process document.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              AudRI is the first platform built to automate the business process itself — not the documents around it, not the data inside it, but <em className="not-italic font-semibold">the rules, standards, and logic that govern how work should be done.</em>
            </p>
          </div>

          {/* Three-step mechanism */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1: Ingest */}
            <div className="flex flex-col border-4 border-[#1F2937] rounded-lg p-6" style={{borderWidth: '2px', borderColor: '#e85617'}}>
              <div className="text-sm font-semibold text-gray-500 mb-4">01 / 03</div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ingest</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Any document that carries process knowledge — SOPs, policy manuals, guidelines, handbooks — becomes source material. The folder that's been sitting there for years is now the starting point.
              </p>
              <div className="flex flex-wrap gap-2">
                {['PDF', 'DOCX', 'Excel', 'Scanned'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* Step 2: Extract */}
            <div className="flex flex-col border-4 border-[#1F2937] rounded-lg p-6" style={{borderWidth: '2px', borderColor: '#ef7625'}}>
              <div className="text-sm font-semibold text-gray-500 mb-4">02 / 03</div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
                  <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Extract</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                AudRI reads those documents the way your most experienced people do — pulling out rules, standards, clauses, and conditions. Not just what the document says. What it means.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Rules', 'Standards', 'Conditions', 'Logic'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* Step 3: Validate */}
            <div className="flex flex-col border-4 border-[#1F2937] rounded-lg p-6" style={{borderWidth: '2px', borderColor: '#e95a2b'}}>
              <div className="text-sm font-semibold text-gray-500 mb-4">03 / 03</div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Validate</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Every claim, contract, invoice, or transaction gets checked against the extracted ruleset — automatically, in real time. Not a sample. Every record. Exceptions flagged, scored, audit-ready.
              </p>
              <div className="flex flex-wrap gap-2">
                {['100% Coverage', 'Real Time', 'Audit Trail'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Value Proposition Callout */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-orange-500 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2 opacity-90">The result</div>
                <p className="text-lg">
                  For the first time, the gap between your process documents and your actual work is closed — <em className="not-italic font-semibold">automatically, at scale, without changing how your organization operates.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Payoff Hero Section with Visualization */}
      <section className="hero-section">
        <div className="hero-grid"></div>
        <div className="hero-glow-orange"></div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="eyebrow-badge">
              <span className="eyebrow-dot"></span>
              Audit Realtime Intelligence Platform
            </div>
            <h1 className="hero-h1">Manual audits cover 3% of files.</h1>
            <span className="hero-h1-line2">AudRI Claims — covers 100%.</span>
            <p className="hero-sub">The only platform that turns your existing process documents into <em>live, automated audit logic</em> — applied to every claim, contract, and compliance file. At scale. In real time.</p>
            <div className="hero-ctas">
              <button className="px-8 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E55A24] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-2">
                See It In Action <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-[#1F2937] font-bold rounded-lg border-2 border-[#1F2937] hover:bg-gray-50 transition flex items-center gap-2">
                Schedule Partner Call
              </button>
            </div>
            <div className="hero-proof">
              <div className="proof-item"><div className="proof-dot"></div>Claims · Compliance</div>
              <div className="proof-item"><div className="proof-dot"></div>Insurance · Financial Services</div>
              <div className="proof-item"><div className="proof-dot"></div>100% AI-Powered · Real Time</div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="viz-container">
              <svg className="viz-lines" viewBox="0 0 460 420">
                <path className="viz-line" d="M 148 78  C 175 78,  168 210, 175 210"/>
                <path className="viz-line" d="M 148 208 L 175 210"/>
                <path className="viz-line" d="M 148 338 C 175 338, 168 210, 175 210"/>
                <path className="viz-line out" d="M 285 210 C 300 210, 298 78,  312 78"/>
                <path className="viz-line out" d="M 285 210 L 312 210"/>
                <path className="viz-line out" d="M 285 210 C 300 210, 298 338, 312 338"/>
              </svg>
              <div className="viz-doc">
                <div className="viz-doc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                <div><div className="viz-doc-name">POLICY.PDF</div><div className="viz-doc-type">Handling Guidelines</div></div>
              </div>
              <div className="viz-doc">
                <div className="viz-doc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                <div><div className="viz-doc-name">SOP.PDF</div><div className="viz-doc-type">Reserve Guidelines</div></div>
              </div>
              <div className="viz-doc">
                <div className="viz-doc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                <div><div className="viz-doc-name">CLM-2024-0847</div><div className="viz-doc-type">Claims File</div></div>
              </div>
              <div className="viz-engine">
                <div className="viz-engine-ring"></div>
                <div className="viz-engine-ring2"></div>
                <div className="viz-engine-logo"><svg viewBox="0 0 24 24" fill="white"><rect x="10.5" y="2" width="3" height="20" rx="1.5"/><rect x="10.5" y="2" width="3" height="20" rx="1.5" transform="rotate(45 12 12)"/><rect x="10.5" y="2" width="3" height="20" rx="1.5" transform="rotate(90 12 12)"/><rect x="10.5" y="2" width="3" height="20" rx="1.5" transform="rotate(135 12 12)"/></svg></div>
                <div className="viz-engine-label">AudRI</div>
              </div>
              <div className="viz-output">
                <div className="viz-out-score-label">Compliance Score</div>
                <div className="viz-out-score">94<span style={{fontSize: '11px', color: 'rgba(255,255,255,.18)', fontFamily: "'JetBrains Mono',monospace"}}> /100</span></div>
                <div className="viz-out-file">WC-2024-0312</div>
                <span className="viz-out-badge pass">✓ Compliant</span>
              </div>
              <div className="viz-output">
                <div className="viz-out-score-label">Compliance Score</div>
                <div className="viz-out-score">87<span style={{fontSize: '11px', color: 'rgba(255,255,255,.18)', fontFamily: "'JetBrains Mono',monospace"}}> /100</span></div>
                <div className="viz-out-file">GL-2024-0721</div>
                <span className="viz-out-badge warn">⚠ Review Required</span>
              </div>
              <div className="viz-output">
                <div className="viz-out-score-label">Compliance Score</div>
                <div className="viz-out-score">61<span style={{fontSize: '11px', color: 'rgba(255,255,255,.18)', fontFamily: "'JetBrains Mono',monospace"}}> /100</span></div>
                <div className="viz-out-file">CA-2024-0189</div>
                <span className="viz-out-badge flag">✕ 3 Violations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claims Audit Use Case Section */}
      <section className="bg-[#f1f5f9] py-24 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
            {/* Left Column - Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#FF6B35] font-semibold text-xs tracking-widest uppercase px-3 py-2 rounded-full mb-6">
                Use Case — Claims Audit
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4 leading-tight">
                Every claim audited.<br />Every time.
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Insurance organizations typically QA 3-5% of claims files manually. The other 95% goes unchecked — accumulating guideline drift, reserve errors, and regulatory exposure. AudRI gives you 100% coverage automatically.
              </p>
              
              {/* Stat Box */}
              <div className="bg-white border-l-4 border-[#FF6B35] p-5 mb-8 rounded-r-lg shadow-sm">
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">$50B</div>
                <div className="text-sm text-gray-600">spent annually on manual claims auditing in the US insurance market — most of it slow, sample-based, and inconsistent.</div>
              </div>
              
              {/* Feature List */}
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 bg-orange-100 border border-orange-200">
                    <svg viewBox="0 0 10 10" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" className="w-3 h-3"><path d="M1.5 5L4 7.5L8.5 2"/></svg>
                  </div>
                  <span className="text-sm text-[#1F2937]"><strong>Guideline adherence scoring</strong> — every claim measured against your handling protocols and jurisdictional requirements</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 bg-orange-100 border border-orange-200">
                    <svg viewBox="0 0 10 10" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" className="w-3 h-3"><path d="M1.5 5L4 7.5L8.5 2"/></svg>
                  </div>
                  <span className="text-sm text-[#1F2937]"><strong>Reserve adequacy flagging</strong> — catch under-reserved and over-reserved claims before they become financial exposures</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 bg-orange-100 border border-orange-200">
                    <svg viewBox="0 0 10 10" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" className="w-3 h-3"><path d="M1.5 5L4 7.5L8.5 2"/></svg>
                  </div>
                  <span className="text-sm text-[#1F2937]"><strong>Regulatory compliance checks</strong> — state-specific timelines, reporting requirements, and documentation standards</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 bg-orange-100 border border-orange-200">
                    <svg viewBox="0 0 10 10" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" className="w-3 h-3"><path d="M1.5 5L4 7.5L8.5 2"/></svg>
                  </div>
                  <span className="text-sm text-[#1F2937]"><strong>Exception reporting with evidence</strong> — every flag linked to the exact document rule it violated, audit-ready</span>
                </li>
              </ul>
              
              <a href="#cta" className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold hover:text-orange-600 transition">
                Request Claims Audit Walkthrough
                <svg className="w-4 h-4" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7.5h11M9 3l4.5 4.5L9 12"/></svg>
              </a>
            </div>
            
            {/* Right Column - Command Center */}
            <div className="bg-white rounded-xl overflow-hidden">
              {/* Metric Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-6 bg-gray-50 border-b border-gray-200">
                {/* Card 1: Audits Running */}
                <div className="rounded-lg p-4 text-white bg-gradient-to-br from-orange-500 to-red-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5 mb-2 opacity-90"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-bold bg-white/20 px-2 py-1 rounded inline-block mb-1">LIVE</div>
                      <div className="text-2xl font-bold">42</div>
                      <div className="text-xs opacity-90 mt-1">Audits Running</div>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                  </div>
                </div>
                
                {/* Card 2: Completed */}
                <div className="rounded-lg p-4 text-white bg-gradient-to-br from-blue-500 to-indigo-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5 mb-2 opacity-90"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  <div className="text-xs font-bold bg-white/20 px-2 py-1 rounded inline-block mb-2">1H</div>
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-xs opacity-90 mt-1">Audits Completed</div>
                </div>
                
                {/* Card 3: Pass Rate */}
                <div className="rounded-lg p-4 text-white bg-gradient-to-br from-green-500 to-emerald-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5 mb-2 opacity-90"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <div className="text-xs font-bold bg-white/20 px-2 py-1 rounded inline-block mb-2">LIVE</div>
                  <div className="text-2xl font-bold">82.5%</div>
                  <div className="text-xs opacity-90 mt-1">auto-validated</div>
                  <div className="text-xs opacity-75 mt-1">17.5% routed for review</div>
                </div>
                
                {/* Card 4: Issues */}
                <div className="rounded-lg p-4 text-white bg-gradient-to-br from-amber-500 to-yellow-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5 mb-2 opacity-90"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  <div className="text-xs font-bold bg-white/20 px-2 py-1 rounded inline-block mb-2">ROUTED</div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-xs opacity-90 mt-1">Issues Flagged</div>
                </div>
                
                {/* Card 5: Leakage */}
                <div className="rounded-lg p-4 text-white bg-gradient-to-br from-teal-600 to-cyan-700 border border-teal-400/50">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5 mb-2 opacity-90"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                  <div className="text-xs font-bold bg-white/20 px-2 py-1 rounded inline-block mb-2">LIVE</div>
                  <div className="text-2xl font-bold">$47,200</div>
                  <div className="text-xs opacity-90 mt-1">Potential Leakage</div>
                </div>
              </div>
              
              {/* Activity Feed + LOB Section */}
              <div className="grid md:grid-cols-[1.6fr_1fr] gap-6 p-6">
                {/* Live Activity Feed */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg border border-white/10 overflow-hidden">
                  <div className="p-5 border-b border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
                      <h3 className="text-white font-bold">Live Activity Feed</h3>
                    </div>
                    <p className="text-xs text-gray-400">Real-time audit results streaming • Every claim validated against 24+ business rules</p>
                  </div>
                  <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
                    {/* Sample feed items */}
                    {[
                      { status: 'pass', label: 'WC-2024-0312', type: 'Claims Assessment', badge: 'PASS' },
                      { status: 'warn', label: 'GL-2024-0721', type: 'Reserve Check', badge: 'REVIEW' },
                      { status: 'fail', label: 'CA-2024-0189', type: 'Compliance Check', badge: 'FLAG' },
                      { status: 'pass', label: 'PL-2024-0445', type: 'Guideline Adherence', badge: 'PASS' },
                      { status: 'warn', label: 'CP-2024-0556', type: 'Regulatory Check', badge: 'REVIEW' },
                    ].map((item, idx) => (
                      <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg border ${
                        item.status === 'pass' ? 'bg-green-500/10 border-green-500/25' :
                        item.status === 'warn' ? 'bg-amber-500/10 border-amber-500/25' :
                        'bg-red-500/10 border-red-500/25'
                      }`}>
                        <div className={`text-lg font-bold ${
                          item.status === 'pass' ? 'text-green-400' :
                          item.status === 'warn' ? 'text-amber-400' :
                          'text-red-400'
                        }`}>
                          {item.status === 'pass' ? '✓' : item.status === 'warn' ? '⚠' : '✕'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-xs font-bold">{item.label}</div>
                          <div className="text-gray-400 text-xs mt-0.5">{item.type}</div>
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${
                          item.status === 'pass' ? 'bg-green-500/20 text-green-400' :
                          item.status === 'warn' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {item.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Line of Business */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-5">
                  <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-blue-500 rounded"></div>
                    Active by Line of Business
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Commercial Auto', count: 14, width: 100, color: 'bg-blue-500' },
                      { name: 'Workers\' Compensation', count: 11, width: 79, color: 'bg-green-500' },
                      { name: 'General Liability', count: 8, width: 57, color: 'bg-purple-500' },
                      { name: 'Commercial Property', count: 5, width: 36, color: 'bg-orange-500' },
                      { name: 'Professional Liability', count: 3, width: 21, color: 'bg-pink-500' },
                      { name: 'Personal Auto', count: 1, width: 7, color: 'bg-teal-500' },
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs font-semibold text-gray-700">{item.name}</span>
                          <span className="text-xs font-semibold text-gray-700">{item.count}</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.width}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Idea Section */}
      <section id="solution" className="py-24 bg-white text-[#1F2937] relative overflow-hidden" data-scroll-reveal>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible('core-idea') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="core-idea" data-scroll-reveal>
            <h2 className="text-5xl md:text-6xl font-bold mb-12">
              From documents to a <span className="text-[#FF6B35]">governed audit logic</span>
            </h2>
            <div className="mb-12 flex justify-center">
              <div className="w-full md:w-2/3">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663435268381/XBmnJFRFV2AWx6JickRUTq/process-flow-TJ4WqskbfNQDwYzXWFjJVy.webp" 
                  alt="AudRI process transformation"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-center">
                <p className="text-xl leading-relaxed">
                  AudRI takes the <strong>documents that don't follow any particular structure</strong>—policies, claims, correspondence—and turns them into a <strong>structured audit logic</strong> your organization can trust and repeat.
                </p>
                <div className="bg-[#FFF8F0] border-l-4 border-[#FF6B35] p-6 rounded">
                  <p className="text-lg italic text-gray-700">
                    "Instead of hoping every auditor applies the process the same way, <strong>the process itself is encoded, governable, and explainable.</strong>"
                  </p>
                </div>
              </div>
              <div className="space-y-6 text-center">
                <div className="bg-[#1F2937] text-white p-8 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">At a high level, AudRI:</p>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF6B35] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                      <span className="text-lg"><strong>Ingests</strong> your real-world documents (policies, claims, forms, attachments)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF6B35] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                      <span className="text-lg"><strong>Extracts</strong> the relevant signals and conditions that matter for decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF6B35] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                      <span className="text-lg"><strong>Validates</strong> those signals against your policies and rules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF6B35] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                      <span className="text-lg">Outputs a <strong>traceable, consistent decision</strong>—with reasoning you can audit</span>
                    </li>
                  </ol>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-lg text-gray-800">
                    <strong>AudRI doesn't replace your auditors.</strong> It gives them a reliable system that enforces how decisions should be made—every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 bg-[#1F2937] text-white relative overflow-hidden" data-scroll-reveal>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible('use-cases') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="use-cases" data-scroll-reveal>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Built for various industries and audit use cases
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              AudRI is already being applied across multiple high-stakes, document-heavy workflows.
            </p>
            
            <div className="space-y-4">
              {/* Ordinary Claims - Open by default */}
              <div className="border border-gray-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedUseCase(expandedUseCase === 'ordinary-claims' ? '' : 'ordinary-claims')}
                  className="w-full px-8 py-6 bg-[#FF6B35] text-white font-bold text-lg flex items-center justify-between hover:bg-[#E55A24] transition"
                >
                  <span>Market Conduct Readiness</span>
                  <ChevronDown size={24} className={`transition-transform ${expandedUseCase === 'ordinary-claims' ? 'rotate-180' : ''}`} />
                </button>
                {expandedUseCase === 'ordinary-claims' && (
                  <div className="px-8 py-6 bg-gray-800 text-gray-100">
                    <p className="text-lg leading-relaxed">
                      Gives carriers and TPAs a real-time composite compliance score across every state they operate in — so when a DOI examiner walks in, every file has already been audited against the same standards they'll use.
                    </p>
                  </div>
                )}
              </div>

              {/* Complex Policy Audits */}
              <div className="border border-gray-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedUseCase(expandedUseCase === 'complex-policy' ? '' : 'complex-policy')}
                  className="w-full px-8 py-6 bg-gray-700 text-white font-bold text-lg flex items-center justify-between hover:bg-gray-600 transition"
                >
                  <span>GxP Vendor Audits</span>
                  <ChevronDown size={24} className={`transition-transform ${expandedUseCase === 'complex-policy' ? 'rotate-180' : ''}`} />
                </button>
                {expandedUseCase === 'complex-policy' && (
                  <div className="px-8 py-6 bg-gray-800 text-gray-100">
                    <p className="text-lg leading-relaxed">
                      Continuously validates supplier documentation against FDA 21 CFR Part 211, EU Annex 11, and ICH Q10 standards — so when an inspector pulls a vendor file, every qualification, deviation, and CAPA is already audit-ready.
                    </p>
                  </div>
                )}
              </div>

              {/* Internal Controls & Compliance */}
              <div className="border border-gray-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedUseCase(expandedUseCase === 'internal-controls' ? '' : 'internal-controls')}
                  className="w-full px-8 py-6 bg-gray-700 text-white font-bold text-lg flex items-center justify-between hover:bg-gray-600 transition"
                >
                  <span>Internal Controls & Compliance Checks</span>
                  <ChevronDown size={24} className={`transition-transform ${expandedUseCase === 'internal-controls' ? 'rotate-180' : ''}`} />
                </button>
                {expandedUseCase === 'internal-controls' && (
                  <div className="px-8 py-6 bg-gray-800 text-gray-100">
                    <p className="text-lg leading-relaxed">
                      Repeated, document-driven checks where variance in human judgment leads to findings. AudRI standardizes how controls are applied and evidenced.
                    </p>
                  </div>
                )}
              </div>

              {/* Other Document-Heavy Workflows */}
              <div className="border border-gray-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedUseCase(expandedUseCase === 'other-workflows' ? '' : 'other-workflows')}
                  className="w-full px-8 py-6 bg-gray-700 text-white font-bold text-lg flex items-center justify-between hover:bg-gray-600 transition"
                >
                  <span>Other Document-Heavy Audit Workflows</span>
                  <ChevronDown size={24} className={`transition-transform ${expandedUseCase === 'other-workflows' ? 'rotate-180' : ''}`} />
                </button>
                {expandedUseCase === 'other-workflows' && (
                  <div className="px-8 py-6 bg-gray-800 text-gray-100">
                    <p className="text-lg leading-relaxed">
                      Any workflow where your team reads unstructured documents and makes governed decisions at scale.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-[#1F2937] relative overflow-hidden" data-scroll-reveal>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 text-center ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="cta" data-scroll-reveal>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              If your risk sits in <span className="text-[#FF6B35]">unstructured documents</span>, we should talk.
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              AudRI is for teams who believe that <strong>preventing audit failures</strong> starts with <strong>fixing the decision process</strong>, not just speeding up the paperwork.
            </p>
            <div className="bg-[#FFF8F0] rounded-lg p-12 mb-12">
              <p className="text-lg font-semibold mb-6">If you're responsible for:</p>
              <ul className="space-y-4 text-lg mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6B35] font-bold">✓</span>
                  <span>Reducing audit and compliance failures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6B35] font-bold">✓</span>
                  <span>Governing how high-volume decisions are made</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6B35] font-bold">✓</span>
                  <span>Turning expert judgment into a system, not a hope</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700">
                …then a 30-minute conversation will tell you very quickly whether AudRI fits your world.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E55A24] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-fit">
                Let's talk <ArrowRight size={20} />
              </a>
            </div>
            <p className="text-gray-600 text-lg">
              Prefer email? <a href="mailto:keshav@getaudri.com" className="text-[#FF6B35] font-semibold hover:underline">Reply to this message</a> and we'll share a short walkthrough tailored to your use case.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2026 AudRI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
