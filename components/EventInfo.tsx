'use client'

// Shared SectionDivider used across sections
export function SectionDivider({ label }: { label: string }) {
  return (
    <div className="section-divider-wrap">
      <div style={{ flex:1, height:'1px', background:'linear-gradient(to right,transparent,#222)' }}/>
      <span style={{
        fontFamily:'var(--font-barlow-condensed)', fontWeight:700,
        fontSize:'11px', letterSpacing:'5px', color:'#CC0000',
        textTransform:'uppercase', whiteSpace:'nowrap',
      }}>
        {label}
      </span>
      <div style={{ flex:1, height:'1px', background:'linear-gradient(to left,transparent,#222)' }}/>
    </div>
  )
}

// Shared SectionTitle
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-header-wrap reveal">
      <h2 style={{
        fontFamily:'var(--font-bebas)',
        fontSize:'clamp(40px,7vw,80px)',
        letterSpacing:'4px', lineHeight:0.95, color:'#F5F5F5',
      }}>
        {children}
      </h2>
    </div>
  )
}

const cards = [
  {
    num: '01', icon: '📅', title: 'Date',
    main: 'April 18\n2026',
    sub: 'Saturday · All Day\nDoors open 7:00 AM',
  },
  {
    num: '02', icon: '📍', title: 'Location',
    main: 'South Oldham\nHigh School',
    sub: 'Louisville, Kentucky\nFull mat facility',
  },
  {
    num: '03', icon: '🥋', title: 'Format',
    main: 'Round Robin\nGi & No-Gi',
    sub: 'Max matches guaranteed\nAll skill levels welcome',
  },
]

function InfoCard({ num, icon, title, main, sub }: typeof cards[0]) {
  return (
    <div
      style={{
        background:'#161616', padding:'32px 28px',
        position:'relative', overflow:'hidden', transition:'transform 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform='translateY(-4px)')}
      onMouseLeave={e => (e.currentTarget.style.transform='translateY(0)')}
    >
      <div style={{
        position:'absolute', top:'8px', right:'16px',
        fontFamily:'var(--font-bebas)', fontSize:'72px',
        color:'rgba(204,0,0,0.08)', lineHeight:1, pointerEvents:'none', userSelect:'none',
      }}>{num}</div>

      <div style={{
        width:'44px', height:'44px', background:'rgba(204,0,0,0.1)',
        border:'1px solid rgba(204,0,0,0.3)', display:'flex',
        alignItems:'center', justifyContent:'center', marginBottom:'16px',
        fontSize:'20px',
        clipPath:'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
      }}>
        {icon}
      </div>

      <div style={{
        fontFamily:'var(--font-barlow-condensed)', fontWeight:700,
        fontSize:'10px', letterSpacing:'4px', color:'#CC0000',
        textTransform:'uppercase', marginBottom:'8px',
      }}>{title}</div>

      <div style={{
        fontFamily:'var(--font-bebas)', fontSize:'28px', letterSpacing:'2px',
        color:'#F5F5F5', lineHeight:1.1, marginBottom:'6px', whiteSpace:'pre-line',
      }}>{main}</div>

      <div style={{
        fontSize:'13px', color:'#AAAAAA', lineHeight:1.5, whiteSpace:'pre-line',
      }}>{sub}</div>
    </div>
  )
}

export default function EventInfo() {
  return (
    <>
      <SectionDivider label="Tournament Details" />
      <div className="event-info-grid reveal">
        {cards.map(c => <InfoCard key={c.num} {...c} />)}
      </div>
    </>
  )
}
