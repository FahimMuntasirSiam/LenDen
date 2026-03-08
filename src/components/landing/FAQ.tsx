import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is FinLog compliant with Bangladesh's tax regulations?",
    a: "Yes! FinLog is fully aligned with NBR (National Board of Revenue) regulations, including automated VAT and AIT calculations, mushak forms, and tax return preparation.",
  },
  {
    q: "Can I connect my Bangladeshi bank account?",
    a: "Absolutely. We support integration with major banks including Dutch-Bangla, BRAC Bank, City Bank, Eastern Bank, and more for automatic transaction import and reconciliation.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, all plans come with a 14-day free trial. No credit card required. You can explore all features before committing.",
  },
  {
    q: "How secure is my financial data?",
    a: "We use bank-grade 256-bit encryption, SOC 2 Type II compliance, and host data on secure servers. Your financial data is protected with the highest industry standards.",
  },
  {
    q: "Can I manage multiple business branches?",
    a: "Yes, our Professional and Enterprise plans support multi-branch management. You can view consolidated or branch-specific reports from a single dashboard.",
  },
  {
    q: "Do you offer support in Bengali?",
    a: "Yes! Our platform interface and customer support are available in both Bengali and English to serve businesses across Bangladesh comfortably.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">FAQ</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="font-display text-sm md:text-base font-medium text-foreground hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
