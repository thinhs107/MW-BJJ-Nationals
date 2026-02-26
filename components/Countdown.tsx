'use client'

import { useState, useEffect } from 'react'

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, new Date('2026-04-18T09:00:00').getTime() - Date.now())
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function pad(n: number) { return String(n).padStart(2, '0') }

function Unit({ value, label, colon }: { value: number; label: string; colon?: boolean }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-start' }}>
      {colon && (
        <span style={{
          fontFamily:'var(--font-bebas)', fontSize:'inherit',
          color:'rgba(255,255,255,0.7)', lineHeight:1,
          marginRight:'2px', paddingTop:'2px',
        }}>:</span>
      )}
      <div style={{ textAlign:'center' }}>
        <span className="countdown-number">{pad(value)}</span>
        <span style={{
          fontFamily:'var(--font-barlow-condensed)', fontWeight:700,
          fontSize:'10px', letterSpacing:'2px',
          color:'rgba(255,255,255,0.7)', textTransform:'uppercase',
          display:'block', marginTop:'-2px',
        }}>{label}</span>
      </div>
    </div>
  )
}

export default function Countdown() {
  const [t, setT] = useState<TimeLeft>({ days:0, hours:0, minutes:0, seconds:0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setT(getTimeLeft())
    const id = setInterval(() => setT(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return null

  return (
    <div style={{ background:'#CC0000', position:'relative', overflow:'hidden' }}>
      {/* Diagonal stripes */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:`repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(0,0,0,0.06) 20px,rgba(0,0,0,0.06) 40px)`,
      }}/>

      <div className="countdown-wrap">
        {/* Label */}
        <div style={{
          fontFamily:'var(--font-bebas)', fontSize:'16px',
          letterSpacing:'5px', color:'rgba(255,255,255,0.85)',
          position:'relative', zIndex:1, textTransform:'uppercase',
          flexShrink: 0,
        }}>
          Tournament Countdown
        </div>

        {/* Timer */}
        <div style={{ display:'flex', gap:'4px', position:'relative', zIndex:1 }}>
          <Unit value={t.days}    label="Days" />
          <Unit value={t.hours}   label="Hours"   colon />
          <Unit value={t.minutes} label="Minutes" colon />
          <Unit value={t.seconds} label="Seconds" colon />
        </div>

        {/* Date */}
        <div className="countdown-date-display" style={{ position:'relative', zIndex:1 }}>
          <span style={{
            fontFamily:'var(--font-bebas)', fontSize:'20px',
            letterSpacing:'4px', color:'white', display:'block',
          }}>
            April 18, 2026
          </span>
          <span style={{
            fontFamily:'var(--font-barlow-condensed)', fontSize:'11px',
            letterSpacing:'2px', color:'rgba(255,255,255,0.7)', textTransform:'uppercase',
          }}>
            South Oldham High School
          </span>
        </div>
      </div>
    </div>
  )
}
