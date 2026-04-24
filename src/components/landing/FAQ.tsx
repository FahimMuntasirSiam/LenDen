import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does LenDen capture transactions?",
    a: "LenDen runs silently in the background on your Android phone. The moment a transaction SMS arrives from bKash, Nagad, Rocket, or your bank, it's automatically captured, parsed, and logged to your dashboard in seconds.",
  },
  {
    q: "What about my privacy? Does LenDen read all my messages?",
    a: "Absolutely not. Our SmartFilter technology reads each message before capturing it. Personal conversations, OTP codes, and verification messages are blocked immediately — LenDen never sees them. Only financial transactions get through.",
  },
  {
    q: "Which mobile banking services does LenDen support?",
    a: "LenDen supports bKash, Nagad, Rocket, and major Bangladeshi banks including Dutch-Bangla, BRAC Bank, City Bank, Eastern Bank, and more.",
  },
  {
    q: "Can I export my data?",
    a: "Yes! LenDen exports clean CSV files for you, saving you at least 60 hours a month of manual work and eliminating human error completely.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, all plans come with a 14-day free trial. No credit card required. You can explore all features before committing.",
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <AccordionItem
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
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
