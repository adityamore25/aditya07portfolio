import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle,
  Clock,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { emailJSConfig } from '@/config/emailjs';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "adimore846@gmail.com",
    href: "mailto:adimore846@gmail.com",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93266 32352",
    href: "tel:+919326632352",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/aditya-m-950921257",
    href: "https://linkedin.com/in/aditya-m-950921257",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/adityamore25",
    href: "https://github.com/adityamore25",
    color: "from-gray-700 to-gray-900"
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailJSConfig.serviceID,
        emailJSConfig.templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        emailJSConfig.publicKey
      );
      
      toast({ title: "Message sent!" });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({ title: "Failed to send message" });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start a conversation? I'd love to hear about your project and discuss how we can work together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-semibold mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply connect with fellow developers. Feel free to reach out through any of the 
                  channels below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? "_blank" : undefined}
                      rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="block group"
                    >
                      <Card className="border-border/50 hover:border-navy/30 hover:shadow-elegant transition-all duration-300 group-hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground group-hover:text-navy transition-colors duration-200">
                                {contact.label}
                              </p>
                              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                {contact.value}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
              </div>

              {/* Availability */}
              <Card className="bg-gradient-to-br from-navy/5 to-cyan/5 border-navy/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="h-5 w-5 text-navy" />
                    <p className="font-semibold">Availability</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24 hours. I'm actively looking for 
                    new opportunities and collaborations.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-semibold">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-border/50 focus:border-navy focus:ring-navy/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-border/50 focus:border-navy focus:ring-navy/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="border-border/50 focus:border-navy focus:ring-navy/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how I can help..."
                      required
                      rows={6}
                      className="border-border/50 focus:border-navy focus:ring-navy/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-navy to-cyan hover:from-navy/90 hover:to-cyan/90 text-white shadow-elegant hover:shadow-glow transition-all duration-300 h-12"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}