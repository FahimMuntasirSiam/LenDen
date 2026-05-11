import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, Filter, LayoutDashboard } from "lucide-react";
import { useRef } from "react";
import { useLanguageStore, T } from "@/lib/i18n";

const steps = (lang: string) => [
  {
    icon: Smartphone,
    step: "01",
    title: lang === 'en' ? "Connect Your SMS" : "আপনার SMS সংযুক্ত করুন",
    description: lang === 'en' 
      ? "Let us read your transaction SMS to capture data. LenDen runs silently in the background on your Android phone."
      : "ডেটা ক্যাপচার করতে আপনার লেনদেনের SMS পড়ার অনুমতি দিন। LenDen আপনার অ্যান্ড্রয়েড ফোনে নীরবে কাজ করে।",
  },
  {
    icon: Filter,
    step: "02",
    title: lang === 'en' ? "Automated Processing" : "স্বয়ংক্রিয় প্রক্রিয়াকরণ",
    description: lang === 'en'
      ? "Our AI categorizes and logs every transaction in real-time. Personal & OTP messages are blocked immediately."
      : "আমাদের AI রিয়েল-টাইমে প্রতিটি লেনদেন বিভাগ অনুযায়ী সাজিয়ে লগ করে। ব্যক্তিগত ও OTP মেসেজগুলো সাথে সাথে ব্লক করে দেওয়া হয়।",
  },
  {
    icon: LayoutDashboard,
    step: "03",
    title: lang === 'en' ? "View Dashboard" : "ড্যাশবোর্ড দেখুন",
    description: lang === 'en'
      ? "Access your comprehensive financial dashboard anytime. Clean, organised record ready instantly."
      : "যেকোনো সময় আপনার সম্পূর্ণ আর্থিক ড্যাশবোর্ড দেখুন। পরিচ্ছন্ন ও সুশৃঙ্খল রেকর্ড সাথে সাথেই তৈরি হয়ে যায়।",
  },
];

const HowItWorks = () => {
  const { language } = useLanguageStore();
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
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {language === 'en' ? "How LenDen Works" : "LenDen যেভাবে কাজ করে"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 leading-snug md:leading-normal">
            {language === 'en' ? "It Happens in" : "এটি ঘটে মাত্র"}
            <br />
            <span className="gradient-text">
              {language === 'en' ? "Three Simple Steps" : "তিনটি সহজ ধাপে"}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? "LenDen runs silently in the background on your Android phone. The moment a transaction SMS arrives, it's automatically captured, parsed, and logged to your dashboard in seconds."
              : "LenDen আপনার অ্যান্ড্রয়েড ফোনে নীরবে কাজ করে। যখনই কোনো লেনদেনের SMS আসে, এটি স্বয়ংক্রিয়ভাবে ক্যাপচার, বিশ্লেষণ এবং কয়েক সেকেন্ডের মধ্যে আপনার ড্যাশবোর্ডে লগ হয়ে যায়।"}
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

          {steps(language).map((step, i) => (
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
                {step.title}
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
