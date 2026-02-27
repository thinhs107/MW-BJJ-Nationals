import type { Metadata } from 'next'
import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const barlow = Barlow({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})

const SITE_URL = 'https://mwbjjn.com'
const SITE_NAME = 'Midwest BJJ Nationals'
const TITLE = 'Midwest BJJ Nationals 2026 | 10th Year Anniversary — April 18, Louisville KY'
const DESCRIPTION =
  'Register now for the Midwest BJJ Nationals Spring 2026 — a Round Robin Gi & No-Gi Brazilian Jiu Jitsu tournament on April 18, 2026 at South Oldham High School, Louisville, Kentucky. Celebrating 10 years of excellence. All ages and skill levels welcome.'

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'BJJ tournament 2026',
    'Brazilian Jiu Jitsu tournament Kentucky',
    'Midwest BJJ Nationals',
    'BJJ Louisville KY',
    'No-Gi tournament Kentucky',
    'Gi tournament Louisville',
    'BJJ competition kids adults',
    'Round Robin BJJ',
    'South Oldham High School tournament',
    'martial arts competition Kentucky',
    'grappling tournament 2026',
  ],
  authors: [{ name: 'Midwest BJJ Nationals', url: SITE_URL }],
  creator: 'Midwest BJJ Nationals',
  publisher: 'Midwest BJJ Nationals',

  // ── Canonical ─────────────────────────────────────────────────────
  alternates: {
    canonical: '/',
  },

  // ── Open Graph ────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Midwest BJJ Nationals 2026 — April 18, Louisville KY',
        type: 'image/jpeg',
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.jpg'],
    creator: '@MWBJJNationals',
    site: '@MWBJJNationals',
  },

  // ── Robots ────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Icons ─────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#CC0000' },
    ],
  },

  // ── Web App Manifest ──────────────────────────────────────────────
  manifest: '/site.webmanifest',

  // ── Verification (fill in once verified) ──────────────────────────
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN',
    // bing: 'YOUR_BING_VERIFICATION_TOKEN',
  },

  // ── Other ─────────────────────────────────────────────────────────
  category: 'sports',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <head>
        {/* Theme color for mobile browser chrome */}
        <meta name="theme-color" content="#CC0000" />
        <meta name="msapplication-TileColor" content="#CC0000" />
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="US-KY" />
        <meta name="geo.placename" content="Louisville, Kentucky" />
        <meta name="geo.position" content="38.2527;-85.7585" />
        <meta name="ICBM" content="38.2527, -85.7585" />
      </head>
      <body>{children}<Analytics /></body>
    </html>
  )
}
