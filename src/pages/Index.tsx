import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="bg-card border-t border-border/50 py-8">
          <div className="container-custom">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 Aditya Bharat More. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
