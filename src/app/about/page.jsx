import React from 'react'
import Styles from "./about.module.css";
import Image from 'next/image';
const page = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <div className={Styles.userImageContainer}>
            <Image src="/profile.jpg" alt="" fill className={Styles.avatar} />
            </div>
      <p className={Styles.postDesc}>
 Hello, I am Soumyabrata Samanta, a passionate third Year Computer Science Engineer currently pursuing my studies at Kalinga Institute of Industrial Technology in Bhubaneswar.<br /> <br />With a keen interest in technology and a drive for innovation, I am deeply passionate about developing interactive full-stack websites that not only function seamlessly but also engage users in meaningful ways.<br /><br/> I believe in the power of technology to transform ideas into reality, and I am committed to honing my skills to contribute positively to the digital landscape.< br /> <br /> 
 <div className={Styles.details}>
 Feel free to contact me here: <br /> <br />
   <p >Email:<span className={Styles.in}> ankansam@gmail.com</span> </p> <br />
   <p> Number:<span className={Styles.in}> +91-9051927870</span>  </p> <br />
 </div>
 </p>
 </div>
    </div>
  )
}

export default page
