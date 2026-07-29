import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';

const STRENGTHS = [
  'Communication', 'Teamwork', 'Leadership', 'Time Management', 
  'Problem Solving', 'Critical Thinking', 'Adaptability'
];

const SKILLS = [
  { name: 'HR Administration', progress: 80 },
  { name: 'Microsoft Office', progress: 90 },
  { name: 'Google Workspace', progress: 85 },
  { name: 'Communication', progress: 92 },
  { name: 'Teamwork & Collaboration', progress: 90 },
  { name: 'Problem Solving', progress: 88 },
  { name: 'Time Management', progress: 85 },
  { name: 'Leadership', progress: 85 },
];

export default function About() {
  return (
    <SectionReveal id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Biography</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a fresh graduate in Management from Universitas Muhammadiyah Surakarta, with a strong passion for Human Resources. I am eager to grow in areas such as recruitment, employee development, and HR administration.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Career Objective</h3>
              <p className="text-foreground leading-relaxed text-lg border-l-4 border-primary pl-5 py-2 italic bg-secondary/50 rounded-r-xl font-medium">
                "Seeking an entry-level HR position where I can apply my organizational skills, attention to detail, and people-first mindset to help build strong workplace cultures."
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Personal Strengths</h3>
              <div className="flex flex-wrap gap-3">
                {STRENGTHS.map((strength, idx) => (
                  <motion.span
                    key={strength}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold border border-primary/10 shadow-sm"
                  >
                    {strength}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-secondary/20 p-8 rounded-3xl border border-border/50">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Professional Skills</h3>
            <div className="space-y-6">
              {SKILLS.map((skill, idx) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground text-sm font-semibold">{skill.progress}%</span>
                  </div>
                  <div className="h-3 w-full bg-secondary rounded-full overflow-hidden border border-black/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
