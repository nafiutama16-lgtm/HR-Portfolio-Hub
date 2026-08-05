import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { language, toggleLanguage, t } = useLanguage();

  const NAV_LINKS = [
  { label: t.nav.home, href: "#home" },
  { label: t.nav.about, href: "#about" },
  { label: t.nav.experience, href: "#experience" },
  { label: t.nav.projects, href: "#projects" },
  { label: t.nav.contact, href: "#contact" },
];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if top of section is near the top of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-foreground tracking-tight z-50">
          Na'afi<span className="text-primary"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`link-${link.label.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === link.href.substring(1)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-full border border-border text-sm font-medium hover:bg-secondary/50 transition-colors"
          >
            {language === "en" ? "🇬🇧 EN" : "🇮🇩 ID"}
          </button>
        </div>

        {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full border border-border text-xs font-medium hover:bg-secondary/50 transition-colors"
            >
              {language === "en" ? "ID" : "EN"}
            </button>

            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden shadow-lg animate-in fade-in slide-in-from-top-4">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-semibold transition-colors hover:text-primary ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary'
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
