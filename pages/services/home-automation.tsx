import Link from 'next/link'
import { Home, Smartphone, Lightbulb, Thermometer, Speaker, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
  { icon: Smartphone, title: 'Mobile Control', description: 'Control your entire home from anywhere with our intuitive mobile app.' },
  { icon: Lightbulb, title: 'Smart Lighting', description: 'Create perfect ambiance and save energy with automated, customizable lighting.' },
  { icon: Thermometer, title: 'Climate Control', description: 'Maintain ideal temperatures and reduce energy costs with AI-powered climate management.' },
  { icon: Speaker, title: 'Voice Commands', description: 'Effortlessly control your home with voice commands through popular AI assistants.' },
]

export default function HomeAutomationPage() {

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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Home Automation Services</h1>
          <p className="text-xl text-gray-600 mb-12">Experience the future of living with our cutting-edge home automation solutions. Transform your house into a smart, efficient, and responsive home that adapts to your lifestyle.</p>

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

          <h2 className="text-2xl font-bold mb-4">Our Home Automation Process</h2>
          <ol className="list-decimal list-inside space-y-4 mb-12">
            <li className="text-gray-700">Comprehensive consultation to understand your lifestyle and preferences.</li>
            <li className="text-gray-700">Custom design of your smart home ecosystem tailored to your needs.</li>
            <li className="text-gray-700">Professional installation of state-of-the-art smart devices and systems.</li>
            <li className="text-gray-700">Seamless integration of all components for a unified smart home experience.</li>
            <li className="text-gray-700">Personalized training to help you master your new smart home features.</li>
            <li className="text-gray-700">Ongoing support and updates to ensure your system evolves with technology.</li>
          </ol>

          <div className="bg-blue-500 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Living Experience?</h2>
            <p className="text-xl mb-6">Take the first step towards a smarter, more comfortable, and efficient home.</p>
            <Button asChild variant="secondary">
              <Link href="/contact">
                Schedule Your Consultation <ChevronRight className="w-4 h-4 ml-2" />
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