import { motion } from "framer-motion";
import { CheckCircle2, FileText, ArrowRightLeft, LayoutDashboard } from "lucide-react";

const StatementsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                Most businesses in Bangladesh track what comes in. <span className="text-destructive font-semibold">Nobody tracks what goes out.</span>
              </p>
              
              <div className="p-1 rounded-2xl bg-gradient-to-br from-primary/30 to-purple-500/30">
                <div className="bg-background/80 backdrop-blur-xl p-8 rounded-[14px] border border-white/5">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
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
              className="relative"
            >
              <div className="relative z-10 glass-card p-6 rounded-2xl border border-white/10 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-12 w-full rounded-lg bg-white/5 animate-pulse flex items-center px-4 gap-3">
                    <FileText size={18} className="text-primary/60" />
                    <div className="h-2 w-32 bg-white/10 rounded-full" />
                  </div>
                  <div className="flex justify-center p-4">
                    <motion.div
                      animate={{ 
                        rotate: [0, 180, 180, 0],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    >
                      <ArrowRightLeft size={48} className="text-primary" />
                    </motion.div>
                  </div>
                  <div className="h-40 w-full rounded-lg bg-primary/5 border border-primary/20 flex flex-col items-center justify-center gap-3">
                    <LayoutDashboard size={40} className="text-primary/40" />
                    <div className="h-2 w-48 bg-primary/20 rounded-full" />
                    <div className="h-2 w-32 bg-primary/10 rounded-full" />
                  </div>
                </div>
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
