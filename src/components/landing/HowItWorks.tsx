import { motion } from "framer-motion";
import { UserPlus, Link, LineChart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up in Minutes",
    description: "Create your account, set up your business profile, and you're ready to go. No complex setup required.",
  },
  {
    icon: Link,
    step: "02",
    title: "Connect Your Accounts",
    description: "Link your bank accounts, import existing data, and configure your chart of accounts with guided setup.",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Get Actionable Insights",
    description: "Access real-time dashboards, automated reports, and smart alerts to stay on top of your finances.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">How It Works</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Up and Running in
            <br />
            <span className="gradient-text">Three Simple Steps</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 rounded-2xl gradient-primary mx-auto flex items-center justify-center mb-6 neon-glow">
                <step.icon size={32} className="text-primary-foreground" />
              </div>
              <span className="font-display text-xs font-bold text-primary tracking-widest">{step.step}</span>
              <h3 className="font-display text-xl font-semibold mt-2 mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
