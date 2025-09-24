import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-makhana.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-accent font-medium">
            <Star className="h-5 w-5 fill-current" />
            <span>Premium Quality from Bihar</span>
          </div>
          
          <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Pure <span className="text-primary">Makhana</span>
            <br />
            & Chiroli Seeds
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            Experience the finest quality foxnuts and chiroli seeds directly from Bihar. 
            Handpicked, naturally roasted, and packed with nutrition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="premium" size="lg" className="group">
              Shop Premium Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn Our Story
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-8">
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Natural & Pure</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 scale-110"></div>
          <img
            src={heroImage}
            alt="Premium Makhana and Chiroli Seeds from Bihar"
            className="relative rounded-3xl shadow-premium w-full h-[600px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-warm border">
            <div className="flex items-center gap-3">
              <div className="bg-accent/10 p-3 rounded-full">
                <Star className="h-6 w-6 text-accent fill-current" />
              </div>
              <div>
                <div className="font-semibold">Premium Quality</div>
                <div className="text-sm text-muted-foreground">Directly from farmers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;