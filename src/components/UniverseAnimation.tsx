import styles from './UniverseAnimation.module.css';

export default function UniverseAnimation({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? styles.wrapperMobile : styles.wrapper}>
      <div className={styles.universe}>
        <div className={styles.planet}></div>
        <div className={`${styles.planetoid} ${styles.top}`}></div>
        <div className={`${styles.planetoid} ${styles.middle}`}></div>
        <div className={`${styles.planetoid} ${styles.bottom}`}></div>
        <div className={styles.galaxy}>
          <div className={styles.core}></div>
        </div>
      </div>
    </div>
  );
}
