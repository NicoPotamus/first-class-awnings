"use client";

import { useState, useEffect, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Modal from '../components/Modal';

// 4Season
import fourSeasons from '../assets/4season/four_seasons.png';
import fourSeasons2 from '../assets/4season/four_seasons2.png';
import fourSeasons3 from '../assets/4season/four_seasons3.png';
import fourSeasonsSis from '../assets/4season/four_seasons_sis.png';
import gazebo from '../assets/4season/gazebo.png';

// Weathermaster
import weatherMaster from '../assets/weathermaster/weather_master.png';

// Retractable Wallmount
import wallmount from '../assets/wallmount/wallmount.png';
import wallmount2 from '../assets/wallmount/wallmount2.jpeg';
import wallmount3 from '../assets/wallmount/wallmount3.jpeg';
import wallmount3sis from '../assets/wallmount/wallmount3sis.jpeg';
import wallmount4 from '../assets/wallmount/wallmount4.png';
import wallmountModal1a from '../assets/wallmount/wallmountModal1a.jpg';
import wallmountModal1b from '../assets/wallmount/wallmountModal1b.jpg';
import wallmountModal2 from '../assets/wallmount/wallmountModal2.jpg';

// Retractable Roof Mount
import roofmount from '../assets/roofmount/roofmount.png';

// Commercial
import branded from '../assets/commercial/branded.png';
import stripmallAwning from '../assets/commercial/stripmall_awning.png';
import stripmallAwning2 from '../assets/commercial/stripmall_awning2.png';
import stripmallAwning3 from '../assets/commercial/stripmall_awning3.png';
import commercialModal1 from '../assets/commercial/CommercialSolutionModal1.jpg';
import commercialModal2 from '../assets/commercial/CommercialSolutionModal2.jpg';
import foyer from '../assets/commercial/foyer.png';
import foyer2 from '../assets/commercial/foyer2.png';
import foyer3 from '../assets/commercial/foyer3.png';

interface Section {
  title: string;
  description: string;
  coverImage: StaticImageData;
  images: StaticImageData[];
}

const sections: Section[] = [
  {
    title: "4Season Enclosure",
    description: "Year-round enclosures designed to let you enjoy your outdoor space in any weather — rain, wind, or shine.",
    coverImage: fourSeasons,
    images: [fourSeasons, fourSeasons2, fourSeasons3, fourSeasonsSis, gazebo],
  },
  {
    title: "Weathermaster",
    description: "Premium retractable awning systems engineered for maximum weather protection and long-lasting durability.",
    coverImage: weatherMaster,
    images: [weatherMaster],
  },
  {
    title: "Retractable Wallmount",
    description: "Sleek wall-mounted retractable awnings that extend your living or dining space with the touch of a button.",
    coverImage: wallmountModal1a,
    images: [wallmountModal1a, wallmountModal1b, wallmountModal2, wallmount, wallmount2, wallmount3, wallmount3sis, wallmount4],
  },
  {
    title: "Retractable Roof Mount",
    description: "Professionally installed roof-mounted retractable systems offering seamless shade coverage for patios and decks.",
    coverImage: roofmount,
    images: [roofmount],
  },
  {
    title: "Commercial Installation",
    description: "Custom branded and large-scale awning solutions for storefronts, strip malls, and commercial properties.",
    coverImage: branded,
    images: [branded, stripmallAwning, stripmallAwning2, stripmallAwning3, commercialModal1, commercialModal2, foyer, foyer2, foyer3],
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = activeSection?.images ?? [];
  const lightboxOpen = lightboxIndex !== null;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const closeGallery = useCallback(() => { setActiveSection(null); setLightboxIndex(null); }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : null);
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex(i => i !== null ? (i + 1) % images.length : null);
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen, closeLightbox, goPrev, goNext]);

  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our awning solutions across five product categories — click any section to view photos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <button
              key={section.title}
              onClick={() => setActiveSection(section)}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={section.coverImage}
                  alt={section.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 font-semibold px-4 py-2 rounded-full text-sm">
                    View Gallery ({section.images.length} photos)
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your space with a custom awning solution?
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-8 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* Gallery Modal */}
      <Modal isOpen={!!activeSection} onClose={closeGallery}>
        {activeSection && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 pr-8">{activeSection.title}</h2>
            <p className="text-gray-600 mb-6">{activeSection.description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {activeSection.images.map((img, i) => (
                <button
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
                  onClick={() => setLightboxIndex(i)}
                >
                  <Image
                    src={img}
                    alt={`${activeSection.title} photo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </Modal>

      {/* Fullscreen Lightbox */}
      {lightboxOpen && activeSection && lightboxIndex !== null && (
        <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full h-full">
            <Image
              src={images[lightboxIndex]}
              alt={`${activeSection.title} photo ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Prev arrow */}
          {images.length > 1 && (
            <button
              onClick={goPrev}
              className="absolute left-4 z-10 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              aria-label="Previous"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next arrow */}
          {images.length > 1 && (
            <button
              onClick={goNext}
              className="absolute right-4 z-10 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              aria-label="Next"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </main>
  );
}
