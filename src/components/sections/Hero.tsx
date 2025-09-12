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
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-navy to-cyan p-1 shadow-glow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-navy/20 to-cyan/20 flex items-center justify-center text-2xl md:text-3xl font-bold text-gradient">
                    ABM
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
              <span className="text-gradient">Aditya Bharat More</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-2">
              Computer Science Undergraduate & Full Stack Developer
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building scalable, user-friendly, and impactful digital solutions with modern technologies
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gradient-to-r from-navy to-cyan hover:from-navy/90 hover:to-cyan/90 text-white shadow-elegant hover:shadow-glow transition-all duration-300 px-8"
            >
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </Button>
            <Button
              onClick={handleContact}
              variant="outline"
              size="lg"
              className="border-2 border-navy/30 hover:border-navy hover:bg-navy/5 px-8 transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in">
            <a
              href="https://github.com/adityamore25"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border/50 shadow-md hover:shadow-elegant hover:shadow-glow/20 transition-all duration-300 group-hover:scale-110">
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-navy transition-colors duration-300" />
              </div>
            </a>
            <a
              href="https://linkedin.com/in/aditya-m-950921257"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border/50 shadow-md hover:shadow-elegant hover:shadow-glow/20 transition-all duration-300 group-hover:scale-110">
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-navy transition-colors duration-300" />
              </div>
            </a>
            <a
              href="mailto:adimore846@gmail.com"
              className="group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border/50 shadow-md hover:shadow-elegant hover:shadow-glow/20 transition-all duration-300 group-hover:scale-110">
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-navy transition-colors duration-300" />
              </div>
            </a>
          </div>
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