import ProjectCard from '../components/ProjectCard';

// Import all images
import branded from '../assets/branded.png';
import brickWindows from '../assets/brick_windows.png';
import windows from '../assets/windowsawnings.png';
import fourSeasons from '../assets/four_seasons.png';
import fourSeasons2 from '../assets/four_seasons2.png';
import fourSeasons3 from '../assets/four_seasons3.png';
import foyer2 from '../assets/foyer2.png';
import foyer3 from '../assets/foyer3.png';
import metalFrame from '../assets/metal_frame.png';
import metalFramSis from '../assets/metal_frame_sis.png'; 
import roofmount from '../assets/roofmount.png';
import stripmallAwning from '../assets/stripmall_awning.png';
import stripmsllAwning3 from '../assets/stripmall_awning3.png';
import wallmount from '../assets/wallmount2.jpeg';
import wallmount2 from '../assets/wallmount3.jpeg';

const projects = [
  {
    image: brickWindows, 
    secondImage: windows,
    isDouble: true,
    title: "Window Awnings",
    description: "Sturdy and stylish window awnings for residential and commercial properties",
    imagePosition: "object-[center_50%] scale-[1.15] md:object-center md:scale-100",
    secondImagePosition: "object-[center_50%] scale-[1.7] md:object-center md:scale-100",
  },
  { image: branded, title: "Commercial Solutions", description: "Custom branded awnings and window solutions for businesses" },
  { image: fourSeasons, title: "Four Seasons Enclosure", description: "Commercial awning installation" },
  { 
    image: fourSeasons2, 
    secondImage: fourSeasons3, 
    isDouble: true, 
    title: "Outdoor Seating enclosure", 
    description: "Modern enclosure to regulate and contain environment",
    imagePosition: "object-[center_50%] scale-[1.5] md:object-center md:scale-100",
    secondImagePosition: "object-[center_30%] scale-[1.5] md:object-center md:scale-100",
  },
  { 
    image: metalFrame, 
    secondImage: metalFramSis,
    isDouble: true,
    title: "Metal Frame Design", 
    description: "Durable metal frame construction",
    imagePosition: "object-[center_50%] scale-[1.15] md:object-center md:scale-100",
    secondImagePosition: "object-[center_50%] scale-[1.7] md:object-center md:scale-100",
  },
  { image: foyer2, title: "Foyer Entrances", description: "Elegant entrance canopies that provide both protection and curb appeal." },
  { image: foyer3,title: "Interior Vestibule", description: "Indoor vestibule great for temperature control and aesthetics" },
  { 
    image: stripmallAwning, 
    secondImage: stripmsllAwning3,
    isDouble: true,
    title: "Commercial Installation", 
    description: "Commercial retractable and stationary awnings", 
    imagePosition: "object-[10%_50%] scale-[1.5] translate-x-[25%] md:translate-x-0 md:object-center md:scale-100",
    secondImagePosition: "object-[center_50%] scale-[1.35] translate-x-[15%] md:translate-x-0 md:object-center md:scale-100",
  },
  { image: wallmount, 
    secondImage: wallmount2,
    isDouble: true,
    title: "Wall Mounted Design",
    description: "Secure wall mounting system for retractable awnings",
    secondImagePosition: "scale(1.25)",
  },
  { image: roofmount, title: "Roof Mounted System", description: "Professional roof mounting solution" },
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
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your space with a custom awning solution?
          </p>
          <a
            href="tel:+8453935050"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </main>
  );
}