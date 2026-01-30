import { education } from "@/data/education"; 
import { motion } from "framer-motion";
// import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-cyber-black">
      <div className="container mx-auto px-6 max-w-4xl">
         <h2 className="text-3xl font-mono text-white mb-12 flex items-center">
          <span className="text-cyber-cyan mr-2">02.</span> Experience & Education
        </h2>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          
          {/* Map over the education data here */}
          {education.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <span className={`absolute -left-[5px] top-2 h-3 w-3 rounded-full shadow-neon-cyan transition-all duration-300 ${
                index === 0 ? "bg-cyber-cyan" : "bg-cyber-gray group-hover:bg-cyber-cyan"
              }`} />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                  {item.degree}
                </h3>
                <span className="text-xs font-mono text-cyber-muted border border-white/10 px-2 py-1 rounded">
                  {item.duration}
                </span>
              </div>
              
              <p className="text-cyber-purple font-mono mb-2 text-sm">
                {item.institution}
              </p>
              
              <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
                {item.details}
              </p>
              
              {item.score && (
                <p className="text-cyber-muted text-xs font-mono mt-2">
                  {item.score}
                </p>
              )}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}