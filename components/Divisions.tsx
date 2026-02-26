'use client'

import Link from 'next/link'
import { SectionDivider, SectionTitle } from './EventInfo'

const divisions = [
  {
    icon:'👶', name:'Kids No-Gi',
    desc:'Junior competitors taking their first steps. Safe, fun, and structured.',
    href:'/divisions/kids-no-gi',
    internal: true,
  },
  {
    icon:'🧑', name:'Teen 16–17 No-Gi',
    desc:'Competitive teen division for athletes 16–17 years old.',
    href:'/divisions/teen-no-gi',
    internal: true,
  },
  {
    icon:'💪', name:'Adult No-Gi',
    desc:'Full adult bracket across all belt levels and weight classes.',
    href:'/divisions/adult-no-gi',
    internal: true,
  },
  {
    icon:'🥋', name:'Gi Competition',
    desc:'Traditional Gi competition honoring the roots of Brazilian Jiu Jitsu.',
    href:'/divisions/gi',
    internal: true,
  },
]

export default function Divisions() {
  return (
    <>
      <SectionDivider label="Compete In Your Division" />
      <div id="divisions">
        <SectionTitle>
          Choose Your <span style={{ color:'#CC0000' }}>Division</span>
        </SectionTitle>
      </div>

      <div className="divisions-wrap reveal">
        <div className="divisions-grid">
          {divisions.map(d => (
            <div
              key={d.name}
              style={{
                background:'#161616', padding:'28px 22px',
                position:'relative', overflow:'hidden',
                transition:'transform 0.2s', cursor:'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform='translateY(-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform='translateY(0)')}
            >
              <span style={{ fontSize:'28px', marginBottom:'14px', display:'block' }}>{d.icon}</span>
              <div style={{
                fontFamily:'var(--font-bebas)', fontSize:'22px',
                letterSpacing:'2px', color:'#F5F5F5', marginBottom:'8px',
              }}>{d.name}</div>
              <div style={{ fontSize:'13px', color:'#AAAAAA', lineHeight:1.5, marginBottom:'16px' }}>
                {d.desc}
              </div>
              <Link
                href={d.href}
                style={{
                  fontFamily:'var(--font-barlow-condensed)', fontWeight:700,
                  fontSize:'11px', letterSpacing:'3px', color:'#CC0000',
                  textDecoration:'none', textTransform:'uppercase',
                  display:'inline-flex', alignItems:'center', gap:'6px',
                  transition: 'gap 0.2s',
                }}
              >
                View Rules →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
