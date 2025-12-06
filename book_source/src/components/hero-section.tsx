import Link from "@docusaurus/Link"
import styles from "./hero-section.module.css"
import RoboImage from "./asset/robo.jpg"; // Image import retained as requested

export function HeroSection() {
  return (
    // Updated class name
    <section className={styles.handbookHero}> 
      <div className={styles.backgroundPattern} />
      <div className={styles.glowOrb} />

      <div className={styles.handbookContainer}>
        {/* Updated Badge text and class name */}
        <div className={styles.handbookBadge}> 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>The Definitive Resource</span>
        </div>

        {/* Updated Title text and class name */}
        <h1 className={styles.handbookTitle}>
          Build Production-Grade <span className={styles.handbookTextGradient}>Generative AI</span> Systems
        </h1>

        {/* Updated Subtitle text and class name */}
        <p className={styles.handbookSubtitle}>
          Master LLM deployment M.L.O.P.S. and advanced prompt engineering to deploy scalable and robust AI applications in any environment.
        </p>

        <div className={styles.handbookActions}>
          {/* Updated Primary Button text and class name. NOTE: href IS KEPT THE SAME. */}
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
          {/* Updated Secondary Button text and class name. NOTE: href IS KEPT THE SAME. */}
          <Link href="#" className={styles.handbookSecondaryBtn}>
            View Chapter Index
          </Link>
        </div>

        {/* Updated Hero Image class names and alt text. Image source (RoboImage) is unchanged. */}
        <div className={styles.handbookHeroImage}>
          <div className={styles.handbookImageGlow} />
          <div className={styles.handbookImageContainer}>
            <img
              src={RoboImage}
              alt="GenAI Engineering Handbook - LLM architecture and deployment visualization"
            />
            <div className={styles.handbookImageOverlay} />
          </div>
        </div>
      </div>
    </section>
  )
}