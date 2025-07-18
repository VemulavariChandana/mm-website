import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-civil-engineering.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-engineering-black/80 to-engineering-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          {/* Logo removed */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Monomorium Minimum
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
          Precision Engineering. Innovative Solutions. Structural Excellence.
        </p>
        
        <p className="text-lg mb-10 text-white/80 max-w-3xl mx-auto">
          We deliver world-class civil engineering services with meticulous attention to detail 
          and cutting-edge technology, building the infrastructure of tomorrow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('services')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-3 text-lg group"
          >
            Explore Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-3 text-lg"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;