import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

interface Project {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

// This is now an internal constant, not visible to the user
const PROJECTS_DATA: Project[] = [
  { id: 'project-1', src: '/images/smart-living-room.jpg', alt: 'Modern Smart Living Room', title: 'Luxury Smart Home Integration', description: 'Full home automation for a 5,000 sq ft luxury residence in San Francisco.' },
  { id: 'project-2', src: '/images/energy-efficient-home.jpg', alt: 'Energy Efficient Smart Home', title: 'Eco-Friendly Smart Home', description: 'Net-zero energy smart home with solar integration and advanced energy management.' },
  { id: 'project-3', src: '/images/smart-security.jpg', alt: 'Advanced Home Security System', title: 'Comprehensive Security Solution', description: 'State-of-the-art security system for a gated community of 50 homes.' },
  { id: 'project-4', src: '/images/smart-office.jpg', alt: 'Smart Office Space', title: 'Commercial Smart Office', description: 'Intelligent automation for a 10-story office building in downtown Seattle.' },
  // Add more projects as needed
]

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating an API call to fetch projects
    setLoading(true)
    setTimeout(() => {
      setProjects(PROJECTS_DATA)
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">Centrol<span className="text-blue-500">.io</span></Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-500 transition-colors">Services</Link>
            <Link href="/portfolio" className="text-blue-500 font-semibold">Portfolio</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-500 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</Link>
          </nav>
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-600 text-center">
            Explore our showcase of successful smart home projects. Each installation represents our commitment to innovation, quality, and transforming living spaces with cutting-edge technology.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button asChild variant="outline">
                    <Link href={`/portfolio/${project.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            No projects available at the moment. Please check back later.
          </div>
        )}

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Smart Home Project?</h2>
          <p className="text-gray-600 mb-6">Let's create your dream smart home together. Our team is ready to bring your vision to life.</p>
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
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