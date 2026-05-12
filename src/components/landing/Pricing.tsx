import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguageStore } from "@/lib/i18n";
import { GetStartedDialog } from "./GetStartedDialog";

const getPlans = (lang: string) => [
  {
    name: lang === 'en' ? "Starter" : "স্টার্টার",
    originalPrice: "৳800",
    price: "৳500",
    discount: "37% OFF",
    period: lang === 'en' ? "/month" : "/মাস",
    description: lang === 'en' ? "Perfect for small businesses and personal use" : "ছোট ব্যবসা এবং ব্যক্তিগত ব্যবহারের জন্য পারফেক্ট",
    features: lang === 'en' ? [
      "Up to 2,000 transactions/month",
      "Auto SMS capture",
      "SmartFilter technology",
      "Cash out tracking free (need to upload statement)",
      "1 device",
      "Email support",
    ] : [
      "মাসে সর্বোচ্চ ২,০০০ লেনদেন",
      "স্বয়ংক্রিয় SMS ক্যাপচার",
      "স্মার্টফিল্টার প্রযুক্তি",
      "ক্যাশ-আউট ট্র্যাকিং বিনামূল্যে (স্টেটমেন্ট আপলোড করতে হবে)",
      "১টি ডিভাইস",
      "ইমেইল সমর্থন",
    ],
    cta: lang === 'en' ? "Get Started — It's Simple" : "শুরু করুন — এটা সহজ",
    popular: false,
  },
  {
    name: lang === 'en' ? "Professional" : "প্রফেশনাল",
    originalPrice: "৳1,700",
    price: "৳1,000",
    discount: "41% OFF",
    period: lang === 'en' ? "/month" : "/মাস",
    description: lang === 'en' ? "For growing businesses that need more power" : "ক্রমবর্ধমান ব্যবসার জন্য যা আরও শক্তি প্রয়োজন",
    features: lang === 'en' ? [
      "Up to 5,000 transactions/month",
      "Auto SMS capture",
      "SmartFilter technology",
      "Cash out tracking free (need to upload statement)",
      "Up to 3 devices",
      "Priority support",
    ] : [
      "মাসে সর্বোচ্চ ৫,০০০ লেনদেন",
      "স্বয়ংক্রিয় SMS ক্যাপচার",
      "স্মার্টফিল্টার প্রযুক্তি",
      "ক্যাশ-আউট ট্র্যাকিং বিনামূল্যে (স্টেটমেন্ট আপলোড করতে হবে)",
      "৩টি পর্যন্ত ডিভাইস",
      "অগ্রাধিকার সমর্থন",
    ],
    cta: lang === 'en' ? "Get Started — It's Simple" : "শুরু করুন — এটা সহজ",
    popular: true,
  },
  {
    name: lang === 'en' ? "Enterprise" : "এন্টারপ্রাইজ",
    originalPrice: "৳3,000",
    price: "৳1,800",
    discount: "40% OFF",
    period: lang === 'en' ? "/month" : "/মাস",
    description: lang === 'en' ? "For large organizations with complex needs" : "জটিল চাহিদা সহ বড় প্রতিষ্ঠানের জন্য",
    features: lang === 'en' ? [
      "Up to 10,000 transactions/month",
      "Auto SMS capture",
      "SmartFilter technology",
      "Cash out tracking free (need to upload statement)",
      "Up to 5 devices",
      "24/7 phone support",
    ] : [
      "মাসে সর্বোচ্চ ১০,০০০ লেনদেন",
      "স্বয়ংক্রিয় SMS ক্যাপচার",
      "স্মার্টফিল্টার প্রযুক্তি",
      "ক্যাশ-আউট ট্র্যাকিং বিনামূল্যে (স্টেটমেন্ট আপলোড করতে হবে)",
      "৫টি পর্যন্ত ডিভাইস",
      "২৪/৭ ফোন সমর্থন",
    ],
    cta: lang === 'en' ? "Get Started — It's Simple" : "শুরু করুন — এটা সহজ",
    popular: false,
  },
];

const Pricing = () => {
  const { language } = useLanguageStore();
  const plans = getPlans(language);

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
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {language === 'en' ? "Pricing" : "মূল্য নির্ধারণ"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            {language === 'en' ? "Simple, Transparent" : "সরল, স্বচ্ছ"}
            <br />
            <span className="gradient-text">
              {language === 'en' ? "Pricing in BDT" : "টাকায় দাম"}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === 'en' 
              ? "Pay only a fraction of what you'd pay employees. No hidden fees. Start free for 14 days."
              : "আপনি কর্মীদের যে অর্থ প্রদান করবেন তার একটি ভগ্নাংশ প্রদান করুন। কোন লুকানো ফি নেই। ১৪ দিনের জন্য বিনামূল্যে শুরু করুন।"}
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
                  {language === 'en' ? "Most Popular" : "সর্বাধিক জনপ্রিয়"}
                </span>
              )}
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-foreground">{plan.name}</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {plan.discount}
                </span>
              </div>
              <div className="mt-4 mb-2 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground line-through opacity-50">{plan.originalPrice}</span>
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
