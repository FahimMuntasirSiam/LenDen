import { motion } from "framer-motion";
import { T } from "@/lib/i18n";

const comparisonData = [
  { metric: "Time logging transactions", without: "20 hours/month", with: "0 hours" },
  { metric: "Missing transactions", without: "Inevitable", with: "None" },
  { metric: "Time to get monthly report", without: "Days", with: "Instant" },
];

const CostComparison = () => {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase"><T>The Real Cost</T></span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            <T>See What Manual Logging</T>
            <br />
            <span className="gradient-text"><T>Is Really Costing You</T></span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            <T>An ISP with 4,000 monthly transactions spends:</T>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          className="max-w-3xl mx-auto glass-card rounded-2xl overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 gap-0 border-b border-border/50">
            <div className="p-4 md:p-6" />
            <div className="p-4 md:p-6 text-center border-l border-border/50">
              <p className="font-display text-sm md:text-base font-semibold text-destructive"><T>Without</T> LenDen</p>
            </div>
            <div className="p-4 md:p-6 text-center border-l border-border/50 gradient-primary">
              <p className="font-display text-sm md:text-base font-semibold text-primary-foreground"><T>With</T> LenDen</p>
            </div>
          </div>

          {/* Table rows */}
          {comparisonData.map((row, i) => (
            <motion.div
              key={row.metric}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`grid grid-cols-3 gap-0 ${i < comparisonData.length - 1 ? "border-b border-border/30" : ""}`}
            >
              <div className="p-4 md:p-6 flex items-center">
                <p className="text-sm md:text-base text-foreground font-medium"><T>{row.metric}</T></p>
              </div>
              <div className="p-4 md:p-6 flex items-center justify-center border-l border-border/30">
                <p className="text-sm md:text-base text-destructive/80 font-medium"><T>{row.without}</T></p>
              </div>
              <div className="p-4 md:p-6 flex items-center justify-center border-l border-border/30 bg-primary/5">
                <p className="text-sm md:text-base text-primary font-bold"><T>{row.with}</T></p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 text-muted-foreground max-w-2xl mx-auto italic text-sm md:text-base"
        >
          "<T>That's half a working week your employee spends copying SMS messages into a spreadsheet.</T> <span className="text-primary font-medium not-italic">LenDen <T>does it the moment each transaction arrives.</T></span>"
        </motion.p>
      </div>
    </section>
  );
};

export default CostComparison;
