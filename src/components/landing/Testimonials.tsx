import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rafiqul Islam",
    role: "CEO, Dhaka Textiles Ltd.",
    quote: "FinLog transformed how we manage our multi-branch accounting. The VAT automation alone saves us 20+ hours every month.",
    rating: 5,
  },
  {
    name: "Nasreen Akhter",
    role: "Founder, GreenLeaf Agro",
    quote: "As a growing agribusiness, we needed something simple yet powerful. FinLog's expense tracking and BDT invoicing is exactly what we needed.",
    rating: 5,
  },
  {
    name: "Kamal Hossain",
    role: "CFO, Chittagong Shipping Co.",
    quote: "The real-time financial reports give me complete visibility. I can make decisions faster and with confidence. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Trusted by Businesses
            <br />
            <span className="gradient-text">Across Bangladesh</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
