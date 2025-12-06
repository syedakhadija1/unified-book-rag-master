import { useState } from "react"
import Link from "@docusaurus/Link"
import styles from "./navbar.module.css"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // Updated class name
    <nav className={styles.handbookNavbar}>
      {/* Updated class name */}
      <div className={styles.handbookContainer}>
        {/* Updated class names and logo text */}
        <Link href="/" className={styles.handbookLogo}>
          <div className={styles.handbookLogoIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="4" width="6" height="6" rx="1" />
              <rect x="14" y="4" width="6" height="6" rx="1" />
              <rect x="4" y="14" width="6" height="6" rx="1" />
              <rect x="14" y="14" width="6" height="6" rx="1" />
            </svg>
          </div>
          <span className={styles.handbookLogoText}>GenAI Handbook</span>
        </Link>

        {/* Updated class name and link text */}
        <div className={styles.handbookNavLinks}>
          <Link href="#about" className={styles.handbookNavLink}>
            Introduction
          </Link>
          <Link href="#modules" className={styles.handbookNavLink}>
            Index
          </Link>
        </div>

        {/* Updated class names and link text */}
        <div className={styles.handbookNavActions}>
          {/* href retained */}
          <Link href="/docs/Module 01 Hardware-Lab/1.1-physical-ai-foundations-basics" className={styles.handbookDocLink}>
            Chapter Index
          </Link>
          {/* href retained */}
          <Link href="/docs/Module 01 Hardware-Lab/1.1-physical-ai-foundations-basics" className={styles.handbookCtaButton}>
            Get Started
          </Link>
        </div>

        {/* Updated class name */}
        <button
          className={styles.handbookMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        // Updated class name
        <div className={styles.handbookMobileMenu}>
          {/* Updated class names and link text */}
          <Link href="#about" className={styles.handbookMobileLink} onClick={() => setIsOpen(false)}>
            Introduction
          </Link>
          <Link href="#modules" className={styles.handbookMobileLink} onClick={() => setIsOpen(false)}>
            Index
          </Link>
          <Link
            // href retained
            href="/docs/Module 01 Hardware-Lab/1.1-physical-ai-foundations-basics"
            className={styles.handbookMobileCta} // Updated class name
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}