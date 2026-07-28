import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            className="mb-8 relative"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-tr from-muted to-white relative z-10 flex items-center justify-center">
              <span className="text-6xl text-muted-foreground/30 font-bold select-none">MN</span>
            </div>
            {/* Ring treatment */}
            <div className="absolute inset-[-8px] border border-primary/30 rounded-full z-0 pointer-events-none" />
            <div className="absolute inset-[-16px] border border-primary/10 rounded-full z-0 pointer-events-none" />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight"
          >
            Muh Na'afi Utama
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary font-medium mb-6"
          >
            Human Resources Enthusiast | Fresh Graduate
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl"
          >
            Fresh Graduate in Management with a strong interest in Human Resources, employee development, recruitment, and HR administration. Passionate about creating organized, people-centered, and efficient workplaces.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#"
              data-testid="link-download-cv"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium transition-transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <Download size={20} />
              Download CV
            </a>
            <a
              href="#contact"
              data-testid="link-contact-hero"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/50 backdrop-blur-sm text-primary border-2 border-primary/20 rounded-full font-medium transition-all hover:border-primary hover:bg-primary/5"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
