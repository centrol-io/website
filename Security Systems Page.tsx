import Link from 'next/link'
import { Shield, Camera, Lock, Bell, Smartphone, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
  { icon: Camera, title: 'Smart Cameras', description: 'High-definition cameras with motion detection and night vision capabilities.' },
  { icon: Lock, title: 'Smart Locks', description: 'Keyless entry systems with remote control and temporary access codes.' },
  { icon: Bell, title: 'Alarm Systems', description: 'Advanced alarm systems with instant notifications and professional monitoring.' },
  { icon: Smartphone, title: 'Mobile Monitoring', description: 'Monitor and control your security system from anywhere using your smartphone.' },
]

export default function SecuritySystemsPage() {

  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">Centrol<span className="text-blue-500">.io</span></Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">Home</Link>
            <Link href="/services" className="text-blue-500 font-semibold">Services</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-blue-500 transition-colors">Portfolio</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-500 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</Link>
          </nav>
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Security Systems Services</h1>
          <p className="text-xl text-gray-600 mb-12">Protect your home and loved ones with our state-of-the-art security systems, designed to provide peace of mind and unparalleled protection.</p>

          <div className="grid gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <feature.icon className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Security Process</h2>
          <ol className="list-decimal list-inside space-y-4 mb-12">
            <li className="text-gray-700">Comprehensive security assessment of your property.</li>
            <li className="text-gray-700">Customized security plan tailored to your specific needs and concerns.</li>
            <li className="text-gray-700">Professional installation of cutting-edge security devices and systems.</li>
            <li className="text-gray-700">Integration with your existing smart home setup for seamless control.</li>
            <li className="text-gray-700">Thorough training on system usage and best practices for home security.</li>
            <li className="text-gray-700">24/7 monitoring and support to ensure your system is always functioning optimally.</li>
          </ol>

          <div className="bg-blue-500 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Secure Your Home Today</h2>
            <p className="text-xl mb-6">Take the first step towards a safer, more secure living environment.</p>
            <Button asChild variant="secondary">
              <Link href="/contact">
                Get a Security Consultation <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
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