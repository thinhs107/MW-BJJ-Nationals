
import type { Metadata } from 'next'
import DivisionPageLayout from '@/components/divisions/DivisionPageLayout'
import CursorEffect from '@/components/CursorEffect'

export const metadata: Metadata = {
  title: 'Gi Competition Division Rules',
  description:
    'Traditional Gi rules, belt divisions, and weight classes for the Midwest BJJ Nationals Spring 2026. IBJJF-inspired ruleset for all ages and belt levels.',
  alternates: { canonical: '/divisions/gi' },
  openGraph: {
    title: 'Gi Competition Division — Midwest BJJ Nationals 2026',
    description: 'Complete Gi rules for all belt levels and age groups. April 18, 2026 — Louisville, KY.',
    url: 'https://mwbjjn.com/divisions/gi',
  },
}

export default function GiPage() {
  return (
    <>
      <CursorEffect />

      <DivisionPageLayout
        badge="Traditional Gi"
        icon="🥋"
        title="Gi Competition"
        subtitle="All Ages & Belt Levels"
        description="The Gi division honors the traditional roots of Brazilian Jiu Jitsu. Competitors wear a regulation gi and compete under an IBJJF-inspired ruleset emphasizing technique, control, and strategic submission attempts. Open to all ages from kids through masters and all belt levels from white to black."
        
        sections={[
          // -----------------------------
          // SCORING SYSTEM
          // -----------------------------
          {
            title: 'Scoring System',
            rows: [
              { label: 'Takedown', value: '2 points' },
              { label: 'Throw to pass', value: '2 points (direct guard pass = 5 total)' },
              { label: 'Sweep', value: '2 points (must stabilize for 3 seconds)' },
              { label: 'Guard Pass', value: '3 points (3-second control)' },
              { label: 'Knee on Belly', value: '2 points (3-second control)' },
              { label: 'Mount', value: '4 points (3-second control)' },
              { label: 'Back Control', value: '4 points (hooks or body triangle)' },
              { label: 'Submission', value: 'Immediate win' },
              { label: 'Advantage', value: 'Awarded for near-scoring or near-submission attempts' },
            ],
          },

          // -----------------------------
          // PERMITTED / ILLEGAL TECHNIQUES
          // -----------------------------
          {
            title: 'Illegal Techniques (All Ages & Divisions)',
            rows: [
              { label: 'Striking', value: 'No punches, kicks, elbows, or knees' },
              { label: 'Slamming', value: 'Illegal at all times' },
              { label: 'Dangerous conduct', value: 'No biting, hair pulling, eye gouging, or throat attacks' },
              { label: 'Small joint manipulation', value: 'No finger or toe attacks' },
              { label: 'Pressure points', value: 'Not permitted' },
              { label: 'Stalling', value: 'Penalties apply for inactivity or fleeing the mat' },
              { label: 'Unsportsmanlike conduct', value: 'Immediate disqualification' },
            ],
          },

          {
            title: 'Illegal Techniques — Kids (15 & Under)',
            rows: [
              { label: 'Chokes', value: 'No Ezequiel or guillotine chokes' },
              { label: 'Leg attacks', value: 'No foot locks, heel hooks, knee bars, or toe holds' },
              { label: 'Neck attacks', value: 'No neck cranks, cervical locks, or can openers' },
              { label: 'Triangle variations', value: 'No pulling the head during triangle' },
              { label: 'Joint locks', value: 'No wrist locks, calf locks, biceps slicers, or omoplata' },
              { label: 'Takedowns', value: 'No scissors takedown' },
            ],
          },

          {
            title: 'Illegal Techniques — White & Blue Belt (16+)',
            rows: [
              { label: 'Leg locks', value: 'Straight ankle lock only (blue belt). No twisting or reaping.' },
              { label: 'Knee bars / toe holds', value: 'Not permitted' },
              { label: 'Wrist / calf / biceps locks', value: 'Not permitted' },
              { label: 'Scissors takedown', value: 'Not permitted' },
              { label: 'Neck attacks', value: 'No cervical locks or can openers' },
              { label: 'White belt restriction', value: 'No leg attacks of any kind' },
            ],
          },

          {
            title: 'Illegal Techniques — Purple Belt',
            rows: [
              { label: 'Foot locks', value: 'Straight ankle lock only' },
              { label: 'Calf / biceps locks', value: 'Not permitted' },
              { label: 'Scissors takedown', value: 'Not permitted' },
              { label: 'Heel hooks', value: 'Not permitted' },
              { label: 'Cervical locks', value: 'Not permitted' },
            ],
          },

          {
            title: 'Illegal Techniques — Brown & Black Belt',
            rows: [
              { label: 'Scissors takedown', value: 'Not permitted' },
              { label: 'Biceps locks', value: 'Not permitted' },
              { label: 'Cervical locks', value: 'Not permitted' },
            ],
          },

          // -----------------------------
          // GI REQUIREMENTS
          // -----------------------------
          {
            title: 'Gi Requirements',
            rows: [
              { label: 'Color', value: 'Solid white, blue, or black. Women may wear solid pink.' },
              { label: 'Matching set', value: 'Top and pants must match in color' },
              { label: 'Fit', value: 'Sleeves no shorter than 4” from wrist; standard collar thickness' },
              { label: 'Cleanliness', value: 'Gi must be clean, odor-free, and free of tears' },
              { label: 'Undergarments', value: 'Men may not wear shirts or rash guards under the gi' },
              { label: 'Shoes', value: 'No wrestling shoes allowed' },
            ],
          },

          // -----------------------------
          // GENERAL RULES
          // -----------------------------
          {
            title: 'General Rules',
            rows: [
              { label: 'Format', value: 'Round Robin for all divisions; Absolute is single elimination' },
              { label: 'Registration', value: 'Competitors may enter ONE division only' },
              { label: 'Weigh-ins', value: 'No weight allowance; must weigh in wearing gi' },
              { label: 'Brackets', value: 'Divisions may be combined or subdivided based on turnout' },
              { label: 'Kids pairing', value: 'Kids grouped by age (within 2 years) and weight' },
              { label: 'Tie-breaker', value: 'If tied: advantages → first takedown → referee decision' },
              { label: 'Mouthguard', value: 'Required for all competitors' },
            ],
          },

          // -----------------------------
          // PENALTIES
          // -----------------------------
          {
            title: 'Penalties',
            rows: [
              { label: 'Stalling — 1st', value: 'Verbal warning' },
              { label: 'Stalling — 2nd', value: '2 points to opponent' },
              { label: 'Stalling — 3rd', value: 'Disqualification' },
              { label: 'Running from ground fight', value: 'Same penalty progression as stalling' },
              { label: 'Immediate DQ', value: 'Slamming, illegal techniques, fleeing to avoid submission, arguing with referee' },
            ],
          },

          // -----------------------------
          // VICTORY CONDITIONS
          // -----------------------------
          {
            title: 'Victory Conditions',
            rows: [
              { label: 'Submission', value: 'Immediate win' },
              { label: 'Points', value: 'Highest score at end of regulation' },
              { label: 'Advantage', value: 'Used only if points are tied' },
              { label: 'Referee decision', value: 'If points and advantages are tied' },
            ],
          },
        ]}

        // -----------------------------
        // AGE GROUPS
        // -----------------------------
        ageGroups={[
          { age: 'Kids 6–15', time: '3 min', overtime: '1 min' },
          { age: 'Juniors 16–17', time: '5 min', overtime: '2 min' },
          { age: 'Adults 18–30', time: '6 min', overtime: '3 min' },
          { age: 'Masters 31–40', time: '6 min', overtime: '2 min' },
          { age: 'Seniors 41–49', time: '5 min', overtime: '2 min' },
          { age: 'Executive 50+', time: '5 min', overtime: '2 min' },
        ]}

        // -----------------------------
        // WEIGHT CLASSES (unchanged)
        // -----------------------------
        weightClasses={[
          {
            division: 'Adult Male',
            weights: ['145 lbs', '158 lbs', '170 lbs', '185 lbs', '200 lbs', '215 lbs', '230 lbs', '230+ lbs'],
          },
          {
            division: 'Adult Female',
            weights: ['115 lbs', '125 lbs', '135 lbs', '145 lbs', '160 lbs', '175 lbs', '175+ lbs'],
          },
          {
            division: 'Teen Male (16–17)',
            weights: ['120 lbs', '134 lbs', '145 lbs', '160 lbs', '175 lbs', '190 lbs', '190+ lbs'],
          },
          {
            division: 'Teen Female (16–17)',
            weights: ['105 lbs', '115 lbs', '130 lbs', '145 lbs', '160 lbs', '160+ lbs'],
          },
        ]}

        // -----------------------------
        // NOTES (TEAM SCORING + MEDALS)
        // -----------------------------
        notes={[
          'Round Robin divisions award medals for 1st, 2nd, and 3rd place.',
          'Team points: 1st = 5 pts, 2nd = 3 pts, 3rd = 1 pt.',
          'Teams are scored based on the school name entered during registration.',
          'Absolute division follows single elimination format.',
          'Brackets with only one competitor do not award team points.',
          'Tournament staff may combine or subdivide divisions as needed.',
        ]}

        prevDivision={{ label: 'Adult No-Gi', href: '/divisions/adult-no-gi' }}
      />
    </>
  )
}
