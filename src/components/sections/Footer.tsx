import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="py-8 bg-cyber-dark border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-6 mb-4 text-cyber-muted">
          <a href={profile.contact.github} target="_blank" className="hover:text-cyber-cyan transition-colors">
            <Github size={20} />
          </a>
          <a href={profile.contact.linkedin} target="_blank" className="hover:text-cyber-cyan transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.contact.email}`} className="hover:text-cyber-cyan transition-colors">
            <Mail size={20} />
          </a>
        </div>
        <p className="text-sm font-mono text-gray-500">
          Designed & Built by <span className="text-cyber-cyan">Ritesh Goyal</span>
        </p>
        <p className="text-xs text-gray-600 mt-2">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}