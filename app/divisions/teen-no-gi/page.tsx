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
        description="The Teen 16–17 No-Gi division bridges the gap between junior and adult competition. Athletes compete under an expanded ruleset with more submission options, in a safe and structured environment that prepares them for adult-level competition."
        sections={[
          {
            title: 'Novice / Intermediate — Allowed Techniques',
            rows: [
              { label: 'Submissions',  value: 'Standing Submissions, Ezekiel Choke' },
              { label: 'Chokes',       value: 'Triangle With and Without Head Pull, Arm Triangle Chokes, Guillotine' },
              { label: 'Arm locks',    value: 'Arm Bars, Shoulder Locks, Omoplata' },
              { label: 'Leg locks',    value: 'Straight Ankle Lock' },
              { label: 'Other',        value: 'Gogo Plata' },
            ],
          },
          {
            title: 'Novice / Intermediate — Prohibited Techniques',
            rows: [
              { label: 'Takedowns',   value: 'No Scissors Takedowns, No Slams' },
              { label: 'Guard',       value: 'No Jumping Guard' },
              { label: 'Joint locks', value: 'No Wrist Lock, No Bicep/Calf Slicer' },
              { label: 'Leg attacks', value: 'No Knee Bar, No Toe Hold, No Heel Hook, No Knee Reap, No Leg Splitting Submissions' },
              { label: 'Spine/Neck',  value: 'No Neck Crank, No Spine Manipulation' },
              { label: 'Chokes',      value: 'No Smoother Choke (Hand Over Mouth), No Standing Guillotine' },
            ],
          },
          {
            title: 'Advanced — Allowed Techniques',
            rows: [
              { label: 'Submissions',  value: 'Standing Submissions, Standing Guillotine' },
              { label: 'Chokes',       value: 'Triangle with Head Pull, Triangle without Head Pull, Collar Chokes, Arm Triangle Chokes, Ezekiel Choke, Guillotine' },
              { label: 'Arm locks',    value: 'Arm Bars, Shoulder Locks, Omoplata' },
              { label: 'Joint locks',  value: 'Wrist Lock, Straight Ankle Lock' },
              { label: 'Other',        value: 'Gogo Plata' },
            ],
          },
          {
            title: 'Advanced — Prohibited Techniques',
            rows: [
              { label: 'Takedowns',   value: 'No Scissors Takedowns, No Slams' },
              { label: 'Guard',       value: 'No Jumping Guard' },
              { label: 'Leg attacks', value: 'No Knee Bar, No Toe Hold, No Heel Hook, No Knee Reap, No Bicep/Calf Slicer, No Leg Splitting Submissions' },
              { label: 'Spine/Neck',  value: 'No Neck Crank, No Spine Manipulation' },
              { label: 'Chokes',      value: 'No Smoother Choke (Hand Over Mouth)' },
            ],
          },
          {
            title: 'General Rules',
            rows: [
              { label: 'Format',       value: 'Round Robin — guaranteed multiple matches' },
              { label: 'Stalling',     value: '1st – Warning · 2nd – 2 points to opponent · 3rd – Disqualification' },
              { label: 'Immediate DQ', value: 'Slamming, illegal techniques, unsportsmanlike conduct, arguing with referee, fleeing the mat' },
              { label: 'Mouthguard',   value: 'Required for all competitors' },
              { label: 'Tie-breaker',  value: 'Advantages → first takedown → referee decision' },
            ],
          },
          {
            title: 'Attire',
            rows: [
              { label: 'Top',        value: 'Rashguard or fitted T-shirt covering torso and shoulders. No tank tops or sports bras.' },
              { label: 'Bottoms',    value: 'Shorts or spats fully covering buttocks. No zippers, pockets, or exposed drawstrings. Not overly baggy.' },
              { label: 'Prohibited', value: 'No hard pads, jewelry, or plastic/metal cups. No wrestling shoes.' },
              { label: 'Hygiene',    value: 'Gear must be clean, odor-free, and must not interfere with competition' },
            ],
          },
        ]}
        ageGroups={[
          { age: 'Age 16' },
          { age: 'Age 17' },
        ]}
        // weightClasses={[
        //   {
        //     division: 'Teen Boys 16–17',
        //     weights: ['120 lbs', '134 lbs', '145 lbs', '158 lbs', '170 lbs', '185 lbs', '200 lbs', '200+ lbs'],
        //   },
        //   {
        //     division: 'Teen Girls 16–17',
        //     weights: ['105 lbs', '115 lbs', '125 lbs', '138 lbs', '150 lbs', '165 lbs', '165+ lbs'],
        //   },
        // ]}
        notes={[
          'Competitors must be 16 or 17 years old as of the date of competition.',
          'A parent or guardian must be present at the venue and sign all required waivers.',
          'No weight allowance at weigh-ins.',
          'Tournament staff reserve the right to combine or subdivide divisions based on turnout.',
          'Team points: 1st = 5 pts, 2nd = 3 pts, 3rd = 1 pt.',
          'Team points are not awarded for divisions with only 1 competitor.',
        ]}
        prevDivision={{ label: 'Kids No-Gi', href: '/divisions/kids-no-gi' }}
        nextDivision={{ label: 'Adult No-Gi', href: '/divisions/adult-no-gi' }}
      />
    </>
  )
}