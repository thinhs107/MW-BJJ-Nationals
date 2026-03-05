'use client'

const items = [
  { highlight: 'Spring 2026', text: 'Round Robin Gi & No-Gi' },
  { text: 'April 18, 2026 · South Oldham High School' },
  { highlight: '10th Year Anniversary', text: 'A Decade of Excellence' },
  { highlight: 'Registration Open', text: 'Sign up on SmoothComp' },
  // { text: 'Contact: (502) 384-7084 · (502) 422-1957' },
]

// Duplicate 3× for a seamless loop on all screen sizes
const all = [...items, ...items, ...items]

export default function Ticker() {
  return (
    <div style={{
      background:'#111111',
      borderTop:'1px solid #222', borderBottom:'1px solid #222',
      overflow:'hidden', whiteSpace:'nowrap', padding:'9px 0',
    }}>
      <div className="animate-ticker" style={{ display:'inline-flex', gap:'48px' }}>
        {all.map((item, i) => (
          <span key={i} style={{
            fontFamily:'var(--font-barlow-condensed)', fontWeight:600,
            fontSize:'12px', letterSpacing:'2px', textTransform:'uppercase',
            color:'#AAAAAA', display:'inline-flex', alignItems:'center', gap:'10px',
            flexShrink: 0,
          }}>
            <span style={{
              width:'4px', height:'4px', background:'#CC0000',
              borderRadius:'50%', display:'inline-block', flexShrink:0,
            }}/>
            {item.highlight && (
              <strong style={{ color:'#CC0000' }}>{item.highlight} </strong>
            )}
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
