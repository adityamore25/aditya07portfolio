import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

export function Hero() {
  const handleDownloadResume = () => {
    // This would typically trigger a download of the resume PDF
    window.open("#", "_blank");
  };

  const handleContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blue shape */}
        <div className="absolute top-0 right-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-navy to-cyan opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        
        {/* Smaller geometric elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-navy/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-cyan/30 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 border-2 border-navy/20 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-navy/30 rotate-45"></div>
        
        {/* Dot pattern */}
        <div className="absolute top-0 left-0 w-40 h-40 geometric-dots opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 geometric-dots opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left animate-fade-in">
            <div className="mb-4">
              <span className="text-sm font-medium text-navy bg-navy/10 px-3 py-1 rounded-full">Hello</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              I'm <span className="text-gradient">Aditya</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
              Computer Science Undergraduate & Full Stack Developer
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              Building scalable, user-friendly, and impactful digital solutions with modern technologies
            </p>

            {/* CTA Button */}
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gradient-to-r from-navy to-cyan hover:from-navy/90 hover:to-cyan/90 text-white shadow-elegant hover:shadow-glow transition-all duration-300 px-8"
            >
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Main profile image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-navy to-cyan p-2 shadow-glow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <div className="w-60 h-60 md:w-76 md:h-76 rounded-full bg-gradient-to-br from-navy/20 to-cyan/20 flex items-center justify-center text-4xl md:text-5xl font-bold text-gradient">
                    ABM
                  </div>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-cyan/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-4 h-4 bg-navy/40 rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-start mt-12 space-x-4 animate-fade-in">
          <a
            href="https://github.com/adityamore25"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white shadow-md hover:shadow-elegant hover:shadow-glow/20 transition-all duration-300 group-hover:scale-110">
              <Github className="h-5 w-5" />
            </div>
          </a>
          <a
            href="https://linkedin.com/in/aditya-m-950921257"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan text-white shadow-md hover:shadow-elegant hover:shadow-glow/20 transition-all duration-300 group-hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </div>
          </a>
          <a
            href="mailto:adimore846@gmail.com"
            className="group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white shadow-md hover:shadow-elegant hover:shadow-glow/20 transition-all duration-300 group-hover:scale-110">
              <Mail className="h-5 w-5" />
            </div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-navy/30 rounded-full p-1">
          <div className="w-1 h-3 bg-gradient-to-b from-navy to-cyan rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}