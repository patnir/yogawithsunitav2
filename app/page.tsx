'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function YogaStudio() {
  const healingPrograms = [
    {
      name: "Relief from Sitting All Day",
      sessions: "30-minute 1:1",
      description: "Personalized session to counteract hours of sitting and find instant calm",
      popular: false,
      paymentUrl: "https://book.stripe.com/3cIdRb5Sc0r07Y3gJr7IY01",
    },
    {
      name: "8-Week Mind & Body Reset",
      sessions: "8× 30-minute 1:1",
      description: "Complete transformation for busy professionals - heal your back, calm your mind",
      popular: true,
      paymentUrl: "https://book.stripe.com/8x25kFdkEa1Aa6bctb7IY02",
    },
    {
      name: "8-Week Group Mindful Movement",
      sessions: "8× small group (max 3)",
      description: "Connect with others while finding relief from modern life's stresses",
      popular: false,
      paymentUrl: "https://buy.stripe.com/00w7sNcgAehQa6b0Kt7IY03",
    },
  ]

  const handleBooking = (paymentUrl: string) => {
    window.open(paymentUrl, '_blank')
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
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 text-balance">Sitting All Day? Find Relief & Calm</h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Heal back pain from endless sitting and find mindfulness in your busy world. Therapeutic Viniyoga designed for office workers, remote professionals, and overwhelmed minds - all from your home.
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => handleBooking("https://book.stripe.com/3cIdRb5Sc0r07Y3gJr7IY01")}
              >
                Start Your Healing Journey
              </Button>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/yoga.jpg"
                  alt="Sunita practicing yoga in a peaceful outdoor setting"
                  className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover"
                  style={{ aspectRatio: '4/5' }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Healing for Modern Life's Challenges</h2>
          <p className="text-lg text-muted-foreground text-pretty mb-6">
            Certified therapeutic yoga instructor with 500-hour training from KYM Chennai, specializing in the unique challenges of modern work life. With expertise in Viniyoga, Science of Stretching, and mindful movement, Sunita helps busy professionals, remote workers, and overwhelmed minds find both physical relief and mental clarity through breath-centered practice.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <h3 className="font-semibold text-primary mb-2">Sitting All Day Pain</h3>
              <p className="text-sm text-muted-foreground">Counteract hours of sitting with targeted spinal mobility</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-primary mb-2">Busy Mind Relief</h3>
              <p className="text-sm text-muted-foreground">Find calm and focus through mindful breath-work</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-primary mb-2">Work-Life Balance</h3>
              <p className="text-sm text-muted-foreground">Create healthy boundaries between work stress and personal peace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Packages */}
      <section id="classes" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Programs for Modern Life</h2>
            <p className="text-lg text-muted-foreground text-pretty mb-4">
              Choose your path to wellness. All sessions address the physical and mental challenges of sitting all day and living in a busy, distracted world.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <span>💻</span>
              <span className="font-medium">Live Therapeutic Sessions via Zoom</span>
            </div>
          </div>

          {/* Healing Programs */}
          <div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {healingPrograms.map((program, index) => (
                <Card key={index} className={`relative ${program.popular ? "ring-2 ring-primary" : ""}`}>
                  {program.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-primary">{program.name}</CardTitle>
                    <CardDescription className="text-sm">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <p className="text-lg font-semibold text-muted-foreground">
                        {program.sessions}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">30-minute therapeutic sessions</p>
                    </div>
                    <Button
                      className="w-full"
                      variant={program.popular ? "default" : "outline"}
                      onClick={() => handleBooking(program.paymentUrl)}
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
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={() => handleBooking("https://book.stripe.com/3cIdRb5Sc0r07Y3gJr7IY01")}
            >
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
