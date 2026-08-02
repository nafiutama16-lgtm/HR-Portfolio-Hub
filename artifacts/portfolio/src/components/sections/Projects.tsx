import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { FileSpreadsheet, Users, ClipboardCheck, Download, ArrowRight, X } from 'lucide-react';

const PROJECTS = [
  {
    title: 'HR Recruitment Dashboard',
    description: 'Interactive Excel dashboard analyzing 5,000 recruitment records to track candidate pipeline, department performance, and sourcing effectiveness.',
    skills: ['Microsoft Excel', 'PivotTable & PivotChart', 'Data Visualization', 'HR Analytics'],
    icon: Users,
    color: 'from-blue-500 to-cyan-400',
    file: '/Recruitment_Dashboard.xlsx',
    detail: {
      image: '/dashboard_recruitment.png',
      summary:
        'An interactive Excel dashboard built to help HR teams monitor and analyze the recruitment process in real time, from incoming candidates to final status (Hired, On Hold, or Rejected). It enables data-driven decisions, such as identifying which departments need attention, which sourcing channels are most effective, and which education backgrounds are most represented among hires.',
      highlights: [
        { label: 'Total Candidates', value: '5,000' },
        { label: 'Hired', value: '1,616' },
        { label: 'On Hold', value: '1,667' },
        { label: 'Rejected', value: '1,717' },
      ],
      points: [
        'KPI summary cards showing Total, Hired, On Hold, and Rejected candidates for a quick overview of the recruitment process.',
        'Interactive slicers to filter data by Year (2022–2024) and Department (8 departments), enabling analysis per period or division.',
        'Department chart showing applicant volume per department, with R&D having the highest number of applicants (666).',
        'Department Status chart breaking down Rejected / On Hold / Hired per department to evaluate selection efficiency across divisions.',
        'Education Hired chart showing the distribution of accepted candidates by education background, with hiring rates fairly even across all levels (31–34%).',
        'Source chart comparing recruitment channel performance — LinkedIn leads as the top source (1,051 candidates), followed by Referral (1,009).',
      ],
    },
  },
  {
    title: 'Employee Database Management',
    description: 'Employee data management template using Microsoft Excel for secure and organized records.',
    skills: ['Microsoft Excel', 'Database Management', 'HR Administration'],
    icon: FileSpreadsheet,
    color: 'from-indigo-500 to-purple-400',
  },
  {
    title: 'Employee Onboarding Checklist',
    description: 'A complete onboarding checklist ensuring a smooth transition for new employees.',
    skills: ['HR Administration', 'Process Design', 'Documentation'],
    icon: ClipboardCheck,
    color: 'from-blue-400 to-emerald-400',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<(typeof PROJECTS)[number] | null>(null);

  return (
    <SectionReveal id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
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
                <div className={`h-52 w-full bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  {project.detail?.image ? (
                    <img
                      src={project.detail.image}
                      alt={project.title}
                      className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
                      <Icon className="w-20 h-20 text-white/90 drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
                    </>
                  )}
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-md border border-primary/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    {project.detail ? (
                      <button
                        onClick={() => setActiveProject(project)}
                        className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors w-fit"
                        data-testid={`btn-view-project-${idx}`}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <button
                        className="flex items-center gap-2 text-sm font-semibold text-muted-foreground w-fit cursor-not-allowed"
                        disabled
                        data-testid={`btn-view-project-${idx}`}
                      >
                        Coming Soon
                      </button>
                    )}

                    {project.file && (
                      <a
                        href={project.file}
                        download
                        className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                      >
                        <Download className="w-3.5 h-3.5" />
                        File
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeProject?.detail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              <img
                src={activeProject.detail.image}
                alt={activeProject.title}
                className="w-full h-64 md:h-80 object-contain bg-secondary/10"
              />

              <div className="p-6 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {activeProject.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-md border border-primary/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {activeProject.detail.summary}
                </p>

                {activeProject.detail.highlights && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {activeProject.detail.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="bg-secondary/30 rounded-xl p-4 text-center border border-border/50"
                      >
                        <div className="text-2xl font-bold text-primary">{h.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{h.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {activeProject.detail.points && (
                  <div className="space-y-3 mb-8">
                    <h4 className="text-lg font-semibold text-foreground">Key Features</h4>
                    <ul className="space-y-2">
                      {activeProject.detail.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeProject.file && (
                  <a
                    href={activeProject.file}
                    download
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-4 h-4" />
                    Download Excel File
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionReveal>
  );
}
