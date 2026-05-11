import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/i18n";

const getComparisonData = (lang: string) => [
  { 
    metric: lang === 'en' ? "Time logging transactions" : "লেনদেন লগ করার সময়", 
    without: lang === 'en' ? "20 hours/month" : "মাসে ২০ ঘণ্টা", 
    with: lang === 'en' ? "0 hours" : "০ ঘণ্টা" 
  },
  { 
    metric: lang === 'en' ? "Missing transactions" : "হারিয়ে যাওয়া লেনদেন", 
    without: lang === 'en' ? "Inevitable" : "অনিবার্য", 
    with: lang === 'en' ? "None" : "একটিও না" 
  },
  { 
    metric: lang === 'en' ? "Time to get monthly report" : "মাসিক রিপোর্ট পাওয়ার সময়", 
    without: lang === 'en' ? "Days" : "কয়েক দিন", 
    with: lang === 'en' ? "Instant" : "তাৎক্ষণিক" 
  },
];

const CostComparison = () => {
  const { language } = useLanguageStore();
  const comparisonData = getComparisonData(language);

  return (
    <section className="py-24">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {language === 'en' ? "The Real Cost" : "আসল খরচ"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            {language === 'en' ? "See What Manual Logging" : "ম্যানুয়াল লগিংয়ের ফলে"}
            <br />
            <span className="gradient-text">
              {language === 'en' ? "Is Really Costing You" : "আপনার কত খরচ হচ্ছে তা দেখুন"}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === 'en' 
              ? "An ISP with 4,000 monthly transactions spends:" 
              : "প্রতি মাসে ৪,০০০ লেনদেন সম্পন্ন একটি ISP খরচ করে:"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          className="max-w-3xl mx-auto glass-card rounded-2xl overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 gap-0 border-b border-border/50">
            <div className="p-4 md:p-6" />
            <div className="p-4 md:p-6 text-center border-l border-border/50">
              <p className="font-display text-sm md:text-base font-semibold text-destructive">
                {language === 'en' ? (
                  <>Without <span className="text-[#00C896]">Len</span><span className="text-[#FF4C4C]">Den</span></>
                ) : (
                  <><span className="text-[#00C896]">Len</span><span className="text-[#FF4C4C]">Den</span> ছাড়া</>
                )}
              </p>
            </div>
            <div className="p-4 md:p-6 text-center border-l border-border/50 gradient-primary">
              <p className="font-display text-sm md:text-base font-semibold text-primary-foreground">
                {language === 'en' ? (
                  <>With <span className="text-[#00C896]">Len</span><span className="text-[#FF4C4C]">Den</span></>
                ) : (
                  <><span className="text-[#00C896]">Len</span><span className="text-[#FF4C4C]">Den</span> সহ</>
                )}
              </p>
            </div>
          </div>

          {/* Table rows */}
          {comparisonData.map((row, i) => (
            <motion.div
              key={row.metric}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`grid grid-cols-3 gap-0 ${i < comparisonData.length - 1 ? "border-b border-border/30" : ""}`}
            >
              <div className="p-4 md:p-6 flex items-center">
                <p className="text-sm md:text-base text-foreground font-medium">{row.metric}</p>
              </div>
              <div className="p-4 md:p-6 flex items-center justify-center border-l border-border/30">
                <p className="text-sm md:text-base text-destructive/80 font-medium">{row.without}</p>
              </div>
              <div className="p-4 md:p-6 flex items-center justify-center border-l border-border/30 bg-primary/5">
                <p className="text-sm md:text-base text-primary font-bold">{row.with}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 text-muted-foreground max-w-2xl mx-auto italic text-sm md:text-base"
        >
          "
          {language === 'en' 
            ? "That's half a working week your employee spends copying SMS messages into a spreadsheet." 
            : "এটি আপনার কর্মচারীর কর্মসপ্তাহের অর্ধেক সময় যা তিনি স্প্রেডশিটে SMS মেসেজ কপি করতে ব্যয় করেন।"}{" "}
          <span className="font-medium not-italic">
            <span className="text-[#00C896]">Len</span><span className="text-[#FF4C4C]">Den</span> {language === 'en' ? "does it the moment each transaction arrives." : "প্রতিটি লেনদেন আসার সাথে সাথেই তা করে ফেলে।"}
          </span>
          "
        </motion.p>
      </div>
    </section>
  );
};

export default CostComparison;
