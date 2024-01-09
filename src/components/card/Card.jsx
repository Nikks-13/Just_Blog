import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
     
        <div className={styles.imageContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt=" " fill />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.detail}>11.02.2023 - </span>
            <span className={styles.category}>Culture</span>
          </div>
          <Link href="/">
            <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          </Link>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            voluptatem dicta officiis quibusdam dolorem, quisquam ipsam corporis
            a fugit sed, aperiam ad accusamus necessitatibus repellat possimus
            ipsa. Quidem, laboriosam iure.
          </p>
          <Link href='/'className={styles.link}>Read More</Link>
        </div>
      </div>
    
  );
};

export default Card;
