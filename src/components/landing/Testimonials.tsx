import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguageStore } from "@/lib/i18n";

const getTestimonials = (lang: string) => [
  {
    name: "Woasif Karim",
    role: lang === 'en' ? "OneSky" : "ওয়ানস্কাই",
    quote: lang === 'en' 
      ? "LenDen has saved my life. My business. It has given me the motivation to do more pullups like the people behind LenDen. They inspired me in other ways than just automating my financial logging work. I now have time to take peptides."
      : "LenDen আমার জীবন ও ব্যবসা বাঁচিয়েছে। এটি আমাকে LenDen-এর পেছনের মানুষদের মতো আরও বেশি পরিশ্রম করার অনুপ্রেরণা দিয়েছে। তারা শুধু আমার আর্থিক লগিং কাজ স্বয়ংক্রিয় করেই নয়, বরং অন্যান্যভাবেও আমাকে অনুপ্রাণিত করেছে।",
    rating: 5,
  },
  {
    name: "Ibteda Ali Swianto",
    role: lang === 'en' ? "Numorph" : "নিউমর্ফ",
    quote: lang === 'en'
      ? "To track transactions from all these sources, my precious time was wasted. LenDen covered it all for me. They kept record of all these transactions for me and automated the entire reporting process."
      : "বিভিন্ন উৎস থেকে লেনদেন ট্র্যাক করতে গিয়ে আমার মূল্যবান সময় নষ্ট হতো। LenDen আমার জন্য এই সবকিছু সহজ করে দিয়েছে। তারা আমার হয়ে প্রতিটি লেনদেনের রেকর্ড রাখে এবং সম্পূর্ণ রিপোর্টিং প্রক্রিয়াটি স্বয়ংক্রিয় করেছে।",
    rating: 5,
  },
  {
    name: "Rafiul Karim Nirjhor",
    role: lang === 'en' ? "Personal Finance" : "ব্যক্তিগত অর্থায়ন",
    quote: lang === 'en'
      ? "LenDen is incredible. Not one transaction goes missing, and I can track all my expenses effortlessly. I highly recommend it for anyone looking to manage their finances properly."
      : "LenDen অবিশ্বাস্য। একটি লেনদেনও বাদ পড়ে না এবং আমি অনায়াসেই আমার সব খরচ ট্র্যাক করতে পারি। যারা তাদের অর্থায়ন সঠিকভাবে পরিচালনা করতে চান, তাদের জন্য আমি এটি জোরালোভাবে সুপারিশ করছি।",
    rating: 5,
  },
];

const Testimonials = () => {
  const { language } = useLanguageStore();
  const testimonials = getTestimonials(language);

  return (
    <section className="py-24">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {language === 'en' ? "Testimonials" : "প্রশংসাপত্র"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            {language === 'en' ? "Trusted by Businesses" : "ব্যবসা দ্বারা বিশ্বস্ত"}
            <br />
            <span className="gradient-text">
              {language === 'en' ? "Across Bangladesh" : "বাংলাদেশ জুড়ে"}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, rotateY: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 80 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
