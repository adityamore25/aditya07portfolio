import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Globe, 
  Database, 
  Server, 
  GitBranch, 
  Shield,
  Target,
  Share2
} from "lucide-react";

const skillCategories = [
  {
    name: "Languages",
    icon: Code,
    skills: ["Java", "Python", "JavaScript"]
  },
  {
    name: "Frontend",
    icon: Globe,
    skills: ["HTML", "CSS", "React.js", "Bootstrap"]
  },
  {
    name: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js"]
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["SQL", "MongoDB"]
  },
  {
    name: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Postman"]
  },
  {
    name: "Authentication",
    icon: Shield,
    skills: ["JWT"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-navy/5 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-cyan/5 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left side - Skills header */}
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="text-gradient">Skills</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Proficient in modern technologies and frameworks for full-stack development
              </p>
              
              {/* Expertise highlights */}
              <div className="space-y-4">
                <div className="expertise-card">
                  <div className="flex items-center mb-3">
                    <Target className="h-6 w-6 text-navy mr-3" />
                    <h3 className="font-semibold">Full Stack Development</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    End-to-end web application development with modern technologies
                  </p>
                </div>
                
                <div className="expertise-card">
                  <div className="flex items-center mb-3">
                    <Share2 className="h-6 w-6 text-cyan mr-3" />
                    <h3 className="font-semibold">API Integration</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    RESTful API design and seamless third-party integrations
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Skills grid */}
            <div className="lg:col-span-2">
              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {skillCategories.map((category, index) => (
                  <Card 
                    key={index} 
                    className="group border-navy/20 hover:border-navy/40 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-navy/10 to-cyan/10 rounded-lg mb-4 group-hover:from-navy/20 group-hover:to-cyan/20 transition-all duration-300">
                        <category.icon className="h-6 w-6 text-navy group-hover:text-cyan transition-colors duration-300" />
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-3 group-hover:text-navy transition-colors duration-300">
                        {category.name}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="text-xs bg-navy/5 text-navy hover:bg-navy/10 transition-colors duration-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}