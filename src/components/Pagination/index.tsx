import React from "react";
import styles from "./index.module.scss";
import { setPage } from "../../store/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

interface PaginationProps {
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.products.page);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setPage(newPage));
    }
  };

  if (totalPages <= 1) return null;

  return (
    <div className={styles.container}>
      <button
        className={styles.navBtn}
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        <span className={styles.arrow}>←</span> Previous
      </button>

      <div className={styles.info}>
        <span className={styles.current}>{page}</span>
        <span className={styles.divider}>of</span>
        <span className={styles.total}>{totalPages}</span>
      </div>

      <button
        className={styles.navBtn}
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next <span className={styles.arrow}>→</span>
      </button>
    </div>
  );
};
