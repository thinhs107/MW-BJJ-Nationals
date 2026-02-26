'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const stripesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = stripesRef.current
    if (!container) return
    for (let i = 0; i < 8; i++) {
      const stripe = document.createElement('div')
      stripe.style.cssText = `
        position:absolute;width:3px;
        left:${Math.random()*100}%;
        height:${60+Math.random()*40}%;
        background:linear-gradient(to bottom,transparent,rgba(204,0,0,0.3),transparent);
        opacity:0;
        animation:stripeMove ${3+Math.random()*3}s ${Math.random()*4}s infinite linear;
      `
      container.appendChild(stripe)
    }
  }, [])

  return (
    <section style={{
      position:'relative', height:'100vh', minHeight:'600px',
      overflow:'hidden', display:'flex', alignItems:'center',
    }}>
      {/* Background */}
      <div style={{
        position:'absolute', inset:0,
        background:`
          linear-gradient(135deg,rgba(204,0,0,0.15) 0%,transparent 50%),
          linear-gradient(to bottom,transparent 50%,rgba(10,10,10,0.9) 100%),
          radial-gradient(ellipse at 60% 40%,rgba(204,0,0,0.08) 0%,transparent 70%)
        `,
        backgroundColor:'#0A0A0A',
      }}/>

      {/* Stripes */}
      <div ref={stripesRef} style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}/>

      {/* Mat visual — desktop only via CSS class */}
      <div
        className="hero-mat-panel"
        style={{
          position:'absolute', right:'-5%', top:'50%',
          transform:'translateY(-50%)', width:'55%', height:'80%',
          background:'linear-gradient(135deg,#161616 0%,#1a0000 100%)',
          clipPath:'polygon(15% 0%,100% 0%,100% 100%,0% 100%)',
          overflow:'hidden',
        }}
      >
        <div className="animate-grid-pulse" style={{
          position:'absolute', inset:0,
          backgroundImage:`
            linear-gradient(rgba(204,0,0,0.08) 1px,transparent 1px),
            linear-gradient(90deg,rgba(204,0,0,0.08) 1px,transparent 1px)
          `,
          backgroundSize:'60px 60px',
        }}/>
        <div style={{
          position:'absolute', width:'500px', height:'500px',
          border:'2px solid rgba(204,0,0,0.2)', borderRadius:'50%',
          top:'50%', left:'50%',
          animation:'rotateSlow 20s linear infinite',
        }}>
          <div style={{ position:'absolute', inset:'30px', border:'1px solid rgba(204,0,0,0.15)', borderRadius:'50%' }}/>
        </div>
        <div style={{
          position:'absolute', top:'50%', left:'50%',
          transform:'translate(-20%,-50%)',
          width:'180px', height:'180px',
          border:'1px solid rgba(204,0,0,0.3)', borderRadius:'50%',
          display:'flex', alignItems:'center', justifyContent:'center',
          flexDirection:'column', background:'rgba(204,0,0,0.05)',
        }}>
          <span style={{ fontFamily:'var(--font-bebas)', fontSize:'72px', color:'#CC0000', lineHeight:1 }}>10</span>
          <span style={{ fontFamily:'var(--font-barlow-condensed)', fontSize:'11px', letterSpacing:'3px', color:'#AAAAAA', textTransform:'uppercase' }}>Years</span>
        </div>
      </div>

      {/* Content */}
      <div className="hero-content-wrap" style={{ position:'relative', zIndex:10, marginTop:'64px' }}>
        {/* Badge */}
        <div className="animate-fade-up delay-200" style={{
          display:'inline-flex', alignItems:'center', gap:'10px',
          background:'rgba(204,0,0,0.15)', border:'1px solid rgba(204,0,0,0.4)',
          padding:'7px 16px', marginBottom:'22px',
          fontFamily:'var(--font-barlow-condensed)', fontWeight:700,
          fontSize:'11px', letterSpacing:'4px', textTransform:'uppercase',
          color:'#CC0000',
          clipPath:'polygon(0 0,calc(100% - 8px) 0,100% 100%,8px 100%)',
        }}>
          <span className="animate-blink" style={{
            width:'6px', height:'6px', background:'#CC0000',
            borderRadius:'50%', display:'inline-block', flexShrink:0,
          }}/>
          ⚡ 10th Year Anniversary
        </div>

        {/* Title */}
        <h1 className="animate-fade-up delay-400" style={{
          fontFamily:'var(--font-bebas)',
          fontSize:'clamp(60px,12vw,130px)',
          lineHeight:0.9, letterSpacing:'4px', marginBottom:'18px',
        }}>
          <span style={{ color:'#CC0000', display:'block' }}>Midwest</span>
          <span style={{ color:'#F5F5F5', display:'block' }}>BJJ</span>
          <span style={{
            WebkitTextStroke:'2px rgba(255,255,255,0.15)',
            color:'transparent', display:'block',
            fontSize:'clamp(40px,8vw,80px)',
          }}>
            Nationals
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up delay-600" style={{
          fontFamily:'var(--font-barlow-condensed)', fontSize:'clamp(14px,3vw,18px)',
          fontWeight:400, letterSpacing:'2px', color:'#AAAAAA',
          marginBottom:'32px', textTransform:'uppercase',
        }}>
          <strong style={{ color:'#C9A84C', fontWeight:700 }}>April 18, 2026</strong>
          {' '}· South Oldham HS, Louisville KY
        </p>

        {/* Buttons */}
        <div className="hero-actions animate-fade-up delay-800">
          <a
            href="https://smoothcomp.com/en/event/29767"
            target="_blank" rel="noopener noreferrer"
            className="hero-btn"
            style={{
              background:'#CC0000', color:'white', textDecoration:'none',
              fontFamily:'var(--font-barlow-condensed)', fontWeight:800,
              fontSize:'14px', letterSpacing:'3px', textTransform:'uppercase',
              padding:'15px 36px',
              clipPath:'polygon(0 0,calc(100% - 12px) 0,100% 100%,12px 100%)',
              transition:'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background='#FF1A1A')}
            onMouseLeave={e => (e.currentTarget.style.background='#CC0000')}
          >
            Register Now
          </a>
          <a
            href="#about"
            onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({behavior:'smooth'}) }}
            className="hero-btn"
            style={{
              background:'transparent', color:'#F5F5F5', textDecoration:'none',
              fontFamily:'var(--font-barlow-condensed)', fontWeight:700,
              fontSize:'14px', letterSpacing:'3px', textTransform:'uppercase',
              padding:'13px 32px', border:'1px solid rgba(255,255,255,0.25)',
              clipPath:'polygon(0 0,calc(100% - 12px) 0,100% 100%,12px 100%)',
              transition:'border-color 0.2s,color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='#CC0000'; e.currentTarget.style.color='#CC0000' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.25)'; e.currentTarget.style.color='#F5F5F5' }}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:'absolute', bottom:'32px', left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:'8px',
        opacity:0.4, zIndex:10,
      }}>
        <span style={{ fontFamily:'var(--font-barlow-condensed)', fontSize:'10px', letterSpacing:'4px', color:'#AAAAAA', textTransform:'uppercase' }}>
          Scroll
        </span>
        <div style={{ width:'1px', height:'36px', background:'linear-gradient(to bottom,#CC0000,transparent)' }}/>
      </div>
    </section>
  )
}
