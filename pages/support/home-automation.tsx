import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function HomeAutomationGuidePage() {

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
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/support">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Support
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-8">Maximizing Your Home Automation</h1>
          
          <div className="prose prose-blue max-w-none">
            <h2>Unleash the Full Potential of Your Smart Home</h2>
            <p>Home automation is at the heart of your Centrol.io smart home system. This guide will help you make the most of your automated features and create a truly responsive living environment.</p>

            <h3>1. Advanced Routines</h3>
            <p>Take your routines to the next level with these advanced techniques:</p>
            <ul>
              <li>Use geofencing to trigger routines based on your location</li>
              <li>Incorporate weather data to adjust your home's settings</li>
              <li>Create conditional routines that adapt to different scenarios</li>
            </ul>

            <h3>2. Scene Creation</h3>
            <p>Scenes allow you to set multiple devices to predefined states with a single command:</p>
            <ul>
              <li>Create a "Movie Night" scene that dims the lights, lowers the blinds, and turns on the TV</li>
              <li>Set up a "Good Morning" scene that gradually increases light brightness and adjusts the thermostat</li>
              <li>Design custom scenes for different activities or moods</li>
            </ul>

            <h3>3. Integrating Smart Appliances</h3>
            <p>Extend your automation to your appliances for even more convenience:</p>
            <ul>
              <li>Schedule your robot vacuum to clean while you're away</li>
              <li>Set your smart oven to preheat as you're driving home</li>
              <li>Receive notifications when your laundry is done</li>
            </ul>

            <h3>4. Voice Control Mastery</h3>
            <p>Enhance your voice control experience with these tips:</p>
            <ul>
              <li>Create custom voice commands for complex routines</li>
              <li>Use voice control to get status updates on your home's systems</li>
              <li>Set up voice profiles for personalized responses and access control</li>
            </ul>

            <h3>5. Energy Optimization</h3>
            <p>Use automation to reduce energy consumption:</p>
            <ul>
              <li>Set up occupancy-based lighting and climate control</li>
              <li>Use smart plugs to eliminate standby power consumption</li>
              <li>Create routines that adjust your home's energy use based on time-of-use electricity rates</li>
            </ul>

            <h2>Troubleshooting Tips</h2>
            <p>If you encounter issues with your home automation:</p>
            <ul>
              <li>Ensure all devices are updated to the latest firmware</li>
              <li>Check your Wi-Fi network stability and coverage</li>
              <li>Review your routines for conflicts or inefficiencies</li>
              <li>Contact our support team for personalized assistance</li>
            </ul>

            <h2>Next Steps</h2>
            <p>Explore our other guides to learn more about specific features of your smart home system, or contact our support team for personalized advice on optimizing your home automation setup.</p>
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