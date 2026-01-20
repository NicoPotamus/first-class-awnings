'use client';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script'; // Add this import
import { useEffect, useRef } from 'react';
import gazebo from './assets/gazebo.png';
import foyerImg from './assets/foyer.png';
import weatherMasterImg from './assets/weather_master.png';
import logo from './logo.svg';
import phoneNumber from './assets/phoneNumber.svg';
import FloatingContactButton from './components/FloatingContactButton';

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3; // Adjust this value to control parallax speed
        parallaxRef.current.style.transform = `translate3d(0px, ${rate}px, 0px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17355698276"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17355698276');
        `}
      </Script>

      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[430px] overflow-hidden sm:h-[550px]">
          <div className="absolute -top-[13%] h-[130%] w-full sm:-top-[10%] bg-white">
            <div ref={parallaxRef} className="relative h-full w-full will-change-transform flex flex-col items-center justify-center gap-8">
              <div className="relative w-full h-[70%]">
                <Image
                  src={logo}
                  alt="First Class Awnings"
                  fill
                  priority
                  className="object-contain object-center"
                  sizes="100vw"
                  quality={100}
                />
              </div>
              <a
                href="https://maps.google.com/?q=24+Western+Ave,+Marlboro,+NY+12542"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors pb-10"
              >
                24 Western Ave, Marlboro, NY 12542
              </a>
              <div className="relative w-[600px] h-[120px] sm:w-[800px] sm:h-[160px] animate-bounce">
                <a href="tel:+18453935050" className="block w-full h-full">
                  <Image
                    src={phoneNumber}
                    alt="Phone Number"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 600px, 800px"
                  />
                </a>
              </div>
              <p>(845) 393-5050</p>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Transform Your Outdoor Space
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Premium awning solutions for your home or business. Experience comfort and style with
              First Class Awnings. Proudly serving the Hudson Valley
              </p>
            </div>
            
            <div className="flex justify-center gap-3 sm:gap-6 mb-16">
              <Link
                href="/portfolio"
                className="rounded-md bg-blue-600 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium text-white transition-colors hover:bg-blue-700"
              >
                View Our Portfolio
              </Link>
              <Link
                href="/contact"
                className="rounded-md bg-gray-200 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium text-gray-800 transition-colors hover:bg-gray-300"
              >
                Get a Quote
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Feature cards */}
              <div className="text-center">
                <div className="relative mb-6 h-64 overflow-hidden rounded-lg">
                  <Image src={foyerImg} alt="Premium quality awning" fill className="object-cover" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Premium Quality</h3>
                <p className="text-gray-600">
                  We use only the finest materials and latest technology in our installations
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-6 h-64 overflow-hidden rounded-lg">
                  <Image
                    src={weatherMasterImg}
                    alt="Expert installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Expert Installation</h3>
                <p className="text-gray-600">
                  Our experienced team ensures perfect installation every time
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-6 h-64 overflow-hidden rounded-lg">
                  <Image src={gazebo} alt="Custom solutions" fill className="object-cover" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Custom Solutions</h3>
                <p className="text-gray-600">
                  Tailored designs to match your property and preferences
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gray-100 py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Get a Free Quote Today!
            </h2>
            <Link
              href="/contact"
              className="inline-block rounded-md bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>

      <FloatingContactButton />
    </>
  );
}
