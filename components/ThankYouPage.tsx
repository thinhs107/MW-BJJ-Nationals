'use client'
import { useState, useEffect } from 'react'

// ── CLOUDINARY CONFIG ──────────────────────────────────────────────────────
const CLOUD_NAME  = 'dxuur7iiv'
const FOLDER_NAME = 'bjj-2026'

interface CloudinaryResource {
  public_id: string
}

export default function ThankYouPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [photos,   setPhotos]   = useState<string[]>([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState<string | null>(null)
  const [mounted,  setMounted]  = useState(false)

  // Prevent hydration mismatch — only render dynamic content on client
  useEffect(() => { setMounted(true) }, [])

  // Auto-fetch all photos from Cloudinary folder
  useEffect(() => {
    if (!mounted) return
    async function fetchPhotos() {
      try {
        setLoading(true)
        const res = await fetch(
          `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${FOLDER_NAME}.json`
        )
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        const urls = (data.resources as CloudinaryResource[]).map(r =>
          `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_800,q_auto,f_auto/${r.public_id}`
        )
        setPhotos(urls)
      } catch (err) {
        setError('Could not load photos from Cloudinary.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchPhotos()
  }, [mounted])

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        :root {
          --red:   #c8102e;
          --white: #f4f1ee;
          --dark:  #080808;
          --mid:   #0f0f0f;
        }

        .ty-letter { outline: none; }

        .ty-hero-lines {
          position: absolute; top: -20%; left: -20%;
          width: 140%; height: 140%;
          background: repeating-linear-gradient(
            -45deg,
            transparent, transparent 58px,
            rgba(200,16,46,0.03) 58px, rgba(200,16,46,0.03) 59px
          );
          pointer-events: none;
        }

        .photo-grid {
          columns: 3; column-gap: 10px;
          max-width: 1100px; margin: 0 auto;
        }
        @media (max-width: 700px) { .photo-grid { columns: 2; } }

        .photo-item {
          break-inside: avoid; margin-bottom: 10px;
          overflow: hidden; border-radius: 2px;
          position: relative; cursor: pointer;
          background: #1a1a1a;
        }
        .photo-item img {
          width: 100%; display: block;
          transition: transform 0.45s cubic-bezier(.25,.46,.45,.94), filter 0.45s;
          filter: grayscale(0.08) brightness(0.92);
        }
        .photo-item:hover img {
          transform: scale(1.05);
          filter: grayscale(0) brightness(1.06);
        }
        .photo-item::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: #c8102e;
          transform: scaleX(0);
          transition: transform 0.35s cubic-bezier(.25,.46,.45,.94);
        }
        .photo-item:hover::after { transform: scaleX(1); }

        @keyframes bob {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(7px); }
        }
        .scroll-cue { animation: bob 2.2s ease-in-out infinite; }
        .scroll-cue:hover { opacity: 0.9 !important; }
      `}</style>

      {/* ══════════════════════════════════════════════════
          THANK YOU HERO
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 55%, #1a0208 0%, #080808 68%)',
        paddingBottom: 110,
      }}>

        {/* Grain */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: 0.3,
        }} aria-hidden />

        <div className="ty-hero-lines" aria-hidden />

        <div style={{
          position: 'relative', zIndex: 2,
          width: '100%', maxWidth: 860,
          padding: '60px 40px 0',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', textAlign: 'center',
        }}>

          {/* ── PORTRAIT STACK ── */}
          <div style={{ position: 'relative', width: 520, height: 380, marginBottom: 52, flexShrink: 0 }}>

 

            {/* Center client photo */}
            <div style={{
              position: 'absolute',
              top: 0, left: '50%',
              transform: 'translateX(-50%)',
              width: 210, height: '100%',
              borderRadius: 3, overflow: 'hidden', opacity: 0.75,
              border: '1px solid rgba(200,16,46,0.25)',
            }}>
              <img
                src="/ScottSmith.jpg"
                alt="Scott Smith"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.1) brightness(1.05)' }}
              />
            </div>


          </div>
          {/* / portrait stack */}

          {/* Eyebrow */}
          <p style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: '0.28em', fontSize: 12,
            color: '#c8102e', marginBottom: 16, opacity: 0.9,
          }}>
            MIDWEST BJJ NATIONALS · SPRING 2026
          </p>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(58px, 11vw, 108px)',
            letterSpacing: '0.05em', lineHeight: 0.88,
            color: '#f4f1ee', marginBottom: 30,
          }}>
            THANK<br />
            <span style={{ display: 'block', color: '#c8102e', textShadow: '0 0 40px rgba(200,16,46,0.35)' }}>
              YOU
            </span>
          </h1>

          {/* Diamond divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%', maxWidth: 480, marginBottom: 30 }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #c8102e)' }} />
            <div style={{ width: 6, height: 6, background: '#c8102e', transform: 'rotate(45deg)', flexShrink: 0 }} />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #c8102e, transparent)' }} />
          </div>

          {/* Letter — suppressHydrationWarning fixes the Next.js hydration error on contentEditable */}
          <p
            className="ty-letter"
            contentEditable
            suppressContentEditableWarning
            suppressHydrationWarning
            style={{
              maxWidth: 600,
              fontSize: 'clamp(17px, 2.4vw, 20px)',
              lineHeight: 1.78,
              color: 'rgba(244,241,238,0.78)',
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontWeight: 300,
            }}
          >
            To every competitor, coach, parent, and supporter who stepped onto the mats with us —{' '}
            <em style={{ color: '#e8a0a0', fontStyle: 'italic' }}>thank you</em>. Ten years of
            this tournament have been built by people exactly like you. Your dedication, your grit,
            and your spirit of competition are what make the Midwest BJJ Nationals something truly
            special. We hope to see you on the mats again very soon.
          </p>

          {/* Signature */}
          <p style={{
            marginTop: 44,
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: '0.18em', fontSize: 13,
            color: 'rgba(200,16,46,0.75)',
          }}>
            — THE MIDWEST BJJ NATIONALS TEAM
          </p>

        </div>

        {/* Scroll cue */}
        <button
          className="scroll-cue"
          onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            position: 'absolute', bottom: 28, left: '50%',
            transform: 'translateX(-50%)', zIndex: 3,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 8,
            background: 'none', border: 'none', cursor: 'pointer',
            opacity: 0.45,
          }}
        >
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.22em', fontSize: 10, color: '#c8102e' }}>
            Tournament Photos
          </span>
          <svg width="16" height="16" fill="none" stroke="#c8102e" strokeWidth="2" viewBox="0 0 24 24">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

      </section>

      {/* ══════════════════════════════════════════════════
          PHOTO GALLERY — auto-fetched from Cloudinary
      ══════════════════════════════════════════════════ */}
      <section id="gallery" style={{ background: '#0f0f0f', padding: '0 40px 100px' }}>

        <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, #c8102e, transparent)', marginBottom: 64 }} />

        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.3em', fontSize: 11, color: '#c8102e', marginBottom: 10 }}>
            SPRING 2026 · LOUISVILLE, KY
          </p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 6vw, 66px)', letterSpacing: '0.06em', color: '#f4f1ee' }}>
            TOURNAMENT PHOTOS
          </h2>
        </div>

        {/* Only render gallery on client to avoid hydration mismatch */}
        {!mounted ? null : loading ? (
          <p style={{ textAlign: 'center', color: 'rgba(244,241,238,0.35)', fontFamily: "'Crimson Pro', Georgia, serif", fontStyle: 'italic', fontSize: 16, padding: '40px 0' }}>
            Loading photos…
          </p>
        ) : error ? (
          <p style={{ textAlign: 'center', color: '#c8102e', fontFamily: "'Crimson Pro', Georgia, serif", fontSize: 15, padding: '40px 0' }}>
            {error}
          </p>
        ) : photos.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'rgba(244,241,238,0.2)', fontFamily: "'Crimson Pro', Georgia, serif", fontStyle: 'italic', fontSize: 16, padding: '40px 0' }}>
            No photos found in the <strong>bjj-2026</strong> folder.
          </p>
        ) : (
          <div className="photo-grid">
            {photos.map((src, i) => (
              <div key={i} className="photo-item" onClick={() => setLightbox(src)}>
                <img src={src} alt={`Tournament photo ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        )}

        <div>
            <p style={{ textAlign: 'center', color: 'rgba(244,241,238,0.2)', fontFamily: "'Crimson Pro', Georgia, serif", fontStyle: 'italic', fontSize: 16, padding: '40px 0' }}>
            Captured by Quincy Brents — check out his work on Facebook: facebook.com/qbrents
          </p>
        </div>

      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.94)',
            zIndex: 1000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(10px)',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: 22, right: 26,
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: '0.2em', fontSize: 12,
              color: 'rgba(244,241,238,0.45)',
              background: 'none', border: '1px solid rgba(244,241,238,0.15)',
              padding: '8px 16px', cursor: 'pointer',
            }}
          >
            CLOSE ✕
          </button>
          <img
            src={lightbox}
            alt="Full size"
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '88vh', objectFit: 'contain', borderRadius: 2 }}
          />
        </div>
      )}
    </>
  )
}