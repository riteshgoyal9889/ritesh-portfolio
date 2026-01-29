export type ProjectCategory = "All" | "AI/ML" | "Web" | "Data";

export const projects = [
  {
    id: 1,
    title: "Resume Builder & Intelligent Analyzer",
    category: "AI/ML",
    tech: ["Python", "NLP", "Streamlit", "TF-IDF"],
    description: "An interactive resume builder and parsing pipeline achieving 85% accuracy for skills extraction. Includes a semantic job-matching engine.",
    impact: "90% match accuracy using Cosine Similarity.",
    github: "https://github.com/riteshgoyal9889", 
    demo: null, 
  },
  {
    id: 2,
    title: "Finnova - Smart Finance Tracker",
    category: "Web",
    tech: ["React.js", "Node.js", "SQL", "JWT"],
    description: "AI-driven finance tracker with automated expense categorization, multi-account support, and OCR-based receipt scanning.",
    impact: "Implemented secure auth and optimized backend APIs.",
    github: "https://github.com/riteshgoyal9889",
    demo: null,
  },
  {
    id: 3,
    title: "PawFinds - Pet Adoption Platform",
    category: "Web",
    tech: ["MERN Stack", "Redux", "Tailwind"],
    description: "Full-stack adoption system enabling pet listings, applications, and admin workflows with role-based access control.",
    impact: "Seamless adoption experience with detailed profiles and filtering.",
    github: "https://github.com/riteshgoyal9889",
    demo: null,
  }
];