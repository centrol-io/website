import Link from 'next/link'
import { Cog, Puzzle, Layers, Sliders, Headphones, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
  { icon: Puzzle, title: 'Bespoke Solutions', description: 'Custom-designed smart home systems tailored to your unique needs, preferences, and property characteristics.' },
  { icon: Layers, title: 'Seamless Integration', description: 'Expert integration of various smart devices, legacy systems, and cutting-edge technologies for a cohesive experience.' },
  { icon: Sliders, title: 'Advanced Customization', description: 'Fine-tuned control over every aspect of your smart home ecosystem, from user interfaces to automation routines.' },
  { icon: Headphones, title: 'Dedicated Support', description: 'Personalized assistance and ongoing support to ensure your custom installation evolves with your needs.' },
]

export default function CustomInstallationsPage() {

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
          <h1 className="text-4xl font-bold mb-6">Custom Smart Home Installations</h1>
          <p className="text-xl text-gray-600 mb-12">Experience the pinnacle of smart home technology with our bespoke installation services. We create tailored solutions that perfectly align with your lifestyle, aesthetic preferences, and technological aspirations.</p>

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

          <h2 className="text-2xl font-bold mb-4">Our Custom Installation Process</h2>
          <ol className="list-decimal list-inside space-y-4 mb-12">
            <li className="text-gray-700">In-depth consultation to understand your vision, requirements, and desired outcomes.</li>
            <li className="text-gray-700">Comprehensive site survey and technical assessment of your property.</li>
            <li className="text-gray-700">Collaborative design process, including 3D visualizations and system architecture planning.</li>
            <li className="text-gray-700">Careful selection and procurement of best-in-class smart devices and technologies.</li>
            <li className="text-gray-700">Professional installation with meticulous attention to detail and aesthetic considerations.</li>
            <li className="text-gray-700">Rigorous testing and fine-tuning to ensure flawless operation and user experience.</li>
            <li className="text-gray-700">Personalized training sessions to help you master your unique smart home system.</li>
            <li className="text-gray-700">Ongoing support, maintenance, and system evolution to keep pace with technological advancements.</li>
          </ol>

          <div className="bg-blue-500 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Bring Your Smart Home Vision to Life</h2>
            <p className="text-xl mb-6">Let's create a truly unique and personalized smart home experience that exceeds your expectations.</p>
            <Button asChild variant="secondary">
              <Link href="/contact">
                Start Your Custom Project <ChevronRight className="w-4 h-4 ml-2" />
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