import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import {
  Robot1,
  Robot2,
  Robot3,
  Robot4,
  Robot5,
  Robot6,
  Robot7,
  Robot8,
  Robot9,
  Robot10,
} from '@/components/RobotVariants';

// Temporary page used to pick one robot animation. Delete it and the
// RobotVariants files once the choice is made.

export const metadata: Metadata = {
  title: 'robot lab',
  robots: { index: false, follow: false },
};

const variants = [
  { n: 1, label: 'boxy robot, bob', node: <Robot1 /> },
  { n: 2, label: 'boxy robot, waving arm', node: <Robot2 /> },
  { n: 3, label: 'boxy robot, walking', node: <Robot3 /> },
  { n: 4, label: 'outlined robot, body scan', node: <Robot4 /> },
  { n: 5, label: 'rounded robot, floating', node: <Robot5 /> },
  { n: 6, label: 'head, visor scan', node: <Robot6 /> },
  { n: 7, label: 'head, outlined, blinking', node: <Robot7 /> },
  { n: 8, label: 'head, antenna and mouth grid', node: <Robot8 /> },
  { n: 9, label: 'head, turning', node: <Robot9 /> },
  { n: 10, label: 'head, angular, pulsing visor', node: <Robot10 /> },
];

export default function RobotLab() {
  return (
    <PageShell active='/robot-lab'>
      <h1 className='text-4xl lg:text-5xl leading-tight'>robot lab</h1>
      <p className='mt-6 max-w-4xl text-lg lg:text-xl leading-relaxed opacity-80'>
        Ten variants at the reference size of 160px. One to five are whole
        robots, six to ten are heads only.
      </p>

      <div className='mt-12 grid grid-cols-2 lg:grid-cols-5 gap-6'>
        {variants.map((v) => (
          <div
            key={v.n}
            className='border border-accent/30 rounded-lg p-4 flex flex-col items-center gap-4'
          >
            <span className='text-2xl'>{v.n}</span>
            {v.node}
            <span className='text-sm opacity-60 text-center leading-snug'>{v.label}</span>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
