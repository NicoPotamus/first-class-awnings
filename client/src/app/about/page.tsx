import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logob.png"

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={logo}
            alt="Commercial awning installation"
            fill
            className="object-contain opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            60 Years of Combined Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From manufacturing to installation and service, our experienced team delivers comprehensive awning solutions for both commercial and residential clients.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative h-[400px] mb-12 lg:mb-0 rounded-lg overflow-hidden">
              <Image
                src="/about-team.jpg"
                alt="Our expert team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Complete Awning Solution Provider
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  First Class Awnings specializes in designing, manufacturing, and installing custom awnings for both commercial and residential properties. Our comprehensive expertise ensures that we can handle every aspect of your awning project from start to finish.
                </p>
                <p>
                  With our team&apos;s combined 50 years of experience in the industry, we&apos;ve developed deep expertise in all aspects of awning creation and maintenance - from initial design concepts to manufacturing, installation, and ongoing service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Design</h3>
              <p className="text-gray-600">
                Tailored awning solutions designed to match your property&apos;s architecture and your specific needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manufacturing</h3>
              <p className="text-gray-600">
                In-house manufacturing with premium materials ensures the highest quality control standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Installation</h3>
              <p className="text-gray-600">
                Expert installation teams with decades of experience in both commercial and residential projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance & Repair</h3>
              <p className="text-gray-600">
                Comprehensive maintenance services and prompt repairs to keep your awnings in perfect condition.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Solutions</h3>
              <p className="text-gray-600">
                Specialized solutions for businesses, including branded awnings and large-scale installations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential Expertise</h3>
              <p className="text-gray-600">
                Beautiful, functional awning solutions to enhance your home&apos;s aesthetics and comfort.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Awning Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experienced team help you create the perfect awning solution for your property.
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </main>
  );
}