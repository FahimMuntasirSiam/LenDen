import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "৳999",
    period: "/month",
    description: "Perfect for small businesses and personal use",
    features: [
      "Up to 500 transactions/month",
      "Auto SMS capture",
      "SmartFilter technology",
      "1 device",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "৳2,499",
    period: "/month",
    description: "For growing businesses that need more power",
    features: [
      "Unlimited transactions",
      "Multi-device support",
      "CSV export & reports",
      "Up to 5 users",
      "Dashboard analytics",
      "Priority support",
      "Bank integration",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex needs",
    features: [
      "Everything in Professional",
      "Unlimited users & devices",
      "Custom integrations",
      "Dedicated account manager",
      "API access",
      "SLA guarantee",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Pricing</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing in BDT</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pay only a fraction of what you'd pay employees. No hidden fees. Start free for 14 days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`glass-card rounded-xl p-6 relative flex flex-col ${
                plan.popular ? "border-primary/50 neon-glow" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold font-display gradient-primary text-primary-foreground rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-foreground">{plan.name}</h3>
              <div className="mt-4 mb-2">
                <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            to="/pricing"
            className="text-primary hover:text-primary/80 transition-colors text-sm font-medium font-display underline underline-offset-4"
          >
            View detailed pricing comparison →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
