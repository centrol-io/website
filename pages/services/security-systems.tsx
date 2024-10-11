import Link from 'next/link'
import { Shield, Camera, Lock, Bell, Smartphone, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
  { icon: Camera, title: 'Smart Cameras', description: 'AI-powered cameras with 4K resolution, night vision, and intelligent motion detection to monitor your property 24/7.' },
  { icon: Lock, title: 'Smart Locks', description: 'Secure, keyless entry systems with biometric options, temporary access codes, and remote locking capabilities.' },
  { icon: Bell, title: 'Advanced Alarms', description: 'Multi-sensor alarm systems with instant mobile alerts, professional monitoring, and smart home integration.' },
  { icon: Smartphone, title: 'Mobile Control', description: 'Monitor, arm, and control your entire security system from anywhere using our intuitive mobile app.' },
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
          <h1 className="text-4xl font-bold mb-6">State-of-the-Art Security Systems</h1>
          <p className="text-xl text-gray-600 mb-12">Safeguard your home and loved ones with our advanced security solutions. Our systems combine cutting-edge technology with user-friendly interfaces to provide unparalleled protection and peace of mind.</p>

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

          <h2 className="text-2xl font-bold mb-4">Our Comprehensive Security Approach</h2>
          <ol className="list-decimal list-inside space-y-4 mb-12">
            <li className="text-gray-700">In-depth security assessment of your property to identify vulnerabilities.</li>
            <li className="text-gray-700">Custom security plan design, addressing your specific concerns and lifestyle.</li>
            <li className="text-gray-700">Professional installation of high-grade security devices and systems.</li>
            <li className="text-gray-700">Seamless integration with your existing smart home setup for unified control.</li>
            <li className="text-gray-700">Thorough training on system operation, mobile app usage, and security best practices.</li>
            <li className="text-gray-700">24/7 professional monitoring and rapid response protocols for emergencies.</li>
            <li className="text-gray-700">Regular system updates and maintenance to stay ahead of evolving security threats.</li>
          </ol>

          <div className="bg-blue-500 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect What Matters Most</h2>
            <p className="text-xl mb-6">Invest in the safety and security of your home and family with our advanced security solutions.</p>
            <Button asChild variant="secondary">
              <Link href="/contact">
                Book Your Security Consultation <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
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