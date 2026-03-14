"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const principles = [
  {
    number: "01",
    title: "Real Estate Development",
    description:
      "We develop sustainable properties that foster growth and prosperity, leveraging advanced data analytics and agile coordination to stay ahead of market trends and reduce project risk.",
  },
  {
    number: "02",
    title: "Project Management",
    description:
      "We oversee every stage of development — from concept and design to construction and delivery — utilizing sustainable materials and innovative methods to ensure on-time, on-budget results.",
  },
  {
    number: "03",
    title: "Property Management",
    description:
      "Our property management division enhances long-term asset performance through proactive maintenance, tenant engagement, and smart technology integration, ensuring every property thrives financially and functionally.",
  },
  {
    number: "04",
    title: "Business Consulting",
    description:
      "We partner with investors and developers to identify emerging market opportunities, structure ventures creatively, and align each project with clients' goals and values for lasting returns.",
  },
]

function PrincipleCard({ principle, index }: { principle: typeof principles[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <div
      ref={ref}
      className={`bg-background p-8 md:p-12 group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
    >
      <div className="flex items-start justify-between mb-10">
        <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40">
          ({principle.number})
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-extralight tracking-tight text-foreground mb-5 group-hover:translate-x-1 transition-transform duration-500">
        {principle.title}
      </h3>
      <div className="w-8 h-px bg-border mb-5 group-hover:w-12 transition-all duration-500" />
      <p className="text-sm leading-[1.75] text-muted-foreground max-w-sm">
        {principle.description}
      </p>
    </div>
  )
}

export function ApproachSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="services" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div
        ref={ref}
        className={`mb-20 pb-6 border-b border-border transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
          What We Do
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
          Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {principles.map((principle, index) => (
          <PrincipleCard key={principle.number} principle={principle} index={index} />
        ))}
      </div>
    </section>
  )
}
