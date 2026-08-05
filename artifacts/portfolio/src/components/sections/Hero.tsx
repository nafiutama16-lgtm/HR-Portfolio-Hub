import { motion } from "framer-motion";
import { Download, FolderOpen, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@assets/WhatsApp_Image_2026-06-25_at_7.01.45_PM_1785212685856.jpeg";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

// CV is stored at /assets/cv.pdf — replace the file there to update the CV without touching code.
const CV_PATH = `${import.meta.env.BASE_URL}assets/cv.pdf`
  .replace(/\/+/g, "/")
  .replace(":/", "://");

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="mb-7 relative"
          >
            {/* Outer glow rings */}
            <div className="absolute inset-[-16px] border border-primary/10 rounded-full z-0 pointer-events-none" />
            <div className="absolute inset-[-8px] border border-primary/30 rounded-full z-0 pointer-events-none" />

            {/* Photo circle */}
            <div
              className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white relative z-10 shadow-2xl shadow-primary/20"
              style={{
                boxShadow:
                  "0 0 0 4px #fff, 0 0 0 6px rgba(37,99,235,0.35), 0 8px 32px rgba(37,99,235,0.18)",
              }}
            >
              <img
                src={profilePhoto}
                alt="Muh Na'afi Utama"
                className="w-full h-full object-cover object-top"
                data-testid="img-profile-photo"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-3 tracking-tight"
          >
            Muh Na'afi Utama
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary font-medium mb-5"
          >
            {t.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl"
          >
            {t.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8"
          >
            <a
              href={CV_PATH}
              download="Muh_Naafi_Utama_CV.pdf"
              data-testid="link-download-cv"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
            >
              <Download size={20} />
              {t.downloadCV}
            </a>
            <a
              href="#projects"
              data-testid="link-view-projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/60 backdrop-blur-sm text-primary border-2 border-primary/20 rounded-full font-medium transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:scale-105 active:scale-95"
            >
              <FolderOpen size={20} />
              {t.viewProjects}
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/muh-naafi-utama/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-testid="link-linkedin"
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:nafiutama16@gmail.com"
              aria-label="Email"
              data-testid="link-email"
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://wa.me/6288216718053"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Phone"
              data-testid="link-phone"
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
