"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function EditorialBreak() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=80"
          alt="Dramatic mountain range with expansive view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 px-6 md:px-12 lg:px-20 py-28 md:py-36 max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-10 h-px bg-background/30 mx-auto mb-10" />
        <blockquote className="text-2xl md:text-3xl lg:text-[2rem] font-extralight leading-[1.4] tracking-tight text-background text-balance">
          {'"'}Newman Holdings and Enterprise Group{'\u2019'}s dedication to excellence and
          sustainable development is truly commendable. Their innovative strategies have led to
          remarkable outcomes for our projects.{'"'}
        </blockquote>
        <div className="w-10 h-px bg-background/30 mx-auto mt-10 mb-6" />
        <p className="text-[11px] tracking-[0.3em] uppercase text-background/50">
          Development Partner
        </p>
      </div>
    </section>
  )
}
