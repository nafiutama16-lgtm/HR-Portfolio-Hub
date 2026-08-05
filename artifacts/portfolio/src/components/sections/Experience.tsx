import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

const EXPERIENCES = [
  {
    role: { en: 'Front Office Staff', id: 'Staf Front Office' },
    company: 'OYO Santana Syariah Guest House',
    period: 'Jan 2021-May 2021',
    responsibilities: [
      {
        en: 'Assisted guests during check-in and check-out',
        id: 'Membantu tamu selama proses check-in dan check-out',
      },
      {
        en: 'Handled customer inquiries professionally',
        id: 'Menangani pertanyaan tamu secara profesional',
      },
      {
        en: 'Managed daily administrative records',
        id: 'Mengelola catatan administrasi harian',
      },
      {
        en: 'Coordinated facility reports',
        id: 'Mengoordinasikan laporan fasilitas',
      },
    ],
  },
  {
    role: { en: 'IT Division Intern', id: 'Magang Divisi IT' },
    company: 'DPRD Kota Surakarta',
    period: 'Aug 2025-Sept 2025',
    responsibilities: [
      { en: 'Assisted in preparing manuals', id: 'Membantu penyusunan manual/panduan' },
      {
        en: 'Organized administrative documents',
        id: 'Mengorganisir dokumen administrasi',
      },
      { en: 'Revised official documents', id: 'Merevisi dokumen resmi' },
      { en: 'Maintained document accuracy', id: 'Menjaga akurasi dokumen' },
    ],
  },
  {
    role: { en: 'Head of Inventory Division', id: 'Kepala Divisi Inventaris' },
    company: 'UKM Musik Wamsinomi FEB UMS',
    period: 'Feb 2024–Feb 2025',
    responsibilities: [
      { en: 'Led division activities', id: 'Memimpin kegiatan divisi' },
      { en: 'Coordinated team members', id: 'Mengoordinasikan anggota tim' },
      { en: 'Managed work programs', id: 'Mengelola program kerja' },
      { en: 'Evaluated organizational performance', id: 'Mengevaluasi kinerja organisasi' },
    ],
  },
];

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <SectionReveal id="experience" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative flex items-center justify-between md:justify-normal w-full group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[15px] md:left-1/2 w-8 h-8 rounded-full bg-primary border-4 border-secondary flex items-center justify-center md:-translate-x-1/2 shadow-sm z-10 shrink-0 group-hover:scale-125 transition-transform duration-300">
                  <Briefcase className="w-3 h-3 text-white" />
                </div>

                <div className="flex w-full ml-12 md:ml-0 md:justify-between items-start">
                  {/* Left Side Spacer */}
                  {idx % 2 !== 0 ? (
                     <div className="hidden md:block w-[45%]" />
                  ) : null}

                  {/* Card */}
                  <div className="w-full md:w-[45%] bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role[language]}</h3>
                    <h4 className="text-primary font-medium mb-5">{exp.company}</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground items-start text-left">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-sm md:text-base leading-relaxed">{resp[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Side Spacer */}
                  {idx % 2 === 0 ? (
                     <div className="hidden md:block w-[45%]" />
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
