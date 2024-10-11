import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function SecuritySystemsGuidePage() {

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

          <h1 className="text-4xl font-bold mb-8">Understanding and Configuring Your Security System</h1>
          
          <div className="prose prose-blue max-w-none">
            <h2>Securing Your Smart Home</h2>
            <p>Your Centrol.io security system is designed to provide comprehensive protection for your home. This guide will help you understand and make the most of your security features.</p>

            <h3>1. Components of Your Security System</h3>
            <ul>
              <li>Smart Cameras: Indoor and outdoor surveillance</li>
              <li>Door and Window Sensors: Detect unauthorized entry</li>
              <li>Motion Detectors: Identify movement within your home</li>
              <li>Smart Locks: Keyless entry and remote locking</li>
              <li>Alarm System: Audible deterrent and alert system</li>
            </ul>

            <h3>2. Setting Up Security Modes</h3>
            <p>Configure different security modes for various scenarios:</p>
            <ul>
              <li>Home: Basic monitoring while you're at home</li>
              <li>Away: Full system activation when you're out</li>
              <li>Night: Perimeter security while you sleep</li>
              <li>Vacation: Enhanced security for extended absences</li>
            </ul>

            <h3>3. Customizing Alerts and Notifications</h3>
            <p>Tailor your system's communication to your preferences:</p>
            <ul>
              <li>Choose which events trigger notifications</li>
              <li>Set up different alert methods (push notifications, SMS, email)</li>
              <li>Customize notification recipients for different scenarios</li>
            </ul>

            <h3>4. Integrating with Smart Home Features</h3>
            <p>Enhance security with smart home integration:</p>
            <ul>
              <li>Use occupancy sensors to detect unexpected presence</li>
              <li>Set up light schedules to simulate occupancy when you're away</li>
              <li>Integrate doorbell cameras with smart displays</li>
            </ul>

            <h3>5. Remote Monitoring and Control</h3>
            <p>Manage your security system from anywhere:</p>
            <ul>
              <li>View live camera feeds on your mobile device</li>
              <li>Arm or disarm your system remotely</li>
              <li>Grant temporary access to visitors or service providers</li>
            </ul>

            <h3>6. Regular Maintenance</h3>
            <p>Keep your system in top condition:</p>
            <ul>
              <li>Test your system monthly</li>
              <li>Replace batteries in wireless devices as needed</li>
              <li>Keep software and firmware updated</li>
              <li>Clean camera lenses and sensors periodically</li>
            </ul>

            <h2>Emergency Procedures</h2>
            <p>In case of a security event:</p>
            <ol>
              <li>Stay calm and assess the situation</li>
              <li>Use your mobile app or control panel to verify the alert</li>
              <li>Contact emergency services if necessary</li>
              <li>Follow any instructions provided by the monitoring service</li>
            </ol>

            <h2>Privacy Considerations</h2>
            <p>Respect privacy while maintaining security:</p>
            <ul>
              <li>Inform household members and guests about the security system</li>
              <li>Set up privacy zones in camera views to respect neighbors' privacy</li>
              <li>Regularly review and update access permissions</li>
            </ul>

            <h2>Need Help?</h2>
            <p>If you have any questions or need assistance with your security system, don't hesitate to contact our support team. We're here to ensure your home remains safe and secure.</p>
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