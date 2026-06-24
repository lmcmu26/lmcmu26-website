"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setIsSubmitted(true);
    } catch (error: any) {
      setErrors({ submit: error.message || "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className={styles.centeredContainer}>
        <div className={styles.card}>
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" stroke="url(#successGrad)" strokeWidth="4" strokeLinecap="round" />
                <path d="M20 32L28 40L44 22" stroke="url(#successGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="successGrad" x1="2" y1="2" x2="62" y2="62" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className={styles.successTitle}>Message Sent!</h2>
            <p className={styles.successText}>
              Thank you for your message. We&apos;ll get back to you as soon as possible.
            </p>
            <button onClick={handleReset} className={styles.resetBtn}>
              Send another message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.centeredContainer}>
      <div className={styles.card}>
        <div className={styles.header}>
          <a className={styles.logoLink} href="/">
            <div className={styles.logoIcon}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#cardLogoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 17L12 22L22 17" stroke="url(#cardLogoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 12L12 17L22 12" stroke="url(#cardLogoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <defs>
                  <linearGradient id="cardLogoGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0ea5e9"></stop>
                    <stop offset={1} stopColor="#8b5cf6"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className={styles.logoText}>
              lmcmu26<span className={styles.dot}>.au</span>
            </h1>
          </a>
          <p className={styles.subtitle}>
            Welcome to lmcmu26.au. If you have any inquiries or would like to get in touch, please send a message below.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
            />
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
              placeholder="you@example.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
              rows={5}
              placeholder="How can we help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
            />
            {errors.message && <span className={styles.errorText}>{errors.message}</span>}
          </div>

          {errors.submit && <div className={styles.errorText} style={{ textAlign: "center" }}>{errors.submit}</div>}

          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? <div className={styles.loader} /> : "Send Message"}
          </button>
        </form>

        <div className={styles.directEmail}>
          <span>Or email directly at </span>
          <a href="mailto:lachlan@lmcmu26.au">lachlan@lmcmu26.au</a>
        </div>
      </div>
    </div>
  );
}
