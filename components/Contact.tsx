'use client'

import { SectionDivider, SectionTitle } from './EventInfo'

const contacts = [
  { icon:'📞', label:'Phone',    value:'(502) 384-7084', href:'tel:5023847084' },
  // { icon:'📱', label:'Cell',     value:'(502) 422-1957', href:'tel:5024221957' },
  { icon:'📍', label:'Venue',    value:'6415 Outer Loop, Louisville, KY 40228' },
  { icon:'🌐', label:'Register', value:'smoothcomp.com/en/event/29767', href:'https://smoothcomp.com/en/event/34213' },
]

// Marion C. Moore School — Place ID + coordinates sourced from Google Maps
// Place ID:  0x8869099b69e7dc03:0x62d7394eb64c4b0a
// Lat/Lng:   38.139499, -85.6374102
const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.52' +
  '!2d-85.6374102!3d38.139499' +
  '!2m3!1f0!2f0!3f0' +
  '!3m2!1i1024!2i768!4f13.1' +
  '!3m3!1m2!1s0x8869099b69e7dc03%3A0x62d7394eb64c4b0a' +
  '!2sMarion+C.+Moore+School%2C+6415+Outer+Loop%2C+Louisville%2C+KY+40228' +
  '!5e0!3m2!1sen!2sus!4v1740000000000!5m2!1sen!2sus'

const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1' +
  '&destination=Marion+C.+Moore+School%2C+6415+Outer+Loop%2C+Louisville%2C+KY+40228' +
  '&travelmode=driving'

export default function Contact() {
  return (
    <>
      <SectionDivider label="Get In Touch" />
      <div id="contact">
        <SectionTitle>
          <span style={{ color:'#0A0A0A' }}>Contact</span>{' '}
          <span style={{ color:'#CC0000' }}>Us</span>
        </SectionTitle>
      </div>

      <div className="contact-wrap reveal">
        <div className="contact-grid">

          {/* Contact details */}
          <div>
            {contacts.map(c => (
              <div key={c.label} style={{
                display:'flex', alignItems:'center', gap:'14px',
                padding:'16px 0', borderBottom:'1px solid #E2E2E2',
              }}>
                <div style={{
                  width:'42px', height:'42px', flexShrink:0,
                  background:'rgba(204,0,0,0.1)', border:'1px solid rgba(204,0,0,0.25)',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:'17px',
                  clipPath:'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
                }}>
                  {c.icon}
                </div>
                <div>
                  <strong style={{
                    display:'block', fontFamily:'var(--font-barlow-condensed)',
                    fontSize:'10px', letterSpacing:'3px', color:'#CC0000',
                    textTransform:'uppercase', marginBottom:'2px',
                  }}>{c.label}</strong>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ fontSize:'14px', color:'#5C5C5C', textDecoration:'none', transition:'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#0A0A0A')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#5C5C5C')}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ fontSize:'14px', color:'#5C5C5C' }}>{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Embedded Google Map — kept as a dark accent card, same as
              other black panels used elsewhere on the white page */}
          <div style={{ position:'relative', border:'1px solid #E2E2E2', overflow:'hidden' }}>

            {/* Red top accent */}
            <div style={{
              position:'absolute', top:0, left:0, right:0,
              height:'3px', background:'#CC0000', zIndex:2,
            }} />

            {/* iframe — Place ID pins exactly to Marion C. Moore School */}
            <iframe
              title="Marion C. Moore School — Tournament Venue"
              src={MAP_EMBED_SRC}
              width="100%"
              height="320"
              style={{
                border:'none',
                display:'block',
                filter:'grayscale(100%) invert(92%) contrast(83%)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Label overlay */}
            <div style={{
              position:'absolute', bottom:0, left:0, right:0,
              background:'linear-gradient(to top,rgba(10,10,10,0.95) 0%,rgba(10,10,10,0.7) 70%,transparent 100%)',
              padding:'20px 20px 14px',
              display:'flex', alignItems:'flex-end', justifyContent:'space-between',
              flexWrap:'wrap', gap:'10px', zIndex:2,
            }}>
              <div>
                <div style={{
                  fontFamily:'var(--font-bebas)', fontSize:'18px',
                  letterSpacing:'2px', color:'#F5F5F5', lineHeight:1,
                }}>
                  Marion C. Moore School
                </div>
                <div style={{
                  fontFamily:'var(--font-barlow-condensed)', fontSize:'11px',
                  letterSpacing:'2px', color:'#CC0000', textTransform:'uppercase', marginTop:'3px',
                }}>
                  6415 Outer Loop, Louisville, KY 40228
                </div>
              </div>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily:'var(--font-barlow-condensed)', fontWeight:700,
                  fontSize:'11px', letterSpacing:'3px', color:'#CC0000',
                  textDecoration:'none', textTransform:'uppercase',
                  padding:'8px 18px', border:'1px solid rgba(204,0,0,0.5)',
                  background:'rgba(10,10,10,0.8)',
                  clipPath:'polygon(0 0,calc(100% - 6px) 0,100% 100%,6px 100%)',
                  transition:'background 0.2s,border-color 0.2s',
                  whiteSpace:'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(204,0,0,0.15)'
                  e.currentTarget.style.borderColor = 'rgba(204,0,0,0.8)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(10,10,10,0.8)'
                  e.currentTarget.style.borderColor = 'rgba(204,0,0,0.5)'
                }}
              >
                Get Directions →
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}