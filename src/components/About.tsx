import { Heart, Leaf, Shield, Award } from "lucide-react";
import cultivationImage from "@/assets/cultivation.jpg";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Heart Healthy",
      description: "Rich in antioxidants and low in cholesterol, perfect for heart health."
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "No artificial preservatives or chemicals, straight from nature."
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Carefully selected and processed to maintain nutritional value."
    },
    {
      icon: Award,
      title: "Traditional Methods",
      description: "Processed using time-tested traditional methods from Bihar."
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={cultivationImage}
              alt="Makhana cultivation in Bihar"
              className="rounded-3xl shadow-warm w-full"
            />
            <div className="absolute inset-0 bg-gradient-primary/10 rounded-3xl"></div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                From Bihar's <span className="text-primary">Sacred Waters</span> to Your Table
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 25 years, our family has been cultivating the finest makhana in the 
                lotus ponds of Purnea, Bihar. We combine traditional knowledge with modern 
                processing techniques to bring you the purest, most nutritious foxnuts.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl shadow-warm border group hover:shadow-premium transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
              <blockquote className="font-display text-xl italic text-center">
                "Each makhana is a testament to Bihar's rich agricultural heritage and our commitment to quality."
              </blockquote>
              <cite className="block text-center mt-4 text-muted-foreground font-medium">
                — The Purnea Makhana Family
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;