import styles from "./about-section.module.css"

const handbookFeatures = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2" />
        <path d="M10 10h6" />
        <path d="M10 14h6" />
      </svg>
    ),
    title: "Core Architectures",
    description: "In-depth chapters on Transformers, Diffusion Models, and State Space Models (SSMs).",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Optimization & Scaling",
    description: "Practical strategies for fine-tuning, quantization, and large-scale model deployment.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 9l-6 6" />
        <path d="M18 13l-6 6" />
        <path d="M8 5l6 6" />
        <path d="M13 18l6-6" />
        <path d="M3 7l6 6" />
      </svg>
    ),
    title: "Prompt Engineering",
    description: "Advanced techniques like Chain-of-Thought (CoT), RAG, and self-correction prompting.",
  },
]

export function AboutSection() {
  return (
    // Updated class name for theme change (e.g., 'handbook-section' suggests a new look)
    <section id="about" className={`${styles.handbookSection} ${styles.serifFont}`}>
      <div className={styles.handbookContainer}>
        <div className={styles.handbookContent}>
          {/* Updated label */}
          <span className={styles.handbookLabel}>The Definitive Guide</span>
          {/* Updated Title */}
          <h2 className={styles.handbookTitle}>The GenAI Engineering Handbook</h2>
          {/* Updated description */}
          <p className={styles.handbookDescription}>
            Your comprehensive, practical guide to building, deploying, and maintaining production-ready Generative AI systems.
            Master the core concepts of LLMs, multimodal models, and the engineering principles required for scalable AI.
          </p>
          {/* Updated sub-description */}
          <p className={styles.handbookSubdesc}>
            Authored for software engineers, ML researchers, and product builders seeking to translate theoretical knowledge into robust, scalable applications.
          </p>
        </div>

        {/* Updated class name for features */}
        <div className={styles.handbookFeatures}>
          {handbookFeatures.map((feature, index) => (
            // Updated class name for feature card
            <div key={index} className={styles.handbookFeatureCard}>
              <div className={styles.handbookFeatureIcon}>{feature.icon}</div>
              <div className={styles.handbookFeatureContent}>
                <h3 className={styles.handbookFeatureTitle}>{feature.title}</h3>
                <p className={styles.handbookFeatureDesc}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}