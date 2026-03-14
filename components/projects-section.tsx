"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projects = [
  {
    title: "Real Estate Development",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  },
  {
    title: "Property Management",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1200&q=80",
  },
  {
    title: "Consulting Engagements",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
  },
  {
    title: "Strategic Ventures",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`bg-background group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${(index % 2) * 150}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full aspect-[4/3] object-cover transition-all duration-[800ms] ease-out ${
            hovered ? "scale-[1.04]" : "scale-100"
          }`}
        />
      </div>
      <div className="p-6 md:p-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg md:text-xl font-light tracking-tight text-foreground">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="projects" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div
        ref={ref}
        className={`mb-20 pb-6 border-b border-border transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Our Portfolio
            </p>
            <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
              Our Projects
            </h2>
          </div>
          <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 mt-4 md:mt-0">
            ({String(projects.length).padStart(2, "0")}) Projects
          </span>
        </div>
        <p className="text-sm leading-[1.75] text-muted-foreground max-w-2xl">
          Our portfolio reflects our commitment to excellence, sustainability, and strategic
          growth. From real estate developments to consulting engagements and venture initiatives,
          each project demonstrates our disciplined execution and long-term vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
