'use client'

export default function RegisterCTA() {
  return (
    <div
      className="register-cta-outer reveal"
      style={{
        background:'linear-gradient(135deg,#8B0000 0%,#CC0000 50%,#aa0000 100%)',
        position:'relative', overflow:'hidden',
        clipPath:'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))',
      }}
    >
      {/* Pattern */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:`repeating-linear-gradient(-45deg,transparent,transparent 30px,rgba(0,0,0,0.05) 30px,rgba(0,0,0,0.05) 60px)`,
      }}/>

      {/* Ghost text */}
      <div
        className="register-ghost-text"
        style={{
          position:'absolute', right:'60px', top:'50%', transform:'translateY(-50%)',
          fontFamily:'var(--font-bebas)', fontSize:'140px',
          color:'rgba(0,0,0,0.15)', letterSpacing:'8px',
          pointerEvents:'none', userSelect:'none', whiteSpace:'nowrap', lineHeight:1,
        }}
      >
        REGISTER
      </div>

      <div className="register-cta-inner" style={{ position:'relative', zIndex:1 }}>
        <div>
          <div
            className="register-headline"
            style={{
              fontFamily:'var(--font-bebas)', letterSpacing:'4px',
              color:'white', lineHeight:0.95, marginBottom:'10px',
            }}
          >
            Ready to Compete?<br/>Sign Up Now.
          </div>
          <div style={{ fontFamily:'var(--font-barlow)', fontSize:'15px', color:'rgba(255,255,255,0.85)' }}>
            Secure your spot for April 18, 2026 via SmoothComp
          </div>
        </div>

        <a
          href="https://smoothcomp.com/en/event/29767"
          target="_blank" rel="noopener noreferrer"
          style={{
            display:'inline-block', background:'white', color:'#CC0000', textDecoration:'none',
            fontFamily:'var(--font-barlow-condensed)', fontWeight:800,
            fontSize:'14px', letterSpacing:'3px', textTransform:'uppercase',
            padding:'18px 40px', flexShrink:0,
            clipPath:'polygon(0 0,calc(100% - 14px) 0,100% 100%,14px 100%)',
            whiteSpace:'nowrap', transition:'transform 0.2s,box-shadow 0.2s',
            boxShadow:'0 4px 30px rgba(0,0,0,0.3)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform='scale(1.04)'; e.currentTarget.style.boxShadow='0 8px 40px rgba(0,0,0,0.4)' }}
          onMouseLeave={e => { e.currentTarget.style.transform='scale(1)';    e.currentTarget.style.boxShadow='0 4px 30px rgba(0,0,0,0.3)' }}
        >
          Register on SmoothComp →
        </a>
      </div>
    </div>
  )
}
