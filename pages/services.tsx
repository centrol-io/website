import Link from 'next/link'
import { Home, Shield, Zap, Cog, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const services = [
  { 
    icon: Home, 
    title: 'Home Automation', 
    description: 'Transform your living space with cutting-edge automation solutions. Control lighting, climate, entertainment, and more with ease.', 
    link: '/services/home-automation' 
  },
  { 
    icon: Shield, 
    title: 'Security Systems', 
    description: "Protect your home and loved ones with advanced security technology. From smart cameras to AI-powered monitoring, we've got you covered.", 
    link: '/services/security-systems' 
  },
  { 
    icon: Zap, 
    title: 'Energy Management', 
    description: 'Optimize your energy consumption and reduce your carbon footprint. Our smart solutions help you save money while saving the planet.', 
    link: '/services/energy-management' 
  },
  { 
    icon: Cog, 
    title: 'Custom Installations', 
    description: 'Tailor-made solutions to meet your unique smart home needs. We design and implement bespoke systems for the most discerning clients.', 
    link: '/services/custom-installations' 
  },
]

export default function ServicesPage() {

  const currentYear = new Date().getFullYear()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-background shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-foreground">Centrol<span className="text-primary">.io</span></Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-secondary">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Smart Home Services</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          At Centrol.io, we offer a comprehensive suite of smart home services designed to enhance your living experience. From basic automation to complex custom installations, we have the expertise to bring your smart home vision to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <service.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild variant="outline">
                  <Link href={service.link}>
                    Learn More <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-600 mb-6">Our experts are here to guide you through the process and help you choose the perfect smart home solutions for your needs.</p>
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Centrol.io. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}