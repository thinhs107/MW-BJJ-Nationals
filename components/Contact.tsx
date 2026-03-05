'use client'

import { SectionDivider, SectionTitle } from './EventInfo'

const contacts = [
  { icon:'📞', label:'Phone',    value:'(502) 384-7084', href:'tel:5023847084' },
  // { icon:'📱', label:'Cell',     value:'(502) 422-1957', href:'tel:5024221957' },
  { icon:'📍', label:'Venue',    value:'5901 Veterans Memorial Pkwy, Crestwood, KY 40014' },
  { icon:'🌐', label:'Register', value:'smoothcomp.com/en/event/29767', href:'https://smoothcomp.com/en/event/29767' },
]

// Correct Place ID + coordinates sourced from sohs.oldham.kyschools.us/about/map-directions
// Place ID:  0x88699b2df696f623:0x7b7b0d9877e72fbc
// Lat/Lng:   38.3321342, -85.4689426
const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.52' +
  '!2d-85.4689426!3d38.3321342' +
  '!2m3!1f0!2f0!3f0' +
  '!3m2!1i1024!2i768!4f13.1' +
  '!3m3!1m2!1s0x88699b2df696f623%3A0x7b7b0d9877e72fbc' +
  '!2sSouth+Oldham+High+School%2C+5901+Veterans+Memorial+Pkwy%2C+Crestwood%2C+KY+40014' +
  '!5e0!3m2!1sen!2sus!4v1740000000000!5m2!1sen!2sus'

const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1' +
  '&destination=South+Oldham+High+School' +
  '&destination_place_id=ChIJ8_aW3S-bmYgRvC_ngJcN-3s' +
  '&travelmode=driving'

export default function Contact() {
  return (
    <>
      <SectionDivider label="Get In Touch" />
      <div id="contact">
        <SectionTitle>
          Contact <span style={{ color:'#CC0000' }}>Us</span>
        </SectionTitle>
      </div>

      <div className="contact-wrap reveal">
        <div className="contact-grid">

          {/* Contact details */}
          <div>
            {contacts.map(c => (
              <div key={c.label} style={{
                display:'flex', alignItems:'center', gap:'14px',
                padding:'16px 0', borderBottom:'1px solid #222',
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
                      style={{ fontSize:'14px', color:'#AAAAAA', textDecoration:'none', transition:'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F5')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#AAAAAA')}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ fontSize:'14px', color:'#AAAAAA' }}>{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Embedded Google Map */}
          <div style={{ position:'relative', border:'1px solid #222', overflow:'hidden' }}>

            {/* Red top accent */}
            <div style={{
              position:'absolute', top:0, left:0, right:0,
              height:'3px', background:'#CC0000', zIndex:2,
            }} />

            {/* iframe — Place ID pins exactly to South Oldham HS */}
            <iframe
              title="South Oldham High School — Tournament Venue"
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
                  South Oldham High School
                </div>
                <div style={{
                  fontFamily:'var(--font-barlow-condensed)', fontSize:'11px',
                  letterSpacing:'2px', color:'#CC0000', textTransform:'uppercase', marginTop:'3px',
                }}>
                  5901 Veterans Memorial Pkwy, Crestwood, KY 40014
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