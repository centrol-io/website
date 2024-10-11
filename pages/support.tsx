import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'

const supportGuides = [
  { title: "Getting Started", description: "Learn the basics of your smart home system", link: "/support/getting-started" },
  { title: "Home Automation", description: "Maximize your home automation features", link: "/support/home-automation" },
  { title: "Security Systems", description: "Understand and configure your security setup", link: "/support/security-systems" },
  { title: "Energy Management", description: "Optimize your energy usage and savings", link: "/support/energy-management" },
  { title: "Troubleshooting", description: "Common issues and how to resolve them", link: "/support/troubleshooting" },
  { title: "FAQs", description: "Frequently asked questions about our services", link: "/support/faqs" },
]

export default function SupportPage() {

  const currentYear = new Date().getFullYear()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">Centrol<span className="text-blue-500">.io</span></Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">Home</Link>
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

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Support Center</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-600 text-center">
            Welcome to our Support Center. Here you'll find guides and resources to help you make the most of your smart home system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportGuides.map((guide, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <Button asChild variant="outline" className="w-full">
                  <Link href={guide.link}>
                    View Guide <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Additional Help?</h2>
          <p className="text-gray-600 mb-6">Our support team is always ready to assist you with any questions or concerns.</p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Support</Link>
          </Button>
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