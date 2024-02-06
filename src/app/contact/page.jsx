// pages/contact.js
"use client";
import { useState } from 'react';
import styles from "./contact.module.css";

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '', 
    message: '' 
  })

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitting(false)
    
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }
  
  return (
    <div>
      <div className={styles.container}>
      <h1 className={styles.heading }>Contact Me</h1>

      <form onSubmit={handleSubmit} className={styles.form}>

        <div className={styles.label}>
          <label>Name</label>
        <input 
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange} 
          className={styles.input}
        />
        </div>

        <div  className={styles.label}>
        <label>Email</label>
         <input 
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange} 
          className={styles.input}
        />
        </div>

        <div  className={styles.label}>
        <label>Message</label>
         <textarea
          name="message"
          value={form.message}
          onChange={handleChange} 
          placeholder='write your message here'
          className={styles.inputPlace}
        />
        </div>

        <button type="submit" disabled={submitting} className={styles.button}>
          Submit
        </button>
        </form>
        </div>
      </div>
  )
}
export default Contact;