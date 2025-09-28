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
      description: "Perfect for experiencing breath-led Viniyoga",
      popular: false,
      priceId: process.env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PRICE_ID,
    },
    {
      name: "8 Class Package",
      classes: 8,
      price: 120,
      description: "Consistent practice for lasting back pain relief",
      popular: true,
      priceId: process.env.NEXT_PUBLIC_STRIPE_8_SINGLE_CLASSES_PRICE_ID,
    },
  ]

  const groupClasses = [
    {
      name: "4 Group Classes",
      classes: 4,
      price: 50,
      description: "Community-focused breath-centric practice",
      popular: false,
      priceId: process.env.NEXT_PUBLIC_STRIPE_4_GROUP_CLASSES_PRICE_ID,
    },
    {
      name: "8 Group Classes",
      classes: 8,
      price: 75,
      description: "Best value for regular group Viniyoga practice",
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
              <h1 className="text-3xl font-bold text-primary">Yoga With Sunita</h1>
              <p className="text-sm text-muted-foreground">Newark, DE</p>
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
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6 text-balance">Breath-Led Viniyoga</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Engage your breath and core for pain-free back relief. Perfect for desk workers dealing with back pain, stress, and anxiety through personalized Viniyoga approach.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Book Your First Class
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-primary mb-6">Meet Sunita</h3>
          <p className="text-lg text-muted-foreground text-pretty">
            Certified yoga teacher with 500-hour training from KYM Chennai, plus specialized training in Vinyasa (My Vinyasa School), Pre/Postnatal, and Science of Stretching. Sunita specializes in gentle Viniyoga, Hatha Flow, and Mindful Vinyasa, helping women 35+ find relief from stress, anxiety, and back pain through breath-centered practice.
          </p>
        </div>
      </section>

      {/* Class Packages */}
      <section id="classes" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4">Class Packages</h3>
            <p className="text-lg text-muted-foreground text-pretty">
              Choose the perfect package for your Viniyoga journey. All classes focus on breath-led movement, core strength, and back pain relief designed to fit into your busy schedule.
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

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">What Students Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex justify-center">
              <video
                className="w-full max-w-sm rounded-lg shadow-lg"
                controls
                preload="metadata"
                style={{ aspectRatio: '9/16' }}
              >
                <source src="/1.mov" type="video/mp4" />
                <source src="/1.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex justify-center">
              <video
                className="w-full max-w-sm rounded-lg shadow-lg"
                controls
                preload="metadata"
                style={{ aspectRatio: '9/16' }}
              >
                <source src="/2.mov" type="video/mp4" />
                <source src="/2.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex justify-center">
              <video
                className="w-full max-w-sm rounded-lg shadow-lg"
                controls
                preload="metadata"
                style={{ aspectRatio: '9/16' }}
              >
                <source src="/3.mov" type="video/mp4" />
                <source src="/3.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-primary mb-6">Ready to Begin?</h3>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Take the first step towards pain-free movement and stress relief. Contact Sunita to book your first class or ask any questions.
          </p>
          <div className="flex justify-center mb-8">
            <Button size="lg" className="text-lg px-8">
              Book Your First Class
            </Button>
          </div>
          <div className="text-muted-foreground space-y-2 mb-6">
            <p>📧 hello@yogasunita.com</p>
            <p>📞 +1 302-384-1791</p>
            <p>📍 Newark, DE, USA</p>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/13023841791"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Button variant="outline" size="sm">
                💬 WhatsApp
              </Button>
            </a>
            <a
              href="https://www.instagram.com/yogawithsunita/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Button variant="outline" size="sm">
                📸 Instagram
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-primary mb-4">Yoga With Sunita</h4>
            <p className="text-muted-foreground mb-6">Breath-led Viniyoga for core strength, back pain relief, and inner peace</p>
            <Separator className="my-6" />
            <p className="text-sm text-muted-foreground">© 2025 Yoga With Sunita. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
