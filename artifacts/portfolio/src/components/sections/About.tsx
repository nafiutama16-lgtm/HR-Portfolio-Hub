import { SectionReveal } from "@/components/ui/SectionReveal";

import { SiCanvas, SiGoogle,} from "react-icons/si";

import { FaFileWord, FaFileExcel, FaFilePowerpoint } from "react-icons/fa";

const SKILLS = [
  "Communication",
  "Teamwork & Collaboration",
  "Leadership",
  "Time Management",
  "Problem Solving",
  "Critical Thinking",
  "Adaptability",
  "HR Administration",
];

const TOOLS = [
  { name: "Microsoft Word", icon: FaFileWord, color: "text-blue-600" },
  { name: "Microsoft Excel", icon: FaFileExcel, color: "text-green-600" },
  { name: "PowerPoint", icon: FaFilePowerpoint, color: "text-orange-600" },
  { name: "Google Docs", icon: SiGoogle, color: "text-blue-500" },
  { name: "Google Sheets", icon: SiGoogle, color: "text-green-500" },
  { name: "Canva", icon: SiCanvas, color: "text-purple-500" },
];

export default function About() {
  return (
    <SectionReveal id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Biography
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a fresh graduate in Management from Universitas
                Muhammadiyah Surakarta, with a strong passion for Human
                Resources. I am eager to grow in areas such as recruitment,
                employee development, and HR administration.
              </p>
            </div>

            <div className="bg-secondary/20 border border-border/50 rounded-2xl p-5"></div>
              <div className="flex items-center gap-4">
                <img
                  src="/ums-logo.png"
                  alt="Universitas Muhammadiyah Surakarta"
                  className="w-20 h-20 object-contain flex-shrink-0"
                />

                <div>
                  <h4 className="text-lg font-bold text-foreground">
                    Universitas Muhammadiyah Surakarta
                  </h4>

                  <p className="text-primary font-medium">
                    Bachelor of Management
                  </p>

                  <p className="text-muted-foreground">
                    GPA{" "}
                    <span className="font-semibold text-foreground">
                      3.67 / 4.00
                    </span>
                  </p>

                  <p className="text-muted-foreground">2022 – 2026</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Career Objective
              </h3>
              <p className="text-foreground leading-relaxed text-lg border-l-4 border-primary pl-5 py-2 italic bg-secondary/50 rounded-r-xl font-medium">
                "Seeking an entry-level HR position where I can apply my
                organizational skills, attention to detail, and people-first
                mindset to help build strong workplace cultures."
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-secondary/20 p-8 rounded-3xl border border-border/50">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Skills & Tools
            </h3>

            <div className="space-y-8">
              {/* Core Skills */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  Core Skills
                </h4>

                <div className="flex flex-wrap gap-3">
                  {SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white rounded-full border border-border shadow-sm text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  Tools
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  {TOOLS.map((tool) => {
                    const Icon = tool.icon;

                    return (
                      <div
                        key={tool.name}
                        className="flex items-center gap-3 bg-white rounded-xl border border-border p-4 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <Icon className={`text-2xl ${tool.color}`} />
                        <span className="font-medium text-foreground">
                          {tool.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
    </SectionReveal>
  );
}
