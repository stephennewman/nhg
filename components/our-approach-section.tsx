"use client"

import { Compass, PenTool, ShieldCheck, BarChart3, TrendingUp, type LucideIcon } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const processItems: { label: string; icon: LucideIcon }[] = [
  { label: "Strategic Planning & Market Analysis", icon: Compass },
  { label: "Sustainable Design & Execution", icon: PenTool },
  { label: "Risk Mitigation & Performance Monitoring", icon: ShieldCheck },
  { label: "Data-Driven Decision Making", icon: BarChart3 },
  { label: "Long-Term Asset Optimization", icon: TrendingUp },
]

function ProcessCard({ item, index }: { item: typeof processItems[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1)
  const Icon = item.icon

  return (
    <div
      ref={ref}
      className={`bg-background p-8 md:p-10 group hover:bg-foreground hover:text-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40 group-hover:text-background/40 transition-colors duration-700 tabular-nums block mb-5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <Icon className="h-5 w-5 text-foreground/30 group-hover:text-background/40 transition-colors duration-700 mb-6" strokeWidth={1.5} />
      <p className="text-sm md:text-base font-light tracking-tight text-foreground/80 group-hover:text-background/80 transition-colors duration-700">
        {item.label}
      </p>
    </div>
  )
}

export function OurApproachSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal(0.15)
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollReveal(0.1)
  const { ref: closingRef, isVisible: closingVisible } = useScrollReveal(0.1)

  return (
    <section className="bg-background px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div
        ref={headingRef}
        className={`mb-16 pb-6 border-b border-border transition-all duration-700 ${
          headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
          How We Work
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
          Our Approach
        </h2>
      </div>

      <div
        ref={bodyRef}
        className={`mb-14 max-w-2xl transition-all duration-700 delay-200 ${
          bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-lg md:text-xl font-extralight leading-[1.65] tracking-tight text-foreground/80">
          We combine purpose-driven leadership with innovative strategy to deliver consistent
          outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
        {processItems.map((item, index) => (
          <ProcessCard key={item.label} item={item} index={index} />
        ))}
      </div>

      <div
        ref={closingRef}
        className={`pt-10 mt-14 border-t border-border transition-all duration-700 ${
          closingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm leading-[1.75] text-muted-foreground max-w-2xl">
          Every project we undertake is guided by accountability, transparency, and measurable
          results.
        </p>
      </div>
    </section>
  )
}
