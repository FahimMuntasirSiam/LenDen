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
import { useLanguageStore, T } from "@/lib/i18n";

const features = (lang: string) => [
  {
    icon: Smartphone,
    title: lang === 'en' ? "Auto SMS Capture" : "স্বয়ংক্রিয় SMS ক্যাপচার",
    description: lang === 'en' 
      ? "LenDen runs silently on your Android phone. The moment a transaction SMS arrives — bKash, Nagad, Rocket, or your bank — it's automatically captured and logged."
      : "LenDen আপনার অ্যান্ড্রয়েড ফোনে নীরবে কাজ করে। যখনই কোনো লেনদেনের SMS আসে — বিকাশ, নগদ, রকেট বা আপনার ব্যাংক — এটি স্বয়ংক্রিয়ভাবে ক্যাপচার এবং লগ হয়ে যায়।",
  },
  {
    icon: Filter,
    title: lang === 'en' ? "SmartFilter Technology" : "স্মার্টফিল্টার প্রযুক্তি",
    description: lang === 'en'
      ? "Our SmartFilter reads each message before capturing it. Personal conversations, OTP codes, and verification messages are blocked immediately."
      : "আমাদের স্মার্টফিল্টার প্রতিটি মেসেজ পড়ার আগেই যাচাই করে। ব্যক্তিগত আলাপচারিতা, OTP কোড এবং ভেরিফিকেশন মেসেজগুলো সাথে সাথে ব্লক করে দেওয়া হয়।",
  },
  {
    icon: FileSpreadsheet,
    title: lang === 'en' ? "CSV Export & Reports" : "এক্সপোর্টযোগ্য ডেটা",
    description: lang === 'en'
      ? "Export clean, organised CSV files saving you at least 60 hours a month of manual work and eliminating human error completely."
      : "পরিচ্ছন্ন ও সুশৃঙ্খল CSV ফাইল এক্সপোর্ট করুন যা আপনার মাসে অন্তত ৬০ ঘণ্টার ম্যানুয়াল কাজ বাঁচাবে এবং মানুষের ভুল হওয়ার সম্ভাবনা পুরোপুরি দূর করবে।",
  },
  {
    icon: ShieldCheck,
    title: lang === 'en' ? "Zero Discrepancy" : "নিরাপদ ও গোপনীয়",
    description: lang === 'en'
      ? "No possibility of discrepancy — every transaction from every wallet and bank account is captured with 100% accuracy. No missing records."
      : "গরমিলের কোনো সম্ভাবনা নেই — প্রতিটি ওয়ালেট এবং ব্যাংক অ্যাকাউন্টের লেনদেন ১০০% নির্ভুলভাবে ক্যাপচার করা হয়। কোনো রেকর্ড বাদ পড়ার সুযোগ নেই।",
  },
  {
    icon: Clock,
    title: lang === 'en' ? "Instant Dashboard" : "ড্যাশবোর্ড অ্যানালিটিক্স",
    description: lang === 'en'
      ? "By the time your accountant opens the dashboard, every transaction is already there — sorted, categorised, and exportable. No manual entry needed."
      : "আপনার অ্যাকাউন্ট্যান্ট ড্যাশবোর্ড খোলার আগেই প্রতিটি লেনদেন সেখানে উপস্থিত থাকে — যা সাজানো, বিভাগ অনুযায়ী বিভক্ত এবং এক্সপোর্ট করার জন্য প্রস্তুত।",
  },
  {
    icon: Lock,
    title: lang === 'en' ? "Privacy First" : "টিম অ্যাক্সেস",
    description: lang === 'en'
      ? "LenDen never sees your personal messages. Only financial transactions get through SmartFilter — no privacy risk whatsoever."
      : "LenDen কখনোই আপনার ব্যক্তিগত মেসেজ দেখে না। স্মার্টফিল্টারের মাধ্যমে শুধুমাত্র আর্থিক লেনদেনগুলোই গৃহীত হয় — এখানে কোনো গোপনীয়তার ঝুঁকি নেই।",
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
  const { language } = useLanguageStore();
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
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {language === 'en' ? "Why LenDen?" : "কেন LenDen ব্যবহার করবেন?"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 leading-tight md:leading-snug">
            {language === 'en' ? "Powerful Features for" : "শক্তিশালী ব্যবসার জন্য"}
            <br />
            <span className="gradient-text">
              {language === 'en' ? "Powerful Businesses" : "শক্তিশালী বৈশিষ্ট্য"}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? "LenDen simplifies logging financial records and makes it easier for you to calculate and record for your business without the human error. Logging transactions meant days of manual work, a paid assistant, and still missing entries. Now it happens automatically."
              : "LenDen আর্থিক রেকর্ড রাখা সহজ করে এবং মানুষের ভুল ছাড়াই আপনার ব্যবসার হিসাব রাখা সুবিধাজনক করে তোলে। লেনদেন লগ করা মানেই ছিল দিনের পর দিন ম্যানুয়াল কাজ এবং সহকারী রাখা, তবুও এন্ট্রি বাদ পড়ত। এখন এটি স্বয়ংক্রিয়ভাবে ঘটে।"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features(language).map((feature, i) => (
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
                {feature.title}
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
