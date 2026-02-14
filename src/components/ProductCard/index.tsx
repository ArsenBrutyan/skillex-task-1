import React, { memo } from "react";
import styles from "./index.module.scss";
import type { Product } from "../../types";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <span>{product.name.charAt(0)}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h4 title={product.name}>{product.name}</h4>
          <span className={styles.rating}>⭐ {product.rating}</span>
        </div>
        <p className={styles.meta}>
          {product.brand} • {product.category}
        </p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <button className={styles.btn}>View</button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
