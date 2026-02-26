import type { Metadata } from 'next'
import DivisionPageLayout from '@/components/divisions/DivisionPageLayout'
import CursorEffect from '@/components/CursorEffect'

export const metadata: Metadata = {
  title: 'Kids No-Gi Division Rules',
  description:
    'Rules and weight classes for the Kids No-Gi division at the Midwest BJJ Nationals Spring 2026. A safe, structured, and fun competition for junior athletes.',
  alternates: { canonical: '/divisions/kids-no-gi' },
  openGraph: {
    title: 'Kids No-Gi Division — Midwest BJJ Nationals 2026',
    description: 'Complete rules, age groups, and weight classes for kids competing No-Gi at the Midwest BJJ Nationals on April 18, 2026.',
    url: 'https://mwbjjn.com/divisions/kids-no-gi',
  },
}

export default function KidsNoGiPage() {
  return (
    <>
    <CursorEffect />
    <DivisionPageLayout
      badge="Kids Division"
      icon="👶"
      title="Kids No-Gi"
      subtitle="Junior Competition Division"
      description="Our Kids No-Gi division is designed to give younger athletes a safe, positive, and competitive experience. Rules are modified to ensure safety while teaching proper technique and competitive spirit. All kids compete in age and weight-appropriate brackets."
      sections={[
        {
          title: 'Scoring System',
          rows: [
            { label: 'Takedown',           value: '2 points' },
            { label: 'Sweep',              value: '2 points' },
            { label: 'Guard Pass',         value: '3 points' },
            { label: 'Knee on Belly',      value: '2 points' },
            { label: 'Mount / Back Mount', value: '4 points' },
            { label: 'Submission',         value: 'Immediate win (regardless of score)' },
            { label: 'Advantage',          value: 'Awarded for near-scoring positions (tiebreaker only)' },
            { label: 'Penalty',            value: 'Stalling, fleeing, or unsportsmanlike conduct' },
          ],
        },
        {
          title: 'Permitted Submissions',
          rows: [
            { label: 'Chokes',        value: 'Rear naked choke, guillotine, triangle (all ages)' },
            { label: 'Arm locks',     value: 'Straight armbar (ages 13+). Kimura and Americana (all ages)' },
            { label: 'Leg locks',     value: 'Straight ankle lock only (ages 13+). No heel hooks at any age.' },
            { label: 'Spine / Neck',  value: 'No cervical cranks or spine locks at any age' },
            { label: 'Wrist locks',   value: 'Not permitted for kids divisions' },
          ],
        },
        {
          title: 'Attire & Equipment',
          rows: [
            { label: 'Top',         value: 'Rash guard (short or long sleeve) — required' },
            { label: 'Bottoms',     value: 'Board shorts, spats, or compression shorts — no pockets' },
            { label: 'Footwear',    value: 'No shoes on the mat' },
            { label: 'Jewelry',     value: 'No jewelry permitted. Medical bracelets must be taped.' },
            { label: 'Headgear',    value: 'Ear guards recommended but not required' },
            { label: 'Mouthguard',  value: 'Strongly recommended' },
          ],
        },
        {
          title: 'General Rules',
          rows: [
            { label: 'Format',         value: 'Round Robin — all competitors guaranteed multiple matches' },
            { label: 'Out of bounds',  value: 'Match paused when competitors reach edge of mat. Restarted from standing or guard per referee discretion.' },
            { label: 'Stalling',       value: 'Referee issues verbal warning first, then penalty point for continued stalling' },
            { label: 'Injury timeout', value: '2 minutes maximum. Competitor may forfeit voluntarily at any time.' },
            { label: 'Coaches',        value: 'One coach permitted in designated corner. No coaching from outside the boundary.' },
            { label: 'Disputes',       value: 'Head referee decision is final. Protests must be raised immediately after the match.' },
          ],
        },
      ]}
      ageGroups={[
        { age: 'Age 4–6',   time: '2 min', overtime: '1 min' },
        { age: 'Age 7–8',   time: '2 min', overtime: '1 min' },
        { age: 'Age 9–10',  time: '3 min', overtime: '1 min' },
        { age: 'Age 11–12', time: '3 min', overtime: '2 min' },
        { age: 'Age 13–14', time: '4 min', overtime: '2 min' },
        { age: 'Age 15',    time: '4 min', overtime: '2 min' },
      ]}
      weightClasses={[
        {
          division: 'Ages 4–6',
          weights: ['40 lbs', '50 lbs', '60 lbs', '70 lbs', '70+ lbs'],
        },
        {
          division: 'Ages 7–8',
          weights: ['45 lbs', '55 lbs', '65 lbs', '75 lbs', '85 lbs', '85+ lbs'],
        },
        {
          division: 'Ages 9–10',
          weights: ['55 lbs', '65 lbs', '75 lbs', '85 lbs', '95 lbs', '110 lbs', '110+ lbs'],
        },
        {
          division: 'Ages 11–12',
          weights: ['70 lbs', '80 lbs', '90 lbs', '100 lbs', '115 lbs', '130 lbs', '130+ lbs'],
        },
        {
          division: 'Ages 13–14',
          weights: ['90 lbs', '105 lbs', '120 lbs', '135 lbs', '150 lbs', '165 lbs', '165+ lbs'],
        },
        {
          division: 'Ages 15',
          weights: ['110 lbs', '125 lbs', '140 lbs', '155 lbs', '170 lbs', '185 lbs', '185+ lbs'],
        },
      ]}
      notes={[
        'All competitors must have a parent or guardian present at the venue.',
        'Age is determined as of the day of competition.',
        'Competitors may only enter one age division. Weight must be verified at weigh-in.',
        'Weigh-in takes place the morning of the event. A 1 lb allowance is given.',
        'Any competitor displaying aggressive or unsportsmanlike behavior will be disqualified.',
        'In the event of a tie in Round Robin, the competitor with more submissions advances. If still tied, advantages are counted, then penalties.',
        'Tournament staff reserve the right to combine small brackets.',
      ]}
      nextDivision={{ label: 'Teen 16–17 No-Gi', href: '/divisions/teen-no-gi' }}
    />
    </>
  )
}
