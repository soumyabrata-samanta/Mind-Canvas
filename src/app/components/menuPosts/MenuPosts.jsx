import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./menuPosts.module.css";


const MenuPosts = ({withImage}) => {
  return (
    <div>
       <div className={styles.items}>
        <Link href="/posts/tracing-south-americas-living-cultures-as-a-traveler" className={styles.item}>
            {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.postTitle}>Tracing South America's Living Cultures as a Traveler</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ankan Samanta</span>
              <span className={styles.date}> - 2024-02-04</span>
            </div>
          </div>
        </Link>

        <Link href="/posts/bengali-elegance-unveiling-the-rich-tapestry-of-bengals-cultural-heritage" className={styles.item}>
            {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            <h3 className={styles.postTitle}>Unveiling the Rich Tapestry of Bengal's Cultural Heritage</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ankan Samanta</span>
              <span className={styles.date}> - 2024-02-04</span>
            </div>
          </div>
        </Link>

        <Link href="/posts/the-origin-story-and-epic-influence-of-pizza" className={styles.item}>
            {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>The Origin Story and Epic Influence of Pizza</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Soumyabrata Samanta</span>
              <span className={styles.date}> - 2024-02-04</span>
            </div>
          </div>
        </Link>

        <Link href="/posts/elegance-amidst-the-himalayas-a-glimpse-into-kashmiri-fashion" className={styles.item}>
            {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
            <h3 className={styles.postTitle}>Elegance Amidst the Himalayas</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ankan Samanta</span>
              <span className={styles.date}> - 2024-02-04</span>
            </div>
          </div>
        </Link>

        <Link href="/posts/demystifying-object-oriented-coding-from-chaos-to-clarity" className={styles.item}>
            {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Coding</span>
            <h3 className={styles.postTitle}>Demystifying Object-Oriented Coding</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Soumyabrata Samanta</span>
              <span className={styles.date}> - 2024-02-04</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MenuPosts
