import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { TypeAnimation } from "react-type-animation"; // npm i react-type-animation
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cyber-black">
      {/* Background Gradient Mesh */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-cyber-cyan font-mono text-lg mb-4 tracking-widest">
            HELLO, I AM
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {profile.name}
          </h1>
          
          <div className="text-xl md:text-2xl text-cyber-muted font-mono h-[40px] mb-8">
            <span className="mr-2">&gt;</span>
            <TypeAnimation
              sequence={[
                "Software Engineer", 2000,
                "Data Analyst", 2000,
                "AI / ML Enthusiast", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyber-purple"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#projects">
              <button className="px-8 py-3 bg-transparent border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 hover:shadow-neon-cyan transition-all duration-300 rounded font-mono flex items-center gap-2 group">
                View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a href={profile.resumeUrl} download>
              <button className="px-8 py-3 bg-cyber-gray border border-white/10 text-white hover:border-cyber-purple hover:text-cyber-purple transition-all duration-300 rounded font-mono flex items-center gap-2">
                Download CV <Download className="w-4 h-4" />
              </button>
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-6 mt-12 text-cyber-muted">
            <a href={profile.contact.github} target="_blank" className="hover:text-white transition-colors"><Github /></a>
            <a href={profile.contact.linkedin} target="_blank" className="hover:text-white transition-colors"><Linkedin /></a>
            <a href={`mailto:${profile.contact.email}`} className="hover:text-white transition-colors"><Mail /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}