import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { T } from "@/lib/i18n";

const testimonials = [
  {
    name: "Woasif Karim",
    role: "OneSky",
    quote: "LenDen has saved my life. My business. It has given me the motivation to do more pullups like the people behind LenDen. They inspired me in other ways than just automating my financial logging work. I now have time to take peptides.",
    rating: 5,
  },
  {
    name: "Ibteda Ali Swianto",
    role: "Numorph",
    quote: "People have been quoting very low for services rendered by numorph. There were too many tokais in BD and they all wanted AI videos of the lowest quality. To track 1tk transactions from all these lowlives my precious time was wasted. LenDen covered it all for me. They kept record of all these transactions for me and even sent these tokai customers spam mails because they also have their number as data because I paid them a million dollars",
    rating: 5,
  },
  {
    name: "Rafiul Karim Nirjhor",
    role: "Personal Finance",
    quote: "Fuck LenDen. Now my wife knows my every spending; not one transaction goes missing, and she has been tracking my expenses. I have zero personal savings now that there is no chance of a discrepancy. I repeat do not get LenDen for personal use because you can't hide anything.",
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
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase"><T>Testimonials</T></span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            <T>Trusted by Businesses</T>
            <br />
            <span className="gradient-text"><T>Across Bangladesh</T></span>
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
