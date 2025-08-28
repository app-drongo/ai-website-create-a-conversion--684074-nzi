// Features Component
// Generated: 2025-08-28T12:54:43.938Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Clock, 
  Shield, 
  Smartphone, 
  Wrench, 
  Star, 
  MapPin,
  DollarSign,
  CheckCircle,
  Zap
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Most repairs completed within 30 minutes. Get your device back fast with our express repair service.",
      badge: "Speed"
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "All repairs backed by our comprehensive warranty. Your peace of mind is guaranteed.",
      badge: "Protection"
    },
    {
      icon: Smartphone,
      title: "All Device Types",
      description: "iPhone, Samsung, Google Pixel, tablets, and more. We fix all major brands and models.",
      badge: "Compatibility"
    },
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Certified repair specialists with years of experience handling delicate mobile devices.",
      badge: "Expertise"
    },
    {
      icon: Star,
      title: "Premium Parts Only",
      description: "Original and high-quality replacement parts ensure your device performs like new.",
      badge: "Quality"
    },
    {
      icon: MapPin,
      title: "Mobile Service",
      description: "We come to you! On-site repairs at your home, office, or preferred location.",
      badge: "Convenience"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Get an instant quote before any work begins.",
      badge: "Pricing"
    },
    {
      icon: CheckCircle,
      title: "Free Diagnostics",
      description: "Complete device assessment at no cost. Know exactly what needs fixing before you pay.",
      badge: "Assessment"
    },
    {
      icon: Zap,
      title: "Emergency Repairs",
      description: "Urgent device issues? Our emergency service gets you back online when you need it most.",
      badge: "Urgent Care"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose QuickFix
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional Mobile Repair
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Services You Can Trust
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From cracked screens to battery replacements, we provide fast, reliable, and 
            affordable repair solutions for all your mobile devices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to get your device fixed today?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Book Repair Now
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}