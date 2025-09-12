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
    <section id="portfolio" className="section-padding bg-neutral-50/50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
              Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my projects and the technologies I've worked with
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center">
              <Code className="mr-3 h-6 w-6 text-navy" />
              Featured Projects
            </h3>
            
            <div className="grid lg:grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow/10 transition-all duration-500 border-border/50">
                  <div className="lg:flex">
                    {/* Project Image */}
                    <div className="lg:w-2/5">
                      <div className="h-64 lg:h-full bg-gradient-to-br from-navy/10 to-cyan/10 flex items-center justify-center relative overflow-hidden">
                        <div className="text-center">
                          <Palette className="h-16 w-16 text-navy/30 mx-auto mb-4" />
                          <p className="text-sm text-muted-foreground">Project Screenshot</p>
                        </div>
                        {/* Overlay with project category */}
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 text-navy">
                            {project.category}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge 
                            variant="outline" 
                            className="bg-green-50 text-green-700 border-green-200"
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="lg:w-3/5">
                      <CardHeader>
                        <CardTitle className="text-2xl font-display font-semibold">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-navy to-cyan mt-2 mr-3 flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex}
                                variant="outline"
                                className="border-cyan/30 text-cyan-600 hover:bg-cyan/10 transition-colors duration-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            variant="outline"
                            onClick={() => window.open(project.githubUrl, "_blank")}
                            className="flex-1 border-border/50 hover:border-navy/50 hover:bg-navy/5"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </Button>
                          <Button
                            onClick={() => window.open(project.liveUrl, "_blank")}
                            className="flex-1 bg-gradient-to-r from-navy to-cyan hover:from-navy/90 hover:to-cyan/90 text-white"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Projects */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center">
              <Palette className="mr-3 h-6 w-6 text-cyan" />
              Upcoming Projects
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingProjects.map((project, index) => (
                <Card key={index} className="border-dashed border-2 border-border/50 hover:border-navy/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-display font-semibold">
                        {project.title}
                      </CardTitle>
                      <Badge 
                        variant="outline" 
                        className={`
                          ${project.status === 'In Planning' 
                            ? 'bg-orange-50 text-orange-700 border-orange-200' 
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                          }
                        `}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-muted/50 text-muted-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 bg-gradient-to-r from-navy/5 to-cyan/5 rounded-2xl p-8 border border-navy/10">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              I'm always excited to work on new projects and challenges
            </p>
            <Button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="bg-gradient-to-r from-navy to-cyan hover:from-navy/90 hover:to-cyan/90 text-white shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              Let's Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}