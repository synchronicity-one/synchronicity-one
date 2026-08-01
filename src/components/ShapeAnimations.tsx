import styles from './ShapeAnimations.module.css';

export function MorphShape({ className = '' }: { className?: string }) {
  return (
    <div className={`${styles.shape} ${styles.morph} ${className}`} aria-hidden='true'>
      <div className={`${styles.inner} ${styles.morphInner}`}></div>
    </div>
  );
}

export function RotateShape({ className = '' }: { className?: string }) {
  return (
    <div className={`${styles.shape} ${styles.rotate} ${className}`} aria-hidden='true'>
      <div className={`${styles.inner} ${styles.rotateInner}`}></div>
    </div>
  );
}
