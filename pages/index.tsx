import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Home, Shield, Zap, Cog, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Consultation requested for:', email)
    setEmail('')
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Centrol<span className="text-blue-500">.io</span></div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-blue-500 font-semibold">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-500 transition-colors">Services</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-blue-500 transition-colors">Portfolio</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-500 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</Link>
          </nav>
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute w-full h-full object-cover"
          >
            <source src="/videos/smart-home-showcase.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Home with Intelligent Living</h1>
            <p className="text-xl md:text-2xl mb-8">Experience the future of home automation with Centrol.io</p>
            <Button asChild size="lg" className="text-lg px-6 py-3">
              <Link href="/services">Explore Our Solutions</Link>
            </Button>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Smart Home Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Home, title: 'Home Automation', description: 'Control your entire home with a single tap or voice command.' },
                { icon: Shield, title: 'Security Systems', description: 'Keep your home and family safe with advanced security technology.' },
                { icon: Zap, title: 'Energy Management', description: 'Optimize energy usage and reduce your carbon footprint.' },
                { icon: Cog, title: 'Custom Installations', description: 'Tailor-made solutions to fit your unique lifestyle and needs.' },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                  <service.icon className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link href={`/services#${service.title.toLowerCase().replace(' ', '-')}`} className="text-blue-500 mt-4 inline-block hover:underline">
                    Learn More <ChevronRight className="inline w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Homeowner",
                  testimonial: "Centrol.io transformed our house into a smart oasis. The convenience and energy savings are incredible!",
                },
                {
                  name: "Michael Chen",
                  role: "Tech Enthusiast",
                  testimonial: "As someone who loves technology, I'm impressed by the seamless integration and cutting-edge solutions Centrol.io provided.",
                },
                {
                  name: "Emma Rodriguez",
                  role: "Busy Professional",
                  testimonial: "The home automation features have made my life so much easier. I can't imagine living without my smart home now!",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.testimonial}"</p>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-16 bg-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Living Experience?</h2>
            <p className="text-xl mb-8">Schedule a free consultation with our smart home experts today!</p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-64 text-gray-800"
                required
              />
              <Button type="submit" className="w-full md:w-auto bg-white text-blue-500 hover:bg-gray-100">
                Book Consultation <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Centrol.io</h3>
              <p className="text-gray-400">Transforming homes with intelligent technology</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">123 Smart Street, Tech City, 12345</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: info@centrol.io</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://x.com/centrol_io" className="text-gray-400 hover:text-white transition-colors">X</a>
                <a href="https://www.instagram.com/centrol.io" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {currentYear} Centrol.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}