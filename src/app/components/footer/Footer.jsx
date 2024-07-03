"use client";
import React from 'react';
import styles from "./footer.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
     <div className={styles.info}>
      <div className={styles.logo}>
        <Image src="/logo2.png" alt="My Blog" width={60} height={60} style={{borderRadius:"50%"}}/>
        <h1 className={styles.logoText}>Mind Canvas</h1>
      </div>
      <p className={styles.desc}>
      MindCanvas, an engaging blog site where ideas are more than just thoughts - 
      they are vibrant landscapes waiting to be explored.
      Think of MindCanvas as your virtual art studio, 
      a place to paint with words, experiment with concepts, 
      and leave your mark on the digital canvas.
      </p>
      <div className={styles.icons}>
        <Image src="/facebook.png" alt="" 
        width={18} height={18}
        onClick={() => window.open('https://www.facebook.com/ankan.samanta.5?mibextid=ZbWKwL')}/>
        <Image src="/instagram.png" alt="" 
        width={18} height={18}
         onClick={() => window.open('https://www.instagram.com/boddo_bhaabuke?igsh=MWJiZ2NiaWhmNXZvbQ==')}
        />
        <Image src="/Linkedin.png" alt="" 
        width={18} height={18}
        onClick={() => window.open('https://www.linkedin.com/in/soumyabrata-samanta-429037246')}
        />
        <Image src="/github.png" alt="" 
        width={18} height={18}
        onClick={() => window.open('https://github.com/soumyabrata-samanta')}
        />
      </div>
     </div>
     <div className={styles.links}>
      <div className={styles.list}>
        <span className={styles.listTitle}>Links</span>
        <Link href="/">Homepage</Link>
        <Link href="/">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
        <Link href="/blog?cat=style">Style</Link>
        <Link href="/blog?cat=fashion">Fashion</Link>
        <Link href="/blog?cat=coding">Coding</Link>
        <Link href="/blog?cat=travel">Travel</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Social</span>
        <Link href="https://www.facebook.com/ankan.samanta.5?mibextid=ZbWKwL" target="_blank">Facebook</Link>
        <Link href="https://www.instagram.com/boddo_bhaabuke?igsh=MWJiZ2NiaWhmNXZvbQ==" target="_blank">Instagram</Link>
        <Link href="https://www.linkedin.com/in/soumyabrata-samanta-429037246" target="_blank">LinkedIn</Link>
        <Link href="https://github.com/soumyabrata-samanta" target="_blank">Github</Link>
      </div>

     </div>
    </div>
  )
}

export default Footer
