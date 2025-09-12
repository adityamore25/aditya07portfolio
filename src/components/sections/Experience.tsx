import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experienceData = [
  {
    title: "Full Stack Developer Intern",
    company: "ScaleFull Technologies LLP",
    location: "Pune",
    period: "Dec 2024 – Feb 2025",
    type: "Internship",
    achievements: [
      "Developed full-stack applications using MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Designed and integrated RESTful APIs, managed MongoDB databases",
      "Built responsive UIs with React.js and modern CSS frameworks",
      "Implemented authentication (JWT), version control (Git/GitHub), and deployed apps on cloud platforms"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Git", "GitHub"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and hands-on experience in software development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <Card key={index} className="relative border-l-4 border-l-navy shadow-elegant hover:shadow-glow/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-display font-semibold">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground mt-2">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge variant="secondary" className="bg-navy/10 text-navy border-navy/20">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="hidden sm:block">•</div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-navy to-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
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
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Looking for new opportunities to grow and contribute
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-navy hover:text-cyan font-medium underline underline-offset-4 transition-colors duration-200"
              >
                Let's work together →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}