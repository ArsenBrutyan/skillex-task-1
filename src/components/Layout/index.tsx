import React from "react";
import { Filters } from "../Filters";
import styles from "./index.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <Filters />
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Our Collection</h1>
        </header>
        <div className={styles.pageBody}>{children}</div>
      </main>
    </div>
  );
};
