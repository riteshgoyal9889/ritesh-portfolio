import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, ProjectCategory } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter || (filter === "AI/ML" && p.category === "AI/ML") // Logic adjustment for combined tags if needed
  );

  const categories: ProjectCategory[] = ["All", "AI/ML", "Web", "Data"];

  return (
    <section id="projects" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-mono text-white mb-12 flex items-center">
          <span className="text-cyber-cyan mr-2">03.</span> Projects
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-mono rounded transition-all duration-300 border ${
                filter === cat
                  ? "border-cyber-cyan text-cyber-cyan shadow-neon-cyan bg-cyber-cyan/5"
                  : "border-white/10 text-cyber-muted hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="bg-cyber-gray border border-white/5 p-6 rounded-lg hover:border-cyber-purple/50 transition-colors group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyber-purple transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-cyber-muted">
                      <a href={project.github} target="_blank" className="hover:text-white"><Github size={20} /></a>
                      {project.demo && <a href={project.demo} target="_blank" className="hover:text-white"><ExternalLink size={20} /></a>}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <p className="text-cyber-cyan text-xs font-mono mb-4 border-l-2 border-cyber-cyan pl-2">
                    Impact: {project.impact}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-cyber-muted bg-black/30 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}