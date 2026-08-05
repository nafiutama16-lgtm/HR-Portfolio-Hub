import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground py-16 text-center text-muted">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Muh Na'afi Utama<span className="text-primary"></span></h3>
        
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm font-semibold tracking-wide uppercase">
          <a href="#home" className="hover:text-white transition-colors">{t.footer.hero}</a>
          <span className="text-muted/30">&middot;</span>
          <a href="#about" className="hover:text-white transition-colors">{t.footer.about}</a>
          <span className="text-muted/30">&middot;</span>
          <a href="#experience" className="hover:text-white transition-colors">{t.footer.experience}</a>
          <span className="text-muted/30">&middot;</span>
          <a href="#projects" className="hover:text-white transition-colors">{t.footer.projects}</a>
          <span className="text-muted/30">&middot;</span>
          <a href="#contact" className="hover:text-white transition-colors">{t.footer.contact}</a>
        </div>
        
        <div className="w-24 h-[1px] bg-white/10 mx-auto mb-8" />
        
        <p className="text-muted/60 text-sm font-medium">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
