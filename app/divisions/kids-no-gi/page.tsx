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
          // {
          //   title: 'Scoring System',
          //   rows: [
          //     { label: 'Takedown',           value: '2 points' },
          //     { label: 'Sweep',              value: '2 points' },
          //     { label: 'Knee on Stomach',    value: '2 points' },
          //     { label: 'Guard Pass',         value: '3 points' },
          //     { label: 'Mount',              value: '4 points' },
          //     { label: 'Back Mount w/hooks', value: '4 points (body lock/crossing feet does not count as hooks)' },
          //     { label: 'Submission',         value: 'Immediate win' },
          //     { label: 'Advantage',          value: 'Secondary to points — only used as tiebreaker when points are tied' },
          //   ],
          // },
          {
            title: 'Ages 6–7 — Allowable Techniques',
            rows: [
              { label: 'Submissions', value: 'No submissions allowed — point system only (same as GI rules)' },
            ],
          },
          {
            title: 'Ages 8–15 — Allowed Techniques',
            rows: [
              { label: 'Triangle',         value: 'Triangle without Head Pull only' },
              { label: 'Chokes',           value: 'RNC Chokes, Arm Triangle Chokes' },
              { label: 'Arm locks',        value: 'Arm Bars, Shoulder Locks' },
            ],
          },
          {
            title: 'Ages 8–15 — Prohibited Techniques',
            rows: [
              { label: 'Takedowns',        value: 'No Scissors Takedowns, No Slams' },
              { label: 'Chokes',           value: 'No Standing Guillotine, No Guillotine, No Ezekiel Choke, No Smoother Choke (Hand Over Mouth)' },
              { label: 'Triangle',         value: 'No Triangle with Head Pull' },
              { label: 'Submissions',      value: 'No Standing Submissions, No Jumping Guard' },
              { label: 'Leg attacks',      value: 'No Straight Ankle Lock, No Knee Bar, No Toe Hold, No Heel Hook, No Knee Reap, No Leg Splitting Submissions' },
              { label: 'Joint locks',      value: 'No Wrist Lock, No Bicep/Calf Slicer' },
              { label: 'Spine / Neck',     value: 'No Neck Crank, No Spine Manipulation, No Gogo Plata' },
            ],
          },
          {
            title: 'General Rules',
            rows: [
              { label: 'Format',         value: 'Round Robin — all competitors guaranteed multiple matches' },
              { label: 'Age pairing',    value: 'Kids paired by age (no more than 2 years apart) and weight' },
              { label: 'Gender',         value: 'Boys and girls separated where possible; mixing may be necessary' },
              { label: 'Belt ranking',   value: 'Register according to BJJ belt rank (White, Yellow, Orange, Green). Karate/TKD belts are not equivalent.' },
              { label: 'Stalling',       value: '1st – Warning · 2nd – 2 points to opponent · 3rd – Disqualification' },
              { label: 'Immediate DQ',   value: 'Slamming, illegal techniques, unsportsmanlike conduct, arguing with referee, fleeing the mat' },
              { label: 'Mouthguard',     value: 'Required for all competitors' },
              { label: 'Tie-breaker',    value: 'Advantages → first takedown → referee decision' },
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
          { age: 'Age 6–7' },
          { age: 'Age 8–9' },
          { age: 'Age 10–11'},
          { age: 'Age 12–13'},
          { age: 'Age 14–15'},
        ]}
        // weightClasses={[
        //   {
        //     division: 'Ages 4–6',
        //     weights: ['40 lbs', '50 lbs', '60 lbs', '70 lbs', '70+ lbs'],
        //   },
        //   {
        //     division: 'Ages 7–8',
        //     weights: ['45 lbs', '55 lbs', '65 lbs', '75 lbs', '85 lbs', '85+ lbs'],
        //   },
        //   {
        //     division: 'Ages 9–10',
        //     weights: ['55 lbs', '65 lbs', '75 lbs', '85 lbs', '95 lbs', '110 lbs', '110+ lbs'],
        //   },
        //   {
        //     division: 'Ages 11–12',
        //     weights: ['70 lbs', '80 lbs', '90 lbs', '100 lbs', '115 lbs', '130 lbs', '130+ lbs'],
        //   },
        //   {
        //     division: 'Ages 13–14',
        //     weights: ['90 lbs', '105 lbs', '120 lbs', '135 lbs', '150 lbs', '165 lbs', '165+ lbs'],
        //   },
        //   {
        //     division: 'Ages 15',
        //     weights: ['110 lbs', '125 lbs', '140 lbs', '155 lbs', '170 lbs', '185 lbs', '185+ lbs'],
        //   },
        // ]}
        notes={[
          'All competitors must have a parent or guardian present at the venue.',
          'Age is determined as of the day of competition.',
          'Competitors may only enter one division. Weight must be verified at weigh-in.',
          'No weight allowance at weigh-ins.',
          'Tournament staff reserve the right to combine or subdivide divisions based on turnout.',
          'If no other competitors are registered in your division you may be placed in another division.',
          'Team points are not awarded for divisions with only 1 competitor.',
        ]}
        nextDivision={{ label: 'Teen 16–17 No-Gi', href: '/divisions/teen-no-gi' }}
      />
    </>
  )
}