import styles from "./modules-section.module.css"

const modules = [
  {
    title: "LLM Fundamentals & Architecture",
    description: "Deep dive into Transformer architectures, prompt engineering, and core LLM capabilities.",
    topics: ["Transformer Models", "Prompt Engineering", "Tokenization"],
  },
  {
    title: "Local Development & Experimentation",
    description: "Set up efficient local environments for fine-tuning, RAG, and rapid experimentation.",
    topics: ["Local LLMs (e.g., Llama)", "RAG (Retrieval-Augmented Generation)", "Evaluation Metrics"],
  },
  {
    title: "MLOps for Generative AI",
    description: "Master the tools and practices for versioning, monitoring, and maintaining production LLMs.",
    topics: ["Model Versioning (e.g., MLflow)", "Data Pipelines", "Observability & Monitoring"],
  },
  {
    title: "Deployment Patterns & Scaling",
    description: "Learn to deploy LLMs efficiently using popular frameworks for scalable inference.",
    topics: ["VLLM & Triton", "Quantization", "Cloud Deployment (AWS/Azure/GCP)"],
  },
  {
    title: "Securing & Optimizing LLM Apps",
    description: "Implement caching, security layers, and cost management techniques for production systems.",
    topics: ["Caching", "Input/Output Filtering", "Cost Optimization"],
  },
  {
    title: "Advanced Engineering Patterns",
    description: "Explore advanced concepts like agent design, tool use, and multi-modal integration.",
    topics: ["AI Agents", "Function Calling", "Multi-Modal Models"],
  },
]

export function ModulesSection() {
  return (
    // Updated class name
    <section className={styles.handbookModules}>
      {/* Updated class name */}
      <div className={styles.handbookContainer}>
        {/* Updated class name and content */}
        <div className={styles.handbookHeader}>
          <span className={styles.handbookLabel}>Handbook Structure</span>
          <h2 className={styles.handbookTitle}>Essential Modules for GenAI Engineering</h2>
          <p className={styles.handbookSubtitle}>
            A structured learning path designed to take you from foundational Transformer knowledge to deploying scalable, secure LLM applications in production.
          </p>
        </div>

        {/* Updated class name */}
        <div className={styles.handbookGrid}>
          {modules.map((module, index) => (
            // Updated class name
            <article key={index} className={styles.handbookCard}>
              {/* Updated class name */}
              <div className={styles.handbookCardHeader}>
                {/* Updated class name */}
                <span className={styles.handbookModuleNum}>0{index + 1}</span>
                {/* Updated class name */}
                <svg
                  className={styles.handbookArrow}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              {/* Updated class names */}
              <h3 className={styles.handbookCardTitle}>{module.title}</h3>
              <p className={styles.handbookCardDesc}>{module.description}</p>
              {/* Updated class names */}
              <div className={styles.handbookTopics}>
                {module.topics.map((topic, i) => (
                  <span key={i} className={styles.handbookTopic}>
                    {topic}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}