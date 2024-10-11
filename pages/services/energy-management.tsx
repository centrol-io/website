import Link from 'next/link'
import { Zap, Lightbulb, Thermometer, BarChart, Sun, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
  { icon: Lightbulb, title: 'Smart Lighting', description: 'Energy-efficient LED lighting with automated schedules, occupancy sensing, and daylight harvesting to minimize energy waste.' },
  { icon: Thermometer, title: 'Intelligent HVAC', description: 'AI-powered climate control that learns your preferences, optimizes for energy efficiency, and integrates with weather forecasts.' },
  { icon: BarChart, title: 'Real-time Monitoring', description: 'Detailed energy consumption tracking with appliance-level insights and personalized saving recommendations.' },
  { icon: Sun, title: 'Solar Integration', description: 'Seamless integration with solar panel systems, including battery storage management and grid export optimization.' },
]

export default function EnergyManagementPage() {
  
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
          <h1 className="text-4xl font-bold mb-6">Smart Energy Management Solutions</h1>
          <p className="text-xl text-gray-600 mb-12">Revolutionize your home's energy efficiency with our cutting-edge management systems. Reduce your carbon footprint, lower utility bills, and enjoy a more sustainable lifestyle without sacrificing comfort.</p>

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

          <h2 className="text-2xl font-bold mb-4">Our Energy Optimization Process</h2>
          <ol className="list-decimal list-inside space-y-4 mb-12">
            <li className="text-gray-700">Comprehensive energy audit to identify inefficiencies and opportunities for improvement.</li>
            <li className="text-gray-700">Customized energy management plan tailored to your home's unique characteristics and your lifestyle.</li>
            <li className="text-gray-700">Installation of smart energy devices, including advanced meters and IoT-enabled appliances.</li>
            <li className="text-gray-700">Integration with your existing smart home ecosystem for centralized control and automation.</li>
            <li className="text-gray-700">Setup of an intuitive energy management dashboard with real-time insights and controls.</li>
            <li className="text-gray-700">Personalized training on using the system and implementing energy-saving strategies.</li>
            <li className="text-gray-700">Ongoing support and periodic system optimization to maximize energy savings.</li>
          </ol>

          <div className="bg-blue-500 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Embrace Sustainable Living</h2>
            <p className="text-xl mb-6">Take control of your energy consumption, reduce costs, and contribute to a greener future.</p>
            <Button asChild variant="secondary">
              <Link href="/contact">
                Schedule Your Energy Consultation <ChevronRight className="w-4 h-4 ml-2" />
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