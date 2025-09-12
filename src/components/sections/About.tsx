import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Dr. D Y Patil Institute of Engineering Management & Research, Pune",
    period: "2022 – 2026",
    grade: "Current CGPA: 7.1",
    status: "current",
  },
  {
    degree: "HSC",
    institution: "MNR School of Excellence, Panvel",
    period: "2021",
    grade: "89.6%",
    status: "completed",
  },
  {
    degree: "SSC",
    institution: "New Horizon Public School, Panvel",
    period: "2019",
    grade: "89.6%",
    status: "completed",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-neutral-50/50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a strong foundation in computer science and hands-on experience in full-stack development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-display font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Computer Science undergraduate with strong fundamentals in core CS concepts and practical experience in full-stack development. Skilled in HTML, CSS, JavaScript, and modern frameworks like React.js, with proficiency in version control for maintaining clean and efficient code.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Eager to apply technical expertise to build scalable, user-friendly, and impactful digital solutions. I believe in continuous learning and staying updated with the latest technologies to deliver exceptional results.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center border-navy/20 hover:border-navy/40 transition-colors duration-300">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-gradient">3+</div>
                    <div className="text-sm text-muted-foreground">Years Learning</div>
                  </CardContent>
                </Card>
                <Card className="p-4 text-center border-navy/20 hover:border-navy/40 transition-colors duration-300">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-gradient">5+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold mb-6">
                <GraduationCap className="inline-block mr-2 h-6 w-6 text-navy" />
                Education
              </h3>
              
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <Card 
                    key={index} 
                    className={`relative border-l-4 ${
                      edu.status === 'current' 
                        ? 'border-l-navy shadow-elegant' 
                        : 'border-l-cyan/50'
                    } hover:shadow-lg transition-all duration-300`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        {edu.status === 'current' && (
                          <Badge variant="secondary" className="bg-navy/10 text-navy border-navy/20">
                            Current
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-3">{edu.institution}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
                        <div className="flex items-center mb-1 sm:mb-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="font-medium text-navy">
                          {edu.grade}
                        </div>
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