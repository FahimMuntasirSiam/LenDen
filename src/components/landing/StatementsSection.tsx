import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRef, useEffect } from "react";
import { useLanguageStore } from "@/lib/i18n";

const StatementsSection = () => {
  const { language } = useLanguageStore();
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play().catch(console.error);
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              {language === 'en' ? "The Complete View" : "সম্পূর্ণ চিত্র"}
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-primary/60 leading-snug md:leading-tight">
              {language === 'en' ? "The Full Picture," : "সম্পূর্ণ চিত্র,"} <br />
              <span className="gradient-text">
                {language === 'en' ? "Finally Revealed" : "শেষ পর্যন্ত প্রকাশিত"}
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-4 space-y-6"
            >
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                {language === 'en' 
                  ? "Most businesses in Bangladesh track what comes in." 
                  : "বাংলাদেশের বেশিরভাগ ব্যবসায়িক প্রতিষ্ঠান শুধুমাত্র আয়ের হিসাব রাখে।"}{" "}
                <span className="text-destructive font-semibold">
                  {language === 'en' ? "Nobody tracks what goes out." : "কিন্তু খরচের হিসাব কেউ রাখে না।"}
                </span>
              </p>
              
              <div className="p-1 rounded-2xl bg-gradient-to-br from-primary/30 to-purple-500/30">
                <div className="bg-background/80 backdrop-blur-xl p-8 rounded-[14px] border border-white/5">
                  <p className="text-lg md:text-xl text-primary leading-relaxed italic drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]">
                    "LenDen{" "}
                    {language === 'en' 
                      ? "changes that. Import your official bKash or Nagad statement and every outgoing payment instantly merges with your SMS records."
                      : "সেই প্রথা পরিবর্তন করে। আপনার অফিশিয়াল বিকাশ বা নগদ স্টেটমেন্ট আমদানি করুন এবং প্রতিটি বহির্গামী পেমেন্ট সাথে সাথে আপনার SMS রেকর্ডের সাথে যুক্ত হয়ে যাবে।"}
                    "
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-primary" />
                  </div>
                  <p className="text-foreground font-medium">
                    {language === 'en' ? "One dashboard. Both directions." : "একটি ড্যাশবোর্ড। উভয় দিকের হিসাব।"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-primary" />
                  </div>
                  <p className="text-foreground font-medium">
                    {language === 'en' ? "Finally, the full picture." : "অবশেষে, সম্পূর্ণ চিত্র।"}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 relative"
            >
              <div className="relative z-10 glass-card p-2 rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-black/20">
                <video
                  ref={videoRef}
                  src="/demo-video.mp4"
                  className="w-full h-auto rounded-xl"
                  muted
                  loop
                  playsInline
                />
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-primary/20 rounded-[30px] blur-2xl opacity-50 z-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatementsSection;
