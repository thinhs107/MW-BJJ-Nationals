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
        description="The Adult No-Gi division is open to all practitioners 18 and older across all belt levels. Three skill-based brackets — Beginner, Intermediate, and Advanced — ensure you compete at the right level. Round Robin format guarantees maximum mat time regardless of bracket size."
        sections={[
          {
            title: 'Beginner — Allowed Techniques',
            rows: [
              { label: 'Max rank',    value: 'White Belt 4 Stripes' },
              { label: 'Submissions', value: 'Standing Submissions, Ezekiel Choke, Standing Guillotine' },
              { label: 'Chokes',      value: 'Triangle With and Without Head Pull, Arm Triangle Chokes, Guillotine' },
              { label: 'Arm locks',   value: 'Arm Bar, Shoulder Locks, Omoplata' },
              { label: 'Leg locks',   value: 'Straight Ankle Lock' },
              { label: 'Other',       value: 'Gogo Plata' },
            ],
          },
          {
            title: 'Beginner — Prohibited Techniques',
            rows: [
              { label: 'Guard',       value: 'No Jumping Guard' },
              { label: 'Joint locks', value: 'No Wrist Lock, No Bicep/Calf Slicer' },
              { label: 'Leg attacks', value: 'No Knee Bar, No Toe Hold, No Heel Hook, No Knee Reap, No Leg Splitting Submissions' },
              { label: 'Spine/Neck',  value: 'No Neck Crank, No Spine Manipulation' },
              { label: 'Takedowns',   value: 'No Scissors Takedowns, No Slams' },
              { label: 'Chokes',      value: 'No Smoother Choke (Hand Over Mouth)' },
            ],
          },
          {
            title: 'Intermediate — Allowed Techniques',
            rows: [
              { label: 'Max rank',    value: 'Purple Belt 4 Stripes' },
              { label: 'Submissions', value: 'Standing Submissions, Standing Guillotine, Jumping Guard' },
              { label: 'Chokes',      value: 'Triangle With and Without Head Pull, Arm Triangle Chokes, Ezekiel Choke, Guillotine' },
              { label: 'Arm locks',   value: 'Arm Bars, Shoulder Locks, Omoplata' },
              { label: 'Joint locks', value: 'Wrist Lock, Straight Ankle Lock' },
              { label: 'Other',       value: 'Gogo Plata' },
            ],
          },
          {
            title: 'Intermediate — Prohibited Techniques',
            rows: [
              { label: 'Leg attacks', value: 'No Knee Bar, No Toe Hold, No Heel Hook, No Knee Reap, No Bicep/Calf Slicer, No Leg Splitting Submissions' },
              { label: 'Spine/Neck',  value: 'No Neck Crank, No Spine Manipulation' },
              { label: 'Takedowns',   value: 'No Scissors Takedowns, No Slams' },
              { label: 'Chokes',      value: 'No Smoother Choke (Hand Over Mouth)' },
            ],
          },
          {
            title: 'Advanced — Allowed Techniques',
            rows: [
              { label: 'Rank',        value: 'Any rank can enter this division' },
              { label: 'Submissions', value: 'Standing Submissions, Standing Guillotine, Jumping Guard' },
              { label: 'Chokes',      value: 'Triangle with/without Head Pull, Arm Triangle Chokes, Ezekiel Choke, Guillotine' },
              { label: 'Arm locks',   value: 'Arm Bars, Shoulder Locks, Omoplata' },
              { label: 'Joint locks', value: 'Wrist Lock, Bicep/Calf Slicer' },
              { label: 'Leg attacks', value: 'Straight Ankle Lock, Knee Bar, Toe Hold, Knee Reap, Heel Hook, Leg Splitting Submissions, Spine Manipulation' },
              { label: 'Other',       value: 'Gogo Plata' },
            ],
          },
          {
            title: 'Advanced — Prohibited Techniques',
            rows: [
              { label: 'Takedowns', value: 'No Scissors Takedowns, No Slams' },
              { label: 'Neck',      value: 'No Neck Cranks' },
              { label: 'Chokes',    value: 'No Smoother Choke (Hand Over Mouth)' },
            ],
          },
        ]}
        rankGroups={[
          { rank: 'Beginner',     time: '5 min'},
          { rank: 'Intermediate', time: '6 min'},
          { rank: 'Advanced',     time: '7 min'},
        ]}
        notes={[
          'Each competitor may register in ONE division only.',
          'No weight allowance at weigh-ins.',
          'Tournament staff reserve the right to combine or subdivide divisions based on turnout.',
          'If no other competitors are registered in your division you may be placed in another division.',
          'Team points: 1st = 5 pts, 2nd = 3 pts, 3rd = 1 pt.',
          'Team points are not awarded for divisions with only 1 competitor.',
          'The top team will be presented with a team award.',
        ]}
        prevDivision={{ label: 'Teen 16–17 No-Gi', href: '/divisions/teen-no-gi' }}
        nextDivision={{ label: 'Gi Competition', href: '/divisions/gi' }}
      />
    </>
  )
}