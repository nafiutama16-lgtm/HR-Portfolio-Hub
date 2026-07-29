export default function Footer() {
  return (
    <footer className="bg-foreground py-16 text-center text-muted">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Muh Na'afi Utama<span className="text-primary"></span></h3>
        
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm font-semibold tracking-wide uppercase">
          <a href="#home" className="hover:text-white transition-colors">Hero</a>
          <span className="text-muted/30">&middot;</span>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <span className="text-muted/30">&middot;</span>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <span className="text-muted/30">&middot;</span>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <span className="text-muted/30">&middot;</span>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <div className="w-24 h-[1px] bg-white/10 mx-auto mb-8" />
        
        <p className="text-muted/60 text-sm font-medium">
          &copy; 2026 Muh Na'afi Utama. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
