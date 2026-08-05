import { useMemo } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const contactSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(1, t.nameRequired),
        email: z.string().email(t.emailInvalid),
        message: z.string().min(1, t.messageRequired),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    const res = await fetch(`${import.meta.env.BASE_URL}api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      toast.error(t.toastErrorTitle, {
        description: (body as { error?: string }).error ?? t.toastErrorDescription,
      });
      return;
    }

    toast.success(t.toastSuccessTitle, {
      description: t.toastSuccessDescription,
    });
    reset();
  };

  return (
    <SectionReveal id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left - Info */}
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {t.contactInfo}
            </h3>

            <div className="space-y-8">
              <a
                href="mailto:nafiutama16@gmail.com"
                className="flex items-center gap-5 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">
                  nafiutama16@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/6288216718053"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">{t.whatsapp}</span>
              </a>

              <a
                href="https://www.linkedin.com/in/muh-naafi-utama/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">{t.linkedin}</span>
              </a>

              <div className="flex items-center gap-5 text-muted-foreground group">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">
                  Boyolali, Central Java, Indonesia
                </span>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">
                {t.followMe}
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/muh-naafi-utama/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-all hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:nafiutama16@gmail.com"
                  aria-label="Email"
                  className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-all hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/6288216718053"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-all hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />

            <h3 className="text-2xl font-semibold text-foreground mb-8">
              {t.sendMessage}
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  {t.fullName}
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className={`w-full px-5 py-4 rounded-xl border ${errors.name ? "border-red-500 focus:ring-red-500" : "border-input focus:ring-primary focus:border-primary"} bg-secondary/10 outline-none transition-all`}
                  placeholder={t.namePlaceholder}
                  data-testid="input-name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500 font-medium">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  {t.emailAddress}
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className={`w-full px-5 py-4 rounded-xl border ${errors.email ? "border-red-500 focus:ring-red-500" : "border-input focus:ring-primary focus:border-primary"} bg-secondary/10 outline-none transition-all`}
                  placeholder={t.emailPlaceholder}
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500 font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  {t.yourMessage}
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  className={`w-full px-5 py-4 rounded-xl border ${errors.message ? "border-red-500 focus:ring-red-500" : "border-input focus:ring-primary focus:border-primary"} bg-secondary/10 outline-none transition-all resize-none`}
                  placeholder={t.messagePlaceholder}
                  data-testid="input-message"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500 font-medium">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
                className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.submitButton}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
