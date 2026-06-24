"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./ContactForm.module.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const tempErrors: Partial<FormState> = {};
    if (!form.name.trim()) tempErrors.name = "Name is required";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!form.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    const endpoint = process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT || "lachlan@lmcmu26.au";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        })
      });

      const result = await response.json();
      if (response.ok) {
        if (result.success === "true") {
          setSuccessMessage("Thank you for reaching out. Your message has been transmitted successfully.");
          setIsSuccess(true);
          setForm(INITIAL_STATE);
        } else if (result.message && result.message.toLowerCase().includes("activation")) {
          setSuccessMessage(`An activation link has been sent to your email (${endpoint.includes("@") ? endpoint : "default: lachlan@lmcmu26.au"}). Please check your inbox and click 'Activate Form' to complete the setup.`);
          setIsSuccess(true);
          setForm(INITIAL_STATE);
        } else {
          setErrors({ message: result.message || "Unable to transmit message. Please try again." });
        }
      } else {
        setErrors({ message: "Unable to transmit message. Please try again." });
      }
    } catch (error) {
      console.error(error);
      setErrors({ message: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.centeredContainer}>
      <div className={styles.card}>
        {/* Header Branding */}
        <div className={styles.header}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoIcon}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#cardLogoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="url(#cardLogoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="url(#cardLogoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="cardLogoGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className={styles.logoText}>
              lmcmu26<span className={styles.dot}>.au</span>
            </h1>
          </Link>
          <p className={styles.subtitle}>
            Welcome to lmcmu26.au. If you have any inquiries or would like to get in touch, please send a message below.
          </p>
        </div>

        {isSuccess ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="url(#successGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 4L12 14.01l-3-3" stroke="url(#successGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="successGrad" x1="9" y1="4" x2="22" y2="14" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h4 className={styles.successTitle}>
              {successMessage.toLowerCase().includes("activation") ? "Activation Required" : "Message Sent!"}
            </h4>
            <p className={styles.successText}>
              {successMessage}
            </p>
            <button 
              className={styles.resetBtn} 
              onClick={() => setIsSuccess(false)}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                placeholder="Your Name"
              />
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                placeholder="you@example.com"
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                rows={5}
                placeholder="How can we help you?"
              />
              {errors.message && <span className={styles.errorText}>{errors.message}</span>}
            </div>

            {errors.message && !form.message.trim() && <span className={styles.errorText}>{errors.message}</span>}
            {/* Display submission or backend error messages */}
            {errors.message && form.message.trim() && (
              <div className={styles.errorText} style={{ textAlign: "center", marginBottom: "1rem" }}>
                {errors.message}
              </div>
            )}

            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className={styles.loader}></span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}

        <div className={styles.directEmail}>
          <span>Or email directly at </span>
          <a href="mailto:lachlan@lmcmu26.au">lachlan@lmcmu26.au</a>
        </div>
      </div>
    </div>
  );
}
