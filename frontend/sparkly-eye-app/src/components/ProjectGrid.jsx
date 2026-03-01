import { Canvas } from '@react-three/fiber';
import PlasmaPlane from './PlasmaPlane';
import { ProjectCard } from './ProjectCard';

const projects = [
    { title: "Fractal Explorer", status: "Complete", tech: ["Numba", "Redis", "Celery", "R3F"], desc: "A distributed computation engine using Numba, Redis, and Celery to terraform 2D fractal maps into immersive 3D landscapes. Designed a production ready API to stream data to a React Three Fiber frontend for real time rendering." },
    { title: "Latent Stars", status: "Complete", tech: ["Autoencoder", "Optuna", "Pytorch", "R3F"], desc: "A deep learning pipeline to map the HYG stellar dataset into a 3D latent space via a custom trained Autoencoder. Integrated 3D visualizations of Optuna hyperparameter studies and loss surfaces to highlight model architecture tuning." },
    { title: "Shader Laboratory", status: "In Progress", tech: ["GLSL", "Mathematics", "Leva", "R3F"], desc: "An interactive GLSL development environment featuring real time uniform manipulation and hot loading capabilities for rapid shader prototyping. Integrated a dynamic GUI to allow for instant parameter tuning of complex wave functions." },
    { title: "Thermal Fusion", status: "Planned", tech: ["SuperResolution", "GeoSpatial", "ResNet", "R3F"], desc: "A ResU-Net architecture to perform guided super resolution on GOES-18 satellite thermal data. Utilizing high resolution optical channels as a spatial prior to reconstruct sub kilometer heat signatures across complex desert topographies." },
    { title: "Botanical Synthesis", status: "Planned", tech: ["OpenCV", "GenerativeArt", "DataPipeline", "LoRA" ], desc: "A custom data pipeline to process high fidelity botanical field photography into curated datasets for machine learning applications. Integrated ControlNet and LoRA workflows to transform raw biological images into precise, stylistically controlled sketches." },
    { title: "Computational Sketches", status: "In Progress", tech: ["SDF", "MonteCarlo", "Geometry", "R3F"], desc: "A technical sandbox featuring a library of rapid prototypes focused on strange attractors, SDF-based geometries, and Monte Carlo sampling methods. Functions as an interactive laboratory for testing high performance 3D logic and procedural generation within the browser." },
];

export const ProjectGrid = () => (
<section className="relative flex-1 w-full flex items-center justify-center overflow-hidden">  
    
    {/* LEVEL 0: Shader */}
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <PlasmaPlane />
      </Canvas>
    </div>

    {/* LEVEL 1: The Centered Content */}
    <div className="relative z-10 w-full max-w-7xl px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((proj, index) => (
          <ProjectCard 
            key={index}
            title={proj.title}
            status={proj.status}
            description={proj.desc}
            tech={proj.tech}
          />
        ))}
      </div>

    </div>
  </section>
);