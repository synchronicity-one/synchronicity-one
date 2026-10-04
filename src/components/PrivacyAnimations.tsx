import styles from './PrivacyAnimations.module.css';

// Padlock whose shackle lifts and drops. Top right corner of the privacy page.
export function Padlock() {
  return (
    <div className={styles.stage} aria-hidden='true'>
      <div className={styles.shackle}></div>
      <div className={styles.body}>
        <div className={styles.hole}></div>
        <div className={styles.slot}></div>
      </div>
    </div>
  );
}

// Safe dial turning back and forth. Bottom left corner of the privacy page.
export function SafeDial() {
  return (
    <div className={styles.stage} aria-hidden='true'>
      <div className={styles.ring}></div>
      <div className={styles.knob}>
        <div className={styles.notch}></div>
      </div>
    </div>
  );
}
