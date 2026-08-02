import styles from './MountainAnimation.module.css';

export default function MountainAnimation() {
  return (
    <div className={styles.stage} aria-hidden='true'>
      <div className={styles.sun}></div>
      <div className={styles.big}></div>
      <div className={styles.small}></div>
    </div>
  );
}
