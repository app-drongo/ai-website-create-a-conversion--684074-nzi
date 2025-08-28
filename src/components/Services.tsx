// Services Component
// Generated: 2025-08-28T12:54:43.938Z
// Template: services-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Smartphone,
  Tablet,
  Laptop,
  Battery,
  Shield,
  Wrench,
  Clock,
  Zap,
  ArrowRight
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "screen-replacement",
      title: "Screen Replacement",
      description: "Professional screen repair for cracked, damaged, or unresponsive displays on all device types.",
      icon: Smartphone,
      badge: "Most Popular",
      features: ["All device models", "OEM quality parts", "Same-day service"],
      link: "/services/screen-replacement"
    },
    {
      id: "battery-replacement",
      title: "Battery Replacement",
      description: "Restore your device's battery life with genuine replacement batteries and expert installation.",
      icon: Battery,
      features: ["Genuine batteries", "Performance tested", "6-month warranty"],
      link: "/services/battery-replacement"
    },
    {
      id: "water-damage-repair",
      title: "Water Damage Repair",
      description: "Emergency water damage restoration using advanced drying techniques and component replacement.",
      icon: Shield,
      badge: "Emergency",
      features: ["24/7 emergency", "Data recovery", "No-fix no-fee"],
      link: "/services/water-damage"
    },
    {
      id: "tablet-repair",
      title: "Tablet Repair",
      description: "Complete tablet repair services including screen, charging port, and software issues.",
      icon: Tablet,
      features: ["iPad & Android", "Touch calibration", "Port cleaning"],
      link: "/services/tablet-repair"
    },
    {
      id: "laptop-repair",
      title: "Laptop Repair",
      description: "Hardware and software laptop repairs including keyboard, screen, and performance optimization.",
      icon: Laptop,
      features: ["Hardware fixes", "Software repair", "Data backup"],
      link: "/services/laptop-repair"
    },
    {
      id: "charging-port-repair",
      title: "Charging Port Fix",
      description: "Repair loose, damaged, or non-working charging ports to restore proper device charging.",
      icon: Zap,
      features: ["Port replacement", "Cable testing", "Quick turnaround"],
      link: "/services/charging-port"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Repair Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Expert repairs for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              all your devices
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional mobile device repair services with fast turnaround times and quality guarantees
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Book Repair Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Book This Repair</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Don't see your device or issue listed?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Clock className="mr-2 size-4" />
              Get Free Diagnostic
            </Button>
            <Button size="lg" variant="outline">
              Call for Custom Repair
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}