import type { Metadata } from 'next'
import DivisionPageLayout from '@/components/divisions/DivisionPageLayout'
import CursorEffect from '@/components/CursorEffect'


export const metadata: Metadata = {
  title: 'Teen 16–17 No-Gi Division Rules',
  description:
    'Rules, weight classes, and time limits for the Teen 16–17 No-Gi division at the Midwest BJJ Nationals Spring 2026 on April 18, Louisville KY.',
  alternates: { canonical: '/divisions/teen-no-gi' },
  openGraph: {
    title: 'Teen 16–17 No-Gi Division — Midwest BJJ Nationals 2026',
    description: 'Complete rules and weight classes for teen 16–17 athletes competing No-Gi at the Midwest BJJ Nationals.',
    url: 'https://mwbjjn.com/divisions/teen-no-gi',
  },
}

export default function TeenNoGiPage() {
  return (
    <>
    <CursorEffect />

    <DivisionPageLayout
      badge="Teen Division"
      icon="🧑"
      title="Teen 16–17"
      subtitle="No-Gi Division"
      description="The Teen 16–17 No-Gi division bridges the gap between junior and adult competition. Athletes in this bracket will face a more complete ruleset — including expanded submission options — while competing in a safe, structured environment that prepares them for adult-level competition."
      sections={[
        {
          title: 'Scoring System',
          rows: [
            { label: 'Takedown',           value: '2 points' },
            { label: 'Sweep',              value: '2 points' },
            { label: 'Guard Pass',         value: '3 points' },
            { label: 'Knee on Belly',      value: '2 points' },
            { label: 'Mount / Back Mount', value: '4 points' },
            { label: 'Submission',         value: 'Immediate win' },
            { label: 'Advantage',          value: 'Near-scoring positions — tiebreaker only' },
            { label: 'Penalty',            value: 'Stalling, fleeing, or unsportsmanlike conduct' },
          ],
        },
        {
          title: 'Permitted Submissions',
          rows: [
            { label: 'Chokes',       value: 'All chokes permitted — RNC, guillotine, triangle, D\'Arce, anaconda, etc.' },
            { label: 'Arm locks',    value: 'Straight armbar, Kimura, Americana, Omoplata' },
            { label: 'Leg locks',    value: 'Straight ankle lock and kneebar permitted. No heel hooks (inside or outside). No twisting knee locks.' },
            { label: 'Neck cranks',  value: 'Not permitted' },
            { label: 'Wrist locks',  value: 'Not permitted' },
            { label: 'Slam defense', value: 'Slamming to escape a submission is not permitted' },
          ],
        },
        {
          title: 'Attire & Equipment',
          rows: [
            { label: 'Top',        value: 'Rash guard required (short or long sleeve)' },
            { label: 'Bottoms',    value: 'Board shorts, spats, or compression shorts. No pockets or belt loops.' },
            { label: 'Footwear',   value: 'No shoes on the mat' },
            { label: 'Jewelry',    value: 'No jewelry. Medical alert bracelets must be taped.' },
            { label: 'Mouthguard', value: 'Strongly recommended' },
          ],
        },
        {
          title: 'General Rules',
          rows: [
            { label: 'Format',         value: 'Round Robin — guaranteed multiple matches' },
            { label: 'Overtime',       value: 'Sudden death referee position. Alternating attempts if still tied.' },
            { label: 'Out of bounds',  value: 'Match paused. Restarted standing unless a submission is in progress.' },
            { label: 'Stalling',       value: 'Verbal warning followed by penalty point. Repeated stalling may result in disqualification.' },
            { label: 'Injury timeout', value: '2 minutes. If competitor cannot continue, loss by injury default.' },
            { label: 'Coaches',        value: 'One coach in designated corner. No outside interference.' },
          ],
        },
      ]}
      ageGroups={[
        { age: 'Age 16', time: '5 min', overtime: '2 min' },
        { age: 'Age 17', time: '5 min', overtime: '2 min' },
      ]}
      weightClasses={[
        {
          division: 'Teen Boys 16–17',
          weights: ['120 lbs', '134 lbs', '145 lbs', '158 lbs', '170 lbs', '185 lbs', '200 lbs', '200+ lbs'],
        },
        {
          division: 'Teen Girls 16–17',
          weights: ['105 lbs', '115 lbs', '125 lbs', '138 lbs', '150 lbs', '165 lbs', '165+ lbs'],
        },
      ]}
      notes={[
        'Competitors must be 16 or 17 years old as of the date of competition.',
        'A parent or guardian must be present at the venue and sign all required waivers.',
        'Competitors may move up to the Adult division at their own request, but not down to the Kids division.',
        'Weigh-in is the morning of the event. A 1 lb allowance is given.',
        'In the event of a tie, match outcome is determined by: submission count → advantages → penalties → referee decision.',
      ]}
      prevDivision={{ label: 'Kids No-Gi', href: '/divisions/kids-no-gi' }}
      nextDivision={{ label: 'Adult No-Gi', href: '/divisions/adult-no-gi' }}
    />
    </>
  )
}
