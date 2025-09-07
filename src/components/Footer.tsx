import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">VicScale</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              We help tech startups and SaaS companies book their first 20 qualified customer calls 
              in 30 days so they can validate faster and raise with traction.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 VicScale. All rights reserved.
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Lead Generation</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Sales Qualification</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Market Research</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Growth Strategy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="mailto:hello@vicscale.com" className="hover:text-foreground transition-smooth">hello@vicscale.com</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Book a Call</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Case Studies</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Resources</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            Built for ambitious tech startups and SaaS companies
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;