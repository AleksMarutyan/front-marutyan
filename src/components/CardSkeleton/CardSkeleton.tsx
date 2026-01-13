import styles from "./CardSkeleton.module.css";

export const CardSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageSkeleton}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.footer}>
          <div className={styles.authorSkeleton}></div>
        </div>
        <div className={styles.titleSkeleton}></div>
        <div className={styles.meta}>
          <div className={styles.dateSkeleton}></div>
          <div className={styles.separator}></div>
          <div className={styles.viewsSkeleton}></div>
          <div className={styles.separator}></div>
          <div className={styles.viewsSkeleton}></div>
        </div>
        <div className={styles.excerptSkeleton}></div>
        <div className={styles.excerptSkeleton}></div>
        <div className={styles.excerptSkeleton} style={{ width: "85%" }}></div>
      </div>
    </div>
  );
};
