import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Briefcase } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Front Office Staff',
    company: 'OYO Santana Syariah Guest House',
    period: '2023',
    responsibilities: [
      'Assisted guests during check-in and check-out',
      'Handled customer inquiries professionally',
      'Managed daily administrative records',
      'Coordinated facility reports'
    ]
  },
  {
    role: 'IT Division Intern',
    company: 'DPRD Kota Surakarta',
    period: '2023',
    responsibilities: [
      'Assisted in preparing manuals',
      'Organized administrative documents',
      'Revised official documents',
      'Maintained document accuracy'
    ]
  },
  {
    role: 'Head of Inventory Division',
    company: 'UKM Musik Wamsinomi FEB UMS',
    period: '2022–2023',
    responsibilities: [
      'Led division activities',
      'Coordinated team members',
      'Managed work programs',
      'Evaluated organizational performance'
    ]
  }
];

export default function Experience() {
  return (
    <SectionReveal id="experience" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
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
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <h4 className="text-primary font-medium mb-5">{exp.company}</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground items-start text-left">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-sm md:text-base leading-relaxed">{resp}</span>
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
