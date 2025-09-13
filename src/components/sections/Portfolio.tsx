import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code, Palette } from "lucide-react";

const projects = [
  {
    title: "Restaurant Website",
    description: "A modern, responsive restaurant website built with React.js featuring interactive UI components, efficient state management, and contemporary design principles.",
    image: "/placeholder.svg",
    technologies: ["React.js", "CSS", "Bootstrap", "Tailwind CSS", "Vite", "Git", "GitHub"],
    features: [
      "Responsive and interactive UI using React.js",
      "Efficient state and props management with React hooks",
      "Modern component architecture",
      "Styled with CSS, Bootstrap, and Tailwind CSS"
    ],
    githubUrl: "https://github.com/adityamore25",
    liveUrl: "#",
    category: "Web Development",
    status: "Completed"
  }
];

const upcomingProjects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
    status: "In Planning"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    technologies: ["React.js", "Express.js", "Socket.io", "PostgreSQL"],
    status: "In Development"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-navy text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 geometric-dots opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div className="lg:max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Selected <span className="text-cyan">Portfolio</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Showcasing my latest projects and technical achievements in web development
              </p>
            </div>
            
            <div className="mt-6 lg:mt-0">
              <Button 
                variant="outline" 
                className="border-cyan text-cyan hover:bg-cyan hover:text-navy transition-all duration-300"
              >
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="portfolio-card group bg-white hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="aspect-video bg-gradient-to-br from-navy/10 to-cyan/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="h-12 w-12 text-navy/50 group-hover:text-cyan group-hover:scale-110 transition-all duration-300" />
                  </div>
                  
                  {/* Project category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cyan text-navy font-medium">
                      Web Development
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-navy group-hover:text-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-navy/10 text-navy border-navy/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge 
                        variant="secondary" 
                        className="text-xs bg-cyan/10 text-cyan border-cyan/20"
                      >
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-white transition-all duration-300"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-navy to-cyan hover:from-navy/90 hover:to-cyan/90 text-white"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 bg-white/10 rounded-2xl p-8 border border-cyan/20">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              I'm always excited to work on new projects and challenges
            </p>
            <Button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="bg-cyan hover:bg-cyan/90 text-navy font-semibold shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              Let's Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}