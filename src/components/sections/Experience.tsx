import { education } from "@/data/education"; // Assume similar structure to profile
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-cyber-black">
      <div className="container mx-auto px-6 max-w-4xl">
         <h2 className="text-3xl font-mono text-white mb-12 flex items-center">
          <span className="text-cyber-cyan mr-2">02.</span> Experience & Education
        </h2>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {/* Example Education Item */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-cyber-cyan shadow-neon-cyan" />
            
            <h3 className="text-xl font-bold text-white">Bachelor of Technology (CSE)</h3>
            <p className="text-cyber-purple font-mono mb-1">MIT World Peace University</p>
            <p className="text-sm text-gray-500 mb-2">2022 - 2026 | CGPA: 8.02</p>
            <p className="text-gray-400 max-w-2xl">
              Specialized in AI & Machine Learning. [cite_start]Relevant Coursework: Data Structures, DBMS, OS, NLP[cite: 5, 11, 12].
            </p>
          </motion.div>
          
          {/* Add more items mapping from data/education.ts */}
        </div>
      </div>
    </section>
  );
}