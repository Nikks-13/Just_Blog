import React from 'react';
import styles from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, Nixx here!</b> Share Your stories and creative ideas !</h1>
     
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src='/featured.png' alt='description' fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Building Dreams: A Journey into Creating My Own Blog Website</h1>
          <p className={styles.postDesc}>Welcome to my corner of the internet! I am excited to share the story of how I created my very own blog website. It&apos;s been a thrilling journey filled with challenges, learning curves, and ultimately, the satisfaction of seeing my ideas come to life on the digital canvas.</p>
          <button className={styles.button} >Adding Soon !</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
