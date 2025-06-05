'use client';

import Image from 'next/image';
import Link from 'next/link';
import gazebo from './assets/gazebo.png';
import foyerImg from './assets/foyer.png';
import weatherMasterImg from './assets/weather_master.png';
import logo from './logo.svg'; // Adjust the path as necessary
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
      <div className="relative h-[430px] overflow-hidden sm:h-[550px]">
        <div className="absolute -top-[13%] h-[130%] w-full sm:-top-[10%]">
          <div ref={parallaxRef} className="relative h-full w-full will-change-transform">
            <Image
              src={logo}
              alt="Beautiful entrance awning"
              fill
              priority
              className="object-fit object-center"
              sizes="100vw"
              quality={100}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pt-32 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Transform Your Outdoor Space
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-white">
            Premium awning solutions for your home or business. Experience comfort and style with
            First Class Awnings.
          </p>
          <div className="flex gap-4">
            <Link
              href="/portfolio"
              className="rounded-md bg-white px-8 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="rounded-md border-2 border-white bg-transparent px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose First Class Awnings?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We provide top-quality awning solutions tailored to your needs
            </p>
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
            Ready to enhance your outdoor space?
          </h2>
          <Link
            href="/portfolio"
            className="inline-block rounded-md bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Explore Our Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
