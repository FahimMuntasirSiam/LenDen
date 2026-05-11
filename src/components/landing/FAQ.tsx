import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguageStore } from "@/lib/i18n";

const getFaqs = (lang: string) => [
  {
    q: lang === 'en' ? "What if my device or phone is offline?" : "আমার ডিভাইস বা ফোন অফলাইন থাকলে কী হবে?",
    a: lang === 'en' 
      ? "LenDen will sync the sms when your device or internet comes back online."
      : "আপনার ডিভাইস বা ইন্টারনেট পুনরায় চালু হলে LenDen স্বয়ংক্রিয়ভাবে SMS সিঙ্ক করে নেবে।",
  },
  {
    q: lang === 'en' ? "Can I choose to export filtered data like only bKash or only bank transactions?" : "আমি কি শুধু bKash বা শুধু ব্যাংক লেনদেনের মতো ফিল্টার করা ডেটা এক্সপোর্ট করতে পারব?",
    a: lang === 'en'
      ? "Yes, LenDen allows filtered CSV export of transactions for each payment methods and custom dates."
      : "হ্যাঁ, LenDen প্রতিটি পেমেন্ট মেথড ও কাস্টম তারিখ অনুযায়ী ফিল্টার করা CSV এক্সপোর্টের সুবিধা দেয়।",
  },
  {
    q: lang === 'en' ? "Why do I need to upload my bKash statement?" : "আমাকে কেন আমার bKash স্টেটমেন্ট আপলোড করতে হবে?",
    a: lang === 'en'
      ? "Sent money SMS doesn't appear except in statements. LenDen can parse the statement and import all the transactions into the dashboard."
      : "পাঠানো অর্থের SMS স্টেটমেন্ট ছাড়া দেখা যায় না। LenDen স্টেটমেন্ট বিশ্লেষণ করে সমস্ত লেনদেন ড্যাশবোর্ডে আমদানি করতে পারে।",
  },
  {
    q: lang === 'en' ? "For how long does LenDen keep my data?" : "LenDen কতদিন আমার ডেটা সংরক্ষণ করে?",
    a: lang === 'en'
      ? "Clients can request data of their business for up to 7 months in LenDen before the log is cleared."
      : "ক্লায়েন্টরা লগ মুছে যাওয়ার আগ পর্যন্ত LenDen-এ সর্বোচ্চ ৭ মাসের ব্যবসায়িক ডেটার অনুরোধ করতে পারবেন।",
  },
];

const FAQ = () => {
  const { language } = useLanguageStore();
  const faqs = getFaqs(language);

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
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {language === 'en' ? "FAQ" : "সাধারণ জিজ্ঞাসা"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 leading-relaxed md:leading-normal">
            {language === 'en' ? "Frequently Asked" : "সাধারণ"}
            <br />
            <span className="gradient-text">
              {language === 'en' ? "Questions" : "জিজ্ঞাসা"}
            </span>
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
