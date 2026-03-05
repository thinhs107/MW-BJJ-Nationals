'use client'

const cols = {
  Tournament: [
    { label:'About',     href:'#about',     internal:true },
    { label:'Divisions', href:'#divisions', internal:true },
    { label:'Rules',     href:'#rules',     internal:true },
    { label:'Register',  href:'https://smoothcomp.com/en/event/29767' },
  ],
  Rules: [
    { label:'Gi Rules',    href:'https://mwbjjn.com/rules/' },
    { label:'No-Gi Rules', href:'https://mwbjjn.com/no-gi-rules/' },
    { label:'Kids No-Gi',  href:'https://mwbjjn.com/kids-no-gi/' },
    { label:'Teen 16-17',  href:'https://mwbjjn.com/16-17-age-no-gi/' },
    { label:'Adult No-Gi', href:'https://mwbjjn.com/adult-no-gi/' },
  ],
  Contact: [
    { label:'(502) 384-7084', href:'tel:5023847084' },
    // { label:'(502) 422-1957', href:'tel:5024221957' },
  ],
}

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior:'smooth' })
    }
  }

  return (
    <footer style={{ background:'#111111', borderTop:'1px solid #222' }}>
      <div className="footer-wrap">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand-col">
            <div style={{
              fontFamily:'var(--font-bebas)', fontSize:'24px',
              letterSpacing:'3px', marginBottom:'12px',
            }}>
              MW <span style={{ color:'#CC0000' }}>BJJ</span> NATIONALS
            </div>
            <p style={{ fontSize:'13px', color:'#AAAAAA', lineHeight:1.6, maxWidth:'260px' }}>
              One of the most organized tournaments in the region. Celebrating 10 years of bringing
              together the BJJ community.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([col, links]) => (
            <div key={col}>
              <div style={{
                fontFamily:'var(--font-barlow-condensed)', fontWeight:700,
                fontSize:'11px', letterSpacing:'4px', color:'#CC0000',
                textTransform:'uppercase', marginBottom:'16px',
              }}>{col}</div>
              <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:'8px' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={'internal' in link && link.internal ? e => scrollTo(e, link.href) : undefined}
                      target={'internal' in link && link.internal ? undefined : '_blank'}
                      rel={'internal' in link && link.internal ? undefined : 'noopener noreferrer'}
                      style={{ color:'#AAAAAA', textDecoration:'none', fontSize:'13px', transition:'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color='#CC0000')}
                      onMouseLeave={e => (e.currentTarget.style.color='#AAAAAA')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span style={{
            fontFamily:'var(--font-barlow-condensed)', fontSize:'11px',
            letterSpacing:'2px', color:'#AAAAAA', textTransform:'uppercase',
          }}>
            © 2026 Midwest BJJ Nationals · All Rights Reserved |
            © Power by - LuLiFi.com
          </span>
          <span style={{
            fontFamily:'var(--font-barlow-condensed)', fontSize:'11px',
            letterSpacing:'2px', color:'#CC0000', textTransform:'uppercase',
          }}>
            April 18, 2026 · Louisville, KY
          </span>
        </div>
      </div>
    </footer>
  )
}
