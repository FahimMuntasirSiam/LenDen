import { motion } from "framer-motion";
import {
  FileText,
  TrendingDown,
  BarChart3,
  Shield,
  Building2,
  Landmark,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Invoicing & Billing",
    description: "Generate professional invoices in BDT, send via email or SMS, and track payments automatically.",
  },
  {
    icon: TrendingDown,
    title: "Expense Tracking",
    description: "Categorize expenses, scan receipts, and monitor cash flow across all your business operations.",
  },
  {
    icon: BarChart3,
    title: "Financial Reports",
    description: "Real-time P&L, balance sheets, and custom dashboards to make data-driven decisions.",
  },
  {
    icon: Shield,
    title: "Tax Compliance",
    description: "Automated VAT & AIT calculations aligned with NBR regulations. Stay compliant effortlessly.",
  },
  {
    icon: Building2,
    title: "Multi-branch Support",
    description: "Manage multiple locations, warehouses, or outlets from a single unified dashboard.",
  },
  {
    icon: Landmark,
    title: "Bank Reconciliation",
    description: "Connect with major Bangladeshi banks for automatic transaction matching and reconciliation.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Features</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Everything You Need to
            <br />
            <span className="gradient-text">Run Your Finances</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From invoicing to tax compliance, FinLog covers every aspect of business accounting in Bangladesh.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:neon-glow transition-all duration-300">
                <feature.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
