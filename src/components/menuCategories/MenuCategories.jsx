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
        href="/blog?cat=fashion"
        className={`${styles.fashion} ${styles.categoryItem}`}
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=food"
        className={`${styles.food} ${styles.categoryItem}`}
      >
        Food
      </Link>
      <Link
        href="/blog?cat=travel"
        className={`${styles.travel} ${styles.categoryItem}`}
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=culture"
        className={`${styles.culture} ${styles.categoryItem}`}
      >
        Culture
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${styles.coding} ${styles.categoryItem}`}
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
