import Image, { StaticImageData } from 'next/image';

interface ProjectProps {
  project: {
    image: string | StaticImageData;
    secondImage?: string | StaticImageData;
    isDouble?: boolean;
    title: string;
    description: string;
    imagePosition?: string;
    secondImagePosition?: string;
    secondTransformOrigin?: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        project.isDouble ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`relative h-64 ${project.isDouble ? 'flex gap-2' : ''}`}>
        <div className={`relative ${project.isDouble ? 'w-1/2' : 'w-full'} h-full overflow-hidden`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover ${project.imagePosition || ''}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {project.secondImage && (
          <div className="relative w-1/2 h-full overflow-hidden">
            <Image
              src={project.secondImage}
              alt={`${project.title} additional view`}
              fill
              style={{ transformOrigin: project.secondTransformOrigin || 'center center' }}
              className={`object-cover ${project.secondImagePosition || ''}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
}
