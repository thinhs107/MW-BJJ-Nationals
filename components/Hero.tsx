'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const stackedImages = [
  {
    src: '/Dalton-Crew-GracieBJJ.jpg',
    alt: 'Dalton BJJ crew at Gracie BJJ – Midwest BJJ Nationals competitors',
  },
  {
    src: '/Scott-Smith-Director-MW.jpg',
    alt: 'Scott Smith, director of Midwest BJJ Nationals, 10th anniversary event',
  },
  {
    src: '/Max-Fighting-BJJ.jpg',
    alt: 'Max competing in BJJ match – Midwest BJJ Nationals Louisville KY',
  },
]

// Returns transform/zIndex/opacity for each card relative to which is active
function getCardStyle(index: number, activeIndex: number, total: number) {
  const offset = (index - activeIndex + total) % total
  if (offset === 0) {
    // Front / active
    return {
      transform: 'translateX(0px) translateY(0px) rotate(0deg) scale(1)',
      zIndex: 3,
      opacity: 1,
      filter: 'brightness(1)',
    }
  } else if (offset === 1) {
    // Right back
    return {
      transform: 'translateX(70px) translateY(24px) rotate(6deg) scale(0.88)',
      zIndex: 2,
      opacity: 0.7,
      filter: 'brightness(0.6)',
    }
  } else {
    // Left back
    return {
      transform: 'translateX(-70px) translateY(24px) rotate(-6deg) scale(0.88)',
      zIndex: 1,
      opacity: 0.7,
      filter: 'brightness(0.6)',
    }
  }
}

