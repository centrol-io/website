import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function GettingStartedPage() {

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
        <div className="max-w-3xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/support">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Support
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-8">Getting Started with Your Smart Home</h1>
          
          <div className="prose prose-blue max-w-none">
            <h2>Welcome to Your New Smart Home</h2>
            <p>Congratulations on your new Centrol.io smart home system! This guide will walk you through the basics of setting up and using your new smart home features.</p>

            <h3>1. Setting Up Your Hub</h3>
            <p>The first step is to set up your smart home hub. This central device will control all of your smart home components.</p>
            <ul>
              <li>Plug in your hub to a central location in your home</li>
              <li>Download the Centrol.io app on your smartphone</li>
              <li>Follow the in-app instructions to connect your hub to your Wi-Fi network</li>
            </ul>

            <h3>2. Connecting Your Devices</h3>
            <p>Once your hub is set up, you can start connecting your smart devices:</p>
            <ul>
              <li>In the app, select "Add Device"</li>
              <li>Choose the type of device you're adding (e.g., smart light, thermostat, security camera)</li>
              <li>Follow the specific instructions for each device type</li>
            </ul>

            <h3>3. Creating Routines</h3>
            <p>Routines allow you to automate multiple actions with a single command:</p>
            <ul>
              <li>In the app, go to "Routines" and select "Create New Routine"</li>
              <li>Choose a trigger (e.g., time of day, device status, or voice command)</li>
              <li>Select the actions you want to occur (e.g., turn on lights, adjust thermostat)</li>
              <li>Name your routine and save</li>
            </ul>

            <h3>4. Using Voice Commands</h3>
            <p>If you've set up a voice assistant, you can control your smart home with voice commands:</p>
            <ul>
              <li>"Turn on the living room lights"</li>
              <li>"Set the thermostat to 72 degrees"</li>
              <li>"Start my 'Good Morning' routine"</li>
            </ul>

            <h2>Next Steps</h2>
            <p>Explore our other guides to learn more about specific features and how to make the most of your smart home system.</p>
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