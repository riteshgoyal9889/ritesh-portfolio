import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Loader2 } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // 1. Basic Validation
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries());
    
    if (!values.user_name || !values.user_email || !values.message) {
      setStatus("error");
      setErrorMessage("Please fill out all fields.");
      return;
    }

    // 2. Check for Env Vars (Prevents Crash if missing)
    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      console.error("EmailJS environment variables are missing.");
      setStatus("error");
      setErrorMessage("System Error: Email service not configured.");
      return;
    }

    setStatus("submitting");

    // 3. Send Email
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
          // Reset status after 5 seconds
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          setErrorMessage("Transmission failed. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Left Column: Info */}
          <div>
            <h2 className="text-3xl font-mono text-white mb-6 flex items-center">
              <span className="text-cyber-cyan mr-2">04.</span> Get In Touch
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I am currently open to new opportunities in <span className="text-cyber-cyan">Software Engineering</span> and <span className="text-cyber-purple">Data Analytics</span>. 
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3 text-cyber-muted hover:text-white transition-colors">
                <Mail className="text-cyber-cyan" size={18} />
                <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
              </div>
              <div className="flex items-center gap-3 text-cyber-muted">
                <MapPin className="text-cyber-purple" size={18} />
                <span>Pune, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-cyber-gray/30 p-8 rounded-xl border border-white/5 backdrop-blur-sm relative group">
             {/* Neon Border Glow on Hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-purple opacity-0 group-hover:opacity-20 transition duration-500 rounded-xl blur"></div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-cyber-cyan">NAME</label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full bg-cyber-black/50 border border-white/10 rounded p-3 text-white focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-cyber-cyan">EMAIL</label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full bg-cyber-black/50 border border-white/10 rounded p-3 text-white focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-cyber-cyan">MESSAGE</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full bg-cyber-black/50 border border-white/10 rounded p-3 text-white focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`w-full py-3 rounded font-mono font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === "success"
                    ? "bg-green-500/10 text-green-400 border border-green-500/50"
                    : "bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan hover:bg-cyber-cyan/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                }`}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="animate-spin" size={18} /> Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm font-mono mt-2"
                  >
                    <AlertCircle size={16} /> {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}