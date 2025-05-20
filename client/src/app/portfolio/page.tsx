import Image from "next/image";

// Import all images
import branded from '../assets/branded.png';
import brickWindows from '../assets/brick_windows.png';
import entrance from '../assets/entrance.png';
import fourSeasons from '../assets/four_seasons.png';
import fourSeasons2 from '../assets/four_seasons2.png';
import fourSeasons3 from '../assets/four_seasons3.png';
import foyer from '../assets/foyer.png';
import foyer2 from '../assets/foyer2.png';
import foyer3 from '../assets/foyer3.png';
import metalFrame from '../assets/metal_frame.png';
import roofmount from '../assets/roofmount.png';
import stripmallAwning from '../assets/stripmall_awning.png';
import wallmount from '../assets/wallmount.png';
import weatherMaster from '../assets/weather_master.png';

const projects = [
  { image: branded, title: "Branded Commercial Awning", description: "Custom branded awning for business storefront" },
  { image: brickWindows, title: "Window Awnings", description: "Decorative window awnings for brick building" },
  { image: entrance, title: "Enclosed Entrance", description: "Elegant entrance awning solution" },
  { image: fourSeasons, title: "Four Seasons Display", description: "Commercial awning installation" },
  { image: fourSeasons2, title: "Storefront Solution", description: "Modern storefront awning design" },
  { image: fourSeasons3, title: "Complete Coverage", description: "Full storefront awning system" },
  { image: foyer, title: "Foyer Enhancement", description: "Sophisticated entrance awning" },
  { image: foyer2, title: "Modern Foyer", description: "Contemporary entrance design" },
  { image: foyer3, title: "Classic Entrance", description: "Traditional awning styling" },
  { image: metalFrame, title: "Metal Frame Design", description: "Durable metal frame construction" },
  { image: roofmount, title: "Roof Mounted System", description: "Professional roof mounting solution" },
  { image: stripmallAwning, title: "Strip Mall Installation", description: "Commercial strip mall awning" },
  { image: wallmount, title: "Wall Mounted Design", description: "Secure wall mounting system" },
  { image: weatherMaster, title: "Weather Master Series", description: "All-weather protection solution" },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of awning installations, showcasing our commitment to quality and design excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your space with a custom awning solution?
          </p>
          <a
            href="mailto:contact@firstclassawnings.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </main>
  );
}