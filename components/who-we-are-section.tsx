"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function WhoWeAreSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal(0.15)
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollReveal(0.15)

  return (
    <section id="who-we-are" className="bg-background px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div className="max-w-4xl">
        <div
          ref={headingRef}
          className={`mb-16 pb-6 border-b border-border transition-all duration-700 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
            Who We Are
          </h2>
        </div>

        <div
          ref={bodyRef}
          className={`transition-all duration-700 delay-200 ${
            bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg md:text-xl font-extralight leading-[1.65] tracking-tight text-foreground/80">
            Newman Holdings &amp; Enterprise Group is a purpose-driven real estate holding and
            consulting firm dedicated to building sustainable developments, managing high-performing
            properties, and guiding strategic ventures. Through innovative planning, disciplined
            execution, and values-centered leadership, we create opportunities that generate
            long-term growth and prosperity.
          </p>
        </div>
      </div>
    </section>
  )
}
