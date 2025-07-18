import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string|null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        toast({
          title: "Message Sent",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', project: '', message: '' });
      } else {
        setSubmitStatus("error");
        toast({
          title: "Submission Failed",
          description: result.error || "There was a problem sending your message. Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      setSubmitStatus("error");
      toast({
        title: "Submission Failed",
        description: "Network error. Please try again later.",
        variant: "destructive"
      });
    }
    setSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "monomoriumminimum123@gmail.com",
      description: "Professional inquiries and project discussions"
    },
    {
      icon: Phone,
      title: "Call Us", 
      content: "+91 7760743813",
      description: "Direct line for urgent consultations"
    },
    {
      icon: Phone,
      title: "Call Us", 
      content: "+91 8970205457",
      description: "Alternate contact number"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Teachers Colony, Mulbagal, Karnataka",
      description: "kolar district, 563131"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Kadugudi, Whitefield Bengaluru",
      description: "Bangalore, Karnataka"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Saturday : 8:00 AM - 6:00 PM",
      description: "Weekend consultations by appointment"
    }
  ];

  return (
    <section id="contact" className="pt-20 pb-0 bg-gradient-to-b from-concrete-gray to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? We are  here to help, feel free to reach out.
              bring your vision to life with precision and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Start Your Project
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Tell us about your engineering needs and we'll provide a detailed consultation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project">Project Type</Label>
                    <Input 
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={(e) => setFormData({...formData, project: e.target.value})}
                      placeholder="e.g., Structural Design, Infrastructure, Consulting"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Describe your project requirements, timeline, and any specific challenges..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                  {submitStatus === "success" && (
                    <p className="text-green-600 text-center mt-2">Your message was sent successfully!</p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-600 text-center mt-2">There was a problem sending your message. Please try again.</p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're committed to providing responsive, professional service. 
                  Reach out through any of these channels for project inquiries, 
                  technical consultations, or general questions.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4 hover:shadow-card transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        {info.title === "Email Us" ? (
                          <a href={`mailto:${info.content}`} className="text-foreground font-medium mb-1 underline hover:text-primary transition-colors">{info.content}</a>
                        ) : info.title === "Call Us" ? (
                          <a href={`tel:${info.content.replace(/\s+/g, '')}`} className="text-foreground font-medium mb-1 underline hover:text-primary transition-colors">{info.content}</a>
                        ) : (
                          <p className="text-foreground font-medium mb-1">{info.content}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;