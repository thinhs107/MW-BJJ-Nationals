import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Countdown from '@/components/Countdown'
import EventInfo from '@/components/EventInfo'
import About from '@/components/About'
import Divisions from '@/components/Divisions'
import Rules from '@/components/Rules'
import RegisterCTA from '@/components/RegisterCTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CursorEffect from '@/components/CursorEffect'
import ScrollReveal from '@/components/ScrollReveal'
import ThankYouPage from '@/components/ThankYouPage'

// ── JSON-LD Structured Data ────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // SportsEvent — primary entity
    {
      '@type': 'SportsEvent',
      '@id': 'https://mwbjjn.com/#event',
      name: 'Midwest BJJ Nationals Spring 2026',
      description:
        'Round Robin Gi & No-Gi Brazilian Jiu Jitsu tournament celebrating 10 years. Open to all ages and skill levels.',
      url: 'https://mwbjjn.com',
      startDate: '2026-04-18T09:00:00-05:00',
      endDate: '2026-04-18T20:00:00-05:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      sport: 'Brazilian Jiu Jitsu',
      image: 'https://mwbjjn.com/og-image.jpg',
      offers: {
        '@type': 'Offer',
        url: 'https://smoothcomp.com/en/event/29767',
        name: 'Tournament Registration',
        availability: 'https://schema.org/InStock',
        validFrom: '2025-08-26',
      },
      location: {
        '@type': 'Place',
        name: 'South Oldham High School',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Louisville',
          addressRegion: 'KY',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 38.2527,
          longitude: -85.7585,
        },
      },
      organizer: {
        '@id': 'https://mwbjjn.com/#organization',
      },
    },

    // Organization
    {
      '@type': 'SportsOrganization',
      '@id': 'https://mwbjjn.com/#organization',
      name: 'Midwest BJJ Nationals',
      url: 'https://mwbjjn.com',
      logo: 'https://mwbjjn.com/logo.png',
      telephone: '+15023847084',
      sport: 'Brazilian Jiu Jitsu',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Louisville',
        addressRegion: 'KY',
        addressCountry: 'US',
      },
      sameAs: [
        'https://smoothcomp.com/en/event/29767',
      ],
    },

    // WebSite (enables Google Sitelinks search box)
    {
      '@type': 'WebSite',
      '@id': 'https://mwbjjn.com/#website',
      url: 'https://mwbjjn.com',
      name: 'Midwest BJJ Nationals',
      description: 'Home of the Midwest BJJ Nationals tournament — Louisville, Kentucky',
      publisher: { '@id': 'https://mwbjjn.com/#organization' },
    },

    // BreadcrumbList
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://mwbjjn.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Spring 2026 Tournament',
          item: 'https://mwbjjn.com/#event',
        },
      ],
    },

    // FAQPage — helps Google show rich FAQ results
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When is the Midwest BJJ Nationals Spring 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Midwest BJJ Nationals Spring 2026 is on April 18, 2026 at South Oldham High School in Louisville, Kentucky.',
          },
        },
        {
          '@type': 'Question',
          name: 'What format is the Midwest BJJ Nationals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The tournament uses a Round Robin format for both Gi and No-Gi divisions, guaranteeing competitors multiple matches.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I register for the Midwest BJJ Nationals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Registration is handled through SmoothComp at smoothcomp.com/en/event/29767.',
          },
        },
        {
          '@type': 'Question',
          name: 'What divisions are available at the Midwest BJJ Nationals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Divisions include Kids No-Gi, Teen 16-17 No-Gi, Adult No-Gi, and Gi Competition for all skill levels and belt ranks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is the Midwest BJJ Nationals held?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The tournament is held at South Oldham High School in Louisville, Kentucky.',
          },
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CursorEffect />
      <ScrollReveal />
      <Navbar />
      <main>
        {/* <Hero />
        <Ticker />
        <Countdown />
        <EventInfo />
        <About />
        <Divisions />
        <Rules />
        <RegisterCTA />
        <Contact /> */}
        <ThankYouPage />
      </main>
      <Footer />
    </>
  )
}
