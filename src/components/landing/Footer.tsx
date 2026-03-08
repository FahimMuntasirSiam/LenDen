const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About Us", "Careers", "Blog", "Contact"],
  Resources: ["Documentation", "Help Center", "API Reference", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-display text-xl font-bold tracking-tight">
              <span className="gradient-text">Fin</span>
              <span className="text-foreground">Log</span>
            </a>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Smart business accounting for Bangladesh. Simplify your finances, stay compliant.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-sm font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 FinLog. All rights reserved. Made with ❤️ in Bangladesh 🇧🇩
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Facebook"].map((social) => (
              <a key={social} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
