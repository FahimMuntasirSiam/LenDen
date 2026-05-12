import { Link } from "react-router-dom";
import { T } from "@/lib/i18n";
import { BrandedLenDen } from "./BrandedLenDen";

const footerLinks = {
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] relative pt-32 pb-12 overflow-hidden border-t border-border/5">
      {/* Subtle top border with teal gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-24">
          {/* Logo + Tagline */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <Link to="/" className="font-display text-2xl font-bold tracking-tight">
              <span className="gradient-text">Len</span>
              <span className="text-foreground">Den</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xs">
              <BrandedLenDen /> <T>is Your Deshi Accountant. Automatic transaction logging for Bangladesh.</T>
            </p>
          </div>

          {/* Legal Links Column */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            <h4 className="font-display text-xs font-bold text-primary mb-5 uppercase tracking-widest">
              <T>Legal</T>
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.Legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-xs text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                  >
                    <T>{link.label}</T>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-white/5 pt-10">
          <p className="text-xs text-muted-foreground text-center tracking-wide opacity-60">
            © 2026 <BrandedLenDen />. <T>All rights reserved.</T>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
