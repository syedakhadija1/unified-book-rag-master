import styles from "./stats-section.module.css"

const stats = [
  { value: "50+", label: "Production Best Practices" }, 
  { value: "12+", label: "Deployment Frameworks" },       
  { value: "4x", label: "Faster LLM Inference" },      
  { value: "Expert", label: "MLOps Level Focus" },      
]

export function StatsSection() {
  return (
    // Updated class name
    <section className={styles.handbookStats}>
      {/* Updated class name */}
      <div className={styles.handbookContainer}>
        {stats.map((stat, index) => (
          // Updated class names
          <div key={index} className={styles.handbookStatItem}>
            <span className={styles.handbookValue}>{stat.value}</span>
            <span className={styles.handbookLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}