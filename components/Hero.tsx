'use client'

import { useEffect, useState } from 'react'

// Drop new photos in /public and add them here — order doesn't matter,
// the stack auto-rotates through whatever's in this array.
// `position` is optional — it controls what part of the photo stays in
// frame when it's cropped to fit the tall card (CSS object-position).
// Default is 'center center'. Use 'center top' for a photo where the
// important part is near the top (e.g. a face close to the top edge).
const stackedImages = [
  {
    src: '/mwbjj-kid-figther.jpg',
    alt: 'Describe the photo for accessibility / SEO',
    position: 'center center',
  },
  {
    src: '/hero-director-portrait.png',
    alt: 'Tournament director, black and white portrait – Midwest BJJ Nationals 10th Anniversary',
    position: 'center center',
  },
  {
    src: '/hero-fighter-dust.png',
    alt: 'BJJ competitor kneeling in a dramatic dust portrait – Midwest BJJ Nationals',
    position: 'center top',
  },
]

// Returns transform/zIndex/opacity for each card relative to which is active
function getCardStyle(index: number, activeIndex: number, total: number) {
  const offset = (index - activeIndex + total) % total
  if (offset === 0) {
    // Front / active
    return {
      transform: 'translateX(0px) translateY(0px) scale(1)',
      zIndex: 3,
      opacity: 1,
      filter: 'brightness(1)',
    }
  } else if (offset === 1) {
    return {
      transform: 'translateX(40px) translateY(16px) scale(0.94)',
      zIndex: 2,
      opacity: 0,
      filter: 'brightness(0.85)',
    }
  } else {
    return {
      transform: 'translateX(-40px) translateY(16px) scale(0.94)',
      zIndex: 1,
      opacity: 0,
      filter: 'brightness(0.85)',
    }
  }
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-rotate every 4 seconds — the fade handles the transition now,
  // there's nothing to "stack" behind the active photo anymore.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % stackedImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const CardStack = ({ size }: { size: 'desktop' | 'mobile' }) => {
    const w = size === 'desktop' ? '620px' : '340px'
    const h = size === 'desktop' ? '760px' : '420px'
    // Feathers every edge of the *actual rendered photo* into black.
    // Applied directly to the <img>, so it hugs the photo's real
    // boundary no matter its aspect ratio — no mismatched box.
    const edgeMask =
      'linear-gradient(to right, transparent 0%, #000 24%, #000 76%, transparent 100%),' +
      'linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)'
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.9s ease, transform 0.9s ease, filter 0.9s ease',
                ...cs,
              }}
            >
              {/* Plain <img>, sized by its own aspect ratio (maxHeight/
                  maxWidth) instead of being forced to fill a box that
                  doesn't match its shape — that mismatch was what left
                  a hard-edged rectangle around it. */}
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  display: 'block',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectPosition: img.position || 'center center',
                  WebkitMaskImage: edgeMask,
                  maskImage: edgeMask,
                  WebkitMaskComposite: 'source-in',
                  maskComposite: 'intersect',
                  filter: 'brightness(0.94)',
                }}
              />
            </div>
          )
        })}
      </div>
    )
  }

  const DotIndicators = () => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
      {stackedImages.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setActiveIndex(idx)}
          aria-label={`View image ${idx + 1}`}
          style={{
            width: idx === activeIndex ? '22px' : '6px',
            height: '6px',
            borderRadius: '3px',
            background: idx === activeIndex ? '#C8102E' : 'rgba(255,255,255,0.25)',
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
        minHeight: '640px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: '#000000',
      }}
    >
      {/* Strict black base — no color tint, just the page background. */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#000000',
        }}
      />

      {/* ── Desktop panel ── */}
      <div
        className="hero-mat-panel"
        style={{
          position: 'absolute',
          right: '-4%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '54%',
          height: '92%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* subtle grid, barely visible on black — just texture */}
        <div
          className="animate-grid-pulse"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),
              linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)
            `,
            backgroundSize: '60px 60px',
            opacity: 0.5,
          }}
        />

        <CardStack size="desktop" />
        <DotIndicators />

        {/* 11-year badge */}
        {/* 11-year badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '6%',
            right: '6%',
            maxWidth: '90%',
            background: 'rgba(10,10,10,0.7)',
            border: '1px solid rgba(200,16,46,0.45)',
            backdropFilter: 'blur(6px)',
            padding: '10px 18px',
            clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 100%,8px 100%)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(18px, 2.4vw, 28px)',
              color: '#C8102E',
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            Celebrating 11 Years of MWBJJN
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="hero-content-wrap" style={{ position: 'relative', zIndex: 10, marginTop: '64px' }}>
        {/* Badge */}
        <div
          className="animate-fade-up delay-200"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(200,16,46,0.12)', border: '1px solid rgba(200,16,46,0.4)',
            padding: '7px 16px', marginBottom: '22px',
            fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
            fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase',
            color: '#E8112F',
            clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 100%,8px 100%)',
          }}
        >
          <span
            className="animate-blink"
            style={{ width: '6px', height: '6px', background: '#E8112F', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }}
          />
          11th Year
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
          <span style={{ color: '#E8112F', display: 'block' }}>Midwest</span>
          <span style={{ color: '#FFFFFF', display: 'block' }}>BJJ</span>
          <span
            style={{
              WebkitTextStroke: '2px rgba(255,255,255,0.18)',
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
          <strong style={{ color: '#C9A84C', fontWeight: 700 }}>October 24, 2026</strong>
          {' '}· Marion C. Moore School, Louisville KY
        </p>

        {/* Buttons */}
        <div className="hero-actions animate-fade-up delay-800">
          <a
            href="https://smoothcomp.com/en/event/34213"
            target="_blank" rel="noopener noreferrer"
            className="hero-btn"
            style={{
              background: '#C8102E', color: '#FFFFFF', textDecoration: 'none',
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 800,
              fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase',
              padding: '15px 36px',
              clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 100%,12px 100%)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E8112F')}
            onMouseLeave={e => (e.currentTarget.style.background = '#C8102E')}
          >
            Register Now
          </a>
          <a
            href="#about"
            onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="hero-btn"
            style={{
              background: 'transparent', color: '#FFFFFF', textDecoration: 'none',
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
              fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase',
              padding: '13px 32px', border: '1px solid rgba(255,255,255,0.3)',
              clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 100%,12px 100%)',
              transition: 'border-color 0.2s,color 0.2s,background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8112F'; e.currentTarget.style.color = '#E8112F' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#FFFFFF' }}
          >
            Learn More
          </a>
        </div>

        {/* QR Code — needs a white card since it's a dark background now */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '24px', width: 'fit-content' }}>
          <img
            src="/qrcode.png"
            alt="Scan to visit mwbjjn.com"
            width={100}
            height={100}
            style={{ display: 'block', borderRadius: '4px', background: '#FFFFFF', padding: '6px' }}
          />
          <p style={{ fontSize: '11px', color: '#777777', letterSpacing: '2px', marginTop: '6px', textTransform: 'uppercase', fontFamily: 'var(--font-barlow-condensed)' }}>
            Scan to register
          </p>
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
          opacity: 0.5, zIndex: 10,
        }}
      >
        <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '10px', letterSpacing: '4px', color: '#AAAAAA', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom,#C8102E,transparent)' }} />
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