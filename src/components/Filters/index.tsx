import React, { useCallback } from "react";
import { useFilterOptions } from "../../api/productsQuery";
import { setFilters } from "../../store/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import styles from "./index.module.scss";

export const Filters: React.FC = () => {
  const dispatch = useAppDispatch();

  const selectedCategories = useAppSelector(
    (state) => state.products.filters.category,
  );
  const selectedBrands = useAppSelector(
    (state) => state.products.filters.brand,
  );

  const { data: options, isLoading } = useFilterOptions();

  const handleToggle = useCallback(
    (item: string, type: "category" | "brand") => {
      const currentList =
        type === "category" ? selectedCategories : selectedBrands;

      const nextList = currentList.includes(item)
        ? currentList.filter((i) => i !== item)
        : [...currentList, item];

      dispatch(setFilters({ [type]: nextList }));
    },
    [dispatch, selectedCategories, selectedBrands],
  );

  const handleClear = () => {
    dispatch(setFilters({ category: [], brand: [] }));
  };

  if (isLoading)
    return <div className={styles.loading}>Loading filters...</div>;
  if (!options) return null;

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.mainTitle}>Filters</h2>

      <section className={styles.section}>
        <h4 className={styles.sectionTitle}>Categories</h4>
        <div className={styles.list}>
          {options.categories.map((cat) => (
            <label key={cat} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleToggle(cat, "category")}
              />
              <span className={styles.labelName}>{cat}</span>
            </label>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h4 className={styles.sectionTitle}>Brands</h4>
        <div className={styles.list}>
          {options.brands.map((brand) => (
            <label key={brand} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleToggle(brand, "brand")}
              />
              <span className={styles.labelName}>{brand}</span>
            </label>
          ))}
        </div>
      </section>

      <button className={styles.clearBtn} onClick={handleClear}>
        Clear All
      </button>
    </aside>
  );
};
