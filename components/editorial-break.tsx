"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function EditorialBreak() {
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal(0.15)
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal(0.2)

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <div
          ref={imgRef}
          className={`lg:col-span-7 overflow-hidden transition-all duration-1000 ${
            imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
            alt="Modern commercial real estate development showcasing sustainable design"
            className="w-full aspect-[16/10] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        <div
          ref={quoteRef}
          className={`lg:col-span-4 lg:col-start-9 transition-all duration-1000 delay-200 ${
            quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-10 h-px bg-foreground/20 mb-8" />
          <blockquote className="text-xl md:text-2xl lg:text-[1.65rem] font-extralight leading-[1.35] tracking-tight text-foreground text-balance">
            {'"'}Newman Holdings and Enterprise Group{'\u2019'}s dedication to excellence and sustainable development is truly commendable. Their innovative strategies have led to remarkable outcomes for our projects.{'"'}
          </blockquote>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mt-8">
            John Doe, Project Manager
          </p>
        </div>
      </div>
    </section>
  )
}
