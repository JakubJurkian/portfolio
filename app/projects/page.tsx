import Image from "next/image";
import Link from "next/link";
import techBlogPrevImg from "../_assets/tech-blog-prev.webp";
import nodewavePrevImg from "../_assets/nodewave-prev.webp";

const projects = [
  {
    title: "Full-Stack Serverless Tech Blog",
    description:
      "A robust, full-stack blog platform leveraging a modern serverless architecture. Features include secure real-time user authentication and dynamic content management (CRUD) for blog posts via Firebase services. Built with a React/TypeScript frontend and managed state using Redux Toolkit for high maintainability.",
    stack: [
      "React",
      "Redux Toolkit",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Firebase",
    ],
    image: techBlogPrevImg, // Replace with your imported image
    liveUrl: "https://technology-blog.web.app",
    repoUrl: "https://github.com/JakubJurkian/My-Tech-Blog",
  },
  {
    title: "Full-Stack Social Network Platform (Nodewave)",
    description:
      "A monolithic full-stack social networking application focused on core features: user authentication (signup/login), text post creation, post viewing, and profile management (including avatar upload and password reset). The architecture uses Express for routing, MongoDB for data persistence, and EJS for server-side rendering.",
    stack: ["Express.js", "MongoDB", "EJS", "Node.js", "Tailwind CSS"],
    image: nodewavePrevImg, // Replace with your imported image
    liveUrl: "https://github.com/JakubJurkian/Nodewave", // Placeholder: Replace with the actual URL
    repoUrl: "nodewave.onrender.com", // Placeholder: Replace with the actual repository URL
  },
  {
    title: "A frontend application - Temporal Resource Allocation System",
    description: "...",
    stack: ["React", "Redux", "Tailwind"],
    image: nodewavePrevImg,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Full-stack application Smart Home Simulator",
    description: "...",
    stack: ["C#", ".NET", "Blazor"],
    image: nodewavePrevImg,
    liveUrl: "#",
    repoUrl: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      {/* HEADER / BACK BUTTON */}
      <header className="w-full max-w-[1200px] py-8 px-6 md:px-12 flex justify-between items-center">
        <Link
          href="/"
          className="text-(--text-secondary) hover:text-accent transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{" "}
          Back
        </Link>
        <h1 className="text-xl font-bold">Selected Works</h1>
      </header>

      {/* PROJECTS GRID */}
      <main className="w-full max-w-[1200px] px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-card border border-border-color rounded-2xl overflow-hidden hover:border-accent transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-border-color">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-(--text-primary)">
                    {project.title}
                  </h2>
                </div>

                <p className="text-(--text-secondary) leading-relaxed mb-6 grow">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[#2a2a2a] text-(--text-secondary) border border-[#333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex-1 bg-accent text-main py-3 rounded-lg font-semibold text-center transition-colors hover:bg-[#fde047]"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    className="flex-1 border border-border-color text-(--text-primary) py-3 rounded-lg font-medium text-center hover:bg-[#2a2a2a] transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
