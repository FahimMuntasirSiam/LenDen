import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, Filter, LayoutDashboard } from "lucide-react";
import { useRef } from "react";
import { T } from "@/lib/i18n";

const steps = [
  {
    icon: Smartphone,
    step: "01",
    title: "Transaction Arrives",
    description: <><T>SMS received on your phone — from bKash, Nagad, Rocket, or your bank.</T> LenDen <T>runs silently in the background on your Android phone.</T></>,
  },
  {
    icon: Filter,
    step: "02",
    title: "SmartFilter Runs",
    description: <><T>Personal & OTP messages are blocked immediately. Only financial transactions pass through.</T> LenDen <T>never sees your private messages.</T></>,
  },
  {
    icon: LayoutDashboard,
    step: "03",
    title: "Dashboard Updates",
    description: <><T>Clean, organised record ready instantly. Sorted, categorised, and exportable. By the time your accountant opens the dashboard, everything is there.</T></>,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="py-24 bg-secondary/30" ref={sectionRef}>
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase"><T>How</T> LenDen <T>Works</T></span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            <T>It Happens in</T>
            <br />
            <span className="gradient-text"><T>Three Simple Steps</T></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            LenDen <T>runs silently in the background on your Android phone. The moment a transaction SMS arrives, it's automatically captured, parsed, and logged to your dashboard in seconds.</T>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Animated connector line */}
          <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-px overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary/60 via-primary to-neon-purple/60"
              style={{ width: lineWidth }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                type: "spring",
                stiffness: 80,
              }}
              className="text-center relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-20 h-20 rounded-2xl gradient-primary mx-auto flex items-center justify-center mb-6 neon-glow"
              >
                <step.icon size={32} className="text-primary-foreground" />
              </motion.div>
              <span className="font-display text-xs font-bold text-primary tracking-widest">{step.step}</span>
              <h3 className="font-display text-xl font-semibold mt-2 mb-3 text-foreground">
                <T>{step.title}</T>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
