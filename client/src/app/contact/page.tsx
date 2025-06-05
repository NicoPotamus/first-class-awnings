import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Ready to transform your outdoor space? Get in touch with our experts today.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Contact Cards */}
          <div className="mb-16 grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
            {/* Call Now Card */}
            <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md md:col-span-2">
              <div className="mb-6">
                <svg
                  className="mx-auto h-12 w-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Call Now</h2>
              <p className="mb-6 text-gray-600">Speak directly with our awning experts</p>
              <a
                href="tel:+8453935050"
                className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                (845) 393-5050
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mb-16 rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-center text-2xl font-semibold text-gray-900">
              Business Hours
            </h2>
            <div className="mx-auto grid max-w-md grid-cols-2 gap-4">
              <div className="text-gray-600">Monday - Friday</div>
              <div className="font-medium text-gray-900">9:00 AM - 4:30 PM</div>
              <div className="text-gray-600">Saturday & Sunday</div>
              <div className="font-medium text-gray-900">Closed</div>
            </div>
          </div>

          {/* Location Info */}
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Visit Our Showroom</h2>
            <p className="mb-2 text-gray-600"> Coming</p>
            <p className="mb-8 text-gray-600">Soon</p>
            <Link href="/portfolio" className="font-medium text-blue-600 hover:text-blue-800">
              View Our Work →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
