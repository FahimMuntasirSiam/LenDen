import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { T } from "@/lib/i18n";

const faqs = [
  {
    q: "What if my device or phone is offline?",
    a: <>LenDen <T>will sync the sms when your device or internet comes back online.</T></>,
  },
  {
    q: "Can I choose to export filtered data like only bKash or only bank transactions?",
    a: <><T>Yes,</T> LenDen <T>allows filtered CSV export of transactions for each payment methods and custom dates.</T></>,
  },
  {
    q: "Why do I need to upload my bKash statement?",
    a: <><T>Sent money SMS doesn't appear except in statements.</T> LenDen <T>can parse the statement and import all the transactions into the dashboard.</T></>,
  },
  {
    q: "For how long does LenDen keep my data?",
    a: <><T>Clients can request data of their business for up to 7 months in</T> LenDen <T>before the log is cleared.</T></>,
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
            <T>Frequently Asked</T>
            <br />
            <span className="gradient-text"><T>Questions</T></span>
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
                    <T>{faq.q}</T>
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
