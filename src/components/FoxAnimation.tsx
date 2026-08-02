import styles from './FoxAnimation.module.css';

export function Fox() {
  return (
    <div className={styles.fox} aria-hidden='true'>
      <div className={styles.head}>
        <span className={`${styles.eye} ${styles.eyeLeft}`}></span>
        <span className={`${styles.eye} ${styles.eyeRight}`}></span>
        <span className={styles.winkLine}></span>
        <span className={styles.nose}></span>
        <span className={styles.mouth}></span>
      </div>
      <div className={styles.neck}></div>
      <div className={styles.legs}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.body}></div>
      <div className={styles.tail}></div>
    </div>
  );
}
