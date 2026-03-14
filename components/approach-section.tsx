"use client"

import { Building2, ClipboardCheck, KeyRound, Lightbulb, type LucideIcon } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const principles: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    number: "01",
    title: "Real Estate Development",
    icon: Building2,
    description:
      "We develop sustainable properties that foster growth and prosperity, leveraging advanced data analytics and agile coordination to stay ahead of market trends and reduce project risk.",
  },
  {
    number: "02",
    title: "Project Management",
    icon: ClipboardCheck,
    description:
      "We oversee every stage of development — from concept and design to construction and delivery — utilizing sustainable materials and innovative methods to ensure on-time, on-budget results.",
  },
  {
    number: "03",
    title: "Property Management",
    icon: KeyRound,
    description:
      "Our property management division enhances long-term asset performance through proactive maintenance, tenant engagement, and smart technology integration, ensuring every property thrives financially and functionally.",
  },
  {
    number: "04",
    title: "Business Consulting",
    icon: Lightbulb,
    description:
      "We partner with investors and developers to identify emerging market opportunities, structure ventures creatively, and align each project with clients' goals and values for lasting returns.",
  },
]

function PrincipleCard({ principle, index }: { principle: typeof principles[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.15)
  const Icon = principle.icon

  return (
    <div
      ref={ref}
      className={`bg-black/40 backdrop-blur-sm p-8 md:p-12 group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
    >
      <div className="mb-10">
        <Icon className="h-6 w-6 text-white/40" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl md:text-2xl font-extralight tracking-tight text-white mb-5 group-hover:translate-x-1 transition-transform duration-500">
        {principle.title}
      </h3>
      <div className="w-8 h-px bg-white/15 mb-5 group-hover:w-12 transition-all duration-500" />
      <p className="text-sm leading-[1.75] text-white/55 max-w-sm">
        {principle.description}
      </p>
    </div>
  )
}

export function ApproachSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="services" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/tyler-rutherford-5981bsjJLXU-unsplash.jpg"
          alt="Aerial view of Pittsburgh"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 px-6 py-28 md:px-12 lg:px-20 md:py-36">
        <div
          ref={ref}
          className={`mb-20 pb-6 border-b border-white/10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-white">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {principles.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
