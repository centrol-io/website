import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Award, Users, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">Centrol<span className="text-blue-500">.io</span></Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-500 transition-colors">Services</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-blue-500 transition-colors">Portfolio</Link>
            <Link href="/about" className="text-blue-500 font-semibold">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</Link>
          </nav>
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">About Centrol.io</h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-gray-600 mb-6">
            At Centrol.io, we're passionate about transforming houses into intelligent, efficient, and comfortable smart homes. Our team of expert technicians and designers work tirelessly to bring the latest in home automation technology to our clients.
          </p>
          <p className="text-xl text-gray-600 mb-6">
            Founded in 2015, we've grown from a small startup to a leading provider of smart home solutions in the region. Our commitment to innovation, quality, and customer satisfaction has earned us a reputation as the go-to experts for all things smart home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">We strive for excellence in every installation, ensuring the highest quality and performance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
            <p className="text-gray-600">Our clients' needs and satisfaction are at the heart of everything we do.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">We're always at the forefront of smart home technology, bringing the latest innovations to our clients.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Centrol.io. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}