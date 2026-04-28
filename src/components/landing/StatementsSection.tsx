import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRef, useEffect } from "react";
import { T } from "@/lib/i18n";

const StatementsSection = () => {
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
            <span className="text-primary text-sm font-medium tracking-wider uppercase">The Complete View</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-primary/80">
              The Full Picture, <br />
              <span className="gradient-text">Finally Revealed</span>
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
                Most businesses in Bangladesh track what comes in. <span className="text-destructive font-semibold">Nobody tracks what goes out.</span>
              </p>
              
              <div className="p-1 rounded-2xl bg-gradient-to-br from-primary/30 to-purple-500/30">
                <div className="bg-background/80 backdrop-blur-xl p-8 rounded-[14px] border border-white/5">
                  <p className="text-lg md:text-xl text-primary leading-relaxed italic drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]">
                    "LenDen changes that. Import your official bKash or Nagad statement and every outgoing payment instantly merges with your SMS records."
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-primary" />
                  </div>
                  <p className="text-foreground font-medium">One dashboard. Both directions.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-primary" />
                  </div>
                  <p className="text-foreground font-medium">Finally, the full picture.</p>
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
