import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your outdoor space? Get in touch with our experts today.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Call Now Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Call Now</h2>
              <p className="text-gray-600 mb-6">
                Speak directly with our awning experts
              </p>
              <a
                href="tel:+8457424584"
                className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                (845) 742-4584
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email Us</h2>
              <p className="text-gray-600 mb-6">
                Send us your project details
              </p>
              <a
                href="mailto:contact@firstclassawnings.com"
                className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Email Now
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Business Hours</h2>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="text-gray-600">Monday - Friday</div>
              <div className="text-gray-900 font-medium">8:00 AM - 5:00 PM</div>
              <div className="text-gray-600">Saturday</div>
              <div className="text-gray-900 font-medium">9:00 AM - 2:00 PM</div>
              <div className="text-gray-600">Sunday</div>
              <div className="text-gray-900 font-medium">Closed</div>
            </div>
          </div>

          {/* Location Info */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Visit Our Showroom</h2>
            <p className="text-gray-600 mb-2"> Coming</p>
            <p className="text-gray-600 mb-8">Soon</p>
            <Link
              href="/portfolio"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Our Work →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}