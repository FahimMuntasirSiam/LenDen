import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Zap, Building2, Rocket } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "৳999",
    period: "/month",
    yearlyPrice: "৳9,990",
    yearlyLabel: "/year (save 17%)",
    description: "Perfect for small businesses and personal use",
    features: [
      { name: "Up to 500 transactions/month", included: true },
      { name: "Auto SMS capture", included: true },
      { name: "SmartFilter technology", included: true },
      { name: "1 device", included: true },
      { name: "Basic dashboard", included: true },
      { name: "Email support", included: true },
      { name: "CSV export", included: false },
      { name: "Multi-device support", included: false },
      { name: "Dashboard analytics", included: false },
      { name: "Bank integration", included: false },
      { name: "API access", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    icon: Building2,
    price: "৳2,499",
    period: "/month",
    yearlyPrice: "৳24,990",
    yearlyLabel: "/year (save 17%)",
    description: "For growing businesses that need more power",
    features: [
      { name: "Unlimited transactions", included: true },
      { name: "Auto SMS capture", included: true },
      { name: "SmartFilter technology", included: true },
      { name: "Up to 5 devices", included: true },
      { name: "Full dashboard analytics", included: true },
      { name: "Priority support", included: true },
      { name: "CSV export & reports", included: true },
      { name: "Multi-device support", included: true },
      { name: "Dashboard analytics", included: true },
      { name: "Bank integration", included: true },
      { name: "API access", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: "Custom",
    period: "",
    yearlyPrice: "",
    yearlyLabel: "",
    description: "For large organizations with complex needs",
    features: [
      { name: "Unlimited transactions", included: true },
      { name: "Auto SMS capture", included: true },
      { name: "SmartFilter technology", included: true },
      { name: "Unlimited devices", included: true },
      { name: "Full dashboard analytics", included: true },
      { name: "24/7 phone support", included: true },
      { name: "CSV export & reports", included: true },
      { name: "Multi-device support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Bank integration", included: true },
      { name: "API access", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const comparisonData = [
  { metric: "Time logging transactions", without: "20 hours/month", with: "0 hours" },
  { metric: "Sessions of manual work", without: "8 per month", with: "0" },
  { metric: "Missing transactions", without: "Inevitable", with: "None" },
  { metric: "Time to get monthly report", without: "Days", with: "Instant" },
  { metric: "Hiring an assistant", without: "৳15,000+/month", with: "From ৳999/month" },
  { metric: "Human error", without: "Guaranteed", with: "Zero" },
];

const faqPricing = [
  {
    q: "Can I switch plans anytime?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial?",
    a: "All plans include a 14-day free trial with full access to features. No credit card required to start.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bKash, Nagad, bank transfer, and all major credit/debit cards. For Enterprise plans, we also support invoicing.",
  },
  {
    q: "What happens if I exceed my transaction limit?",
    a: "On the Starter plan, additional transactions are charged at a nominal per-transaction rate. Professional and Enterprise plans have unlimited transactions.",
  },
  {
    q: "Do you offer discounts for yearly billing?",
    a: "Yes! Yearly billing saves you 17% compared to monthly billing. The discount is applied automatically when you select annual billing.",
  },
];

const PricingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <motion.div
        ref={heroRef}
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative pt-32 pb-16 text-center overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-neon-purple/8 rounded-full blur-[100px]" />
        </div>
        <div className="container px-4 md:px-8 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 text-xs font-medium rounded-full border border-primary/30 text-primary mb-6 glass-card"
          >
            💰 Pricing Plans
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4"
          >
            Invest a Fraction,
            <br />
            <span className="gradient-text neon-text">Save a Fortune</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Pay only a fraction of what you'd need to pay your employees. LenDen does the work of an entire accounting team.
          </motion.p>
        </div>
      </motion.div>

      {/* Plans */}
      <section className="py-16">
        <div className="container px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 70,
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`glass-card rounded-2xl p-8 relative flex flex-col ${
                  plan.popular ? "border-primary/50 neon-glow ring-1 ring-primary/20" : ""
                }`}
              >
                {plan.popular && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold font-display gradient-primary text-primary-foreground rounded-full"
                  >
                    Most Popular
                  </motion.span>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <plan.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{plan.name}</h3>
                </div>

                <div className="mt-2 mb-1">
                  <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                {plan.yearlyPrice && (
                  <p className="text-xs text-primary font-medium mb-4">
                    or {plan.yearlyPrice}{plan.yearlyLabel}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.name} className={`flex items-start gap-2 text-sm ${f.included ? "text-muted-foreground" : "text-muted-foreground/40"}`}>
                      {f.included ? (
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      ) : (
                        <X size={16} className="text-muted-foreground/30 mt-0.5 shrink-0" />
                      )}
                      <span className={!f.included ? "line-through" : ""}>{f.name}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={`w-full font-display font-semibold ${
                    plan.popular ? "neon-glow" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Cost Comparison</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
              See What Manual Logging
              <br />
              <span className="gradient-text">Is Really Costing You</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              An ISP with 4,000 monthly transactions spends:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            className="max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-0 border-b border-border/50">
              <div className="p-5 md:p-6" />
              <div className="p-5 md:p-6 text-center border-l border-border/50">
                <p className="font-display text-sm md:text-base font-semibold text-destructive">Without LenDen</p>
              </div>
              <div className="p-5 md:p-6 text-center border-l border-border/50 gradient-primary">
                <p className="font-display text-sm md:text-base font-semibold text-primary-foreground">With LenDen</p>
              </div>
            </div>

            {comparisonData.map((row, i) => (
              <motion.div
                key={row.metric}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`grid grid-cols-3 gap-0 ${i < comparisonData.length - 1 ? "border-b border-border/30" : ""}`}
              >
                <div className="p-4 md:p-5 flex items-center">
                  <p className="text-sm md:text-base text-foreground font-medium">{row.metric}</p>
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-border/30">
                  <p className="text-sm md:text-base text-destructive/80 font-medium">{row.without}</p>
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-border/30 bg-primary/5">
                  <p className="text-sm md:text-base text-primary font-bold">{row.with}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10 text-muted-foreground max-w-2xl mx-auto italic text-sm md:text-base"
          >
            "That's half a working week your employee spends copying SMS messages into a spreadsheet. <span className="text-primary font-medium not-italic">LenDen does it the moment each transaction arrives.</span>"
          </motion.p>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24">
        <div className="container px-4 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Pricing FAQ</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
              Questions About
              <br />
              <span className="gradient-text">Pricing?</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqPricing.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to Start
              <br />
              <span className="gradient-text">Saving Time?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Start your 14-day free trial today. No credit card required. See the difference LenDen makes for your business.
            </p>
            <Button size="lg" className="neon-glow font-display font-semibold text-base px-10 gap-2">
              Get Started Free <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
