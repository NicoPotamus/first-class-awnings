'use client';

import Image from "next/image";
import Link from "next/link";
import entranceImg from './assets/entrance.png';
import foyerImg from './assets/foyer.png';
import weatherMasterImg from './assets/weather_master.png';
import roofmount from './assets/roofmount.png';
import { useEffect, useRef } from 'react';

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
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[430px] sm:h-[550px] overflow-hidden">
        <div className="absolute w-full h-[130%] -top-[13%] sm:-top-[10%]">
          <div ref={parallaxRef} className="relative w-full h-full will-change-transform">
            <Image
              src={roofmount}
              alt="Beautiful entrance awning"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
              quality={100}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transform Your Outdoor Space
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Premium awning solutions for your home or business. Experience comfort and style with First Class Awnings.
          </p>
          <div className="flex gap-4">
            <Link
              href="/portfolio"
              className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose First Class Awnings?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We provide top-quality awning solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature cards */}
            <div className="text-center">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={foyerImg}
                  alt="Premium quality awning"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest materials and latest technology in our installations
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={weatherMasterImg}
                  alt="Expert installation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Installation</h3>
              <p className="text-gray-600">
                Our experienced team ensures perfect installation every time
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={entranceImg}
                  alt="Custom solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored designs to match your property and preferences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to enhance your outdoor space?
          </h2>
          <Link
            href="/portfolio"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Explore Our Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
