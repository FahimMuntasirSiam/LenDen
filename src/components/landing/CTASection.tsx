import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />
      </div>
      <div className="container px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-10 md:p-16 text-center neon-glow"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Ready to Simplify
            <br />
            <span className="gradient-text">Your Finances?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Join 5,000+ Bangladeshi businesses already using FinLog. Start your free trial today — no credit card required.
          </p>
          <Button size="lg" className="neon-glow font-display font-semibold text-base px-10 gap-2">
            Get Started Free <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
