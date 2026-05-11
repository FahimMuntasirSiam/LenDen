import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/i18n";

const getStats = (lang: string) => [
  { 
    value: lang === 'en' ? "20+" : "২০+", 
    label: lang === 'en' ? "Hours Saved per Month" : "প্রতি মাসে ঘণ্টা সাশ্রয়" 
  },
  { 
    value: lang === 'en' ? "0" : "০", 
    label: lang === 'en' ? "Missing Transactions" : "গরমিল লেনদেন" 
  },
  { 
    value: lang === 'en' ? "Instant" : "ইনস্ট্যান্ট", 
    label: lang === 'en' ? "Monthly Reports" : "মাসিক রিপোর্ট" 
  },
  { 
    value: lang === 'en' ? "100%" : "১০০%", 
    label: lang === 'en' ? "Accuracy Guaranteed" : "নির্ভুলতার গ্যারান্টি" 
  },
];

const Stats = () => {
  const { language } = useLanguageStore();
  const stats = getStats(language);

  return (
    <section className="py-20 border-y border-border/50">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="text-center"
            >
              <p className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
