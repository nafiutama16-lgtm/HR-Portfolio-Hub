import { SectionReveal } from "@/components/ui/SectionReveal";
import { WordIcon, ExcelIcon, PowerPointIcon, CanvaIcon, GoogleDocsIcon, GoogleSheetsIcon } from "@/components/icons/ToolIcons";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const SKILLS = [
  { en: "Communication", id: "Komunikasi" },
  { en: "Teamwork & Collaboration", id: "Kerja Sama Tim" },
  { en: "Leadership", id: "Kepemimpinan" },
  { en: "Time Management", id: "Manajemen Waktu" },
  { en: "Problem Solving", id: "Pemecahan Masalah" },
  { en: "Critical Thinking", id: "Berpikir Kritis" },
  { en: "Adaptability", id: "Adaptabilitas" },
  { en: "HR Administration", id: "Administrasi HR" },
];

const TOOLS = [
  { name: "Microsoft Word", icon: WordIcon },
  { name: "Microsoft Excel", icon: ExcelIcon },
  { name: "PowerPoint", icon: PowerPointIcon },
  { name: "Google Docs", icon: GoogleDocsIcon },
  { name: "Google Sheets", icon: GoogleSheetsIcon },
  { name: "Canva", icon: CanvaIcon },
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
  const { language } = useLanguage();
  const t = translations[language].about;

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
            {t.title}
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
                {t.biography}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t.bioText}
              </p>
            </motion.div>

            <motion.div variants={fadeLeft}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {t.education}
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
                      {t.degree}
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
                {t.careerObjective}
              </h3>
              <blockquote className="text-foreground leading-relaxed text-lg border-l-4 border-primary pl-5 py-2 italic bg-secondary/50 rounded-r-xl font-medium">
                {t.objectiveText}
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
              {t.skillsTools}
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  {t.coreSkills}
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
                      key={skill.en}
                      variants={staggerItem}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-white rounded-full border border-border shadow-sm text-sm font-medium cursor-default"
                    >
                      {skill[language]}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  {t.tools}
                </h4>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                          {Icon && (
                            <Icon
                              className={
                                tool.name === "Microsoft Word" || tool.name === "Canva"
                                  ? "w-[80%] h-[80%]"
                                  : "w-full h-full"
                              }
                            />
                          )}
                        </div>
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
