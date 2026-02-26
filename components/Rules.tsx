'use client'

import Link from 'next/link'
import { SectionDivider, SectionTitle } from './EventInfo'

const GI_RULES = [
  'Round Robin format — guaranteed multiple matches',
  'Points: Takedowns, sweeps, guard passes, mounts, back control',
  'Submissions win immediately regardless of score',
  'Age and weight appropriate time limits',
  'IBJJF-inspired ruleset with local adaptations',
]

const NOGI_RULES = [
  'Round Robin format — guaranteed multiple matches',
  'Rash guards and shorts required — no gi tops',
  'Leg lock rules vary by division and age group',
  'Modified submission rules for youth divisions',
  'ADCC-inspired ruleset for adult divisions',
]

function RulesCard({ tag, title, rules, href, ctaLabel }: {
  tag: string; title: string; rules: string[]; href: string; ctaLabel: string
}) {
  return (
    <div className="rules-card-pad" style={{ background:'#161616' }}>
      <div style={{
        fontFamily:'var(--font-barlow-condensed)', fontWeight:700,
        fontSize:'11px', letterSpacing:'4px', color:'#CC0000',
        textTransform:'uppercase', marginBottom:'12px',
      }}>{tag}</div>

      <div style={{
        fontFamily:'var(--font-bebas)', fontSize:'clamp(28px,4vw,40px)',
        letterSpacing:'3px', color:'#F5F5F5', marginBottom:'20px',
      }}>{title}</div>

      <ul style={{ listStyle:'none', padding:0 }}>
        {rules.map((rule, i) => (
          <li key={i} style={{
            display:'flex', alignItems:'flex-start', gap:'10px',
            padding:'10px 0',
            borderBottom: i < rules.length-1 ? '1px solid #222' : 'none',
            fontSize:'14px', color:'#AAAAAA', lineHeight:1.4,
          }}>
            <span style={{ color:'#CC0000', fontSize:'11px', flexShrink:0, marginTop:'3px' }}>▸</span>
            {rule}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        style={{
          display:'inline-block', marginTop:'24px',
          background:'transparent', color:'#CC0000', textDecoration:'none',
          fontFamily:'var(--font-barlow-condensed)', fontWeight:700,
          fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase',
          padding:'11px 24px', border:'1px solid rgba(204,0,0,0.4)',
          clipPath:'polygon(0 0,calc(100% - 8px) 0,100% 100%,8px 100%)',
          transition:'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background='rgba(204,0,0,0.1)')}
        onMouseLeave={e => (e.currentTarget.style.background='transparent')}
      >
        {ctaLabel}
      </Link>
    </div>
  )
}

export default function Rules() {
  return (
    <>
      <SectionDivider label="Competition Rules" />
      <div id="rules">
        <SectionTitle>
          Know the <span style={{ color:'#CC0000' }}>Rules</span>
        </SectionTitle>
      </div>
      <div className="rules-wrap reveal">
        <div className="rules-grid">
          <RulesCard tag="Gi Rules"    title="Traditional Gi Format" rules={GI_RULES}   href="/divisions/gi"          ctaLabel="Full Gi Rules" />
          <RulesCard tag="No-Gi Rules" title="No-Gi Format"          rules={NOGI_RULES} href="/divisions/adult-no-gi" ctaLabel="Full No-Gi Rules" />
        </div>
      </div>
    </>
  )
}
