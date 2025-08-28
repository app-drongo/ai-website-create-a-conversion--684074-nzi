// Footer Component
// Generated: 2025-08-28T12:54:43.938Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Wrench,
  Clock,
  Shield
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Screen Repair", href: "#services" },
        { name: "Battery Replacement", href: "#services" },
        { name: "Water Damage", href: "#services" },
        { name: "Software Issues", href: "#services" },
        { name: "Data Recovery", href: "#services" },
        { name: "Device Diagnostics", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Technicians", href: "/team" },
        { name: "Locations", href: "/locations" },
        { name: "Careers", href: "/careers" },
        { name: "Reviews", href: "/reviews" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Warranty Info", href: "/warranty" },
        { name: "Repair Status", href: "/status" },
        { name: "FAQ", href: "/faq" },
        { name: "Troubleshooting", href: "/troubleshoot" },
        { name: "Live Chat", href: "/chat" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Warranty Terms", href: "/warranty-terms" },
        { name: "Refund Policy", href: "/refunds" },
        { name: "Data Protection", href: "/data-protection" },
        { name: "Compliance", href: "/compliance" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/quickfixrepair" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/quickfixrepair" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/quickfixrepair" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/quickfixrepair" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Wrench className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl text-background">QuickFix Mobile Repair</span>
              </Link>
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                Professional mobile device repair services with fast turnaround times and quality guarantees. 
                Trusted by thousands of customers for reliable smartphone and tablet repairs.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">repair@quickfixmobile.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">+1 (555) QUICKFIX</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">Multiple locations across the city</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">Mon-Sat: 9AM-7PM, Sun: 11AM-5PM</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background flex items-center gap-2">
                <Shield className="size-4 text-accent" />
                Repair Updates & Tips
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/30 rounded-md bg-background/10 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                />
                <Button size="sm" className="px-3 bg-accent hover:bg-accent/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/70">
                Get repair tips, device care guides, and special offers. No spam guaranteed.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/70 hover:text-accent transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/70">
              <span>© 2024 QuickFix Mobile Repair. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Repairs made with <Heart className="size-3 text-accent fill-current" /> and expertise
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/70 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/20 hover:bg-accent/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-background/70 group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/sitemap" className="text-xs text-background/60 hover:text-accent transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-xs text-background/60 hover:text-accent transition-colors">
              Accessibility
            </Link>
            <Link href="/cookie-policy" className="text-xs text-background/60 hover:text-accent transition-colors">
              Cookie Policy
            </Link>
            <Link href="/emergency-repair" className="text-xs text-background/60 hover:text-accent transition-colors">
              Emergency Repair
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}