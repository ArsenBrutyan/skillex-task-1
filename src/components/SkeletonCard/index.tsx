import styles from "../ProductCard/index.module.scss";

export const SkeletonCard = () => (
  <div className={`${styles.card} ${styles.skeleton}`}>
    <div
      className={styles.imagePlaceholder}
      style={{ background: "#2d3748" }}
    />
    <div style={{ padding: "1.25rem" }}>
      <div
        style={{
          height: "20px",
          background: "#2d3748",
          marginBottom: "10px",
          width: "80%",
        }}
      />
      <div style={{ height: "15px", background: "#2d3748", width: "40%" }} />
    </div>
  </div>
);
