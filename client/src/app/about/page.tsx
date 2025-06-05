import Image from 'next/image';
import Link from 'next/link';
import bigRed from '../assets/metal_frame2.png';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={bigRed}
            alt="Commercial awning installation"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            50 Years of Combined Excellence
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            From manufacturing to installation and service, our experienced team delivers
            comprehensive awning solutions for both commercial and residential clients.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="items-center -cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Your Complete Awning Solution Provider
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  First Class Awnings specializes in designing, manufacturing, and installing custom
                  awnings for both commercial and residential properties. Our comprehensive
                  expertise ensures that we can handle every aspect of your awning project from
                  start to finish.
                </p>
                <p>
                  With our team&apos;s combined 50 years of experience in the industry, we&apos;ve
                  developed deep expertise in all aspects of awning creation and maintenance - from
                  initial design concepts to manufacturing, installation, and ongoing service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Custom Design</h3>
              <p className="text-gray-600">
                Tailored awning solutions designed to match your property&apos;s architecture and
                your specific needs.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Manufacturing</h3>
              <p className="text-gray-600">
                In-house manufacturing with premium materials ensures the highest quality control
                standards.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Professional Installation
              </h3>
              <p className="text-gray-600">
                Expert installation teams with decades of experience in both commercial and
                residential projects.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Maintenance & Repair</h3>
              <p className="text-gray-600">
                Comprehensive maintenance services and prompt repairs to keep your awnings in
                perfect condition.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Commercial Solutions</h3>
              <p className="text-gray-600">
                Specialized solutions for businesses, including branded awnings and large-scale
                installations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Residential Expertise</h3>
              <p className="text-gray-600">
                Beautiful, functional awning solutions to enhance your home&apos;s aesthetics and
                comfort.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-white">
            Ready to Start Your Awning Project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            Let our experienced team help you create the perfect awning solution for your property.
          </p>
          <Link
            href="/portfolio"
            className="inline-block rounded-md bg-white px-8 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </main>
  );
}
