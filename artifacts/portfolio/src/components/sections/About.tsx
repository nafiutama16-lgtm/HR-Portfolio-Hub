import { SectionReveal } from "@/components/ui/SectionReveal";
import { SiGoogledocs, SiGooglesheets } from "react-icons/si";
import { FaFileWord, FaFileExcel, FaFilePowerpoint } from "react-icons/fa";
import { motion } from "framer-motion";

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
  { name: "Google Docs", icon: SiGoogledocs, color: "text-[#4285F4]" },
  { name: "Google Sheets", icon: SiGooglesheets, color: "text-[#0F9D58]" },
  { name: "Canva", image: "/canva-logo.png" },
];

// Easing halus ala "ease-out-expo" biar gerakannya nggak kaku
const smoothEase = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

export default function About() {
  return (
    <SectionReveal id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="mb-16 md:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary md:mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeLeft}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Biography
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a fresh graduate in Management from Universitas
                Muhammadiyah Surakarta, with a strong passion for Human
                Resources. I am eager to grow in areas such as recruitment,
                employee development, and HR administration.
              </p>
            </motion.div>

            <motion.div variants={fadeLeft}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Education
              </h3>

              <motion.div
                className="bg-secondary/20 border border-border/50 rounded-2xl p-5"
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
              >
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
              </motion.div>
            </motion.div>

            <motion.div variants={fadeLeft}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Career Objective
              </h3>
              <blockquote className="text-foreground leading-relaxed text-lg border-l-4 border-primary pl-5 py-2 italic bg-secondary/50 rounded-r-xl font-medium">
                Seeking an entry-level HR position where I can apply my
                organizational skills, attention to detail, and people-first
                mindset to help build strong workplace cultures.
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="bg-secondary/20 p-8 rounded-3xl border border-border/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeRight}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Skills & Tools
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  Core Skills
                </h4>
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
                >
                  {SKILLS.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={staggerItem}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-white rounded-full border border-border shadow-sm text-sm font-medium cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  Tools
                </h4>
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
                >
                  {TOOLS.map((tool) => {
                    const Icon = tool.icon;

                    return (
                      <motion.div
                        key={tool.name}
                        variants={staggerItem}
                        whileHover={{ y: -5, scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-3 bg-white rounded-xl border border-border p-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
                      >
                        {tool.image ? (
                          <img
                            src={tool.image}
                            alt={tool.name}
                            className="w-8 h-8 object-contain flex-shrink-0"
                          />
                        ) : (
                          Icon && <Icon className={`text-2xl ${tool.color} flex-shrink-0`} />
                        )}
                        <span className="font-medium text-foreground text-sm">
                          {tool.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}