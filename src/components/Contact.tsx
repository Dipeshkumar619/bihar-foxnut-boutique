import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to order our premium makhana? Contact us directly for bulk orders, 
            custom packaging, or any questions about our products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-2xl shadow-warm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Visit Our Farm</h3>
                <p className="text-muted-foreground text-sm">
                  Purnea District, Bihar<br />
                  India - 854301
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-warm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm">
                  +91 98765 43210<br />
                  +91 87654 32109
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-warm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm">
                  orders@purneamakhana.com<br />
                  info@purneamakhana.com
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-warm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon - Sat: 9AM - 6PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Why Choose Direct Orders?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Freshest makhana directly from our processing facility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Custom packaging and bulk order discounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Direct communication with our farmers and processors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Best prices without middleman markup</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-premium">
            <h3 className="font-display text-2xl font-semibold mb-6">
              Place Your Order
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input placeholder="Enter your phone number" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <Input type="email" placeholder="Enter your email address" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Product Interest</label>
                <Input placeholder="Which products are you interested in?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Quantity & Requirements</label>
                <Textarea 
                  placeholder="Please specify quantity, delivery location, and any special requirements..."
                  rows={4}
                />
              </div>
              
              <Button variant="premium" size="lg" className="w-full">
                Submit Order Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;