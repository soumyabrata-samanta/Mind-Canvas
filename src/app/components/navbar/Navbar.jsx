"use client";
import React from 'react';
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';
import Contact from '../../contact/page';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
       <Image src="/facebook.png" alt="facebook" 
       width={24} height={24} 
       onClick={() => window.open('https://www.facebook.com/ankan.samanta.5?mibextid=ZbWKwL')}/>
       <Image src="/instagram.png" alt="instagram" 
       width={24} height={24} 
       onClick={() => window.open('https://www.instagram.com/boddo_bhaabuke?igsh=MWJiZ2NiaWhmNXZvbQ==')}
       />
       <Image src="/Linkedin.png" alt="linkedin" 
       width={24} height={24} style={{ borderRadius: '50%' }}  
       onClick={() => window.open('https://www.linkedin.com/in/soumyabrata-samanta-429037246')}
       />
       <Image src="/github.png" alt="github" 
       width={24} height={24} 
       onClick={() => window.open('https://github.com/soumyabrata-samanta')}
       />
      </div>
      <div className={styles.logo}>MindCanvas</div>
      <div className={styles.links}>
        <ThemeToggle />
      <Link href="/" className={styles.link}>Homepage</Link>
      <Link href="/contact" className={styles.link}>Contact</Link>
      <Link href="/about" className={styles.link}>About</Link>
      <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
