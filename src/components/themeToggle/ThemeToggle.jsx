"use client";

import styles from "./themeToggle.module.css";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: 'white' }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="moon" width={14} height={14}></Image>
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: 'white' }
            : { right: 1, background: "#0f172a"}
        }
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14}></Image>
    </div>
  );
};

export default ThemeToggle;