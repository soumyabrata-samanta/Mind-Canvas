import React from 'react';
import styles from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, Soumya here! </b>
      Explore the World Through My Diverse Blog.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Unveiling the Tapestry of Thoughts</h1>
          <p className={styles.postDesc}>
            Welcome to my vibrant corner of the internet, where curiosity knows no bounds. 
            Dive into a rich tapestry of thoughts, experiences, and ideas as I share 
            stories across a spectrum of topics. From travel adventures to tech explorations, 
            and from insightful reflections to light-hearted moments - there&apos;s something 
            for everyone here.
          </p>
          <button className={styles.button}>Discover More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured;
