import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { FileSpreadsheet, Users, FileText, ClipboardCheck, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'HR Recruitment Tracker',
    description: 'Excel-based recruitment monitoring dashboard for tracking candidate pipeline efficiently.',
    skills: ['Microsoft Excel', 'HR Analytics', 'Data Visualization'],
    icon: Users,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Employee Database Management',
    description: 'Employee data management template using Microsoft Excel for secure and organized records.',
    skills: ['Microsoft Excel', 'Database Management', 'HR Administration'],
    icon: FileSpreadsheet,
    color: 'from-indigo-500 to-purple-400'
  },
  {
    title: 'Employee Onboarding Checklist',
    description: 'A complete onboarding checklist ensuring a smooth transition for new employees.',
    skills: ['HR Administration', 'Process Design', 'Documentation'],
    icon: ClipboardCheck,
    color: 'from-blue-400 to-emerald-400'
  },
  {
    title: 'Interview Evaluation Form',
    description: 'Candidate interview assessment template to standardize and score hiring interviews.',
    skills: ['Recruitment', 'Assessment Design', 'HR Administration'],
    icon: FileText,
    color: 'from-violet-500 to-fuchsia-400'
  }
];

export default function Projects() {
  return (
    <SectionReveal id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of tools and templates I've developed to streamline HR processes, improve data management, and enhance organizational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Image Placeholder Area */}
                <div className={`h-52 w-full bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
                  <Icon className="w-20 h-20 text-white/90 drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-md border border-primary/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-auto w-fit"
                    data-testid={`btn-view-project-${idx}`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
