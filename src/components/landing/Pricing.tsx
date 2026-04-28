import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { GetStartedDialog } from "./GetStartedDialog";

const plans = [
  {
    name: "Starter",
    price: "৳500",
    period: "/month",
    description: "Perfect for small businesses and personal use",
    features: [
      "Up to 2,000 transactions/month",
      "Auto SMS capture",
      "SmartFilter technology",
      "1 device",
      "Email support",
    ],
    cta: "Get Started — It's Simple",
    popular: false,
  },
  {
    name: "Professional",
    price: "৳1,000",
    period: "/month",
    description: "For growing businesses that need more power",
    features: [
      "Up to 5,000 transactions/month",
      "Auto SMS capture",
      "SmartFilter technology",
      "Up to 3 devices",
      "Priority support",
    ],
    cta: "Get Started — It's Simple",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "৳1,800",
    period: "/month",
    description: "For large organizations with complex needs",
    features: [
      "Up to 10,000 transactions/month",
      "Auto SMS capture",
      "SmartFilter technology",
      "Up to 5 devices",
      "24/7 phone support",
    ],
    cta: "Get Started — It's Simple",
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
              <GetStartedDialog>
                <Button
                  className={`w-full font-display font-semibold ${
                    plan.popular ? "neon-glow" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </GetStartedDialog>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Pricing;
