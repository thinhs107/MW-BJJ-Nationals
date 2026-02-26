'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Section {
  title: string
  rows: { label: string; value: string }[]
}

interface DivisionPageProps {
  badge: string
  icon: string
  title: string
  subtitle: string
  description: string
  accentColor?: string
  sections: Section[]
  ageGroups?: { age: string; time: string; overtime?: string }[]
  weightClasses?: { division: string; weights: string[] }[]
  notes?: string[]
  prevDivision?: { label: string; href: string }
  nextDivision?: { label: string; href: string }
}

export default function DivisionPageLayout({
  badge,
  icon,
  title,
  subtitle,
  description,
  sections,
  ageGroups,
  weightClasses,
  notes,
  prevDivision,
  nextDivision,
}: DivisionPageProps) {
  const [openSection, setOpenSection] = useState<number | null>(null)

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', color: '#F5F5F5' }}>

      {/* Back nav */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '60px', display: 'flex', alignItems: 'center',
        padding: '0 24px', gap: '16px',
        background: 'rgba(10,10,10,0.95)',
        borderBottom: '1px solid #222',
        backdropFilter: 'blur(10px)',
      }}>
        <Link href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          color: '#AAAAAA', textDecoration: 'none',
          fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
          fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F5')}
          onMouseLeave={e => (e.currentTarget.style.color = '#AAAAAA')}
        >
          ← Back to Home
        </Link>
        <span style={{ color: '#333' }}>|</span>
        <span style={{
          fontFamily: 'var(--font-bebas)', fontSize: '16px',
          letterSpacing: '3px', color: '#CC0000',
        }}>MW BJJ NATIONALS</span>

        {/* Register CTA */}
        <a
          href="https://smoothcomp.com/en/event/29767"
          target="_blank" rel="noopener noreferrer"
          style={{
            marginLeft: 'auto',
            background: '#CC0000', color: 'white', textDecoration: 'none',
            fontFamily: 'var(--font-barlow-condensed)', fontWeight: 800,
            fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
            padding: '8px 20px',
            clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 100%,8px 100%)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#FF1A1A')}
          onMouseLeave={e => (e.currentTarget.style.background = '#CC0000')}
        >
          Register Now
        </a>
      </div>

      {/* Hero header */}
      <div style={{
        paddingTop: '60px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a0000 0%, #0A0A0A 60%)',
        borderBottom: '1px solid #222',
      }}>
        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(204,0,0,0.05) 1px,transparent 1px),
            linear-gradient(90deg,rgba(204,0,0,0.05) 1px,transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
        {/* Red gradient edge */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
          background: '#CC0000',
        }} />

        <div style={{ position: 'relative', zIndex: 1, padding: '48px 24px 40px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(204,0,0,0.12)', border: '1px solid rgba(204,0,0,0.35)',
            padding: '6px 16px', marginBottom: '20px',
            fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
            fontSize: '11px', letterSpacing: '4px', color: '#CC0000', textTransform: 'uppercase',
            clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 100%,8px 100%)',
          }}>
            <span style={{ fontSize: '16px' }}>{icon}</span>
            {badge}
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(48px, 10vw, 100px)',
            letterSpacing: '4px', lineHeight: 0.9,
            marginBottom: '16px',
          }}>
            <span style={{ color: '#F5F5F5', display: 'block' }}>{title}</span>
            <span style={{ color: '#CC0000', display: 'block', fontSize: '0.55em' }}>{subtitle}</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-barlow)', fontSize: 'clamp(14px, 2vw, 16px)',
            color: '#AAAAAA', lineHeight: 1.7, maxWidth: '640px',
          }}>
            {description}
          </p>

          {/* Event meta */}
          <div style={{
            display: 'flex', gap: '24px', marginTop: '28px',
            flexWrap: 'wrap',
          }}>
            {[
              { label: 'Date',   value: 'April 18, 2026' },
              { label: 'Format', value: 'Round Robin' },
              { label: 'Venue',  value: 'South Oldham HS, Louisville KY' },
            ].map(m => (
              <div key={m.label} style={{ borderLeft: '2px solid #CC0000', paddingLeft: '12px' }}>
                <span style={{
                  fontFamily: 'var(--font-barlow-condensed)', fontSize: '10px',
                  letterSpacing: '3px', color: '#CC0000', textTransform: 'uppercase', display: 'block',
                }}>{m.label}</span>
                <span style={{
                  fontFamily: 'var(--font-barlow-condensed)', fontSize: '14px',
                  fontWeight: 700, color: '#F5F5F5',
                }}>{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Rule sections as accordion */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
            fontSize: '11px', letterSpacing: '5px', color: '#CC0000',
            textTransform: 'uppercase', marginBottom: '24px',
          }}>
            Division Rules
          </div>

          {sections.map((section, si) => (
            <div
              key={si}
              style={{
                background: '#161616',
                border: '1px solid',
                borderColor: openSection === si ? 'rgba(204,0,0,0.4)' : '#222',
                marginBottom: '2px',
                transition: 'border-color 0.2s',
              }}
            >
              {/* Accordion header */}
              <button
                onClick={() => setOpenSection(openSection === si ? null : si)}
                style={{
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '18px 24px', textAlign: 'left',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-bebas)', fontSize: '22px',
                  letterSpacing: '2px', color: '#F5F5F5',
                }}>
                  {section.title}
                </span>
                <span style={{
                  fontFamily: 'var(--font-bebas)', fontSize: '20px',
                  color: '#CC0000', transition: 'transform 0.2s',
                  transform: openSection === si ? 'rotate(45deg)' : 'none',
                  display: 'block', lineHeight: 1,
                }}>
                  +
                </span>
              </button>

              {/* Accordion body */}
              {openSection === si && (
                <div style={{ padding: '0 24px 20px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      {section.rows.map((row, ri) => (
                        <tr key={ri} style={{
                          borderTop: ri === 0 ? '1px solid #222' : '1px solid #1a1a1a',
                        }}>
                          <td style={{
                            padding: '12px 16px 12px 0',
                            fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
                            fontSize: '12px', letterSpacing: '2px',
                            color: '#CC0000', textTransform: 'uppercase',
                            width: '38%', verticalAlign: 'top',
                          }}>
                            {row.label}
                          </td>
                          <td style={{
                            padding: '12px 0',
                            fontFamily: 'var(--font-barlow)', fontSize: '14px',
                            color: '#AAAAAA', lineHeight: 1.5,
                          }}>
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Age groups / time limits */}
        {ageGroups && (
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
              fontSize: '11px', letterSpacing: '5px', color: '#CC0000',
              textTransform: 'uppercase', marginBottom: '24px',
            }}>
              Match Time Limits
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '2px',
            }}>
              {ageGroups.map((ag, i) => (
                <div key={i} style={{
                  background: '#161616', padding: '20px',
                  borderTop: '2px solid #222',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderTopColor = '#CC0000')}
                  onMouseLeave={e => (e.currentTarget.style.borderTopColor = '#222')}
                >
                  <div style={{
                    fontFamily: 'var(--font-bebas)', fontSize: '28px',
                    color: '#CC0000', lineHeight: 1,
                  }}>{ag.time}</div>
                  <div style={{
                    fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
                    fontSize: '13px', letterSpacing: '1px', color: '#F5F5F5',
                    marginTop: '4px',
                  }}>{ag.age}</div>
                  {ag.overtime && (
                    <div style={{
                      fontFamily: 'var(--font-barlow)', fontSize: '12px',
                      color: '#666', marginTop: '4px',
                    }}>OT: {ag.overtime}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Weight classes */}
        {weightClasses && (
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
              fontSize: '11px', letterSpacing: '5px', color: '#CC0000',
              textTransform: 'uppercase', marginBottom: '24px',
            }}>
              Weight Classes
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2px' }}>
              {weightClasses.map((wc, i) => (
                <div key={i} style={{ background: '#161616', padding: '20px 24px' }}>
                  <div style={{
                    fontFamily: 'var(--font-bebas)', fontSize: '18px',
                    letterSpacing: '2px', color: '#CC0000', marginBottom: '10px',
                  }}>{wc.division}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {wc.weights.map((w, wi) => (
                      <span key={wi} style={{
                        background: 'rgba(204,0,0,0.08)', border: '1px solid rgba(204,0,0,0.2)',
                        padding: '3px 10px',
                        fontFamily: 'var(--font-barlow-condensed)', fontSize: '12px',
                        fontWeight: 700, color: '#AAAAAA',
                        clipPath: 'polygon(0 0,calc(100% - 5px) 0,100% 100%,5px 100%)',
                      }}>{w}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        {notes && notes.length > 0 && (
          <div style={{
            background: 'rgba(204,0,0,0.06)',
            border: '1px solid rgba(204,0,0,0.2)',
            padding: '24px',
            clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
            marginBottom: '48px',
          }}>
            <div style={{
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
              fontSize: '11px', letterSpacing: '4px', color: '#CC0000',
              textTransform: 'uppercase', marginBottom: '14px',
            }}>
              Important Notes
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {notes.map((note, i) => (
                <li key={i} style={{
                  display: 'flex', gap: '10px',
                  fontFamily: 'var(--font-barlow)', fontSize: '14px',
                  color: '#AAAAAA', lineHeight: 1.5,
                }}>
                  <span style={{ color: '#CC0000', flexShrink: 0, marginTop: '2px' }}>▸</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Register CTA */}
        <div style={{
          background: 'linear-gradient(135deg,#8B0000 0%,#CC0000 100%)',
          padding: '36px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '20px',
          clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))',
          marginBottom: '48px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(0,0,0,0.05) 20px,rgba(0,0,0,0.05) 40px)',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontFamily: 'var(--font-bebas)', fontSize: 'clamp(28px,5vw,42px)',
              letterSpacing: '3px', color: 'white', lineHeight: 1,
            }}>
              Ready to Compete?
            </div>
            <div style={{
              fontFamily: 'var(--font-barlow)', fontSize: '14px',
              color: 'rgba(255,255,255,0.8)', marginTop: '6px',
            }}>
              Register for the {title} division on SmoothComp
            </div>
          </div>
          <a
            href="https://smoothcomp.com/en/event/29767"
            target="_blank" rel="noopener noreferrer"
            style={{
              position: 'relative', zIndex: 1,
              background: 'white', color: '#CC0000', textDecoration: 'none',
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 800,
              fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase',
              padding: '14px 36px', flexShrink: 0,
              clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 100%,12px 100%)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Register Now →
          </a>
        </div>

        {/* Division nav */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', gap: '12px',
          flexWrap: 'wrap',
        }}>
          {prevDivision ? (
            <Link href={prevDivision.href} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: '#AAAAAA', textDecoration: 'none',
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
              fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
              padding: '12px 20px', border: '1px solid #333',
              clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 100%,8px 100%)',
              transition: 'color 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = '#CC0000'; e.currentTarget.style.borderColor = '#CC0000' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#AAAAAA'; e.currentTarget.style.borderColor = '#333' }}
            >
              ← {prevDivision.label}
            </Link>
          ) : <div />}

          {nextDivision && (
            <Link href={nextDivision.href} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: '#AAAAAA', textDecoration: 'none',
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700,
              fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
              padding: '12px 20px', border: '1px solid #333',
              clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 100%,8px 100%)',
              transition: 'color 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = '#CC0000'; e.currentTarget.style.borderColor = '#CC0000' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#AAAAAA'; e.currentTarget.style.borderColor = '#333' }}
            >
              {nextDivision.label} →
            </Link>
          )}
        </div>
      </div>

      {/* Footer strip */}
      <div style={{
        borderTop: '1px solid #222', padding: '20px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '10px',
        fontFamily: 'var(--font-barlow-condensed)', fontSize: '11px',
        letterSpacing: '2px', textTransform: 'uppercase', color: '#444',
      }}>
        <span>© 2026 Midwest BJJ Nationals</span>
        <span style={{ color: '#CC0000' }}>April 18, 2026 · Louisville, KY</span>
      </div>
    </div>
  )
}
