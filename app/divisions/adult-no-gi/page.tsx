import type { Metadata } from 'next'
import CursorEffect from '@/components/CursorEffect'
import DivisionPageLayout from '@/components/divisions/DivisionPageLayout'

export const metadata: Metadata = {
  title: 'Adult No-Gi Division Rules',
  description:
    'Full ruleset, belt divisions, and weight classes for the Adult No-Gi division at the Midwest BJJ Nationals Spring 2026. White through Black belt brackets available.',
  alternates: { canonical: '/divisions/adult-no-gi' },
  openGraph: {
    title: 'Adult No-Gi Division — Midwest BJJ Nationals 2026',
    description: 'Complete No-Gi rules for adult competitors at all belt levels. April 18, 2026 — Louisville, KY.',
    url: 'https://mwbjjn.com/divisions/adult-no-gi',
  },
}

export default function AdultNoGiPage() {
  return (
    <>
    <CursorEffect />

    <DivisionPageLayout
      badge="Adult Division"
      icon="💪"
      title="Adult No-Gi"
      subtitle="All Belt Levels"
      description="The Adult No-Gi division is open to all practitioners 18 and older across all belt levels, from beginner white belts to elite black belts. Our ADCC-inspired ruleset rewards offensive, submission-focused grappling. Round Robin format guarantees you maximum mat time regardless of bracket size."
      sections={[
        {
          title: 'Scoring System',
          rows: [
            { label: 'Takedown / Throw',   value: '2 points' },
            { label: 'Sweep',              value: '2 points' },
            { label: 'Guard Pass',         value: '3 points' },
            { label: 'Knee on Belly',      value: '2 points' },
            { label: 'Mount',              value: '4 points' },
            { label: 'Back Control',       value: '4 points (both hooks or body triangle + seatbelt)' },
            { label: 'Submission',         value: 'Immediate win' },
            { label: 'Advantage',          value: 'Awarded for near-scoring positions — used as tiebreaker only' },
            { label: 'Penalty',            value: 'Guard pulling without grip counts as −1. Stalling = penalty point.' },
          ],
        },
        {
          title: 'Permitted Submissions by Belt',
          rows: [
            { label: 'White / Blue Belt',  value: 'All chokes, straight armbar, Kimura, Americana, Omoplata. Straight ankle lock. No heel hooks or reaping.' },
            { label: 'Purple Belt',        value: 'All above + kneebar. No heel hooks.' },
            { label: 'Brown / Black Belt', value: 'All submissions including outside heel hook. Inside heel hook allowed per referee discretion in advanced brackets only.' },
            { label: 'Never allowed',      value: 'Cervical cranks, slamming, scissors takedown to the knee, jumping to closed guard with opponent standing' },
          ],
        },
        {
          title: 'Attire & Equipment',
          rows: [
            { label: 'Top',        value: 'Rash guard — required. Short or long sleeve.' },
            { label: 'Bottoms',    value: 'Board shorts or spats. No pockets, belt loops, or zippers.' },
            { label: 'Footwear',   value: 'No shoes on the mat' },
            { label: 'Jewelry',    value: 'Not permitted' },
            { label: 'Mouthguard', value: 'Strongly recommended' },
            { label: 'Ear guards', value: 'Permitted if no hard plastic components' },
          ],
        },
        {
          title: 'General Rules',
          rows: [
            { label: 'Format',         value: 'Round Robin — every competitor guaranteed a minimum of 3 matches' },
            { label: 'Guard pull',      value: 'Legal but opponent receives +2 points after 5 seconds if no grip established' },
            { label: 'Overtime',       value: 'Referee position (one competitor picks top/bottom). If still tied: submission-only sudden death.' },
            { label: 'Out of bounds',  value: 'Match paused. Restarted standing unless active submission in progress.' },
            { label: 'Stalling',       value: 'Verbal warning then penalty. Repeated stalling results in disqualification.' },
            { label: 'Injury timeout', value: '2 minutes. Blood stoppage: same.' },
            { label: 'Coaches',        value: 'One coach per corner. No outside the boundary coaching.' },
          ],
        },
      ]}
      ageGroups={[
        { age: 'Adult (18–29)',  time: '6 min',  overtime: '3 min' },
        { age: 'Master 1 (30–35)', time: '6 min', overtime: '3 min' },
        { age: 'Master 2 (36–40)', time: '5 min', overtime: '2 min' },
        { age: 'Master 3 (41–45)', time: '5 min', overtime: '2 min' },
        { age: 'Master 4 (46–50)', time: '5 min', overtime: '2 min' },
        { age: 'Master 5 (51+)',   time: '4 min', overtime: '2 min' },
      ]}
      weightClasses={[
        {
          division: 'Male',
          weights: ['145 lbs', '158 lbs', '170 lbs', '185 lbs', '200 lbs', '215 lbs', '230 lbs', '230+ lbs'],
        },
        {
          division: 'Female',
          weights: ['115 lbs', '125 lbs', '135 lbs', '145 lbs', '160 lbs', '175 lbs', '175+ lbs'],
        },
      ]}
      notes={[
        'Belt rank is self-reported. Competitors found to be misrepresenting their rank will be disqualified.',
        'Competitors aged 16–17 may petition to enter the Adult division — parent/guardian written consent required.',
        'Weigh-in is the morning of the event. A 1 lb allowance is given for all weight classes.',
        'Absolute (open weight) division may be offered depending on registration numbers.',
        'Tiebreaker order: submissions → advantages → penalties → referee decision.',
        'The tournament reserves the right to combine or adjust brackets with fewer than 3 competitors.',
      ]}
      prevDivision={{ label: 'Teen 16–17 No-Gi', href: '/divisions/teen-no-gi' }}
      nextDivision={{ label: 'Gi Competition', href: '/divisions/gi' }}
    />
    </>
  )
}
