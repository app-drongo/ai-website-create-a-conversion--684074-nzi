// Navigation Component
// Generated: 2025-08-28T12:54:43.938Z
// Template: navigation-c001
// Context: layout
// Position: layout.header.0

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Wrench, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#features" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Wrench className="size-4 text-background" />
              </div>
              <span className="font-bold text-xl text-foreground">QuickFix Mobile Repair</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-primary/10 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Phone className="size-4 mr-2" />
              Call Now
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-background">
              Shop Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-muted">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start text-muted-foreground hover:text-primary">
                <Phone className="size-4 mr-2" />
                Call Now
              </Button>
              <Button className="justify-start bg-accent hover:bg-accent/90 text-background">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}