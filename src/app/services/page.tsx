import React from "react";
import type { Metadata } from "next";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "lmcmu26 | Services",
  description: "Self-hosted applications, utility tools, and media platforms running on my network.",
};

interface ServiceItem {
  name: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

interface ServiceSection {
  title: string;
  icon: React.ReactNode;
  services: ServiceItem[];
}

const serviceSections: ServiceSection[] = [
  {
    title: "Media",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
    services: [
      {
        name: "Plex",
        description: "Access the personal media library with streaming support for movies, shows, and audio.",
        url: "https://app.plex.tv/",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="6 3 20 12 6 21 6 3" />
          </svg>
        ),
      },
      {
        name: "Seerr",
        description: "Request management, user discovery, and media requests tracking system for Plex ecosystems.",
        url: "https://seerr.lmcmu26.au/",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "PDF Utilities",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    services: [
      {
        name: "Stirling-PDF",
        description: "A powerful, self-hosted web platform to merge, split, compress, and edit PDF documents locally.",
        url: "https://stirlingpdf.lmcmu26.au/",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M12 18V12M9 15h6" />
          </svg>
        ),
      },
      {
        name: "BentoPDF",
        description: "A privacy-first, client-side PDF toolkit designed to manage and compile documents inside your browser.",
        url: "https://bentopdf.lmcmu26.au/",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="3" y1="12" x2="12" y2="12" />
            <line x1="12" y1="12" x2="21" y2="12" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Tech Tools",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    services: [
      {
        name: "IT-Tools",
        description: "A comprehensive collection of handy online tools for developers and IT professionals.",
        url: "https://ittools.lmcmu26.au/",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        ),
      },
      {
        name: "13ft Ladder",
        description: "A clean, ad-free reader mode and paywall bypass helper to access content without clutter.",
        url: "https://13ftladder.lmcmu26.au/",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3v18M18 3v18M6 7h12M6 12h12M6 17h12" />
          </svg>
        ),
      },
      {
        name: "PrivateBin",
        description: "A minimalist, zero-knowledge, encrypted pastebin for sharing text and files securely.",
        url: "https://privatebin.lmcmu26.au/",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4M12 15v3" />
          </svg>
        ),
      },
      {
        name: "VERT",
        description: "A local, client-side file converter running entirely in the browser via WebAssembly for maximum privacy.",
        url: "https://vert.lmcmu26.au/",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
          </svg>
        ),
      },
      {
        name: "OmniTools",
        description: "An all-in-one suite of privacy-respecting client-side utility tools for daily digital tasks.",
        url: "https://omnitools.lmcmu26.au/",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        ),
      },
      {
        name: "ConvertX",
        description: "A self-hosted file conversion powerhouse supporting over 1,000 formats using local engine integrations.",
        url: "https://convertx.lmcmu26.au/",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M4 4l5 5" />
          </svg>
        ),
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={`${styles.title} text-gradient`}>Hosted Services</h1>
          <p className={styles.subtitle}>
            A collection of secure utility tools, document editors, converters, and media platforms running on my network.
          </p>
        </div>

        {serviceSections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {section.icon}
              <span>{section.title}</span>
            </h2>
            <div className={styles.grid}>
              {section.services.map((service, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.iconContainer}>{service.icon}</div>
                  <h3 className={styles.serviceName}>{service.name}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                  >
                    <span>Launch Service</span>
                    <svg
                      className={styles.externalIcon}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

