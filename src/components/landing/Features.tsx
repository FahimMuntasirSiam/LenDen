import { motion, useScroll, useTransform } from "framer-motion";
import {
  Smartphone,
  ShieldCheck,
  FileSpreadsheet,
  Filter,
  Clock,
  Lock,
} from "lucide-react";
import { useRef } from "react";
import { T } from "@/lib/i18n";

const features = [
  {
    icon: Smartphone,
    title: "Auto SMS Capture",
    description: <>LenDen <T>runs silently on your Android phone. The moment a transaction SMS arrives — bKash, Nagad, Rocket, or your bank — it's automatically captured and logged.</T></>,
  },
  {
    icon: Filter,
    title: "SmartFilter Technology",
    description: <><T>Our SmartFilter reads each message before capturing it. Personal conversations, OTP codes, and verification messages are blocked immediately.</T></>,
  },
  {
    icon: FileSpreadsheet,
    title: "CSV Export & Reports",
    description: <><T>Export clean, organised CSV files saving you at least 60 hours a month of manual work and eliminating human error completely.</T></>,
  },
  {
    icon: ShieldCheck,
    title: "Zero Discrepancy",
    description: <><T>No possibility of discrepancy — every transaction from every wallet and bank account is captured with 100% accuracy. No missing records.</T></>,
  },
  {
    icon: Clock,
    title: "Instant Dashboard",
    description: <><T>By the time your accountant opens the dashboard, every transaction is already there — sorted, categorised, and exportable. No manual entry needed.</T></>,
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: <>LenDen <T>never sees your personal messages. Only financial transactions get through SmartFilter — no privacy risk whatsoever.</T></>,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="features" className="py-24" ref={sectionRef}>
      <div className="container px-4 md:px-8">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase"><T>Why</T> LenDen?</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            <T>Simplify Your</T>
            <br />
            <span className="gradient-text"><T>Financial Logging</T></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            LenDen <T>simplifies logging financial records and makes it easier for you to calculate and record for your business without the human error. Logging transactions meant days of manual work, a paid assistant, and still missing entries. Now it happens automatically.</T>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:neon-glow transition-all duration-300">
                <feature.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                <T>{feature.title}</T>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
