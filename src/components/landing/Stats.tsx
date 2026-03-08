import { motion } from "framer-motion";

const stats = [
  { value: "5,000+", label: "Businesses Trust Us" },
  { value: "৳500Cr+", label: "Transactions Tracked" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "50+", label: "Integrations" },
];

const Stats = () => {
  return (
    <section className="py-20 border-y border-border/50">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
