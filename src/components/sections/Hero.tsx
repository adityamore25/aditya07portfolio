import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Zap, Star, TrendingUp } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  const handleDownloadResume = () => {
    try {
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = '/AdityaRTCamp.pdf';
      link.download = 'AdityaRTCamp.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('Resume download initiated');
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: try opening in new tab
      window.open('/AdityaRTCamp.pdf', '_blank');
    }
  };

  const handleContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg-modern relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="relative">
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

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end relative">
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
                    className="w-full h-full object-cover rounded-full scale-90"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
              </div>
              
              {/* Enhanced status indicator */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
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