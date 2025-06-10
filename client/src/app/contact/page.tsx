import Link from 'next/link';
import ContactForm from '../components/ContactForm';

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
            <ContactForm></ContactForm>

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
