import React, { useEffect } from "react";
import { useProducts } from "../../api/productsQuery";
import styles from "./index.module.scss";
import ProductCard from "../ProductCard";
import { Pagination } from "../Pagination";
import { SkeletonCard } from "../SkeletonCard";
import { useAppSelector } from "../../store/hooks";
import { shallowEqual } from "react-redux";

const ProductsList: React.FC = () => {
  const { filters, page, limit } = useAppSelector(
    (state) => state.products,
    shallowEqual,
  );

  const {
    data: response,
    isLoading,
    isError,
  } = useProducts(filters, page, limit);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page, filters]);

  if (isLoading) {
    return (
      <div className={styles.grid}>
        {[...Array(8)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div className={styles.statusCenter}>Failed to load products.</div>;
  }

  if (!response?.data?.length || !response.pagination) {
    return <div className={styles.statusCenter}>No products found.</div>;
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.grid}>
        {response.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination totalPages={response.pagination.totalPages} />
    </main>
  );
};

export default ProductsList;
