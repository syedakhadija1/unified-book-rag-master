import Link from "@docusaurus/Link"
import styles from "./cta-section.module.css"

export function CTASection() {
  return (
    // Updated class name to reflect the handbook theme
    <section className={styles.handbookCta}>
      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />

      <div className={styles.handbookContainer}>
        {/* Updated Title for the Handbook */}
        <h2 className={styles.handbookTitle}>Ready to build production-grade GenAI systems?</h2>
        {/* Updated Description */}
        <p className={styles.handbookDescription}>
          Access the practical knowledge and advanced techniques used by top ML engineers. Start mastering the handbook today.
        </p>

        <div className={styles.handbookActions}>
          {/* Updated Link text and target (assuming a first chapter) */}
          <Link href="/docs/Module 01 Hardware-Lab/1.1-physical-ai-foundations-basics" className={styles.handbookPrimaryBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            Start Reading the Handbook
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          {/* Updated Secondary Button text */}
          <Link href="#" className={styles.handbookSecondaryBtn}>
            Browse Chapters
          </Link>
        </div>
      </div>
    </section>
  )
}