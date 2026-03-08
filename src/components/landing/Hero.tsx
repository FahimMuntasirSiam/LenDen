import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium rounded-full border border-primary/30 text-primary mb-6 glass-card">
              🇧🇩 Built for Bangladeshi Businesses
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            Smart Accounting
            <br />
            <span className="gradient-text neon-text">for Growing Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Automate invoicing, track expenses, and stay VAT/AIT compliant — all in one powerful platform designed for Bangladesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="neon-glow font-display font-semibold text-base px-8 gap-2">
              Start Free Trial <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-display font-semibold text-base px-8 gap-2 border-border hover:border-primary/50"
            >
              <Play size={18} /> Watch Demo
            </Button>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 relative"
          >
            <div className="glass-card rounded-xl p-1 neon-glow">
              <div className="bg-card rounded-lg p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Total Revenue", value: "৳12.4M", change: "+18.2%" },
                    { label: "Expenses", value: "৳3.8M", change: "-5.1%" },
                    { label: "Net Profit", value: "৳8.6M", change: "+24.7%" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-card rounded-lg p-4 text-left">
                      <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                      <p className="font-display text-lg md:text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className={`text-xs font-medium ${stat.change.startsWith("+") ? "text-primary" : "text-destructive"}`}>
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Chart placeholder */}
                <div className="h-32 md:h-48 rounded-lg bg-secondary/50 flex items-end px-4 pb-4 gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t gradient-primary opacity-70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
