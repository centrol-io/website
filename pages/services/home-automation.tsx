import Link from 'next/link'
import { Home, Smartphone, Lightbulb, Thermometer, Speaker, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
  { icon: Smartphone, title: 'Mobile Control', description: 'Control your entire home from your smartphone or tablet.' },
  { icon: Lightbulb, title: 'Smart Lighting', description: 'Automate and customize your home lighting for any mood or occasion.' },
  { icon: Thermometer, title: 'Climate Control', description: "Optimize your home's temperature for comfort and energy efficiency." },
  { icon: Speaker, title: 'Voice Commands', description: 'Control your home with simple voice commands using popular AI assistants.' },
]

export default function HomeAutomationPage() {

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
          <h1 className="text-4xl font-bold mb-6">Home Automation Services</h1>
          <p className="text-xl text-gray-600 mb-12">Transform your living space into a smart, efficient, and comfortable environment with our cutting-edge home automation solutions.</p>

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

          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4 mb-12">
            <li className="text-gray-700">Schedule a consultation with our smart home experts.</li>
            <li className="text-gray-700">We assess your home and discuss your automation needs and preferences.</li>
            <li className="text-gray-700">Our team designs a custom home automation plan tailored to your lifestyle.</li>
            <li className="text-gray-700">Professional installation of smart devices and systems throughout your home.</li>
            <li className="text-gray-700">We provide training on how to use and maximize your new smart home features.</li>
            <li className="text-gray-700">Enjoy ongoing support and maintenance to keep your smart home running smoothly.</li>
          </ol>

          <div className="bg-blue-500 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Home?</h2>
            <p className="text-xl mb-6">Take the first step towards a smarter, more efficient living space.</p>
            <Button asChild variant="secondary">
              <Link href="/contact">
                Schedule a Consultation <ChevronRight className="w-4 h-4 ml-2" />
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