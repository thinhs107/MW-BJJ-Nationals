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
        description="The Gi division honors the traditional roots of Brazilian Jiu Jitsu. Competitors wear a regulation gi and compete under a ruleset emphasizing technique, control, and strategic submission attempts. Open to all ages from kids through masters and all belt levels from white to black."
        sections={[
          {
            title: 'Illegal Techniques — All Ages & All Divisions',
            rows: [
              { label: 'Striking',              value: 'No striking of any kind' },
              { label: 'Slamming',              value: 'Not permitted' },
              { label: 'Dangerous conduct',     value: 'No biting, hair pulling, or eye-gouging' },
              { label: 'Throat attacks',        value: 'No fingers to the throat' },
              { label: 'Small joint manip.',    value: 'No fingers, toes, etc.' },
              { label: 'Pressure points',       value: 'Not permitted' },
              { label: 'Strikes to face',       value: 'No knees or elbows to the face' },
              { label: 'Stalling',              value: 'No stalling or running from the fight' },
              { label: 'Unsportsmanlike',       value: 'No swearing or obscene gestures' },
            ],
          },
          {
            title: 'Illegal Techniques — Kids (15 & Under)',
            rows: [
              { label: 'Note',            value: 'All-divisions rules apply plus the following:' },
              { label: 'Chokes',          value: 'No Ezequiel Chokes, No Guillotine Chokes' },
              { label: 'Leg attacks',     value: 'No attacks below the waist — no Foot Locks, Heel Hooks, Knee Bars, or Toe Holds' },
              { label: 'Neck attacks',    value: 'No Neck Cranks, No Cervical Locks (e.g. crucifix)' },
              { label: 'Head pulling',    value: 'No pulling the head while in the Guard (Can Opener)' },
              { label: 'Triangle',        value: 'No Triangle while pulling the Head' },
              { label: 'Joint locks',     value: 'No Wrist Locks, No Calf Locks, No Biceps Locks' },
              { label: 'Shoulder locks',  value: 'No Omoplata' },
              { label: 'Takedowns',       value: 'No Scissors Takedown' },
              { label: 'Referee note',    value: 'Referee reserves the right to stop a choke if the neck or spine is compromised' },
            ],
          },
          {
            title: 'Illegal Techniques — White & Blue Belt (16+)',
            rows: [
              { label: 'Note',          value: 'All-divisions rules apply plus the following:' },
              { label: 'Leg locks',     value: 'No Knee Bars. Blue Belt: Straight Foot Locks ONLY (no twisting inward or wrapping leg over). White Belt: No leg attacks of any kind.' },
              { label: 'Foot locks',    value: 'No Toe Hold ankle locks (Figure 4)' },
              { label: 'Joint locks',   value: 'No Wrist Locks, No Calf Locks, No Biceps Locks' },
              { label: 'Heel hooks',    value: 'No Heel Hooks or Twisting Bent Knee Locks of any kind' },
              { label: 'Neck attacks',  value: 'No Cervical Locks (e.g. crucifix)' },
              { label: 'Head pulling',  value: 'No pulling the head while in the Guard (Can Opener)' },
              { label: 'Takedowns',     value: 'No Scissors Takedown' },
            ],
          },
          {
            title: 'Illegal Techniques — Purple Belt',
            rows: [
              { label: 'Note',         value: 'All-divisions rules apply plus the following:' },
              { label: 'Foot locks',   value: 'Straight Foot Locks ONLY (no twisting inward or wrapping leg over)' },
              { label: 'Joint locks',  value: 'No Calf Locks, No Biceps Locks' },
              { label: 'Heel hooks',   value: 'No Heel Hooks or Twisting Bent Knee Locks of any kind' },
              { label: 'Neck attacks', value: 'No Cervical Locks (e.g. crucifix)' },
              { label: 'Takedowns',    value: 'No Scissors Takedown' },
            ],
          },
          {
            title: 'Illegal Techniques — Brown & Black Belt',
            rows: [
              { label: 'Note',         value: 'All-divisions rules apply plus the following:' },
              { label: 'Takedowns',    value: 'No Scissors Takedown' },
              { label: 'Joint locks',  value: 'No Biceps Locks' },
              { label: 'Neck attacks', value: 'No Cervical Locks (e.g. crucifix)' },
            ],
          },
          {
            title: 'Gi Requirements',
            rows: [
              { label: 'Color',          value: 'Solid White, Blue, or Black. Women may also wear solid Pink. No mixed colors.' },
              { label: 'Fit',            value: 'Four-finger cuff clearance. Sleeves no shorter than 4" from wrist.' },
              { label: 'Shoes',          value: 'No wrestling shoes allowed.' },
              { label: 'Cleanliness',    value: 'Gi must be clean and odor-free.' },
            ],
          },
          // {
          //   title: 'General Rules',
          //   rows: [
          //     { label: 'Format',       value: 'Round Robin. Absolute Divisions follow Single Elimination.' },
          //     { label: 'Registration', value: 'Each competitor may register in ONE division only.' },
          //     { label: 'Weigh-ins',    value: 'No weight allowance at weigh-ins.' },
          //     { label: 'Brackets',     value: 'Divisions may be combined or subdivided on the day of the event.' },
          //     { label: 'Kids pairing', value: 'Kids grouped by age (no more than 2 years apart) and weight. Boys and girls separated where possible.' },
          //     { label: 'Stalling',     value: '1st – Warning · 2nd – 2 points to opponent · 3rd – Disqualification' },
          //     { label: 'Immediate DQ', value: 'Slamming, illegal techniques, unsportsmanlike conduct, arguing with referee, fleeing the mat to avoid submission' },
          //     { label: 'Mouthguard',   value: 'Required for all competitors' },
          //     { label: 'Tie-breaker',  value: 'Advantages → first takedown → referee decision' },
          //   ],
          // },
          // {
          //   title: 'Victory Conditions',
          //   rows: [
          //     { label: 'Submission',         value: 'Immediate win' },
          //     { label: 'Points',             value: 'Highest score at end of regulation' },
          //     { label: 'Advantage',          value: 'Used only if points are tied' },
          //     { label: 'Referee decision',   value: 'If points and advantages are tied' },
          //   ],
          // },
          // {
          //   title: 'Team Scoring',
          //   rows: [
          //     { label: '1st Place', value: '5 points' },
          //     { label: '2nd Place', value: '3 points' },
          //     { label: '3rd Place', value: '1 point' },
          //   ],
          // },
        ]}
        ageGroups={[
          { age: 'Kids 6-7',       time: '3 min'},
          { age: 'Kids 8-9',       time: '3 min'},
          { age: 'Kids 10-11',       time: '4 min'},
          { age: 'Kids 12-13', time: '4 min'},
          { age: 'Juniors',  time: '5 min'},
          { age: 'Adults (M/F) - White Belt',   time: '5 min'},
          { age: 'Adults (M/F) - Blue Belt',   time: '6 min'},
          { age: 'Adults (M/F) - Purple Belt and Upper',   time: '8 min'},
        ]}
        // weightClasses={[
        //   {
        //     division: 'Adult Male',
        //     weights: ['145 lbs', '158 lbs', '170 lbs', '185 lbs', '200 lbs', '215 lbs', '230 lbs', '230+ lbs'],
        //   },
        //   {
        //     division: 'Adult Female',
        //     weights: ['115 lbs', '125 lbs', '135 lbs', '145 lbs', '160 lbs', '175 lbs', '175+ lbs'],
        //   },
        //   {
        //     division: 'Teen Male (16–17)',
        //     weights: ['120 lbs', '134 lbs', '145 lbs', '160 lbs', '175 lbs', '190 lbs', '190+ lbs'],
        //   },
        //   {
        //     division: 'Teen Female (16–17)',
        //     weights: ['105 lbs', '115 lbs', '130 lbs', '145 lbs', '160 lbs', '160+ lbs'],
        //   },
        // ]}
        notes={[
          'Each competitor may register in ONE division only.',
          'No weight allowance at weigh-ins.',
          'Belt ranking for kids must reflect BJJ rank (White, Yellow, Orange, Green). Karate/TKD belts are not equivalent — consult your instructor before registering.',
          'Tournament staff reserve the right to combine or subdivide divisions based on turnout.',
          // 'If no other competitors are registered in your division you may be placed in another division.',
          // 'Team points are not awarded for divisions with only 1 competitor.',
          // 'Teams are scored based on the school name entered on the registration form.',
          // 'The top team will be presented with a team award.',
        ]}
        prevDivision={{ label: 'Adult No-Gi', href: '/divisions/adult-no-gi' }}
      />
    </>
  )
}