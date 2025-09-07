import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold text-foreground">VicScale</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-smooth">
              How It Works
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-smooth">
              Results
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
          </nav>

          <Button variant="cta" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;