import React from "react";
import type { Metadata } from "next";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "lmcmu26.au | Services",
  description: "Self-hosted applications and dashboards running on my local homelab network.",
};

interface ServiceItem {
  name: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

const homelabServices: ServiceItem[] = [
  {
    name: "Home Assistant",
    description: "Centralized smart home automation, telemetry tracking, and device management.",
    url: "https://home.lmcmu26.au",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Plex Media Server",
    description: "Personal media library containing movies, shows, and audio streams on demand.",
    url: "https://media.lmcmu26.au",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="6 3 20 12 6 21 6 3" />
      </svg>
    ),
  },
  {
    name: "Pi-hole",
    description: "Network-wide advertisement blocking, local DNS routing, and request monitoring.",
    url: "https://dns.lmcmu26.au",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: "Nextcloud",
    description: "Secure self-hosted productivity suite, file storage system, and calendar sharing.",
    url: "https://cloud.lmcmu26.au",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19A5.5 5.5 0 0 0 22 13.5a6 6 0 0 0-10.74-3.73A6.25 6.25 0 0 0 3 11.5 5.5 5.5 0 0 0 7.5 19Z" />
      </svg>
    ),
  },
  {
    name: "Vaultwarden",
    description: "Lightweight self-hosted Bitwarden password vault for encrypted credential management.",
    url: "https://vault.lmcmu26.au",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    name: "Portainer",
    description: "Visual container management dashboard for monitoring local Docker stacks.",
    url: "https://docker.lmcmu26.au",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={`${styles.title} text-gradient`}>Homelab Services</h1>
          <p className={styles.subtitle}>
            A collection of local dashboards, smart devices, and hosting platforms run on my custom homelab setup.
          </p>
        </div>

        <div className={styles.grid}>
          {homelabServices.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>{service.icon}</div>
              <h2 className={styles.serviceName}>{service.name}</h2>
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
      </div>
    </div>
  );
}
