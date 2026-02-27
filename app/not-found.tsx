import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: '#e63329', fontSize: '6rem', margin: 0 }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: '#aaa', marginBottom: '2rem' }}>
        This page doesn't exist. Let's get you back on the mat.
      </p>
      <Link href="/" style={{
        backgroundColor: '#e63329',
        color: 'white',
        padding: '12px 24px',
        textDecoration: 'none',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Back to Home
      </Link>
    </div>
  )
}