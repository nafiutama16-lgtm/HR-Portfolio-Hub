import { SectionReveal } from '@/components/ui/SectionReveal';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(1, 'Message is required'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
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
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      toast.error('Failed to send message', {
        description: (body as { error?: string }).error ?? 'Please try again later.',
      });
      return;
    }

    toast.success('Message Sent Successfully!', {
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    reset();
  };

  return (
    <SectionReveal id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left - Info */}
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <a href="mailto:nafiutama16@gmail.com" className="flex items-center gap-5 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">nafiutama16@gmail.com</span>
              </a>
              
              <a href="tel:+6288216718053" className="flex items-center gap-5 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">+62 882-1671-8053</span>
              </a>
              
              <a href="https://www.linkedin.com/in/muh-naafi-utama/" target="_blank" rel="noreferrer" className="flex items-center gap-5 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">linkedin.com/in/muh-naafi-utama</span>
              </a>
              
              <div className="flex items-center gap-5 text-muted-foreground group">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">Boyolali, Central Java, Indonesia</span>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/muh-naafi-utama/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-all hover:-translate-y-1">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:nafiutama16@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-all hover:-translate-y-1">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+6288216718053" aria-label="Phone" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-all hover:-translate-y-1">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
            
            <h3 className="text-2xl font-semibold text-foreground mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-input focus:ring-primary focus:border-primary'} bg-secondary/10 outline-none transition-all`}
                  placeholder="John Doe"
                  data-testid="input-name"
                />
                {errors.name && <p className="mt-2 text-sm text-red-500 font-medium">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-input focus:ring-primary focus:border-primary'} bg-secondary/10 outline-none transition-all`}
                  placeholder="john@example.com"
                  data-testid="input-email"
                />
                {errors.email && <p className="mt-2 text-sm text-red-500 font-medium">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Your Message</label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className={`w-full px-5 py-4 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-input focus:ring-primary focus:border-primary'} bg-secondary/10 outline-none transition-all resize-none`}
                  placeholder="How can we help you?"
                  data-testid="input-message"
                />
                {errors.message && <p className="mt-2 text-sm text-red-500 font-medium">{errors.message.message}</p>}
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
                    Send Message
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
