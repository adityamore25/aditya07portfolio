import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  Wrench, 
  Shield 
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "Python", "JavaScript"],
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: ["HTML", "CSS", "React.js", "Bootstrap"],
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js"],
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MongoDB"],
    color: "from-orange-500 to-amber-600"
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Authentication",
    icon: Shield,
    skills: ["JWT"],
    color: "from-violet-500 to-purple-600"
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-neutral-50/50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the tools I use to build amazing solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-navy/30"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg font-display font-semibold">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="bg-card hover:bg-navy/10 hover:text-navy hover:border-navy/30 transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Hover effect gradient border */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-navy/20 to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              );
            })}
          </div>

          {/* Skills Progress Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-display font-semibold text-center mb-8">
              Proficiency Levels
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { skill: "React.js", level: 85 },
                { skill: "JavaScript", level: 80 },
                { skill: "Node.js", level: 75 },
                { skill: "MongoDB", level: 70 },
                { skill: "Express.js", level: 75 },
                { skill: "Git/GitHub", level: 85 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>{item.skill}</span>
                    <span className="text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-navy to-cyan transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}