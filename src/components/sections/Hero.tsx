import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Zap, Star, TrendingUp } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  const handleDownloadResume = () => {
    // This would typically trigger a download of the resume PDF
    window.open("#", "_blank");
  };

  const handleContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg-modern relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-navy/20 to-cyan/30 rounded-full blur-3xl opacity-60 float-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 md:w-80 md:h-80 bg-gradient-to-tr from-cyan/20 to-navy/20 rounded-full blur-3xl opacity-40 float-delayed"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-navy/30 rounded-full float-animation"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan/40 rotate-45 float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-6 h-6 border-2 border-navy/20 rounded-full float-animation"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan/50 rotate-45 float-delayed"></div>
        
        {/* Enhanced dot patterns */}
        <div className="absolute top-0 left-0 w-32 h-32 geometric-dots opacity-20 float-animation"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 geometric-dots opacity-15 float-delayed"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left side - Text content with floating cards */}
          <div className="relative">
            {/* Floating stats cards */}
            <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 glass-card p-4 float-animation hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-navy to-cyan rounded-full flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-navy">3+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 right-0 md:-top-8 md:-right-8 glass-card p-4 float-delayed hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan to-navy rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-navy">5+</div>
                  <div className="text-xs text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="text-left animate-fade-in mt-8 lg:mt-0">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-navy/10 to-cyan/10 px-4 py-2 rounded-full border border-navy/20 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-navy">Available for hire</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight">
                Hello, I'm{" "}
                <div className="relative inline-block">
                  <span className="text-gradient">Aditya</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-navy to-cyan rounded-full"></div>
                </div>
              </h1>
              
              <div className="mb-4">
                <p className="text-xl md:text-2xl text-foreground font-semibold mb-2">
                  Computer Science Undergraduate &
                </p>
                <div className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-navy" />
                  <span className="text-xl md:text-2xl font-bold text-gradient">Full Stack Developer</span>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
                Building scalable, user-friendly, and impactful digital solutions with modern technologies. 
                Passionate about creating exceptional web experiences.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={handleDownloadResume}
                  size="lg"
                  className="group bg-gradient-to-r from-navy to-cyan hover:from-navy/90 hover:to-cyan/90 text-white shadow-elegant hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  Download Resume
                  <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Button>
                <Button
                  onClick={handleContact}
                  variant="outline"
                  size="lg"
                  className="group border-2 border-navy/30 hover:border-navy hover:bg-navy hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  Let's Connect
                </Button>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex items-center space-x-1">
                <span className="text-sm text-muted-foreground mr-4">Follow me:</span>
                <a
                  href="https://github.com/adityamore25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-navy to-cyan text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                    <Github className="h-5 w-5" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </a>
                <a
                  href="https://linkedin.com/in/aditya-m-950921257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-navy text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </a>
                <a
                  href="mailto:adimore846@gmail.com"
                  className="group relative"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-navy to-cyan text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Right side - Profile Image with modern effects */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Floating achievement badges */}
            <div className="absolute top-8 -left-4 lg:-left-8 glass-card p-3 float-animation z-10">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-navy" />
                <div>
                  <div className="text-sm font-bold text-navy">MERN Stack</div>
                  <div className="text-xs text-muted-foreground">Expert</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 -right-4 lg:-right-8 glass-card p-3 float-delayed z-10">
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-cyan" />
                <div>
                  <div className="text-sm font-bold text-navy">React.js</div>
                  <div className="text-xs text-muted-foreground">Advanced</div>
                </div>
              </div>
            </div>

            {/* Enhanced profile image container */}
            <div className="relative animate-scale-in">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-navy/20 to-cyan/20 blur-xl"></div>
              
              {/* Main profile container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-navy to-cyan p-1 shadow-2xl pulse-glow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden border-4 border-white/50">
                  <img 
                    src={profilePhoto} 
                    alt="Aditya Bharat More - Profile Picture" 
                    className="w-full h-full object-cover rounded-full"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
              </div>
              
              {/* Enhanced status indicator */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-br from-cyan/40 to-navy/40 rounded-full float-animation"></div>
              <div className="absolute -bottom-4 -right-8 w-6 h-6 bg-gradient-to-br from-navy/40 to-cyan/40 rotate-45 float-delayed"></div>
              <div className="absolute top-1/3 -left-8 w-4 h-4 border-2 border-cyan/40 rounded-full float-animation"></div>
            </div>
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