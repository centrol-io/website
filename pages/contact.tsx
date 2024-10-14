import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

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
        <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">We're Here to Help</h2>
            <p className="text-gray-600 mb-6">Have questions about our smart home solutions? Ready to start your project? Or just want to learn more? We're eager to hear from you and help bring your smart home vision to life.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your smart home needs or any questions you have" required />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-500 mr-4" />
                <p>(917) 915-1374</p>
                </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-500 mr-4" />
                <p>info@centrol.io</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Schedule a Consultation</h3>
              <p className="text-gray-600 mb-4">Want to discuss your smart home project in person? Schedule a free consultation with one of our experts.</p>
              <Button asChild>
                <Link href="/schedule">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {currentYear} Centrol.io. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}