import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.style} ${styles.categoryItem}`}
      >
        Style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.fashion} ${styles.categoryItem}`}
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.food} ${styles.categoryItem}`}
      >
        Food
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.travel} ${styles.categoryItem}`}
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.culture} ${styles.categoryItem}`}
      >
        Culture
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.coding} ${styles.categoryItem}`}
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
