import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Code, 
  Database,
  ArrowRight,
  Smartphone,
  Cloud,
  Zap
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive and scalable web applications using modern frameworks and technologies. From concept to deployment, I create user-friendly interfaces that deliver exceptional user experiences.",
    features: [
      "Responsive Design",
      "Modern Frameworks",
      "Performance Optimization",
      "Cross-browser Compatibility"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    title: "API Development",
    description: "Designing and integrating robust RESTful APIs that power your applications. I focus on creating scalable, secure, and well-documented APIs that facilitate seamless data exchange.",
    features: [
      "RESTful Architecture",
      "Authentication & Security",
      "Documentation",
      "Third-party Integrations"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Structuring, managing, and optimizing SQL and MongoDB databases for optimal performance. I ensure data integrity, security, and efficient querying for your applications.",
    features: [
      "Database Design",
      "Query Optimization",
      "Data Security",
      "Backup & Recovery"
    ],
    color: "from-purple-500 to-pink-500"
  }
];

const additionalServices = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Ensuring your applications work flawlessly across all devices"
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "Deploying and maintaining applications on cloud platforms"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing applications for speed and efficiency"
  }
];

export function Services() {
  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
              Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services to bring your digital vision to life
            </p>
          </div>

          {/* Main Services */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="relative group hover:shadow-glow/10 transition-all duration-500 hover:-translate-y-2 border-border/50 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-display font-semibold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="outline" 
                      onClick={handleContactClick}
                      className="w-full group/btn border-border/50 hover:border-navy/50 hover:bg-navy/5 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Services */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-elegant">
            <h3 className="text-2xl font-display font-semibold text-center mb-8">
              Additional Expertise
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy/10 to-cyan/10 flex items-center justify-center mx-auto mb-4 group-hover:from-navy/20 group-hover:to-cyan/20 transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-navy group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 bg-gradient-to-r from-navy/5 to-cyan/5 rounded-2xl p-8 border border-navy/10">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Let's discuss how I can help bring your ideas to life with modern, scalable solutions
            </p>
            <Button 
              onClick={handleContactClick}
              size="lg"
              className="bg-gradient-to-r from-navy to-cyan hover:from-navy/90 hover:to-cyan/90 text-white shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}