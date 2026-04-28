import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";
import { T } from "@/lib/i18n";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />
      </div>
      <div className="container px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          className="glass-card rounded-2xl p-10 md:p-16 text-center neon-glow"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <T>Ready to Stop</T>
            <br />
            <span className="gradient-text"><T>Manual Logging?</T></span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            <T>Join Bangladeshi businesses already using</T> LenDen. <T>Start your free trial today — no credit card required.</T>
          </p>
          <GetStartedDialog>
            <Button size="lg" className="neon-glow font-display font-semibold text-base px-10 gap-2">
              <T>Get Started — It's Simple</T> <ArrowRight size={18} />
            </Button>
          </GetStartedDialog>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
