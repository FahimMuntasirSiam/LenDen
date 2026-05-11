import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Smartphone, Shield, FileSpreadsheet } from "lucide-react";
import { useRef } from "react";
import { GetStartedDialog } from "./GetStartedDialog";
import { useLanguageStore, T } from "@/lib/i18n";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguageStore();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background effects */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[200px]" />
      </motion.div>

      <motion.div className="container px-4 md:px-8 relative z-10" style={{ opacity }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center justify-center mb-4"
          >
            <img 
              src="/lenden-hero.png" 
              alt="LenDen" 
              className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[750px] h-auto object-contain" 
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            {language === 'en' 
              ? "Records all your transactions of all type in one platform for your business and personal use — designed for Bangladesh."
              : "আপনার ব্যবসায়িক ও ব্যক্তিগত সকল লেনদেন একটি প্ল্যাটফর্মে রেকর্ড করুন — বাংলাদেশের জন্য তৈরি।"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GetStartedDialog>
              <Button size="lg" className="neon-glow font-display font-semibold text-base px-8 gap-2">
                <T>Get Started — It's Simple</T> <ArrowRight size={18} />
              </Button>
            </GetStartedDialog>
          </motion.div>

          {/* Key value props */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              {
                icon: Smartphone,
                title: language === 'en' ? "Auto-Capture" : "স্বয়ংক্রিয় ক্যাপচার",
                desc: language === 'en' ? "LenDen keeps record of your transactions automatically" : "LenDen আপনার লেনদেন স্বয়ংক্রিয়ভাবে রেকর্ড করে রাখে",
              },
              {
                icon: Shield,
                title: language === 'en' ? "Zero Discrepancy" : "শূন্য গরমিল",
                desc: language === 'en' ? "Less worries for security — no possibility of discrepancy" : "নিরাপত্তায় কোনো দুশ্চিন্তা নেই — গরমিলের কোনো সুযোগ নেই",
              },
              {
                icon: FileSpreadsheet,
                title: language === 'en' ? "CSV Export" : "CSV এক্সপোর্ট",
                desc: language === 'en' ? "Exports CSV, saving you 20+ hours/month of manual work" : "CSV এক্সপোর্ট করে মাসে ২০+ ঘণ্টার ম্যানুয়াল কাজ বাঁচায়",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
                className="glass-card rounded-xl p-5 text-left group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-3 group-hover:neon-glow transition-all duration-300">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Pay fraction tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 text-sm text-muted-foreground"
          >
            {language === 'en' 
              ? "Pay only a fraction of what you'd pay employees — " 
              : "কর্মচারীদের তুলনায় সামান্য খরচে — "}
            <span className="text-primary font-medium">
              LenDen {language === 'en' ? "does it better." : "আরও ভালো করে।"}
            </span>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
