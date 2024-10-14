import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Award, Users, Zap } from 'lucide-react'

export default function AboutPage() {

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
        <h1 className="text-4xl font-bold mb-8 text-center">About Centrol.io</h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-gray-600 mb-6">
            At Centrol.io, we're on a mission to redefine modern living through innovative smart home solutions. Our passion lies in transforming houses into intelligent, efficient, and comfortable living spaces that adapt to and enhance our clients' lifestyles.
          </p>
          <p className="text-xl text-gray-600 mb-6">
            Founded in 2015 by a team of tech enthusiasts and home automation experts, we've grown from a small startup to a leading provider of comprehensive smart home solutions. Our journey has been driven by a commitment to staying at the forefront of technological advancements and delivering exceptional customer experiences.
          </p>
          <p className="text-xl text-gray-600 mb-6">
            With a team of over 50 skilled professionals, including system designers, software engineers, and certified installation technicians, we've successfully completed more than 1,000 smart home projects across the region. Our expertise spans from basic home automation setups to complex, fully integrated smart estates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">We're committed to delivering the highest quality solutions, ensuring every installation meets our rigorous standards for performance, reliability, and user experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
            <p className="text-gray-600">Our clients' needs and satisfaction are at the heart of everything we do. We believe in creating lasting relationships built on trust, transparency, and exceptional service.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">We continuously explore and adopt the latest smart home technologies, ensuring our clients always have access to cutting-edge solutions that make their lives easier and more enjoyable.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Future of Living?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's work together to create your perfect smart home. Our team is ready to bring your vision to life with our expertise and innovative solutions.</p>
          <Button asChild size="lg">
            <Link href="/contact">Start Your Smart Home Journey</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Centrol.io. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}