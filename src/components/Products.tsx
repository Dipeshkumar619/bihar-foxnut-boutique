import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import productsImage from "@/assets/products.jpg";

const Products = () => {
  const products = [
    {
      name: "Classic Roasted Makhana",
      price: "₹299",
      originalPrice: "₹399",
      weight: "250g",
      rating: 4.8,
      description: "Traditional lightly salted foxnuts, perfect for healthy snacking.",
      badge: "Best Seller"
    },
    {
      name: "Masala Makhana",
      price: "₹349",
      originalPrice: "₹449",
      weight: "250g",
      rating: 4.9,
      description: "Spiced with aromatic Indian masalas for a flavorful experience.",
      badge: "Spicy"
    },
    {
      name: "Premium Gift Box",
      price: "₹899",
      originalPrice: "₹1199",
      weight: "500g (2 varieties)",
      rating: 5.0,
      description: "Beautiful gift box with classic and masala variants.",
      badge: "Premium"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Premium</span> Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted range of makhana products, each made with 
            love and traditional expertise from Bihar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-card rounded-3xl p-6 shadow-warm border group hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <div className="relative mb-6">
                <img
                  src={productsImage}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {product.badge}
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-accent fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.weight})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <span className="text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <Button variant="premium" size="sm" className="group">
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;