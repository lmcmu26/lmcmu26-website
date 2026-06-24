"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#navLogoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M2 17L12 22L22 17" stroke="url(#navLogoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M2 12L12 17L22 12" stroke="url(#navLogoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <defs>
                <linearGradient id="navLogoGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0ea5e9"></stop>
                  <stop offset={1} stopColor="#8b5cf6"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span>
            lmcmu26<span className={styles.dot}>.au</span>
          </span>
        </Link>

        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link
                href="/"
                className={`${styles.navLink} ${pathname === "/" ? styles.activeLink : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`${styles.navLink} ${pathname === "/services" ? styles.activeLink : ""}`}
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
