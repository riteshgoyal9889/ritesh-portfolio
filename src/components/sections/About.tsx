import { motion } from "framer-motion";
// import { profile } from "@/data/profile"; 
import { Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-cyber-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 bg-cyber-gray rounded-lg border border-white/10 text-cyber-cyan">
            <Terminal size={24} />
          </div>
          <h2 className="text-3xl font-mono text-white">
            <span className="text-cyber-cyan">01.</span> About Me
          </h2>
        </motion.div>

        {/* Content Box */}
        <div className="grid md:grid-cols-5 gap-12 items-start">
          
          {/* Main Text */}
          <motion.div 
            className="md:col-span-3 text-lg text-gray-400 leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>
              I am a <span className="text-cyber-cyan font-medium">Computer Science Undergraduate</span> at MIT-WPU[cite: 5], specialized in building intelligent systems that bridge the gap between data and decision-making.
            </p>
            <p>
              My journey involves working on <span className="text-white">AI-driven resume screening</span> [cite: 24], <span className="text-white">financial tracking automation</span>[cite: 27], and full-stack platforms. I thrive in environments where <span className="text-cyber-purple font-mono">Clean Code</span> meets <span className="text-cyber-purple font-mono">Complex Algorithms</span>.
            </p>
            
            <p>
              When I'm not training models or optimizing SQL queries, I volunteer with NGOs like <span className="text-white">PRASHRAYA</span> [cite: 46] to drive social impact.
            </p>
          </motion.div>

          {/* Stats / Highlights Sidebar */}
          <motion.div 
            className="md:col-span-2 grid grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="p-6 bg-cyber-dark border border-white/5 rounded-xl hover:border-cyber-cyan/30 transition-colors group">
              <h4 className="text-4xl font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors">8.02</h4>
              <p className="text-sm font-mono text-cyber-muted">CGPA (MIT-WPU)</p>
            </div>
            
            <div className="p-6 bg-cyber-dark border border-white/5 rounded-xl hover:border-cyber-purple/30 transition-colors group">
              <h4 className="text-4xl font-bold text-white mb-2 group-hover:text-cyber-purple transition-colors">3+</h4>
              <p className="text-sm font-mono text-cyber-muted">Major Projects Shipped</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}