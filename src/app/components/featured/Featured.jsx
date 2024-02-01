import React from 'react';
import styles from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, Soumya here! </b>
      Discover my stories and creative ideas.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, consectetur.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Ratione ipsam voluptas iure at dolores neque, 
            dolore ea libero beatae quaerat repudiandae amet quasi 
            exercitationem impedit earum a maiores odit tempora facere 
            tenetur eligendi non. Quis repudiandae ea perferendis? 
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
