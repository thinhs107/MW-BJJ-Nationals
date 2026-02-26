'use client'

const stats = [
  { number:'10',   label:'Years Running' },
  { number:'100+', label:'Competitors' },
  { number:'6+',   label:'Divisions' },
]

export default function About() {
  return (
    <div id="about" className="about-grid reveal">
      {/* Visual */}
      <div
        className="about-visual-panel"
        style={{
          background:'linear-gradient(135deg,#1a0000 0%,#161616 100%)',
          display:'flex', alignItems:'center', justifyContent:'center',
          position:'relative', overflow:'hidden',
        }}
      >
        {/* Emblem */}
        <div style={{ position:'relative', width:'240px', height:'240px', zIndex:1 }}>
          <div className="animate-rotate-cw" style={{
            position:'absolute', inset:0,
            border:'2px solid rgba(204,0,0,0.3)', borderRadius:'50%',
          }}/>
          <div className="animate-rotate-ccw" style={{
            position:'absolute', inset:'22px',
            border:'1px solid rgba(204,0,0,0.15)', borderRadius:'50%',
          }}/>
          <div style={{
            position:'absolute', inset:'44px',
            border:'1px solid rgba(255,255,255,0.05)', borderRadius:'50%',
          }}/>
          <div style={{
            position:'absolute', inset:'62px',
            background:'rgba(204,0,0,0.08)', border:'1px solid rgba(204,0,0,0.2)',
            borderRadius:'50%', display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center', textAlign:'center',
          }}>
            <span style={{ fontFamily:'var(--font-bebas)', fontSize:'46px', color:'#CC0000', lineHeight:1 }}>10</span>
            <span style={{ fontFamily:'var(--font-barlow-condensed)', fontSize:'10px', letterSpacing:'3px', color:'#AAAAAA', textTransform:'uppercase' }}>
              Years Strong
            </span>
          </div>
          {/* Dots */}
          {Array.from({length:12}).map((_,i) => {
            const angle = (i/12)*Math.PI*2
            const r = 108
            return (
              <div key={i} style={{
                position:'absolute',
                width:'5px', height:'5px',
                background:'#CC0000', borderRadius:'50%', opacity:0.5,
                left: 120 + Math.cos(angle)*r - 2.5,
                top:  120 + Math.sin(angle)*r - 2.5,
              }}/>
            )
          })}
        </div>

        {/* Background text */}
        <div style={{
          position:'absolute', bottom:'12px', left:'16px',
          fontFamily:'var(--font-bebas)', fontSize:'80px',
          color:'rgba(204,0,0,0.04)', letterSpacing:'10px',
          lineHeight:1, pointerEvents:'none', userSelect:'none',
        }}>BJJ</div>
      </div>

      {/* Content */}
      <div
        className="about-content-pad"
        style={{ background:'#161616', display:'flex', flexDirection:'column', justifyContent:'center' }}
      >
        <div style={{
          fontFamily:'var(--font-barlow-condensed)', fontWeight:700,
          fontSize:'11px', letterSpacing:'5px', color:'#CC0000',
          textTransform:'uppercase', marginBottom:'16px',
        }}>
          About The Tournament
        </div>

        <h2 style={{
          fontFamily:'var(--font-bebas)',
          fontSize:'clamp(36px,5vw,52px)',
          letterSpacing:'3px', lineHeight:0.95, marginBottom:'20px', color:'#F5F5F5',
        }}>
          Where Warriors <span style={{ color:'#CC0000' }}>Are Made</span>
        </h2>

        <p style={{ fontSize:'15px', lineHeight:1.7, color:'#AAAAAA', marginBottom:'16px' }}>
          The Midwest BJJ Nationals has established itself as one of the most organized and
          respected tournaments in the region. Built on a foundation of excellence, fairness,
          and passion for the gentle art, we've been bringing competitors together for a decade.
        </p>
        <p style={{ fontSize:'15px', lineHeight:1.7, color:'#AAAAAA', marginBottom:'32px' }}>
          Whether you're stepping on the mat for the first time or a seasoned competitor, our
          Spring 2026 event delivers a premier competitive experience in a professional setting.
        </p>

        <div className="about-stats-grid">
          {stats.map(s => (
            <div key={s.label} style={{ borderLeft:'2px solid #CC0000', paddingLeft:'14px' }}>
              <span style={{ fontFamily:'var(--font-bebas)', fontSize:'32px', color:'#F5F5F5', display:'block', lineHeight:1 }}>{s.number}</span>
              <span style={{ fontFamily:'var(--font-barlow-condensed)', fontSize:'10px', letterSpacing:'2px', color:'#AAAAAA', textTransform:'uppercase', marginTop:'2px', display:'block' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
