'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function YogaStudio() {
  const singleClasses = [
    {
      name: "Single Class",
      classes: 1,
      price: 20,
      description: "Perfect for trying out our classes",
      popular: false,
      priceId: process.env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PRICE_ID,
    },
    {
      name: "8 Class Package",
      classes: 8,
      price: 120,
      description: "Best value for regular practice",
      popular: true,
      priceId: process.env.NEXT_PUBLIC_STRIPE_8_SINGLE_CLASSES_PRICE_ID,
    },
  ]

  const groupClasses = [
    {
      name: "4 Group Classes",
      classes: 4,
      price: 50,
      description: "Great for building community",
      popular: false,
      priceId: process.env.NEXT_PUBLIC_STRIPE_4_GROUP_CLASSES_PRICE_ID,
    },
    {
      name: "8 Group Classes",
      classes: 8,
      price: 75,
      description: "Ideal for committed practitioners",
      popular: true,
      priceId: process.env.NEXT_PUBLIC_STRIPE_8_GROUP_CLASSES_PRICE_ID,
    },
  ]

  const handleCheckout = async (priceId: string | undefined) => {
    if (!priceId) {
      console.error('Price ID not found')
      return
    }

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      })

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary">Serenity</h1>
              <p className="text-sm text-muted-foreground">Yoga Studio</p>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#classes" className="text-foreground hover:text-primary transition-colors">
                Classes
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6 text-balance">Find Your Inner Peace</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Join Sarah's nurturing yoga classes and discover the perfect balance of strength, flexibility, and
            mindfulness in a welcoming environment.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-primary mb-6">Meet Sarah</h3>
          <p className="text-lg text-muted-foreground text-pretty">
            With over 10 years of experience, Sarah brings a gentle yet empowering approach to yoga. Her classes focus
            on building strength, improving flexibility, and cultivating inner peace through mindful movement and breath
            work.
          </p>
        </div>
      </section>

      {/* Class Packages */}
      <section id="classes" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4">Class Packages</h3>
            <p className="text-lg text-muted-foreground text-pretty">
              Choose the perfect package for your yoga journey. All classes are 30 minutes of focused practice designed
              to fit into your busy schedule.
            </p>
          </div>

          {/* Single Classes */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-primary mb-8 text-center">Single Classes</h4>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {singleClasses.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-primary" : ""}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-primary">{pkg.name}</CardTitle>
                    <CardDescription className="text-sm">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">${pkg.price}</span>
                    </div>
                    <div className="mb-6">
                      <p className="text-muted-foreground">
                        {pkg.classes} {pkg.classes === 1 ? "class" : "classes"}
                      </p>
                      <p className="text-sm text-muted-foreground">${(pkg.price / pkg.classes).toFixed(2)} per class</p>
                    </div>
                    <Button
                      className="w-full"
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={() => handleCheckout(pkg.priceId)}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Group Classes */}
          <div>
            <h4 className="text-2xl font-bold text-primary mb-8 text-center">Group Classes</h4>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {groupClasses.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-primary" : ""}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-primary">{pkg.name}</CardTitle>
                    <CardDescription className="text-sm">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">${pkg.price}</span>
                    </div>
                    <div className="mb-6">
                      <p className="text-muted-foreground">
                        {pkg.classes} {pkg.classes === 1 ? "class" : "classes"}
                      </p>
                      <p className="text-sm text-muted-foreground">${(pkg.price / pkg.classes).toFixed(2)} per class</p>
                    </div>
                    <Button
                      className="w-full"
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={() => handleCheckout(pkg.priceId)}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-primary mb-6">Ready to Begin?</h3>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Take the first step towards a healthier, more balanced you. Contact Sarah to book your first class or ask
            any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Book Your First Class
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Ask Questions
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-primary mb-4">Serenity Yoga Studio</h4>
            <p className="text-muted-foreground mb-6">Nurturing mind, body, and spirit through the practice of yoga</p>
            <Separator className="my-6" />
            <p className="text-sm text-muted-foreground">© 2025 Serenity Yoga Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
