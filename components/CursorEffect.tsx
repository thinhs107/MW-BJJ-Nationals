'use client'

import { useEffect, useRef, useState } from 'react'

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef   = useRef<HTMLDivElement>(null)
  const mouse     = useRef({ x: 0, y: 0 })
  const ring      = useRef({ x: 0, y: 0 })
  const rafRef    = useRef<number>()
  const [isTouch, setIsTouch] = useState(true) // start hidden, reveal if fine pointer

  useEffect(() => {
    // Only show cursor on devices with a fine pointer (mouse/trackpad)
    const mql = window.matchMedia('(pointer: fine)')
    setIsTouch(!mql.matches)

    const onPointerChange = (e: MediaQueryListEvent) => setIsTouch(!e.matches)
    mql.addEventListener('change', onPointerChange)

    if (!mql.matches) return () => mql.removeEventListener('change', onPointerChange)

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const grow = () => {
      if (cursorRef.current) { cursorRef.current.style.width = '20px'; cursorRef.current.style.height = '20px' }
      if (ringRef.current)   { ringRef.current.style.width = '60px';   ringRef.current.style.height = '60px'; ringRef.current.style.opacity = '0.5' }
    }
    const shrink = () => {
      if (cursorRef.current) { cursorRef.current.style.width = '12px'; cursorRef.current.style.height = '12px' }
      if (ringRef.current)   { ringRef.current.style.width = '36px';   ringRef.current.style.height = '36px'; ringRef.current.style.opacity = '1' }
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      mql.removeEventListener('change', onPointerChange)
      document.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      <div ref={cursorRef} style={{
        position:'fixed', width:'12px', height:'12px',
        background:'#CC0000', borderRadius:'50%', pointerEvents:'none',
        zIndex:9999, transform:'translate(-50%,-50%)',
        transition:'width 0.2s,height 0.2s',
      }}/>
      <div ref={ringRef} style={{
        position:'fixed', width:'36px', height:'36px',
        border:'1px solid rgba(204,0,0,0.5)', borderRadius:'50%', pointerEvents:'none',
        zIndex:9998, transform:'translate(-50%,-50%)',
        transition:'width 0.3s,height 0.3s,opacity 0.3s',
      }}/>
    </>
  )
}
