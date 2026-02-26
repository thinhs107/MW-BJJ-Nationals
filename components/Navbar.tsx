'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#about',     label: 'About' },
  { href: '#divisions', label: 'Divisions' },
  { href: '#rules',     label: 'Rules' },
  { href: '#contact',   label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 1000,
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    background: scrolled ? 'rgba(10,10,10,0.98)' : 'rgba(10,10,10,0.85)',
    borderBottom: '1px solid #222',
    backdropFilter: 'blur(10px)',
    transition: 'background 0.3s',
  }

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <Link href="/" style={{ display:'flex', alignItems:'center', gap:'10px', textDecoration:'none', flexShrink: 0 }}>
          <div style={{
            width:'38px', height:'38px',
            background:'#CC0000',
            clipPath:'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontFamily:'var(--font-bebas)', fontSize:'13px', color:'white',
          }}>
            BJJ
          </div>
          <div style={{ fontFamily:'var(--font-bebas)', fontSize:'18px', letterSpacing:'2px', color:'#F5F5F5', lineHeight:1 }}>
            MW <span style={{ color:'#CC0000' }}>BJJ</span> NATIONALS
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="nav-desktop-links" style={{ gap:'6px', listStyle:'none', alignItems:'center' }}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => scrollTo(e, link.href)}
                style={{
                  color:'#AAAAAA', textDecoration:'none',
                  fontFamily:'var(--font-barlow-condensed)', fontWeight:600,
                  fontSize:'13px', letterSpacing:'2px', textTransform:'uppercase',
                  padding:'8px 12px', display:'block', transition:'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F5')}
                onMouseLeave={e => (e.currentTarget.style.color = '#AAAAAA')}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://smoothcomp.com/en/event/29767"
              target="_blank" rel="noopener noreferrer"
              style={{
                background:'#CC0000', color:'white', textDecoration:'none',
                fontFamily:'var(--font-barlow-condensed)', fontWeight:800,
                fontSize:'12px', letterSpacing:'3px', textTransform:'uppercase',
                padding:'9px 22px',
                clipPath:'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)',
                transition:'background 0.2s', display:'block',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#FF1A1A')}
              onMouseLeave={e => (e.currentTarget.style.background = '#CC0000')}
            >
              Register Now
            </a>
          </li>
        </ul>

        {/* Hamburger button */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            background:'none', border:'none', cursor:'pointer',
            flexDirection:'column', gap:'5px', padding:'8px',
          }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display:'block', width:'22px', height:'2px',
              background: (menuOpen && i===1) ? 'transparent' : '#F5F5F5',
              transform:
                menuOpen && i===0 ? 'translateY(7px) rotate(45deg)' :
                menuOpen && i===2 ? 'translateY(-7px) rotate(-45deg)' :
                'none',
              transition:'transform 0.25s, background 0.25s',
            }}/>
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position:'fixed', top:'64px', left:0, right:0, zIndex:999,
          background:'#111111', borderBottom:'1px solid #222',
          padding:'16px 24px 24px',
          display:'flex', flexDirection:'column', gap:'0',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => scrollTo(e, link.href)}
              style={{
                color:'#AAAAAA', textDecoration:'none',
                fontFamily:'var(--font-barlow-condensed)', fontWeight:600,
                fontSize:'16px', letterSpacing:'2px', textTransform:'uppercase',
                padding:'14px 0', borderBottom:'1px solid #222', display:'block',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://smoothcomp.com/en/event/29767"
            target="_blank" rel="noopener noreferrer"
            style={{
              background:'#CC0000', color:'white', textDecoration:'none',
              fontFamily:'var(--font-barlow-condensed)', fontWeight:800,
              fontSize:'14px', letterSpacing:'3px', textTransform:'uppercase',
              padding:'14px 24px', display:'block', textAlign:'center',
              clipPath:'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)',
              marginTop:'16px',
            }}
          >
            Register Now
          </a>
        </div>
      )}
    </>
  )
}