export default function Hero() {
  const stripesRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Animated background stripes
  useEffect(() => {
    const container = stripesRef.current
    if (!container) return
    for (let i = 0; i < 8; i++) {
      const stripe = document.createElement('div')
      stripe.style.cssText = `
        position:absolute;width:3px;
        left:${Math.random() * 100}%;
        height:${60 + Math.random() * 40}%;
        background:linear-gradient(to bottom,transparent,rgba(204,0,0,0.3),transparent);
        opacity:0;
        animation:stripeMove ${3 + Math.random() * 3}s ${Math.random() * 4}s infinite linear;
      `
      container.appendChild(stripe)
    }
  }, [])

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % stackedImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const CardStack = ({ size }: { size: 'desktop' | 'mobile' }) => {
    const w = size === 'desktop' ? '400px' : '260px'
    const h = size === 'desktop' ? '520px' : '300px'
    return (
      <div style={{ position: 'relative', width: w, height: h }}>
        {stackedImages.map((img, idx) => {
          const cs = getCardStyle(idx, activeIndex, stackedImages.length)
          return (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              style={{
                position: 'absolute',
                inset: 0,
                cursor: 'pointer',
                borderRadius: '8px',
                overflow: 'hidden',
                border: cs.zIndex === 3 ? '2px solid rgba(204,0,0,0.5)' : '2px solid rgba(204,0,0,0.15)',
                boxShadow: cs.zIndex === 3
                  ? '0 28px 70px rgba(0,0,0,0.8), 0 0 0 2px rgba(204,0,0,0.3)'
                  : '0 14px 40px rgba(0,0,0,0.6)',
                transition:
                  'transform 0.6s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease, filter 0.5s ease, box-shadow 0.4s ease',
                ...cs,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={size === 'desktop' ? '400px' : '260px'}
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority={idx === 0}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom,transparent 55%,rgba(10,10,10,0.6) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: 'linear-gradient(90deg,#CC0000,transparent)',
                  opacity: cs.zIndex === 3 ? 1 : 0.3,
                }}
              />
            </div>
          )
        })}
      </div>
    )
  }

  const DotIndicators = () => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
      {stackedImages.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setActiveIndex(idx)}
          aria-label={`View image ${idx + 1}`}
          style={{
            width: idx === activeIndex ? '22px' : '6px',
            height: '6px',
            borderRadius: '3px',
            background: idx === activeIndex ? '#CC0000' : 'rgba(255,255,255,0.3)',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'width 0.4s ease, background 0.3s ease',
          }}
        />
      ))}
    </div>
  )

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(135deg,rgba(204,0,0,0.15) 0%,transparent 50%),
            linear-gradient(to bottom,transparent 50%,rgba(10,10,10,0.9) 100%),
            radial-gradient(ellipse at 60% 40%,rgba(204,0,0,0.08) 0%,transparent 70%)
          `,
          backgroundColor: '#0A0A0A',
        }}
      />

      {/* Stripes */}
      <div ref={stripesRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} />

      {/* ── Desktop panel ── */}
      <div
        className="hero-mat-panel"
        style={{
          position: 'absolute',
          right: '-2%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '48%',
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* subtle grid */}
        <div
          className="animate-grid-pulse"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(204,0,0,0.06) 1px,transparent 1px),
              linear-gradient(90deg,rgba(204,0,0,0.06) 1px,transparent 1px)
            `,
            backgroundSize: '60px 60px',
            opacity: 0.5,
          }}
        />
        {/* glow */}
        <div
          style={{
            position: 'absolute',
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(204,0,0,0.18) 0%,transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <CardStack size="desktop" />
        <DotIndicators />

        {/* 10-year badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '8%',
            right: '10%',
            background: 'rgba(10,10,10,0.85)',
            border: '1px solid rgba(204,0,0,0.45)',
            backdropFilter: 'blur(8px)',
            padding: '10px 18px',
            clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 100%,8px 100%)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '38px', color: '#CC0000', lineHeight: 1 }}>
            10
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '9px', letterSpacing: '3px', color: '#AAAAAA', textTransform: 'uppercase' }}>
              Year
            </span>
            <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '9px', letterSpacing: '3px', color: '#CC0000', textTransform: 'uppercase', fontWeight: 700 }}>
              Anniversary
            </span>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="hero-content-wrap" style={{ position: 'relative', zIndex: 10, marginTop: '64px' }}>
        {/* Badge */}
        <div
          className="animate-fade-up delay-200"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(204,0,0,0.15)', border: '1px solid rgba(204,0,0,0.4)',
            padding: '7px 16px', marginBottom: '22px',
            fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
            fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase',
            color: '#CC0000',
            clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 100%,8px 100%)',
          }}
        >
          <span
            className="animate-blink"
            style={{ width: '6px', height: '6px', background: '#CC0000', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }}
          />
          ⚡ 10th Year Anniversary
        </div>

        {/* Title */}
        <h1
          className="animate-fade-up delay-400"
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(60px,12vw,130px)',
            lineHeight: 0.9, letterSpacing: '4px', marginBottom: '18px',
          }}
        >
          <span style={{ color: '#CC0000', display: 'block' }}>Midwest</span>
          <span style={{ color: '#F5F5F5', display: 'block' }}>BJJ</span>
          <span
            style={{
              WebkitTextStroke: '2px rgba(255,255,255,0.15)',
              color: 'transparent', display: 'block',
              fontSize: 'clamp(40px,8vw,80px)',
            }}
          >
            Nationals
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up delay-600"
          style={{
            fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(14px,3vw,18px)',
            fontWeight: 400, letterSpacing: '2px', color: '#AAAAAA',
            marginBottom: '32px', textTransform: 'uppercase',
          }}
        >
          <strong style={{ color: '#C9A84C', fontWeight: 700 }}>April 18, 2026</strong>
          {' '}· South Oldham HS, Louisville KY
        </p>

        {/* Buttons */}
        <div className="hero-actions animate-fade-up delay-800">
          <a
            href="https://smoothcomp.com/en/event/29767"
            target="_blank" rel="noopener noreferrer"
            className="hero-btn"
            style={{
              background: '#CC0000', color: 'white', textDecoration: 'none',
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 800,
              fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase',
              padding: '15px 36px',
              clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 100%,12px 100%)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#FF1A1A')}
            onMouseLeave={e => (e.currentTarget.style.background = '#CC0000')}
          >
            Register Now
          </a>
          <a
            href="#about"
            onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="hero-btn"
            style={{
              background: 'transparent', color: '#F5F5F5', textDecoration: 'none',
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
              fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase',
              padding: '13px 32px', border: '1px solid rgba(255,255,255,0.25)',
              clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 100%,12px 100%)',
              transition: 'border-color 0.2s,color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#CC0000'; e.currentTarget.style.color = '#CC0000' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#F5F5F5' }}
          >
            Learn More
          </a>
        </div>

        {/* ── Mobile carousel ── */}
        <div
          className="hero-mobile-stack"
          style={{ display: 'none', marginTop: '36px' }}
        >
          <CardStack size="mobile" />
          <DotIndicators />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          opacity: 0.4, zIndex: 10,
        }}
      >
        <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '10px', letterSpacing: '4px', color: '#AAAAAA', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom,#CC0000,transparent)' }} />
      </div>

      {/* Responsive */}
      <style>{`
        .hero-mat-panel { display: flex !important; }
        .hero-mobile-stack { display: none !important; }
        .hero-content-wrap { padding-left: clamp(24px,8vw,120px); max-width: 55%; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .hero-mat-panel { display: none !important; }
          .hero-mobile-stack { display: block !important; }
          .hero-content-wrap { padding-left: 20px; padding-right: 20px; max-width: 100%; }
          .hero-actions { flex-direction: column; align-items: flex-start; }
          .hero-btn { display: block; text-align: center; }
        }
      `}</style>
    </section>
  )
}