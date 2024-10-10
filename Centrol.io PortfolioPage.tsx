import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

// This is now an internal constant, not visible to the user
const GOOGLE_PHOTOS_ALBUM_ID = 'your-album-id-here'

// Placeholder function to fetch images from Google Photos
// In a real implementation, this would make an API call to Google Photos
const fetchImagesFromGooglePhotos = async (albumId: string) => {
  // Simulating an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Placeholder data
  return Array(12).fill(null).map((_, i) => ({
    id: `image-${i + 1}`,
    src: `/placeholder.svg?text=Project ${i + 1}`,
    alt: `Smart Home Project ${i + 1}`,
    width: 800,
    height: 600
  }))
}

export default function PortfolioPage() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true)
        const fetchedImages = await fetchImagesFromGooglePhotos(GOOGLE_PHOTOS_ALBUM_ID)
        setImages(fetchedImages)
      } catch (error) {
        console.error('Failed to load images:', error)
        // In a real application, you'd want to show an error message to the user
      } finally {
        setLoading(false)
      }
    }

    loadImages()
  }, [])

  const currentYear = new Date().getFullYear()

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
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Explore our gallery of smart home installations. Each project showcases our commitment to innovation, quality, and customer satisfaction.
        </p>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            No projects available at the moment. Please check back later.
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {currentYear} Centrol.io. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}