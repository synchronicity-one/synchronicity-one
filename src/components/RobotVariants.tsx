import styles from './RobotVariants.module.css';

// Temporary set of robot animations prepared for selection on /robot-lab.
// Variants 1 to 5 are whole robots, 6 to 10 are heads only.
// Delete this file together with the robot-lab page once a variant is chosen.

const p = styles.part;
const h = styles.hole;
const o = styles.outline;

export function Robot1() {
  return (
    <div className={`${styles.stage} ${styles.boxy}`} aria-hidden='true'>
      <div className={`${p} ${styles.boxyHead}`}></div>
      <div className={`${h} ${styles.boxyEyeLeft}`}></div>
      <div className={`${h} ${styles.boxyEyeRight}`}></div>
      <div className={`${p} ${styles.boxyNeck}`}></div>
      <div className={`${p} ${styles.boxyBody}`}></div>
      <div className={`${h} ${styles.boxyChest}`}></div>
      <div className={`${p} ${styles.boxyArmLeft}`}></div>
      <div className={`${p} ${styles.boxyArmRight}`}></div>
      <div className={`${p} ${styles.boxyLegLeft}`}></div>
      <div className={`${p} ${styles.boxyLegRight}`}></div>
    </div>
  );
}

export function Robot2() {
  return (
    <div className={styles.stage} aria-hidden='true'>
      <div className={`${p} ${styles.boxyHead}`}></div>
      <div className={`${h} ${styles.boxyEyeLeft}`}></div>
      <div className={`${h} ${styles.boxyEyeRight}`}></div>
      <div className={`${p} ${styles.boxyNeck}`}></div>
      <div className={`${p} ${styles.boxyBody}`}></div>
      <div className={`${h} ${styles.boxyChest}`}></div>
      <div className={`${p} ${styles.boxyArmLeft}`}></div>
      <div className={`${p} ${styles.waveArm}`}></div>
      <div className={`${p} ${styles.boxyLegLeft}`}></div>
      <div className={`${p} ${styles.boxyLegRight}`}></div>
    </div>
  );
}

export function Robot3() {
  return (
    <div className={styles.stage} aria-hidden='true'>
      <div className={`${p} ${styles.boxyHead}`}></div>
      <div className={`${h} ${styles.boxyEyeLeft}`}></div>
      <div className={`${h} ${styles.boxyEyeRight}`}></div>
      <div className={`${p} ${styles.boxyNeck}`}></div>
      <div className={`${p} ${styles.boxyBody}`}></div>
      <div className={`${h} ${styles.boxyChest}`}></div>
      <div className={`${p} ${styles.stepArmLeft}`}></div>
      <div className={`${p} ${styles.stepArmRight}`}></div>
      <div className={`${p} ${styles.stepLegLeft}`}></div>
      <div className={`${p} ${styles.stepLegRight}`}></div>
    </div>
  );
}

export function Robot4() {
  return (
    <div className={styles.stage} aria-hidden='true'>
      <div className={`${p} ${styles.wireAntennaDot}`}></div>
      <div className={`${p} ${styles.wireAntenna}`}></div>
      <div className={`${o} ${styles.wireHead}`}></div>
      <div className={`${p} ${styles.wireEyeLeft}`}></div>
      <div className={`${p} ${styles.wireEyeRight}`}></div>
      <div className={`${o} ${styles.wireBody}`}>
        <div className={styles.wireScan}></div>
      </div>
      <div className={`${p} ${styles.wireLegLeft}`}></div>
      <div className={`${p} ${styles.wireLegRight}`}></div>
    </div>
  );
}

export function Robot5() {
  return (
    <div className={styles.stage} aria-hidden='true'>
      <div className={styles.floatBot}>
        <div className={`${p} ${styles.floatHead}`}></div>
        <div className={`${h} ${styles.floatVisor}`}></div>
        <div className={`${p} ${styles.floatPupilLeft}`}></div>
        <div className={`${p} ${styles.floatPupilRight}`}></div>
        <div className={`${p} ${styles.floatBody}`}></div>
        <div className={`${p} ${styles.floatArmLeft}`}></div>
        <div className={`${p} ${styles.floatArmRight}`}></div>
      </div>
      <div className={`${p} ${styles.floatShadow}`}></div>
    </div>
  );
}

export function Robot6() {
  return (
    <div className={styles.stage} aria-hidden='true'>
      <div className={`${p} ${styles.scanEarLeft}`}></div>
      <div className={`${p} ${styles.scanEarRight}`}></div>
      <div className={`${p} ${styles.scanHead}`}></div>
      <div className={`${h} ${styles.scanVisor}`}>
        <div className={styles.scanEye}></div>
      </div>
      <div className={`${h} ${styles.scanMouth}`}></div>
    </div>
  );
}

export function Robot7() {
  return (
    <div className={styles.stage} aria-hidden='true'>
      <div className={`${p} ${styles.calmEarLeft}`}></div>
      <div className={`${p} ${styles.calmEarRight}`}></div>
      <div className={`${o} ${styles.calmHead}`}></div>
      <div className={`${p} ${styles.calmEyeLeft}`}></div>
      <div className={`${p} ${styles.calmEyeRight}`}></div>
      <div className={`${p} ${styles.calmMouth}`}></div>
    </div>
  );
}

export function Robot8() {
  return (
    <div className={styles.stage} aria-hidden='true'>
      <div className={`${p} ${styles.gridAntennaDot}`}></div>
      <div className={`${p} ${styles.gridAntenna}`}></div>
      <div className={`${p} ${styles.gridHead}`}></div>
      <div className={`${h} ${styles.gridEyeLeft}`}></div>
      <div className={`${h} ${styles.gridEyeRight}`}></div>
      <div className={`${h} ${styles.gridMouth}`}>
        <div className={styles.gridBar}></div>
        <div className={styles.gridBar}></div>
        <div className={styles.gridBar}></div>
        <div className={styles.gridBar}></div>
        <div className={styles.gridBar}></div>
      </div>
    </div>
  );
}

export function Robot9() {
  return (
    <div className={styles.stage} aria-hidden='true'>
      <div className={`${p} ${styles.turnNeck}`}></div>
      <div className={`${p} ${styles.turnBase}`}></div>
      <div className={styles.turnHead}>
        <div className={`${p} ${styles.turnFace}`}></div>
        <div className={`${h} ${styles.turnEyeLeft}`}></div>
        <div className={`${h} ${styles.turnEyeRight}`}></div>
        <div className={`${h} ${styles.turnMouth}`}></div>
      </div>
    </div>
  );
}

export function Robot10() {
  return (
    <div className={styles.stage} aria-hidden='true'>
      <div className={`${p} ${styles.cutHead}`}></div>
      <div className={`${h} ${styles.cutVisor}`}></div>
      <div className={`${p} ${styles.cutVisorLight}`}></div>
      <div className={`${h} ${styles.cutMouth}`}></div>
    </div>
  );
}
