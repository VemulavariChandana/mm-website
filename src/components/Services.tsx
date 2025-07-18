import { Home, Building2, Wrench, Palette, PaintBucket, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import resdentialImg from '@/assets/resdential copy.jpg';
import commercialImg from '@/assets/commercial copy.webp';
import renovationsImg from '@/assets/Renovations copy.jpeg';
import interiorsImg from '@/assets/interiors copy.jpeg';
import paintingImg from '@/assets/painting copy.jpg';
import materialSupplyImg from '@/assets/Material supply copy.png';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential",
      description: "Complete residential construction and development services for your dream home.",
      features: ["Custom Home Building", "Foundation Work", "Structural Framing", "Site Preparation"]
    },
    {
      icon: Building2,
      title: "Commercial",
      description: "Professional commercial construction for offices, retail spaces, and business facilities.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Industrial Facilities"]
    },
    {
      icon: Wrench,
      title: "Renovations",
      description: "Transform existing spaces with expert renovation and remodeling services.",
      features: ["Kitchen Remodeling", "Bathroom Upgrades", "Home Extensions", "Space Optimization"]
    },
    {
      icon: Palette,
      title: "Interiors",
      description: "Complete interior design and finishing services to bring your vision to life.",
      features: ["Interior Design", "Flooring Installation", "Lighting Solutions", "Custom Furnishing"]
    },
    {
      icon: PaintBucket,
      title: "Painting",
      description: "Professional painting services for both interior and exterior applications.",
      features: ["Interior Painting", "Exterior Painting", "Decorative Finishes", "Surface Preparation"]
    },
    {
      icon: Package,
      title: "Material Supply",
      description: "Quality construction materials and supplies delivered directly to your project site.",
      features: ["Concrete & Cement", "Steel & Lumber", "Electrical Supplies", "Plumbing Materials"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Engineering Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From initial concept to final construction, we provide comprehensive civil engineering 
              services backed by decades of experience and cutting-edge technology.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              let imageSrc = '';
              switch (service.title) {
                case 'Residential':
                  imageSrc = resdentialImg;
                  break;
                case 'Commercial':
                  imageSrc = commercialImg;
                  break;
                case 'Renovations':
                  imageSrc = renovationsImg;
                  break;
                case 'Interiors':
                  imageSrc = interiorsImg;
                  break;
                case 'Painting':
                  imageSrc = paintingImg;
                  break;
                case 'Material Supply':
                  imageSrc = materialSupplyImg;
                  break;
                default:
                  imageSrc = 'https://via.placeholder.com/120x80?text=Service';
              }
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <img
                      src={imageSrc}
                      alt={service.title + ' image'}
                      className="w-full h-20 object-cover rounded-lg mb-4"
                    />
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;