import { Link } from "react-router-dom";
import { T } from "@/lib/i18n";

const footerLinks = {
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-12">
          <div className="col-span-1">
            <Link to="/" className="font-display text-xl font-bold tracking-tight">
              <span className="gradient-text">Len</span>
              <span className="text-foreground">Den</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
              LenDen <T>is Your Deshi Accountant. Automatic transaction logging for Bangladesh.</T>
            </p>
          </div>

          <div className="flex justify-end">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="text-right">
                <h4 className="font-display text-sm font-semibold text-foreground mb-4"><T>{category}</T></h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                        <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          <T>{link.label}</T>
                        </Link>
                      ) : (
                        <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          <T>{link.label}</T>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 LenDen. <T>All rights reserved.</T>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
